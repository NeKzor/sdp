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
    writeVector(vec: Vector) {
        this.writeFloat32(vec.x!);
        this.writeFloat32(vec.y!);
        this.writeFloat32(vec.z!);
    }
    readQAngle() {
        return new QAngle(
            this.readFloat32(),
            this.readFloat32(),
            this.readFloat32(),
        );
    }
    writeQAngle(ang: QAngle) {
        this.writeFloat32(ang.pitch!);
        this.writeFloat32(ang.yaw!);
        this.writeFloat32(ang.roll!);
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
    writeCoord(value: number) {
        const COORD_INTEGER_BITS = 14;
        const COORD_FRACTIONAL_BITS = 5;
        const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
        const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;

        const sign = value <= -COORD_RESOLUTION ? 1 : 0;
        let integer = Math.floor(Math.abs(value));
        const fraction = Math.abs(Math.floor(value * COORD_DENOMINATOR)) & (COORD_DENOMINATOR -1);

        this.writeBits(integer, 1);
        this.writeBits(fraction, 1);

        if (integer || fraction) {
            this.writeBits(sign, 1);

            if (integer) {
                --integer;
                this.writeBits(integer, COORD_INTEGER_BITS);
            }
            if (fraction) {
                this.writeBits(fraction, COORD_FRACTIONAL_BITS);
            }
        }
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
    writeVectorCoord(vec: Vector) {
        this.writeBoolean(vec.x !== 0);
        if (vec.x !== 0) {
            this.writeCoord(vec.x);
        }
        this.writeBoolean(vec.y !== 0);
        if (vec.y !== 0) {
            this.writeCoord(vec.y);
        }
        this.writeBoolean(vec.z !== 0);
        if (vec.z !== 0) {
            this.writeCoord(vec.z);
        }
    }
    readField(bits: number, fallbackValue = 0) {
        return this.readBoolean() ? this.readBits(bits) : fallbackValue;
    }
    writeField(field: number, bits: number, fallbackValue = 0) {
        this.writeBoolean(field !== fallbackValue);
        if (field !== fallbackValue) {
            this.writeBits(field, bits);
        }
    }
    readFieldThen(
        bits: number,
        fallbackValue: number,
        callback: (bits: number) => void,
    ) {
        return this.readBoolean() ? callback(this.readBits(bits)) : fallbackValue;
    }
    writeFieldThen(
        field: number,
        bits: number,
        fallbackValue: number,
        callback: (bits: number) => void,
    ) {
        this.writeBoolean(field !== fallbackValue);
        if (field !== fallbackValue) {
            this.writeBits(field, bits);
            callback(field);
        }
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
