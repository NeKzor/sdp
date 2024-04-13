// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { SourceDemoParser } from '../src/mod.ts';

describe.skip('SourceDemoParser', () => {
    describe('#Portal 2', () => {
        it('parse and save unedited demo correctly', () => {
            try {
                const buffer = Deno.readFileSync('./demos/public/portal2.dem');
                const parser = SourceDemoParser.default();
                const demo = parser.parse(buffer);
                const saved = parser.save(demo, buffer.byteLength);

                assertEquals(buffer.byteLength, saved.byteLength, 'Equal buffer sizes');

                for (let i = 0; i < buffer.byteLength; ++i) {
                    const a = buffer.at(i);
                    const b = saved.at(i);
                    assertEquals(a, b, `Equal byte at offset ${i}`);
                }
            } catch (err) {
                console.error(err);
                throw err;
            }
        });
        it('fully parse and save unedited demo correctly', () => {
            try {
                const buffer = Deno.readFileSync('./demos/public/portal2_cm.dem');
                const parser = SourceDemoParser.default()
                    .setOptions({
                        dataTables: true,
                        stringTables: true,
                        userCmds: true,
                        packets: true,
                    });

                const demo = parser.parse(buffer);

                const saved = parser.save(demo, buffer.byteLength);

                const _parsed = parser.parse(saved);

                assertEquals(buffer.byteLength, saved.byteLength, 'Equal buffer sizes');

                for (let i = 0; i < buffer.byteLength; ++i) {
                    const expected = saved.at(i);
                    const actual = buffer.at(i);
                    assertEquals(expected, actual, `Equal byte at offset ${i}`);
                }
            } catch (err) {
                console.error(err);
                throw err;
            }
        });
        it('fully parse and save without mutating anything', () => {
            try {
                const buffer = Deno.readFileSync('./demos/public/p2sm_old.dem');
                const parser = SourceDemoParser.default();
                const demo = parser.parse(buffer);

                demo.readStringTables();
                demo.readDataTables();
                demo.readPackets();
                demo.readUserCmds();

                const saved = parser.save(demo, buffer.byteLength);

                demo.readStringTables();
                demo.readDataTables();
                demo.readPackets();
                demo.readUserCmds();

                const _parsed = parser.parse(saved);

                assertEquals(buffer.byteLength, saved.byteLength, 'Equal buffer sizes');

                for (let i = 0; i < buffer.byteLength; ++i) {
                    const expected = saved.at(i);
                    const actual = buffer.at(i);
                    assertEquals(expected, actual, `Equal byte at offset ${i}`);
                }
            } catch (err) {
                console.error(err);
                throw err;
            }
        });
    });
});
