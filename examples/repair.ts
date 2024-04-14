/*
 * Copyright (c) 2024, NeKz
 *
 * SPDX-License-Identifier: MIT
 *
 * This repairs demos which:
 *      - contain pauses causing the game to freeze
 *      - are still running after a coop challenge mode run has finished
 *      - end abruptly causing an incorrect demo header and corrupted last message
 *      - are unplayable because of a patch that removed the CPointSurvey entity class
 */

import { basename, dirname, join } from 'https://deno.land/std@0.140.0/path/posix.ts';
import {
    DemoMessages,
    Messages,
    NetMessages,
    ScoreboardTempUpdate,
    SourceDemo,
    SourceDemoBuffer,
    SourceDemoParser,
} from '../src/mod.ts';

const file = Deno.args.at(0);
const options = Deno.args.at(1)?.toLowerCase() ?? '';

const verbose = options.at(0) === '-' && options.includes('v');
const dryRun = options.at(0) === '-' && options.includes('d');

if (!file) {
    console.error('[-] Demo path argument not specified.');
    Deno.exit(1);
}

const buffer = Deno.readFileSync(file);
const parser = SourceDemoParser.default()
    .setOptions({ packets: true, dataTables: true });

const demo = SourceDemo.default();

try {
    const buf = parser.prepare(buffer);
    demo.readHeader(buf)
        .readMessages(buf);
} catch (err) {
    console.error(err);
}
try {
    demo.readDataTables();
} catch (err) {
    console.error(err);
}
try {
    demo.readPackets();
} catch (err) {
    console.error(err);
}

const tryFixup = () => {
    const dt = demo.findMessage(Messages.DataTable)?.dataTable;
    if (!dt) {
        verbose && console.error('[-] Could not find DataTable!');
        return;
    }

    const mapsWhichUsePointSurvey = [
        'sp_a2_bts2',
        'sp_a2_bts3',
        'sp_a3_portal_intro',
        'sp_a2_core',
        'sp_a2_bts4',
    ];

    const pointCameraClasses = dt.serverClasses.filter((table) => table.className === 'CPointCamera');
    if (pointCameraClasses.length === 2) {
        if (mapsWhichUsePointSurvey.includes(demo.mapName!)) {
            verbose && console.error('[-] Unfortunately this demo has been corrupted by demofixup.');
        }
        return;
    }

    const pointSurvey = dt.tables.findIndex((table) => table.netTableName === 'DT_PointSurvey');
    if (pointSurvey === -1) {
        return;
    }

    if (mapsWhichUsePointSurvey.includes(demo.mapName!)) {
        verbose && console.error('[-] Unfortunately the current fixup method does not work on this demo.');
        return;
    }

    dt.tables.splice(pointSurvey, 1);

    const svc = dt.serverClasses.find((table) => table.dataTableName === 'DT_PointSurvey');
    if (!svc) {
        verbose && console.error('[-] Failed to find DT_PointSurvey.');
        return;
    }

    svc.className = 'CPointCamera';
    svc.dataTableName = 'DT_PointCamera';

    verbose && console.log('[-] Replaced DT_PointSurvey');
};

tryFixup();

let paused = false;
let coop = false;
let coopCmEndTick = -1;
let didPopulateCustomCallbackMap = false;

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
                coopCmEndTick = message.tick! + 60; // Add 1s delay
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
        if (!didPopulateCustomCallbackMap && message instanceof DemoMessages.CustomData) {
            didPopulateCustomCallbackMap = message.unk === -1;

            if (!didPopulateCustomCallbackMap) {
                verbose &&
                    console.log(
                        '[+] Dropping message because custom callback map is not populated at tick',
                        message.tick,
                    );
                return false;
            }
        }

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

const lastMessage = demo.messages!.at(-1);
if (lastMessage && !(lastMessage instanceof Messages.Stop)) {
    verbose && console.log('[+] Replacing corrupted message at tick', lastMessage.tick);

    demo.detectGame()
        .adjustTicks()
        .adjustRange();

    const stopMessage = new Messages.Stop(0x07)
        .setTick(lastMessage.tick!)
        .setSlot(lastMessage.slot!);

    stopMessage.restData = new SourceDemoBuffer(new ArrayBuffer(0));

    demo.messages![demo.messages!.length - 1] = stopMessage;
}

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
