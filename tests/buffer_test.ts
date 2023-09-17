/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { assertEquals } from 'https://deno.land/std@0.191.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.191.0/testing/bdd.ts';
import { SourceDemoBuffer } from '../src/buffer.ts';

describe('SourceDemoBuffer', () => {
    it('write bits correctly', () => {
        const writer = SourceDemoBuffer.allocate(100);
        writer.writeBits(0, 1);
        writer.writeBits(128, 11);

        const reader = new SourceDemoBuffer(writer.buffer);
        assertEquals(reader.readBits(1), 0);
        assertEquals(reader.readBits(11), 128);
    });
});
