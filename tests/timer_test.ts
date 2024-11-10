// Copyright (c) 2023-2024, NeKz
// SPDX-License-Identifier: MIT

import { assert, assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { SourceDemoParser } from '../src/mod.ts';
import { SarTimer } from '../src/speedrun/mod.ts';

describe('SarTimer', () => {
    describe('#Portal 2', () => {
        it('time demo correctly', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2_sar_timer.dem');
            const parser = SourceDemoParser.default();
            const timer = SarTimer.default();

            const demo = parser.parse(buffer);
            const timing = timer.time(demo);

            assert(timing, 'Timing is not undefined');

            assertEquals(timing.startTick, 497, 'Equal start tick');
            assertEquals(timing.endTick, 723, 'Equal end tick');
            assertEquals(timing.delta, 226, 'Equal delta');
        });

        it('time demo correctly with multiple starts and stops', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2_sar_timer2.dem');
            const parser = SourceDemoParser.default();
            const timer = SarTimer.default();

            const demo = parser.parse(buffer);
            const timing = timer.time(demo);

            assert(timing, 'Timing is not undefined');

            assertEquals(timing.startTick, 335, 'Equal start tick');
            assertEquals(timing.endTick, 533, 'Equal end tick');
            assertEquals(timing.delta, 198, 'Equal delta');
        });

        it('time demo correctly without timer commands', () => {
            const buffer = Deno.readFileSync('./demos/public/portal2.dem');
            const parser = SourceDemoParser.default();
            const timer = SarTimer.default();

            const demo = parser.parse(buffer);
            const timing = timer.time(demo);

            assertEquals(timing, undefined, 'Timing is undefined');
        });
    });
});
