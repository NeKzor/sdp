/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoParser, DemoMessages } from "../src/mod.ts";

const file = Deno.args.at(0);

if (!file) {
  console.error("demo path argument not specified!");
  Deno.exit();
}

const IN_JUMP = 1 << 1;

const demo = SourceDemoParser.default()
  .setOptions({ userCmds: true })
  .parse(Deno.readFileSync(file));

const registeredJumps = demo
  .findMessages(DemoMessages.UserCmd)
  .filter(({ userCmd: { buttons } }) => buttons & IN_JUMP);

const actualJumpInputs = demo
  .findMessages(DemoMessages.ConsoleCmd)
  .filter(({ command }) => command.startsWith("+jump"));

let prevTick = 0;
let mouseJumps = 0;
let keyboardJumps = 0;

actualJumpInputs.forEach(({ tick, command }) => {
  const mouse = command.endsWith("112") || command.endsWith("113");
  if (tick !== prevTick) {
    console.log("-----------------");
  }
  console.log(
    `${tick} ${command.split(" ")[0]} (${mouse ? "mouse" : "keyboard"})`
  );

  if (mouse) {
    ++mouseJumps;
  } else {
    ++keyboardJumps;
  }
  prevTick = tick;
});

console.log("---- results ----");
console.log("registered jumps:", registeredJumps.length);
console.log("actual jump inputs:", actualJumpInputs.length);
console.log(
  "jumps not registered:",
  actualJumpInputs.length - registeredJumps.length
);
console.log("jumps with mouse:", mouseJumps);
console.log("jumps with keyboard:", keyboardJumps);
