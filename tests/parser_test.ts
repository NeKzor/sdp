/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { assert, assertEquals } from 'https://deno.land/std@0.191.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.191.0/testing/bdd.ts';
import { DemoMessages, SourceDemoParser, SourceTimer, NetMessages } from '../src/mod.ts';
import { DataTable, Packet, StringTable, UserCmd } from '../src/messages.ts';
import { ScoreboardTempUpdate } from '../src/types/UserMessages.ts';

describe('SourceDemoParser', () => {
    describe('#Portal', () => {
        it('parse header correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ messages: false })
                .parse(buffer);

            assertEquals(demo.demoFileStamp, 'HL2DEMO');
            assertEquals(demo.demoProtocol, 3);
            assertEquals(demo.networkProtocol, 15);
            assertEquals(demo.serverName, 'localhost:0');
            assertEquals(demo.clientName, 'Can\'t Even');
            assertEquals(demo.mapName, 'testchmb_a_00');
            assertEquals(demo.gameDirectory, 'portal');
            assertEquals(demo.playbackTime, 3.944999933242798);
            assertEquals(demo.playbackTicks, 263);
            assertEquals(demo.playbackFrames, 253);
            assertEquals(demo.signOnLength, 80641);
        });
    });
    describe('#Portal 2', () => {
        it('parse header correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ messages: false })
                .parse(buffer);

            assertEquals(demo.demoFileStamp, 'HL2DEMO');
            assertEquals(demo.demoProtocol, 4);
            assertEquals(demo.networkProtocol, 2001);
            assertEquals(demo.serverName, 'localhost:27015');
            assertEquals(demo.clientName, 'PerOculos');
            assertEquals(demo.mapName, 'sp_a1_intro1');
            assertEquals(demo.gameDirectory, 'portal2');
            assertEquals(demo.playbackTime, -1.6666667461395264);
            assertEquals(demo.playbackTicks, -100);
            assertEquals(demo.playbackFrames, 10405);
            assertEquals(demo.signOnLength, 116002);
        });
    });
});
describe('SourceDemo', () => {
    describe('#Portal 2', () => {
        it('time speedrun correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2.dem');

            const demo = SourceDemoParser.default()
                .parse(buffer)
                .adjustTicks()
                .adjustRange()
                .detectGame();

            assertEquals(demo.playbackTime, 346.93334987640384);
            assertEquals(demo.playbackTicks, 20816);

            const result = SourceTimer.default().time(demo);

            assertEquals(demo.playbackTime, 334.6833492922783);
            assertEquals(demo.playbackTicks, 20081);

            assertEquals(result.delta, 735);
        });
    });
});
describe('readUserCmds', () => {
    describe('#Portal 2', () => {
        it('read CUserCmd correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ userCmds: true })
                .parse(buffer);

            const message = demo.findMessage<UserCmd>(DemoMessages.UserCmd);

            assert(message?.userCmd);

            const { userCmd } = message;

            assertEquals(userCmd.commandNumber, 3299);
            assertEquals(userCmd.tickCount, 100);
            assertEquals(userCmd.viewAngleX, undefined);
            assertEquals(userCmd.viewAngleY, 9.99755859375);
            assertEquals(userCmd.viewAngleZ, undefined);
            assertEquals(userCmd.forwardMove, undefined);
            assertEquals(userCmd.sideMove, undefined);
            assertEquals(userCmd.upMove, undefined);
            assertEquals(userCmd.buttons, undefined);
            assertEquals(userCmd.impulse, undefined);
            assertEquals(userCmd.weaponSelect, undefined);
            assertEquals(userCmd.weaponSubtype, undefined);
            assertEquals(userCmd.mouseDx, undefined);
            assertEquals(userCmd.mouseDy, undefined);
        });
    });
    describe('#Portal', () => {
        it('read CUserCmd correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ userCmds: true })
                .parse(buffer);

            const message = demo.findMessage<UserCmd>(DemoMessages.UserCmd);

            assert(message?.userCmd);

            const { userCmd } = message;

            assertEquals(userCmd.commandNumber, 16);
            assertEquals(userCmd.tickCount, 4262);
            assertEquals(userCmd.viewAngleX, -0.13199999928474426);
            assertEquals(userCmd.viewAngleY, -171.32244873046875);
            assertEquals(userCmd.viewAngleZ, undefined);
            assertEquals(userCmd.forwardMove, undefined);
            assertEquals(userCmd.sideMove, undefined);
            assertEquals(userCmd.upMove, undefined);
            assertEquals(userCmd.buttons, undefined);
            assertEquals(userCmd.impulse, undefined);
            assertEquals(userCmd.weaponSelect, undefined);
            assertEquals(userCmd.weaponSubtype, undefined);
            assertEquals(userCmd.mouseDx, undefined);
            assertEquals(userCmd.mouseDy, undefined);
        });
    });
});
describe('readStringTables', () => {
    describe('#Portal 2', () => {
        it('read string tables correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ stringTables: true })
                .parse(buffer);

            const message = demo.findMessage<StringTable>(DemoMessages.StringTable);

            assert(message?.stringTables);

            const { stringTables } = message;

            assertEquals(stringTables.length, 18);
        });
    });
    describe('#Portal', () => {
        it('read string tables correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ stringTables: true })
                .parse(buffer);

            const message = demo.findMessage<StringTable>(DemoMessages.StringTable);

            assert(message?.stringTables);

            const { stringTables } = message;

            assertEquals(stringTables?.length, 16);
        });
    });
});

