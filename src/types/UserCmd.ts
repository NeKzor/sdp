// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceDemoBuffer } from '../buffer.ts';

export class UserCmd {
    commandNumber?: number;
    tickCount?: number;
    viewAngleX?: number;
    viewAngleY?: number;
    viewAngleZ?: number;
    forwardMove?: number;
    sideMove?: number;
    upMove?: number;
    buttons?: number;
    impulse?: number;
    weaponSelect?: number;
    weaponSubtype?: number;
    mouseDx?: number;
    mouseDy?: number;
    read(buf: SourceDemoBuffer) {
        if (buf.readBoolean()) this.commandNumber = buf.readInt32();
        if (buf.readBoolean()) this.tickCount = buf.readInt32();
        if (buf.readBoolean()) this.viewAngleX = buf.readFloat32();
        if (buf.readBoolean()) this.viewAngleY = buf.readFloat32();
        if (buf.readBoolean()) this.viewAngleZ = buf.readFloat32();
        if (buf.readBoolean()) this.forwardMove = buf.readFloat32();
        if (buf.readBoolean()) this.sideMove = buf.readFloat32();
        if (buf.readBoolean()) this.upMove = buf.readFloat32();
        if (buf.readBoolean()) this.buttons = buf.readInt32();
        if (buf.readBoolean()) this.impulse = buf.readInt8();
        if (buf.readBoolean()) {
            this.weaponSelect = buf.readBits(11);
            if (buf.readBoolean()) this.weaponSubtype = buf.readBits(6);
        }
        if (buf.readBoolean()) this.mouseDx = buf.readInt16();
        if (buf.readBoolean()) this.mouseDy = buf.readInt16();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBoolean(this.commandNumber !== undefined);
        if (this.commandNumber !== undefined) buf.writeInt32(this.commandNumber);
        buf.writeBoolean(this.tickCount !== undefined);
        if (this.tickCount !== undefined) buf.writeInt32(this.tickCount);
        buf.writeBoolean(this.viewAngleX !== undefined);
        if (this.viewAngleX !== undefined) buf.writeFloat32(this.viewAngleX);
        buf.writeBoolean(this.viewAngleY !== undefined);
        if (this.viewAngleY !== undefined) buf.writeFloat32(this.viewAngleY);
        buf.writeBoolean(this.viewAngleZ !== undefined);
        if (this.viewAngleZ !== undefined) buf.writeFloat32(this.viewAngleZ);
        buf.writeBoolean(this.forwardMove !== undefined);
        if (this.forwardMove !== undefined) buf.writeFloat32(this.forwardMove);
        buf.writeBoolean(this.sideMove !== undefined);
        if (this.sideMove !== undefined) buf.writeFloat32(this.sideMove);
        buf.writeBoolean(this.upMove !== undefined);
        if (this.upMove !== undefined) buf.writeFloat32(this.upMove);
        buf.writeBoolean(this.buttons !== undefined);
        if (this.buttons !== undefined) buf.writeInt32(this.buttons);
        buf.writeBoolean(this.impulse !== undefined);
        if (this.impulse !== undefined) buf.writeInt8(this.impulse);
        buf.writeBoolean(this.weaponSelect !== undefined);
        if (this.weaponSelect !== undefined) {
            buf.writeBits(this.weaponSelect, 11);
            buf.writeBoolean(this.weaponSubtype !== undefined);
            if (this.weaponSubtype !== undefined) {
                buf.writeBits(this.weaponSubtype, 6);
            }
        }
        buf.writeBoolean(this.mouseDx !== undefined);
        if (this.mouseDx !== undefined) buf.writeInt16(this.mouseDx);
        buf.writeBoolean(this.mouseDy !== undefined);
        if (this.mouseDy !== undefined) buf.writeInt16(this.mouseDy);
    }
}
