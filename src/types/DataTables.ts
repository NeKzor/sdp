// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceBuffer } from '../buffer.ts';

export const SendPropType = {
    Int: 0,
    Float: 1,
    Vector: 2,
    VectorXy: 3,
    String: 4,
    Array: 5,
    SendTable: 6,
    Int64: 7,
};

export const SendPropFlags = {
    Unsigned: 1 << 0,
    Coord: 1 << 1,
    Noscale: 1 << 2,
    Rounddown: 1 << 3,
    Roundup: 1 << 4,
    Normal: 1 << 5,
    Exclude: 1 << 6,
    Xyze: 1 << 7,
    InsideArray: 1 << 8,
    ProxyAlwaysYes: 1 << 9,
    IsAVectorElem: 1 << 10,
    Collapsible: 1 << 11,
    CoordMp: 1 << 12,
    CoordMpLowPrecision: 1 << 13,
    CoordMpIntegral: 1 << 14,
    CellCoord: 1 << 15,
    CellCoordLowPrecision: 1 << 16,
    CellCoordIntegral: 1 << 17,
    ChangesOften: 1 << 18,
    VarInt: 1 << 19,
};

export class SendTable {
    needsDecoder?: boolean;
    netTableName?: string;
    props?: SendProp[];
    read(buf: SourceBuffer) {
        this.needsDecoder = buf.readBoolean();
        this.netTableName = buf.readCString();
        this.props = [];

        let props = buf.readUBitsLE(10);
        while (props--) {
            const prop = new SendProp();
            prop.read(buf);
            this.props.push(prop);
        }
    }
    write(buf: SourceBuffer) {
        buf.writeBoolean(this.needsDecoder!);
        buf.writeCString(this.netTableName!);
        buf.writeBitsLE(this.props!.length, 10);
        this.props?.forEach((prop) => prop.write(buf));
    }
}

export class SendProp {
    type?: number;
    varName?: string;
    flags?: number;
    unk?: number;
    excludeDtName?: string;
    lowValue?: number;
    highValue?: number;
    numBits?: number;
    elements?: number;
    read(buf: SourceBuffer) {
        this.type = buf.readUBitsLE(5);
        this.varName = buf.readCString();
        this.flags = buf.readUBitsLE(16);
        this.unk = buf.readUBitsLE(11);

        if (
            this.type === SendPropType.SendTable ||
            (this.flags & SendPropFlags.Exclude) !== 0
        ) {
            this.excludeDtName = buf.readCString();
        } else if (
            this.type === SendPropType.String ||
            this.type === SendPropType.Int ||
            this.type === SendPropType.Float ||
            this.type === SendPropType.Vector ||
            this.type === SendPropType.VectorXy
        ) {
            this.lowValue = buf.readFloat32LE();
            this.highValue = buf.readFloat32LE();
            this.numBits = buf.readUBitsLE(7);
        } else if (this.type === SendPropType.Array) {
            this.elements = buf.readUBitsLE(10);
        } else {
            throw new Error('Invalid prop type: ' + this.type);
        }
    }
    write(buf: SourceBuffer) {
        buf.writeBitsLE(this.type!, 5);
        buf.writeCString(this.varName!);
        buf.writeBitsLE(this.flags!, 16);
        buf.writeBitsLE(this.unk!, 11);

        if (
            this.type === SendPropType.SendTable ||
            (this.flags! & SendPropFlags.Exclude) !== 0
        ) {
            buf.writeCString(this.excludeDtName!);
        } else if (
            this.type === SendPropType.String ||
            this.type === SendPropType.Int ||
            this.type === SendPropType.Float ||
            this.type === SendPropType.Vector ||
            this.type === SendPropType.VectorXy
        ) {
            buf.writeFloat32LE(this.lowValue!);
            buf.writeFloat32LE(this.highValue!);
            buf.writeBitsLE(this.numBits!, 7);
        } else if (this.type === SendPropType.Array) {
            buf.writeBitsLE(this.elements!, 10);
        } else {
            throw new Error('Invalid prop type: ' + this.type);
        }
    }
}

export class ServerClassInfo {
    classId?: number;
    className?: string;
    dataTableName?: string;
    read(buf: SourceBuffer) {
        this.classId = buf.readInt16LE();
        this.className = buf.readCString();
        this.dataTableName = buf.readCString();
    }
    write(buf: SourceBuffer) {
        buf.writeInt16LE(this.classId!);
        buf.writeCString(this.className!);
        buf.writeCString(this.dataTableName!);
    }
}
