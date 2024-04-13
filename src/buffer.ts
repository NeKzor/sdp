// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { QAngle } from './types/QAngle.ts';
import { Vector } from './types/Vector.ts';

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const COORD_INTEGER_BITS = 14;
const COORD_FRACTIONAL_BITS = 5;
const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;

export class SourceBuffer {
    public buffer: ArrayBuffer;
    public view: DataView;
    public bitOffset: number;

    constructor(buffer: ArrayBuffer) {
        this.buffer = buffer;
        this.view = new DataView(this.buffer);
        this.bitOffset = 0;
    }

    get isAligned(): boolean {
        return (this.bitOffset % 8) === 0;
    }

    get allocatedBits(): number {
        return this.buffer.byteLength * 8;
    }

    get bitsLeft(): number {
        return this.allocatedBits - this.bitOffset;
    }

    static create(buffer: ArrayBuffer): SourceBuffer {
        return new SourceBuffer(buffer);
    }
    static from(elements: Iterable<number>): SourceBuffer {
        return new SourceBuffer(new Uint8Array(elements).buffer);
    }
    static allocate(bytes: number): SourceBuffer {
        return new SourceBuffer(new ArrayBuffer(bytes));
    }

    clone(): SourceBuffer {
        const array = new Uint8Array(this.buffer.byteLength);
        array.set(new Uint8Array(this.buffer), 0);
        return new SourceBuffer(array.buffer);
    }

    reset(): SourceBuffer {
        this.bitOffset = 0;
        return this;
    }

    toArray(): Uint8Array {
        this.shrinkToFit();
        return new Uint8Array(this.buffer);
    }

    reallocIfNeeded(bitsToWrite: number): void {
        if (this.allocatedBits - bitsToWrite < this.bitOffset) {
            const oldBuffer = this.buffer;
            this.buffer = new ArrayBuffer(this.buffer.byteLength * 2);
            this.view = new DataView(this.buffer);
            // FIXME: Use ArrayBuffer.prototype.transfer() once it comes out.
            new Uint8Array(this.buffer).set(new Uint8Array(oldBuffer), 0);
        }
    }

    shrinkToFit(): void {
        if (this.bitOffset < this.allocatedBits) {
            const oldBuffer = this.buffer;
            const newLength = Math.ceil(this.bitOffset / 8);
            this.buffer = new ArrayBuffer(newLength);
            this.view = new DataView(this.buffer);
            // FIXME: Use ArrayBuffer.prototype.transfer() once it comes out.
            new Uint8Array(this.buffer).set(new Uint8Array(oldBuffer.slice(0, newLength)), 0);
        }
    }

    seekBit(offset: number): void {
        this.bitOffset = offset;
    }
    seekByte(offset: number): void {
        this.bitOffset = offset * 8;
    }
    advanceBits(count: number): void {
        this.bitOffset += count;
    }
    advanceBytes(count: number): void {
        this.bitOffset += count * 8;
    }
    jumpToBit(offset: number, callback: (buffer: SourceBuffer) => void): SourceBuffer {
        const position = this.bitOffset;
        this.bitOffset = offset;
        callback(this);
        this.bitOffset = position;
        return this;
    }
    jumpToByte(offset: number, callback: (buffer: SourceBuffer) => void): SourceBuffer {
        const position = this.bitOffset;
        this.bitOffset = offset * 8;
        callback(this);
        this.bitOffset = position;
        return this;
    }
    when(check: boolean, callback: (buffer: SourceBuffer) => void): SourceBuffer {
        check && callback(this);
        return this;
    }

    peekArray(offset: number, bytes: number): Uint8Array {
        const value = new Uint8Array(bytes);
        for (let i = 0; i < bytes; i += 1) {
            value[i] = this.peekUint8(offset + (i * 8));
        }
        return value;
    }
    readArray(bytes: number): Uint8Array {
        const value = this.peekArray(this.bitOffset, bytes);
        this.bitOffset += bytes * 8;
        return value;
    }
    writeArray(array: Uint8Array): SourceBuffer {
        for (let i = 0; i < array.byteLength; i += 1) {
            this.writeUint8(array[i]!);
        }
        return this;
    }
    peekBuffer(offset: number, bytes: number): SourceBuffer {
        return new SourceBuffer(this.peekArray(offset, bytes).buffer);
    }
    readBuffer(bytes: number): SourceBuffer {
        return new SourceBuffer(this.readArray(bytes).buffer);
    }
    writeBuffer(buffer: SourceBuffer): SourceBuffer {
        const array = new Uint8Array(buffer.buffer);
        for (let i = 0; i < array.byteLength; i += 1) {
            this.writeUint8(array[i]!);
        }
        return this;
    }

