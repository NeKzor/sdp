/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from '../buffer.ts';
import { SourceDemo } from '../demo.ts';

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
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.needsDecoder = buf.readBoolean();
        this.netTableName = buf.readASCIIString();
        this.props = [];

        let props = buf.readBits(10, false);
        while (props--) {
            const prop = new SendProp();
            prop.read(buf, demo);
            this.props.push(prop);
        }
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
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        const isPortal2 = demo.gameDirectory === 'portal2';

        this.type = buf.readBits(5, false);
        this.varName = buf.readASCIIString();
        this.flags = buf.readBits(demo.demoProtocol === 2 ? 11 : 16, false);

        if (isPortal2) {
            this.unk = buf.readBits(11, false);
        }

        if (
            this.type === SendPropType.SendTable ||
            (this.flags & SendPropFlags.Exclude) !== 0
        ) {
            this.excludeDtName = buf.readASCIIString();
        } else if (
            this.type === SendPropType.String ||
            this.type === SendPropType.Int ||
            this.type === SendPropType.Float ||
            this.type === SendPropType.Vector ||
            this.type === SendPropType.VectorXy
        ) {
            this.lowValue = buf.readFloat32();
            this.highValue = buf.readFloat32();
            this.numBits = buf.readBits(7, false);
        } else if (this.type === SendPropType.Array) {
            this.elements = buf.readBits(10, false);
        } else {
            throw new Error('Invalid prop type: ' + this.type);
        }
    }
}

export class ServerClassInfo {
    classId?: number;
    className?: string;
    dataTableName?: string;
    read(buf: SourceDemoBuffer) {
        this.classId = buf.readInt16();
        this.className = buf.readASCIIString();
        this.dataTableName = buf.readASCIIString();
    }
}
