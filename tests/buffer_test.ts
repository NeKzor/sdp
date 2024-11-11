// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { assertEquals, assertThrows } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { SourceBuffer } from '../src/buffer.ts';

describe('SourceBuffer', () => {
    it('write bits correctly', () => {
        const writer = SourceBuffer.allocate(100);
        writer.writeBitsLE(0, 1);
        writer.writeBitsLE(128, 11);
        writer.writeBitsLE(-128, 13);

        const reader = new SourceBuffer(writer.buffer);
        assertEquals(reader.readBitsLE(1), 0);
        assertEquals(reader.readBitsLE(11), 128);
        assertEquals(reader.readBitsLE(13), -128);
    });

    it.only('slice bits correctly', () => {
        const writer = SourceBuffer.allocate(100);
        writer.writeBitsLE(0, 1);
        writer.writeBitsLE(128, 11);
        writer.writeBitsLE(-128, 13);

        const reader = new SourceBuffer(writer.buffer);

        assertEquals(reader.readBitsLE(1), 0);

        const slice = reader.readBits(11 + 13);
        assertEquals(slice.readBitsLE(11), 128);
        assertEquals(slice.readBitsLE(13), -128);
        assertThrows(() => slice.readBitsLE(1));
    });
});
