// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { BitStream, type BitView } from './lib/bit-buffer.ts';
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
    static from(buffer: SourceDemoBuffer): SourceDemoBuffer {
        const copy = new SourceDemoBuffer(buffer.view);
        copy._index = buffer._index;
        copy._startIndex = buffer._startIndex;
        copy._length = buffer._length;
        return copy;
    }
    static allocate(bytes: number): SourceDemoBuffer {
        return new SourceDemoBuffer(new ArrayBuffer(bytes));
    }
    static allocateBits(bits: number): SourceDemoBuffer {
        if ((bits % 8) !== 0) {
            throw new Error('Number of bits to allocate is not aligned!');
        }
        return new SourceDemoBuffer(new ArrayBuffer(bits / 8));
    }
    clone(): SourceDemoBuffer {
        return new SourceDemoBuffer(this.view);
    }
    reset(): SourceDemoBuffer {
        this._index = this._startIndex;
        return this;
    }
    readVarInt32(): number {
        let result = 0;
        let count = 0;
        let b;
        do {
            if (count == 5) return result;
            b = this.readUint8();
            result |= (b & 0x7F) << (7 * count);
            ++count;
        } while (b & 0x80);
        return result;
    }
    readVector(): Vector {
        return new Vector(
            this.readFloat32(),
            this.readFloat32(),
            this.readFloat32(),
        );
    }
    writeVector(vec: Vector): void {
        this.writeFloat32(vec.x!);
        this.writeFloat32(vec.y!);
        this.writeFloat32(vec.z!);
    }
    readQAngle(): QAngle {
        return new QAngle(
            this.readFloat32(),
            this.readFloat32(),
            this.readFloat32(),
        );
    }
    writeQAngle(ang: QAngle): void {
        this.writeFloat32(ang.pitch!);
        this.writeFloat32(ang.yaw!);
        this.writeFloat32(ang.roll!);
    }
    readCoord(): number {
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
    writeCoord(value: number): void {
        const COORD_INTEGER_BITS = 14;
        const COORD_FRACTIONAL_BITS = 5;
        const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
        const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;

        const sign = value <= -COORD_RESOLUTION ? 1 : 0;
        let integer = Math.floor(Math.abs(value));
        const fraction = Math.abs(Math.floor(value * COORD_DENOMINATOR)) & (COORD_DENOMINATOR - 1);

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
    readVectorCoord(): Vector {
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
    writeVectorCoord(vec: Vector): void {
        const COORD_FRACTIONAL_BITS = 5;
        const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
        const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;

        const [x, y, z] = [
            vec.x >= COORD_RESOLUTION || vec.x <= -COORD_RESOLUTION,
            vec.y >= COORD_RESOLUTION || vec.y <= -COORD_RESOLUTION,
            vec.z >= COORD_RESOLUTION || vec.z <= -COORD_RESOLUTION,
        ];

        this.writeBoolean(x);
        this.writeBoolean(y);
        this.writeBoolean(z);

        x && this.writeCoord(vec.x);
        y && this.writeCoord(vec.y);
        z && this.writeCoord(vec.z);
    }
    readAngles(): QAngle {
        const { x, y, z } = this.readVectorCoord();
        return new QAngle(x, y, z);
    }
    writeAngles(angle: QAngle): void {
        return this.writeVectorCoord(new Vector(angle.pitch, angle.yaw, angle.roll));
    }
    readField(bits: number, fallbackValue = 0): number {
        return this.readBoolean() ? this.readBits(bits) : fallbackValue;
    }
    writeField(field: number, bits: number, fallbackValue = 0): void {
        this.writeBoolean(field !== fallbackValue);
        if (field !== fallbackValue) {
            this.writeBits(field, bits);
        }
    }
    readFieldThen(
        bits: number,
        fallbackValue: number,
        callback: (bits: number) => void,
    ): number | void {
        return this.readBoolean() ? callback(this.readBits(bits)) : fallbackValue;
    }
    writeFieldThen(
        field: number,
        bits: number,
        fallbackValue: number,
        callback: (bits: number) => void,
    ): void {
        this.writeBoolean(field !== fallbackValue);
        if (field !== fallbackValue) {
            this.writeBits(field, bits);
            callback(field);
        }
    }
    override readBitStream(bitLength: number): SourceDemoBuffer {
        const slice = new SourceDemoBuffer(this._view);
        slice._startIndex = this._index;
        slice._index = this._index;
        slice.length = bitLength;
        this._index += bitLength;
        return slice;
    }
    override writeBitStream(stream: BitStream, length: number): void {
        if (!length) {
            length = stream.bitsLeft;
        }

        let bitsToWrite = 0;
        let offset = stream.offset;

        while (length > 0) {
            bitsToWrite = Math.min(length, 32);
            this.writeBits(stream.peakBits(offset, bitsToWrite, false), bitsToWrite);
            offset += bitsToWrite;
            length -= bitsToWrite;
        }
    }
    override writeArrayBuffer(buffer: ArrayBuffer, byteLength: number): void {
        this.writeBitStream(new SourceDemoBuffer(buffer), byteLength * 8);
    }
}
