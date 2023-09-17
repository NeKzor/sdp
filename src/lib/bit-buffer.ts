/**
 * MIT License
 *
 * Copyright (c) 2020, bit-buffer developers
 * Copyright (c) 2023, NeKz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * Modified version of: https://github.com/inolen/bit-buffer
 *
 * Changes:
 *      - Converted to TypeScript
 *      - Replaced prototype definitions with class properties, methods, getters
 *        and setters
 *      - Replaced `var` with `const`/`let`
 *      - Removed multiple assignment expressions
 *      - Replaced `function` definitions with ES6 arrow functions
 *      - Inlined a bunch of module scoped functions
 *      - Removed references to NodeJs Buffer
 */

/**
 * BitView
 *
 * BitView provides a similar interface to the standard
 * DataView, but with support for bit-level reads / writes.
 */
export class BitView {
    constructor(source: ArrayBuffer, byteOffset?: number, byteLength?: number) {
        const isBuffer = source instanceof ArrayBuffer;
        if (!isBuffer) {
            throw new Error('Must specify a valid ArrayBuffer or Buffer.');
        }

        byteOffset = byteOffset || 0;
        byteLength = byteLength || source.byteLength;

        this._view = new Uint8Array(source, byteOffset, byteLength);

        this.bigEndian = false;
    }

    _view: Uint8Array;
    bigEndian: boolean;

    // Used to massage fp values so we can operate on them
    // at the bit level.
    _scratch = new DataView(new ArrayBuffer(8));

    get buffer() {
        return this._view.buffer;
    }

    get byteLength() {
        return this._view.length;
    }

    _setBit(offset: number, on: boolean) {
        if (on) {
            this._view[offset >> 3] |= 1 << (offset & 7);
        } else {
            this._view[offset >> 3] &= ~(1 << (offset & 7));
        }
    }

    getBits(offset: number, bits: number, signed?: boolean) {
        const available = this._view.length * 8 - offset;

        if (bits > available) {
            throw new Error(
                `Cannot get ${bits} bit(s) from offset ${offset}, ${available} available`,
            );
        }

        let value = 0;
        for (let i = 0; i < bits;) {
            const remaining = bits - i;
            const bitOffset = offset & 7;
            const currentByte = this._view[offset >> 3]!;

            // the max number of bits we can read from the current byte
            const read = Math.min(remaining, 8 - bitOffset);

            if (this.bigEndian) {
                // create a mask with the correct bit width
                const mask = ~(0xff << read);
                // shift the bits we want to the start of the byte and mask of the rest
                const readBits = (currentByte >> (8 - read - bitOffset)) & mask;

                value <<= read;
                value |= readBits;
            } else {
                // create a mask with the correct bit width
                const mask = ~(0xff << read);
                // shift the bits we want to the start of the byte and mask off the rest
                const readBits = (currentByte >> bitOffset) & mask;

                value |= readBits << i;
            }

            offset += read;
            i += read;
        }

        if (signed) {
            // If we're not working with a full 32 bits, check the
            // imaginary MSB for this bit count and convert to a
            // valid 32-bit signed value if set.
            if (bits !== 32 && value & (1 << (bits - 1))) {
                value |= -1 ^ ((1 << bits) - 1);
            }

            return value;
        }

        return value >>> 0;
    }

    setBits(offset: number, value: number, bits: number) {
        const available = this._view.length * 8 - offset;

        if (bits > available) {
            throw new Error(
                `Cannot set ${bits} bit(s) from offset ${offset}, ${available} available`,
            );
        }

        for (let i = 0; i < bits;) {
            const remaining = bits - i;
            const bitOffset = offset & 7;
            const byteOffset = offset >> 3;
            const wrote = Math.min(remaining, 8 - bitOffset);

            if (this.bigEndian) {
                // create a mask with the correct bit width
                const mask = ~(~0 << wrote);
                // shift the bits we want to the start of the byte and mask of the rest
                const writeBits = (value >> (bits - i - wrote)) & mask;

                const destShift = 8 - bitOffset - wrote;
                // destination mask to zero all the bits we're changing first
                const destMask = ~(mask << destShift);

                this._view[byteOffset] = (this._view[byteOffset]! & destMask) | (writeBits << destShift);
            } else {
                // create a mask with the correct bit width
                const mask = ~(0xff << wrote);
                // shift the bits we want to the start of the byte and mask of the rest
                const writeBits = value & mask;
                value >>= wrote;

                // destination mask to zero all the bits we're changing first
                const destMask = ~(mask << bitOffset);

                this._view[byteOffset] = (this._view[byteOffset]! & destMask) | (writeBits << bitOffset);
            }

            offset += wrote;
            i += wrote;
        }
    }

