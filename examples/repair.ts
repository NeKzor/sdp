/*
 * Copyright (c) 2024, NeKz
 *
 * SPDX-License-Identifier: MIT
 *
 * This repairs demos that pause for too long.
 */

import { basename, dirname, join } from 'https://deno.land/std@0.140.0/path/posix.ts';
import { DemoMessages, NetMessages, SourceDemoParser } from '../src/mod.ts';

const file = Deno.args.at(0);
if (!file) {
    console.error('[-] Demo path argument not specified.');
    Deno.exit(1);
}

const buffer = Deno.readFileSync(file);
const parser = SourceDemoParser.default();

const demo = parser
    .setOptions({ packets: true })
    .parse(buffer);

const isSvcSetPause = (packet: NetMessages.NetMessage) => packet instanceof NetMessages.SvcSetPause;

let paused = false;

demo.messages = demo.messages!.filter((message) => {
    if (message instanceof DemoMessages.Packet) {
        const pausePacket = message.findPacket<NetMessages.SvcSetPause>(isSvcSetPause);
        if (pausePacket) {
            paused = pausePacket.paused!;
        }
    }

    return !paused;
});

const saved = parser
    .setOptions({ packets: false })
    .save(demo, buffer.byteLength);

const filename = basename(file);
const fixed = join(
    dirname(file),
    filename.toLowerCase().endsWith('.dem') ? `${filename.slice(0, -4)}_repaired.dem` : `${filename}_repaired.dem`,
);

Deno.writeFileSync(fixed, saved);

console.log(`[+] Saved to: ${fixed}`);
