// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { SourceBuffer, SourceDemoBuffer } from '../src/buffer.ts';

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