    getBoolean(offset: number) {
        return this.getBits(offset, 1, false) !== 0;
    }
    getInt8(offset: number) {
        return this.getBits(offset, 8, true);
    }
    getUint8(offset: number) {
        return this.getBits(offset, 8, false);
    }
    getInt16(offset: number) {
        return this.getBits(offset, 16, true);
    }
    getUint16(offset: number) {
        return this.getBits(offset, 16, false);
    }
    getInt32(offset: number) {
        return this.getBits(offset, 32, true);
    }
    getUint32(offset: number) {
        return this.getBits(offset, 32, false);
    }
    getFloat32(offset: number) {
        this._scratch.setUint32(0, this.getUint32(offset));
        return this._scratch.getFloat32(0);
    }
    getFloat64(offset: number) {
        this._scratch.setUint32(0, this.getUint32(offset));
        // DataView offset is in bytes.
        this._scratch.setUint32(4, this.getUint32(offset + 32));
        return this._scratch.getFloat64(0);
    }

    setBoolean(offset: number, value: boolean) {
        this.setBits(offset, value ? 1 : 0, 1);
    }
    setInt8(offset: number, value: number) {
        this.setBits(offset, value, 8);
    }
    setUint8(offset: number, value: number) {
        this.setBits(offset, value, 8);
    }
    setInt16(offset: number, value: number) {
        this.setBits(offset, value, 16);
    }
    setUint16(offset: number, value: number) {
        this.setBits(offset, value, 16);
    }
    setInt32(offset: number, value: number) {
        this.setBits(offset, value, 32);
    }
    setUint32(offset: number, value: number) {
        this.setBits(offset, value, 32);
    }
    setFloat32(offset: number, value: number) {
        this._scratch.setFloat32(0, value);
        this.setBits(offset, this._scratch.getUint32(0), 32);
    }
    setFloat64(offset: number, value: number) {
        this._scratch.setFloat64(0, value);
        this.setBits(offset, this._scratch.getUint32(0), 32);
        this.setBits(offset + 32, this._scratch.getUint32(4), 32);
    }
    getArrayBuffer(offset: number, byteLength: number) {
        const buffer = new Uint8Array(byteLength);
        for (let i = 0; i < byteLength; ++i) {
            buffer[i] = this.getUint8(offset + i * 8);
        }
        return buffer;
    }
}

const stringToByteArray = (str: string) => {
    // https://gist.github.com/volodymyr-mykhailyk/2923227
    const b = [];
    for (let i = 0; i < str.length; ++i) {
        const unicode = str.charCodeAt(i);
        // 0x00000000 - 0x0000007f -> 0xxxxxxx
        if (unicode <= 0x7f) {
            b.push(unicode);
            // 0x00000080 - 0x000007ff -> 110xxxxx 10xxxxxx
        } else if (unicode <= 0x7ff) {
            b.push((unicode >> 6) | 0xc0);
            b.push((unicode & 0x3f) | 0x80);
            // 0x00000800 - 0x0000ffff -> 1110xxxx 10xxxxxx 10xxxxxx
        } else if (unicode <= 0xffff) {
            b.push((unicode >> 12) | 0xe0);
            b.push(((unicode >> 6) & 0x3f) | 0x80);
            b.push((unicode & 0x3f) | 0x80);
            // 0x00010000 - 0x001fffff -> 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
        } else {
            b.push((unicode >> 18) | 0xf0);
            b.push(((unicode >> 12) & 0x3f) | 0x80);
            b.push(((unicode >> 6) & 0x3f) | 0x80);
            b.push((unicode & 0x3f) | 0x80);
        }
    }

    return b;
};

/**
 * BitStream
 *
 * Small wrapper for a BitView to maintain your position,
 * as well as to handle reading / writing of string data
 * to the underlying buffer.
 */
export class BitStream {
    constructor(
        source: ArrayBuffer | BitView,
        byteOffset?: number,
        byteLength?: number,
    ) {
        const isBuffer = source instanceof ArrayBuffer;

        if (!(source instanceof BitView) && !isBuffer) {
            throw new Error('Must specify a valid BitView or ArrayBuffer');
        }

        if (isBuffer) {
            this._view = new BitView(source, byteOffset, byteLength);
        } else {
            this._view = source;
        }

        this._index = 0;
        this._startIndex = 0;
        this._length = this._view.byteLength * 8;
    }

    protected _view: BitView;
    protected _index: number;
    protected _startIndex: number;
    protected _length: number;

    get offset() {
        return this._index;
    }
    get index() {
        return this._index - this._startIndex;
    }
    set index(val: number) {
        this._index = val + this._startIndex;
    }

    get length() {
        return this._length - this._startIndex;
    }
    set length(val: number) {
        this._length = val + this._startIndex;
    }

    get bitsLeft() {
        return this._length - this._index;
    }

    // Ceil the returned value, over compensating for the amount of
    // bits written to the stream.
    get byteIndex() {
        return Math.ceil(this._index / 8);
    }
    set byteIndex(val: number) {
        this._index = val * 8;
    }
    get buffer() {
        return this._view.buffer;
    }
    get view() {
        return this._view;
    }
    get bigEndian() {
        return this._view.bigEndian;
    }
    set bigEndian(val: boolean) {
        this._view.bigEndian = val;
    }

