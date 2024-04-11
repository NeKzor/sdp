/*
 * Copyright (c) 2024, NeKz
 *
 * SPDX-License-Identifier: MIT
 *
 * This repairs demos that pause for too long.
 */

import { basename, dirname, join } from 'https://deno.land/std@0.140.0/path/posix.ts';
import { DemoMessages, Messages, NetMessages, ScoreboardTempUpdate, SourceDemoParser } from '../src/mod.ts';

const file = Deno.args.at(0);
const options = Deno.args.at(1)?.toLowerCase() ?? '';

const verbose = options.at(0) === '-' && options.includes('v');
const dryRun = options.at(0) === '-' && options.includes('d');

if (!file) {
    console.error('[-] Demo path argument not specified.');
    Deno.exit(1);
}

const buffer = Deno.readFileSync(file);
const parser = SourceDemoParser.default();

const demo = parser
    .setOptions({ packets: true })
    .parse(buffer);

let paused = false;
let coop = false;
let coopCmFlagsTouchCount = 0;
let coopCmEndTick = -1;

const didCoopChallengeModeFinish = (message: Messages.Message) => {
    // Start dropping messages on the next tick
    const drop = coopCmEndTick !== -1 && message.tick! > coopCmEndTick;
    if (verbose && drop) {
        console.log(
            '[+] Dropped message because coop challenge mode run finished at tick',
            message.tick,
        );
    }
    return drop;
};

demo.messages = demo.messages!.filter((message) => {
    if (message instanceof DemoMessages.Packet) {
        if (didCoopChallengeModeFinish(message)) {
            return false;
        }

        let pausePacketCount = 0;

        for (const packet of message.packets!) {
            if (packet instanceof NetMessages.SvcServerInfo) {
                coop = (packet.maxClients ?? 0) !== 0;
            } else if (packet instanceof NetMessages.SvcSetPause) {
                paused = packet.paused!;
                pausePacketCount += 1;
            } else if (
                coop &&
                packet instanceof NetMessages.SvcUserMessage &&
                packet.userMessage instanceof ScoreboardTempUpdate
            ) {
                coopCmFlagsTouchCount += 1;

                if (coopCmFlagsTouchCount > 1) {
                    coopCmEndTick = message.tick!;
                }
            }
        }

        // Drop the whole message during a pause but only if there aren't any other packets.
        const dropMessage = paused && (!pausePacketCount || message.packets!.length <= pausePacketCount);

        if (verbose && paused) {
            console.log(
                dropMessage ? '[+] Dropped message at tick' : '[-] Unable to drop message at tick',
                message.tick,
                message.packets,
            );
        }

        return !dropMessage;
    }

    if (
        message instanceof DemoMessages.UserCmd ||
        message instanceof DemoMessages.CustomData
    ) {
        if (didCoopChallengeModeFinish(message)) {
            return false;
        }

        return !paused;
    }

    if (message instanceof DemoMessages.ConsoleCmd) {
        if (didCoopChallengeModeFinish(message)) {
            return false;
        }
    }

    return true;
});

const saved = parser
    .setOptions({ packets: false })
    .save(demo, buffer.byteLength);

const filename = basename(file);
const fixed = join(
    dirname(file),
    filename.toLowerCase().endsWith('.dem') ? `${filename.slice(0, -4)}_repaired.dem` : `${filename}_repaired.dem`,
);

if (!dryRun) {
    Deno.writeFileSync(fixed, saved);

    console.log(`[+] Saved to: ${fixed}`);
}
