// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
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
