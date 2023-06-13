/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { Vector } from "../types/Vector.ts";
import { Packet, ConsoleCmd } from "../messages.ts";
import { SourceDemo } from "../demo.ts";

export class TimingResult {
  delta: number;
  ticks: { before: number; after?: number };
  time: { before: number; after?: number };
  constructor({
    playbackTicks,
    playbackTime,
  }: {
    playbackTicks: number;
    playbackTime: number;
  }) {
    this.delta = 0;
    this.ticks = {
      before: playbackTicks,
      after: undefined,
    };
    this.time = {
      before: playbackTime,
      after: undefined,
    };
  }
  complete({
    playbackTicks,
    playbackTime,
  }: {
    playbackTicks: number;
    playbackTime: number;
  }) {
    this.ticks.after = playbackTicks;
    this.time.after = playbackTime;
    this.delta = Math.abs(this.ticks.before - this.ticks.after);
    return this;
  }
}

export class SourceTimer {
  splitScreenIndex: number;
  constructor(splitScreenIndex: number) {
    this.splitScreenIndex = splitScreenIndex;
  }
  static default() {
    return new SourceTimer(0);
  }
  time(demo: SourceDemo) {
    if (demo.playbackTicks === undefined || demo.playbackTime === undefined) {
      throw new Error("Cannot time speedrun when demo header was not parsed.");
    }
    if (demo.game === undefined) {
      throw new Error("Cannot time speedrun when game was not detected.");
    }

    const result = new TimingResult({
      playbackTicks: demo.playbackTicks,
      playbackTime: demo.playbackTime,
    });

    const startTick = this.checkRules(demo, "start");
    const endTick = this.checkRules(demo, "end");

    if (startTick !== undefined && endTick !== undefined) {
      demo.adjustRange(endTick, startTick);
    } else if (startTick !== undefined) {
      demo.adjustRange(0, startTick);
    } else if (endTick !== undefined) {
      demo.adjustRange(endTick, 0);
    }

    return result.complete({
      playbackTicks: demo.playbackTicks,
      playbackTime: demo.playbackTime,
    });
  }
  checkRules(demo: SourceDemo, type: "start" | "end") {
    if (demo.mapName === undefined) {
      throw new Error("Cannot time speedrun when demo header was not parsed.");
    }
    if (demo.game === undefined) {
      throw new Error("Cannot time speedrun when game was not detected.");
    }

    const candidates = demo.game.rules.filter((rule) => rule.type === type);

    // Find all rules that match the map name. Otherwise fall back to generic
    // rules which are used to detect coop spawn and loading screens

    let rules = candidates.filter((rule) => {
      if (Array.isArray(rule.map)) {
        return rule.map.includes(demo.mapName!);
      }
      return rule.map === demo.mapName;
    });

    if (rules.length === 0) {
      rules = candidates.filter((rule) => rule.map === undefined);
    }

    if (rules.length === 0) {
      return undefined;
    }

    // Generate data map which contains:
    //      - Position of current and previous tick
    //      - Commands of current and previous tick

    const gameInfo = new Map();
    let oldPosition = new Vector(0, 0, 0);
    let oldCommands: string[] = [];

    demo.findMessages(Packet).forEach(({ tick, cmdInfo }) => {
      if (tick !== 0 && !gameInfo.get(tick)) {
        gameInfo.set(tick, {
          position: {
            previous: oldPosition,
            current: (oldPosition = cmdInfo[this.splitScreenIndex].viewOrigin),
          },
        });
      }
    });

    demo.findMessages(ConsoleCmd).forEach(({ tick, command }) => {
      // Ignore button inputs since they aren't really useful
      if (tick === 0 || command.startsWith("+") || command.startsWith("-")) {
        return;
      }

      const newCommands = [command];
      const value = gameInfo.get(tick);

      if (value) {
        const { previous, current } = value.commands || {};
        gameInfo.set(tick, {
          ...value,
          commands: {
            previous: previous ? previous.concat(oldCommands) : oldCommands,
            current: (oldCommands = current
              ? current.concat(newCommands)
              : newCommands),
          },
        });
      } else {
        gameInfo.set(tick, {
          commands: {
            previous: oldCommands,
            current: (oldCommands = newCommands),
          },
        });
      }
    });

    // Game simulation: Call and pass generated data for every rule every tick
    // Rules will decide whether they should be matched as a start or end event

    let matches = [];
    for (const [tick, info] of gameInfo) {
      for (const rule of rules) {
        if (rule.match({ pos: info.position, cmds: info.commands }) === true) {
          matches.push({ rule: rule, tick: tick });
        }
      }
    }

    if (matches.length > 0) {
      if (matches.length === 1) {
        return matches[0]!.tick + matches[0]!.rule.offset;
      }

      // Match rules until we have a single match:
      //      1.) Favour rules that match the earliest tick
      //      2.) Favour rules that match the
      //              a.) lowest offset if it is a start event
      //              b.) or highest offset if it is an end event
      //      3.) Throw exception and fail because there might be timing issue

      const matchTick = matches
        .map((m) => m.tick)
        .reduce((a, b) => Math.min(a, b));
      matches = matches.filter((m) => m.tick === matchTick);
      if (matches.length === 1) {
        return matches[0]!.tick + matches[0]!.rule.offset;
      }

      const matchOffset =
        matches[0]!.rule.type === "start"
          ? matches.map((m) => m.rule.offset).reduce((a, b) => Math.min(a, b))
          : matches.map((m) => m.rule.offset).reduce((a, b) => Math.max(a, b));

      matches = matches.filter((m) => m.rule.offset === matchOffset);
      if (matches.length === 1) {
        return matches[0]!.tick + matches[0]!.rule.offset;
      }

      throw new Error(
        `Multiple adjustment matches: ${JSON.stringify(matches)}`
      );
    }

    return undefined;
  }
}
