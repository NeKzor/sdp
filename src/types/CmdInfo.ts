/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from '../buffer.ts';
import { QAngle } from './QAngle.ts';
import { Vector } from './Vector.ts';

export class CmdInfo {
    flags?: number;
    viewOrigin?: Vector;
    viewAngles?: QAngle;
    localViewAngles?: QAngle;
    viewOrigin2?: Vector;
    viewAngles2?: QAngle;
    localViewAngles2?: QAngle;
    read(buf: SourceDemoBuffer) {
        this.flags = buf.readInt32();
        this.viewOrigin = buf.readVector();
        this.viewAngles = buf.readQAngle();
        this.localViewAngles = buf.readQAngle();
        this.viewOrigin2 = buf.readVector();
        this.viewAngles2 = buf.readQAngle();
        this.localViewAngles2 = buf.readQAngle();

        return this;
    }
}
