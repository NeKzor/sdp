// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { assertEquals } from 'https://deno.land/std@0.191.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.191.0/testing/bdd.ts';
import { SourceBuffer } from '../src/buffer.ts';

describe('SourceBuffer', () => {
    it('write bits correctly', () => {
        const writer = SourceBuffer.allocate(100);
        writer.writeBitsLE(0, 1);
        writer.writeBitsLE(128, 11);

        const reader = new SourceBuffer(writer.buffer);
        assertEquals(reader.readBitsLE(1), 0);
        assertEquals(reader.readBitsLE(11), 128);
    });
});