    protected reader<
        T extends number | boolean,
        F extends (offset: number) => T = (offset: number) => T,
    >(name: keyof BitView, size: number) {
        return () => {
            if (this._index + size > this._length) {
                throw new Error('Trying to read past the end of the stream');
            }
            const val = (this._view as unknown as Record<keyof BitView, F>)[name](
                this._index,
            );
            this._index += size;
            return val;
        };
    }

    protected writer<
        T extends number | boolean,
        F extends (offset: number, value: T) => void = (
            offset: number,
            value: T,
        ) => void,
    >(name: keyof BitView, size: number) {
        return (value: T) => {
            (this._view as unknown as Record<keyof BitView, F>)[name](
                this._index,
                value,
            );
            this._index += size;
        };
    }

    protected readString(bytes?: number, utf8?: boolean) {
        if (bytes === 0) {
            return '';
        }
        let i = 0;
        const chars = [];
        let append = true;
        const fixedLength = !!bytes;
        if (!bytes) {
            bytes = Math.floor((this._length - this._index) / 8);
        }

        // Read while we still have space available, or until we've
        // hit the fixed byte length passed in.
        while (i < bytes) {
            const c = this.readUint8();

            // Stop appending chars once we hit 0x00
            if (c === 0x00) {
                append = false;

                // If we don't have a fixed length to read, break out now.
                if (!fixedLength) {
                    break;
                }
            }
            if (append) {
                chars.push(c);
            }

            ++i;
        }

        const string = String.fromCharCode.apply(null, chars);
        if (utf8) {
            try {
                return decodeURIComponent(escape(string)); // https://stackoverflow.com/a/17192845
            } catch (_e) {
                return string;
            }
        } else {
            return string;
        }
    }

    readBits(bits: number, signed?: boolean) {
        const val = this._view.getBits(this._index, bits, signed);
        this._index += bits;
        return val;
    }
    peakBits(offset: number, bits: number, signed?: boolean) {
        const val = this._view.getBits(offset, bits, signed);
        return val;
    }
    writeBits(value: number, bits: number) {
        this._view.setBits(this._index, value, bits);
        this._index += bits;
    }

    readBoolean = this.reader<boolean>('getBoolean', 1);
    readInt8 = this.reader<number>('getInt8', 8);
    readUint8 = this.reader<number>('getUint8', 8);
    readInt16 = this.reader<number>('getInt16', 16);
    readUint16 = this.reader<number>('getUint16', 16);
    readInt32 = this.reader<number>('getInt32', 32);
    readUint32 = this.reader<number>('getUint32', 32);
    readFloat32 = this.reader<number>('getFloat32', 32);
    readFloat64 = this.reader<number>('getFloat64', 64);

    writeBoolean = this.writer<boolean>('setBoolean', 1);
    writeInt8 = this.writer<number>('setInt8', 8);
    writeUint8 = this.writer<number>('setUint8', 8);
    writeInt16 = this.writer<number>('setInt16', 16);
    writeUint16 = this.writer<number>('setUint16', 16);
    writeInt32 = this.writer<number>('setInt32', 32);
    writeUint32 = this.writer<number>('setUint32', 32);
    writeFloat32 = this.writer<number>('setFloat32', 32);
    writeFloat64 = this.writer<number>('setFloat64', 64);

    readASCIIString(bytes?: number) {
        return this.readString(bytes, false);
    }
    readUTF8String(bytes?: number) {
        return this.readString(bytes, true);
    }
    writeASCIIString(string: string, bytes?: number) {
        const length = bytes || string.length + 1; // + 1 for NULL

        for (let i = 0; i < length; ++i) {
            this.writeUint8(i < string.length ? string.charCodeAt(i) : 0x00);
        }
    }
    writeUTF8String(string: string, bytes: number) {
        const byteArray = stringToByteArray(string);

        const length = bytes || byteArray.length + 1; // + 1 for NULL
        for (let i = 0; i < length; ++i) {
            this.writeUint8(i < byteArray.length ? byteArray[i]! : 0x00);
        }
    }
    readBitStream(bitLength: number) {
        const slice = new BitStream(this._view);
        slice._startIndex = this._index;
        slice._index = this._index;
        slice.length = bitLength;
        this._index += bitLength;
        return slice;
    }
    writeBitStream(stream: BitStream, length: number) {
        if (!length) {
            length = stream.bitsLeft;
        }

        let bitsToWrite = 0;
        while (length > 0) {
            bitsToWrite = Math.min(length, 32);
            this.writeBits(stream.readBits(bitsToWrite, false), bitsToWrite);
            length -= bitsToWrite;
        }
    }
    readArrayBuffer(byteLength: number) {
        const buffer = this._view.getArrayBuffer(this._index, byteLength);
        this._index += byteLength * 8;
        return buffer;
    }
    writeArrayBuffer(buffer: ArrayBuffer, byteLength: number) {
        this.writeBitStream(new BitStream(buffer), byteLength * 8);
    }
}
