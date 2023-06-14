/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { BitStream, BitView } from './lib/bit-buffer.ts';
import { QAngle } from './types/QAngle.ts';
import { Vector } from './types/Vector.ts';

export class SourceDemoBuffer extends BitStream {
    constructor(
        source: ArrayBuffer | BitView,
        byteOffset?: number,
        byteLength?: number,
    ) {
        super(source, byteOffset, byteLength);
    }
    readVector() {
        return new Vector(
            this.readFloat32(),
            this.readFloat32(),
            this.readFloat32(),
        );
    }
    readQAngle() {
        return new QAngle(
            this.readFloat32(),
            this.readFloat32(),
            this.readFloat32(),
        );
    }
    readCoord() {
        const COORD_INTEGER_BITS = 14;
        const COORD_FRACTIONAL_BITS = 5;
        const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
        const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;

        let value = 0.0;
        let integer = this.readBits(1);
        let fraction = this.readBits(1);
        if (integer || fraction) {
            const sign = this.readBits(1);
            if (integer) {
                integer = this.readBits(COORD_INTEGER_BITS) + 1;
            }
            if (fraction) {
                fraction = this.readBits(COORD_FRACTIONAL_BITS);
            }
            value = integer + fraction * COORD_RESOLUTION;
            if (sign) value = -value;
        }

        return value;
    }
    readVectorCoord() {
        const [x, y, z] = [
            this.readBoolean(),
            this.readBoolean(),
            this.readBoolean(),
        ];
        return new Vector(
            x ? this.readCoord() : 0,
            y ? this.readCoord() : 0,
            z ? this.readCoord() : 0,
        );
    }
    readField(bits: number, fallbackValue = 0) {
        return this.readBoolean() ? this.readBits(bits) : fallbackValue;
    }
    readFieldThen(
        bits: number,
        fallbackValue: number,
        callback: (bits: number) => void,
    ) {
        return this.readBoolean() ? callback(this.readBits(bits)) : fallbackValue;
    }
    readBitStream(bitLength: number) {
        const slice = new SourceDemoBuffer(this._view);
        slice._startIndex = this._index;
        slice._index = this._index;
        slice.length = bitLength;
        this._index += bitLength;
        return slice;
    }
    writeArrayBuffer(buffer: ArrayBuffer, byteLength: number) {
        this.writeBitStream(new SourceDemoBuffer(buffer), byteLength * 8);
    }
}