describe('readDataTables', () => {
    describe('#Portal 2', () => {
        it('read data tables correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ dataTables: true })
                .parse(buffer);

            const message = demo.findMessage<DataTable>(DemoMessages.DataTable);

            assert(message?.dataTable);

            const { dataTable } = message;

            assertEquals(dataTable.tables.length, 307);
            assertEquals(dataTable.serverClasses.length, 236);
        });
    });
    describe('#Portal', () => {
        it('read data tables correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ dataTables: true })
                .parse(buffer);

            const message = demo.findMessage<DataTable>(DemoMessages.DataTable);

            assert(message?.dataTable);

            const { dataTable } = message;

            assertEquals(dataTable.tables.length, 269);
            assertEquals(dataTable.serverClasses.length, 222);
        });
    });
});
describe('readPackets', function () {
    describe('#Portal 2', () => {
        it('read packets correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2_solo.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ packets: true })
                .parse(buffer);

            const message = demo.findMessage<Packet>(DemoMessages.Packet);

            assert(message?.packets);

            const { packets } = message;

            assertEquals(packets.length, 22);
        });
    });
    describe('#Portal 2', () => {
        it('read user message correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2_cm.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ packets: true })
                .parse(buffer);

            const packet = demo
                .findPacket<NetMessages.SvcUserMessage>((packet) => {
                    return packet instanceof NetMessages.SvcUserMessage &&
                    !!packet.userMessage &&
                    packet.userMessage instanceof ScoreboardTempUpdate;
                });
                

            const scoreboard = packet?.userMessage?.as<ScoreboardTempUpdate>();
            assert(scoreboard);

            assertEquals(scoreboard.portalScore, 1);
            assertEquals(scoreboard.timeScore, 2663);
        });
    });
    describe('#Portal', () => {
        it('read packets correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal.dem');

            const demo = SourceDemoParser.default()
                .setOptions({ packets: true })
                .parse(buffer);

            const message = demo.findMessage<Packet>(DemoMessages.Packet);

            assert(message?.packets);

            const { packets } = message;

            assertEquals(packets.length, 19);
        });
    });
});
/* describe('readPackets', function() {
    this.timeout(0);

    describe('#Portal 2', () => {
        it('read packets correctly', () => {
            const dir = './demos/private/coop/';
            const files = fs.readdirSync(dir);

            const result = [];
            for (const file of files) {
                const buffer = Deno.readFileSync(dir + file);

                const demo = SourceDemoParser.default()
                    .setOptions({ packets: true })
                    .parse(buffer);

                const { serverCount } = demo.findMessage(DemoMessages.Packet).findPacket(NetMessages.SvcServerInfo);

                result.push({ file, serverCount });
            }

            result
                .sort((a, b) => a.serverCount - b.serverCount)
                .forEach(({ file, serverCount }) => console.log(`${file} -> ${serverCount}`));
        });
    });
});
 */