    peekCString(offset: number): string {
        const start = offset;
        while (this.peekUint8(offset)) {
            offset += 8;
        }
        return textDecoder.decode(this.peekArray(start, ((offset + 8) - start) / 8)).slice(0, -1);
    }
    readCString(): string {
        const start = this.bitOffset;
        let end = start;
        while (this.peekUint8(end)) {
            end += 8;
        }
        return textDecoder.decode(this.readArray(((end + 8) - start) / 8)).slice(0, -1);
    }
    writeCString(value: string): SourceBuffer {
        this.writeArray(textEncoder.encode(value + '\0'));
        return this;
    }
    peekStringBuffer(offset: number, bytes: number): string {
        const value = textDecoder.decode(this.peekArray(offset, bytes));
        const nul = value.indexOf('\0');
        return nul === -1 ? value : value.slice(0, nul);
    }
    readStringBuffer(bytes: number): string {
        const value = textDecoder.decode(this.readArray(bytes));
        const nul = value.indexOf('\0');
        return nul === -1 ? value : value.slice(0, nul);
    }
    writeStringBuffer(value: string, bytes: number): SourceBuffer {
        const array = new Uint8Array(bytes);
        array.set(textEncoder.encode(value), 0);
        this.writeArray(array);
        return this;
    }

    peekUBitsLE(offset: number, count: number): number {
        let value = 0;
        const view = this.view;

        for (let i = 0; i < count;) {
            const remaining = count - i;
            const bitOffset = offset & 7;
            const currentByte = view.getUint8(offset >> 3);
            const read = Math.min(remaining, 8 - bitOffset);
            const mask = ~(0xff << read);
            const readBits = (currentByte >> bitOffset) & mask;
            value |= readBits << i;
            offset += read;
            i += read;
        }

        return value >>> 0;
    }
    readUBitsLE(count: number): number {
        const value = this.peekUBitsLE(this.bitOffset, count);
        this.bitOffset += count;
        return value;
    }
    peekBitsLE(offset: number, count: number): number {
        let value = 0;
        const view = this.view;

        for (let i = 0; i < count;) {
            const remaining = count - i;
            const bitOffset = offset & 7;
            const currentByte = view.getUint8(offset >> 3);
            const read = Math.min(remaining, 8 - bitOffset);
            const mask = ~(0xff << read);
            const readBits = (currentByte >> bitOffset) & mask;
            value |= readBits << i;
            offset += read;
            i += read;
        }

        if (count !== 32 && value & (1 << (count - 1))) {
            value |= -1 ^ ((1 << count) - 1);
        }

        return value;
    }
    readBitsLE(count: number): number {
        const value = this.peekBitsLE(this.bitOffset, count);
        this.bitOffset += count;
        return value;
    }
    setBitsLE(offset: number, count: number, value: number): SourceBuffer {
        this.reallocIfNeeded(count);

        const view = this.view;

        for (let i = 0; i < count;) {
            const remaining = count - i;
            const bitOffset = offset & 7;
            const byteOffset = offset >> 3;
            const wrote = Math.min(remaining, 8 - bitOffset);
            const mask = ~(0xff << wrote);
            const writeBits = value & mask;
            value >>= wrote;
            const destMask = ~(mask << bitOffset);
            view.setUint8(byteOffset, (view.getUint8(byteOffset)! & destMask) | (writeBits << bitOffset));
            offset += wrote;
            i += wrote;
        }

        this.bitOffset += count;
        return this;
    }
    writeBitsLE(value: number, count: number): SourceBuffer {
        this.setBitsLE(this.bitOffset, count, value);
        return this;
    }
    peekUBitsBE(offset: number, count: number): number {
        let value = 0;
        const view = this.view;

        for (let i = 0; i < count;) {
            const remaining = count - i;
            const bitOffset = offset & 7;
            const currentByte = view.getUint8(offset >> 3);
            const read = Math.min(remaining, 8 - bitOffset);
            const mask = ~(0xff << read);
            const readBits = (currentByte >> (8 - read - bitOffset)) & mask;
            value <<= read;
            value |= readBits;
            offset += read;
            i += read;
        }

        return value >>> 0;
    }
    readUBitsBE(count: number): number {
        const value = this.peekUBitsBE(this.bitOffset, count);
        this.bitOffset += count;
        return value;
    }
    peekBitsBE(offset: number, count: number): number {
        let value = 0;
        const view = this.view;

        for (let i = 0; i < count;) {
            const remaining = count - i;
            const bitOffset = offset & 7;
            const currentByte = view.getUint8(offset >> 3);
            const read = Math.min(remaining, 8 - bitOffset);
            const mask = ~(0xff << read);
            const readBits = (currentByte >> (8 - read - bitOffset)) & mask;
            value <<= read;
            value |= readBits;
            offset += read;
            i += read;
        }

        if (count !== 32 && value & (1 << (count - 1))) {
            value |= -1 ^ ((1 << count) - 1);
        }

        return value;
    }
    readBitsBE(count: number): number {
        const value = this.peekBitsBE(this.bitOffset, count);
        this.bitOffset += count;
        return value;
    }
    setBitsBE(offset: number, count: number, value: number): SourceBuffer {
        this.reallocIfNeeded(count);

        const view = this.view;

        for (let i = 0; i < count;) {
            const remaining = count - i;
            const bitOffset = offset & 7;
            const byteOffset = offset >> 3;
            const wrote = Math.min(remaining, 8 - bitOffset);
            const mask = ~(~0 << wrote);
            const writeBits = (value >> (count - i - wrote)) & mask;
            const destShift = 8 - bitOffset - wrote;
            const destMask = ~(mask << destShift);
            view.setUint8(byteOffset, (view.getUint8(byteOffset) & destMask) | (writeBits << destShift));
            offset += wrote;
            i += wrote;
        }

        this.bitOffset += count;
        return this;
    }
    writeBitsBE(value: number, count: number): SourceBuffer {
        this.setBitsBE(this.bitOffset, count, value);
        return this;
    }

