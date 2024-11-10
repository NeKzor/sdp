// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceDemoBuffer } from '../buffer.ts';
import type { QAngle } from './QAngle.ts';
import type { Vector } from './Vector.ts';

export class CmdInfo {
    flags?: number;
    viewOrigin?: Vector;
    viewAngles?: QAngle;
    localViewAngles?: QAngle;
    viewOrigin2?: Vector;
    viewAngles2?: QAngle;
    localViewAngles2?: QAngle;
    read(buf: SourceDemoBuffer): CmdInfo {
        this.flags = buf.readInt32();
        this.viewOrigin = buf.readVector();
        this.viewAngles = buf.readQAngle();
        this.localViewAngles = buf.readQAngle();
        this.viewOrigin2 = buf.readVector();
        this.viewAngles2 = buf.readQAngle();
        this.localViewAngles2 = buf.readQAngle();

        return this;
    }
    write(buf: SourceDemoBuffer): CmdInfo {
        buf.writeInt32(this.flags!);
        buf.writeVector(this.viewOrigin!);
        buf.writeQAngle(this.viewAngles!);
        buf.writeQAngle(this.localViewAngles!);
        buf.writeVector(this.viewOrigin2!);
        buf.writeQAngle(this.viewAngles2!);
        buf.writeQAngle(this.localViewAngles2!);

        return this;
    }
}