    peekUint8(offset: number): number {
        return (offset % 8) === 0 ? this.view.getUint8(offset / 8) : this.peekUBitsLE(offset, 8);
    }
    readUint8(): number {
        const value = this.peekUint8(this.bitOffset);
        this.bitOffset += 8;
        return value;
    }
    writeUint8(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(8);
            this.view.setUint8(this.bitOffset / 8, value);
            this.bitOffset += 8;
        } else {
            this.setBitsLE(this.bitOffset, 8, value);
        }
        return this;
    }
    peekInt8(offset: number): number {
        return (offset % 8) === 0 ? this.view.getInt8(offset / 8) : this.peekBitsLE(offset, 8);
    }
    readInt8(): number {
        const value = this.peekInt8(this.bitOffset);
        this.bitOffset += 8;
        return value;
    }
    writeInt8(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(8);
            this.view.setInt8(this.bitOffset / 8, value);
            this.bitOffset += 8;
        } else {
            this.setBitsLE(this.bitOffset, 8, value);
        }
        return this;
    }

    peekUint16LE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getUint16(offset / 8, true) : this.peekUBitsLE(offset, 16);
    }
    readUint16LE(): number {
        const value = this.peekUint16LE(this.bitOffset);
        this.bitOffset += 16;
        return value;
    }
    writeUint16LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(16);
            this.view.setUint16(this.bitOffset / 8, value, true);
            this.bitOffset += 16;
        } else {
            this.setBitsLE(this.bitOffset, 16, value);
        }
        return this;
    }
    peekInt16LE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getInt16(offset / 8, true) : this.peekBitsLE(offset, 16);
    }
    readInt16LE(): number {
        const value = this.peekInt16LE(this.bitOffset);
        this.bitOffset += 16;
        return value;
    }
    writeInt16LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(16);
            this.view.setInt16(this.bitOffset / 8, value, true);
            this.bitOffset += 16;
        } else {
            this.setBitsLE(this.bitOffset, 16, value);
        }
        return this;
    }
    peekUint16BE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getUint16(offset / 8, false) : this.peekUBitsBE(offset, 16);
    }
    readUint16BE(): number {
        const value = this.peekUint16BE(this.bitOffset);
        this.bitOffset += 16;
        return value;
    }
    writeUint16BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(16);
            this.view.setUint16(this.bitOffset / 8, value, false);
            this.bitOffset += 16;
        } else {
            this.setBitsBE(this.bitOffset, 16, value);
        }
        return this;
    }
    peekInt16BE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getInt16(offset / 8, false) : this.peekBitsBE(offset, 16);
    }
    readInt16BE(): number {
        const value = this.peekInt16BE(this.bitOffset);
        this.bitOffset += 16;
        return value;
    }
    writeInt16BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(16);
            this.view.setInt16(this.bitOffset / 8, value, false);
            this.bitOffset += 16;
        } else {
            this.setBitsBE(this.bitOffset, 16, value);
        }
        return this;
    }

    peekUint32LE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getUint32(offset / 8, true) : this.peekUBitsLE(offset, 32);
    }
    readUint32LE(): number {
        const value = this.peekUint32LE(this.bitOffset);
        this.bitOffset += 32;
        return value;
    }
    writeUint32LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(32);
            this.view.setUint32(this.bitOffset / 8, value, true);
            this.bitOffset += 32;
        } else {
            this.setBitsLE(this.bitOffset, 32, value);
        }
        return this;
    }
    peekInt32LE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getInt32(offset / 8, true) : this.peekBitsLE(offset, 32);
    }
    readInt32LE(): number {
        const value = this.peekInt32LE(this.bitOffset);
        this.bitOffset += 32;
        return value;
    }
    writeInt32LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(32);
            this.view.setInt32(this.bitOffset / 8, value, true);
            this.bitOffset += 32;
        } else {
            this.setBitsLE(this.bitOffset, 32, value);
        }
        return this;
    }
    peekUint32BE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getUint32(offset / 8, false) : this.peekUBitsBE(offset, 32);
    }
    readUint32BE(): number {
        const value = this.peekUint32BE(this.bitOffset);
        this.bitOffset += 32;
        return value;
    }
    writeUint32BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(32);
            this.view.setUint32(this.bitOffset / 8, value, false);
            this.bitOffset += 32;
        } else {
            this.setBitsBE(this.bitOffset, 32, value);
        }
        return this;
    }
    peekInt32BE(offset: number): number {
        return (offset % 8) === 0 ? this.view.getInt32(offset / 8, false) : this.peekBitsBE(offset, 32);
    }
    readInt32BE(): number {
        const value = this.peekInt32BE(this.bitOffset);
        this.bitOffset += 32;
        return value;
    }
    writeInt32BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(32);
            this.view.setInt32(this.bitOffset / 8, value, false);
            this.bitOffset += 32;
        } else {
            this.setBitsBE(this.bitOffset, 32, value);
        }
        return this;
    }

    peekUint64LE(offset: number): number {
        return (offset % 8) === 0 ? Number(this.view.getBigUint64(offset / 8, true)) : this.peekUBitsLE(offset, 64);
    }
    readUint64LE(): number {
        const value = this.peekUint64LE(this.bitOffset);
        this.bitOffset += 64;
        return value;
    }
    writeUint64LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(64);
            this.view.setBigUint64(this.bitOffset / 8, BigInt(value), true);
            this.bitOffset += 64;
        } else {
            this.setBitsLE(this.bitOffset, 64, value);
        }
        return this;
    }
    peekInt64LE(offset: number): number {
        return (offset % 8) === 0 ? Number(this.view.getBigInt64(offset / 8, true)) : this.peekBitsLE(offset, 64);
    }
    readInt64LE(): number {
        const value = this.peekInt64LE(this.bitOffset);
        this.bitOffset += 64;
        return value;
    }
    writeInt64LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(64);
            this.view.setBigInt64(this.bitOffset / 8, BigInt(value), true);
            this.bitOffset += 64;
        } else {
            this.setBitsLE(this.bitOffset, 64, value);
        }
        return this;
    }
    peekUint64BE(offset: number): number {
        return (offset % 8) === 0 ? Number(this.view.getBigUint64(offset / 8, false)) : this.peekUBitsBE(offset, 64);
    }
    readUint64BE(): number {
        const value = this.peekUint64BE(this.bitOffset);
        this.bitOffset += 64;
        return value;
    }
    writeUint64BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(64);
            this.view.setBigUint64(this.bitOffset / 8, BigInt(value), false);
            this.bitOffset += 64;
        } else {
            this.setBitsBE(this.bitOffset, 64, value);
        }
        return this;
    }
    peekInt64BE(offset: number): number {
        return (offset % 8) === 0 ? Number(this.view.getBigInt64(offset / 8, false)) : this.peekBitsBE(offset, 64);
    }
    readInt64BE(): number {
        const value = this.peekInt64BE(this.bitOffset);
        this.bitOffset += 64;
        return value;
    }
    writeInt64BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(64);
            this.view.setBigInt64(this.bitOffset / 8, BigInt(value), false);
            this.bitOffset += 64;
        } else {
            this.setBitsBE(this.bitOffset, 64, value);
        }
        return this;
    }

    private fp = new DataView(new ArrayBuffer(8));

    peekFloat32LE(offset: number): number {
        if ((offset % 8) === 0) {
            return this.view.getFloat32(offset / 8, true);
        }
        this.fp.setUint32(0, this.peekUBitsLE(offset, 32), true);
        return this.fp.getFloat32(0, true);
    }
    readFloat32LE(): number {
        const value = this.peekFloat32LE(this.bitOffset);
        this.bitOffset += 32;
        return value;
    }
    writeFloat32LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(32);
            this.view.setFloat32(this.bitOffset / 8, value, true);
            this.bitOffset += 32;
        } else {
            this.setBitsLE(this.bitOffset, 32, value);
        }
        return this;
    }
    peekFloat32BE(offset: number): number {
        if ((offset % 8) === 0) {
            return this.view.getFloat32(offset / 8, false);
        }
        this.fp.setUint32(0, this.peekUBitsBE(offset, 32), false);
        return this.fp.getFloat32(0, false);
    }
    readFloat32BE(): number {
        const value = this.peekFloat32BE(this.bitOffset);
        this.bitOffset += 32;
        return value;
    }
    writeFloat32BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(32);
            this.view.setFloat32(this.bitOffset / 8, value, false);
            this.bitOffset += 32;
        } else {
            this.setBitsBE(this.bitOffset, 32, value);
        }
        return this;
    }

    peekFloat64LE(offset: number): number {
        if ((offset % 8) === 0) {
            return this.view.getFloat64(offset / 8, true);
        }
        this.fp.setBigUint64(0, BigInt(this.peekUBitsLE(offset, 64)), true);
        return this.fp.getFloat64(0, true);
    }
    readFloat64LE(): number {
        const value = this.peekFloat64LE(this.bitOffset);
        this.bitOffset += 64;
        return value;
    }
    writeFloat64LE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(64);
            this.view.setFloat64(this.bitOffset / 8, value, true);
            this.bitOffset += 64;
        } else {
            this.setBitsLE(this.bitOffset, 64, value);
        }
        return this;
    }
    peekFloat64BE(offset: number): number {
        if ((offset % 8) === 0) {
            return this.view.getFloat64(offset / 8, false);
        }
        this.fp.setBigUint64(0, BigInt(this.peekUBitsLE(offset, 64)), false);
        return this.fp.getFloat64(0, false);
    }
    readFloat64BE(): number {
        const value = this.peekFloat64BE(this.bitOffset);
        this.bitOffset += 64;
        return value;
    }
    writeFloat64BE(value: number): SourceBuffer {
        if ((this.bitOffset % 8) === 0) {
            this.reallocIfNeeded(64);
            this.view.setFloat64(this.bitOffset / 8, value, false);
            this.bitOffset += 64;
        } else {
            this.setBitsBE(this.bitOffset, 64, value);
        }
        return this;
    }

    readVarInt32(): number {
        throw new Error('readVarInt32() not implemented!');
    }

    peekVector(offset: number): Vector {
        return new Vector(
            this.peekFloat32LE(offset),
            this.peekFloat32LE(offset + 8),
            this.peekFloat32LE(offset + 16),
        );
    }
    readVector(): Vector {
        const value = this.peekVector(this.bitOffset);
        this.bitOffset += 96;
        return value;
    }
    writeVector(value: Vector): SourceBuffer {
        this.writeFloat32LE(value.x);
        this.writeFloat32LE(value.y);
        this.writeFloat32LE(value.z);
        return this;
    }

    peekQAngle(offset: number): QAngle {
        return new QAngle(
            this.peekFloat32LE(offset),
            this.peekFloat32LE(offset + 8),
            this.peekFloat32LE(offset + 16),
        );
    }
    readQAngle(): QAngle {
        const value = this.peekQAngle(this.bitOffset);
        this.bitOffset += 96;
        return value;
    }
    writeQAngle(value: QAngle): SourceBuffer {
        this.writeFloat32LE(value.pitch);
        this.writeFloat32LE(value.yaw);
        this.writeFloat32LE(value.roll);
        return this;
    }

    peekCoord(offset: number): [number, number] {
        let read = 2;
        let value = 0.0;
        let integer = this.peekUBitsLE(offset, 1);
        let fraction = this.peekUBitsLE(offset + 1, 1);
        if (integer || fraction) {
            const sign = this.peekUBitsLE(offset + read, 1);
            read += 1;
            if (integer) {
                integer = this.peekUBitsLE(offset + read, COORD_INTEGER_BITS) + 1;
                read += COORD_INTEGER_BITS;
            }
            if (fraction) {
                fraction = this.peekUBitsLE(offset + read, COORD_FRACTIONAL_BITS);
                read += COORD_FRACTIONAL_BITS;
            }
            value = integer + fraction * COORD_RESOLUTION;
            if (sign) value = -value;
        }
        return [value, read];
    }
    readCoord(): number {
        let value = 0.0;
        let integer = this.readUBitsLE(1);
        let fraction = this.readUBitsLE(1);
        if (integer || fraction) {
            const sign = this.readUBitsLE(1);
            if (integer) {
                integer = this.readUBitsLE(COORD_INTEGER_BITS) + 1;
            }
            if (fraction) {
                fraction = this.readUBitsLE(COORD_FRACTIONAL_BITS);
            }
            value = integer + fraction * COORD_RESOLUTION;
            if (sign) value = -value;
        }
        return value;
    }
    writeCoord(value: number): SourceBuffer {
        const COORD_INTEGER_BITS = 14;
        const COORD_FRACTIONAL_BITS = 5;
        const COORD_DENOMINATOR = 1 << COORD_FRACTIONAL_BITS;
        const COORD_RESOLUTION = 1.0 / COORD_DENOMINATOR;

        const sign = value <= -COORD_RESOLUTION ? 1 : 0;
        let integer = Math.floor(Math.abs(value));
        const fraction = Math.abs(Math.floor(value * COORD_DENOMINATOR)) & (COORD_DENOMINATOR - 1);

        this.setBitsLE(this.bitOffset, integer, 1);
        this.setBitsLE(this.bitOffset, fraction, 1);

        if (integer || fraction) {
            this.setBitsLE(this.bitOffset, sign, 1);

            if (integer) {
                --integer;
                this.setBitsLE(this.bitOffset, integer, COORD_INTEGER_BITS);
            }
            if (fraction) {
                this.setBitsLE(this.bitOffset, fraction, COORD_FRACTIONAL_BITS);
            }
        }
        return this;
    }

    peekBoolean(offset: number): boolean {
        return this.peekBitsLE(offset, 1) !== 0;
    }
    readBoolean(): boolean {
        return this.readBitsLE(1) !== 0;
    }
    writeBoolean(value: boolean): SourceBuffer {
        this.setBitsLE(this.bitOffset, 1, value ? 1 : 0);
        return this;
    }

    peekVectorCoord(offset: number): Vector {
        const [rx, ry, rz] = [
            this.peekBoolean(offset),
            this.peekBoolean(offset + 1),
            this.peekBoolean(offset + 2),
        ];

        let x = 0;
        let y = 0;
        let z = 0;

        if (rx) {
            const [cx, read] = this.peekCoord(offset);
            x = cx;
            offset += read;
        }
        if (ry) {
            const [cy, read] = this.peekCoord(offset);
            y = cy;
            offset += read;
        }
        if (rz) {
            const [cz] = this.peekCoord(offset);
            z = cz;
        }

        return new Vector(x, y, z);
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
    writeVectorCoord(vec: Vector): SourceBuffer {
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

        return this;
    }
}
