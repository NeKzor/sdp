/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from '../buffer.ts';

export const SoundFlags = {
    NoFlags: 0,
    ChangeVol: 1 << 0,
    ChangePitch: 1 << 1,
    Stop: 1 << 2,
    Spawning: 1 << 3,
    Delay: 1 << 4,
    StopLooping: 1 << 5,
    Speaker: 1 << 6,
    ShouldPause: 1 << 7,
    IgnorePhonemes: 1 << 8,
    IgnoreName: 1 << 9,
};

export class SoundInfo {
    entityIndex?: number;
    soundNum?: number;
    flags?: number;
    channel?: number;
    isAmbient?: boolean;
    isSentence?: boolean;
    sequenceNumber?: number;
    volume?: number;
    soundLevel?: number;
    pitch?: number;
    delay?: number;
    origin?: { x: number; y: number; z: number };
    speakerEntity?: number;
    read(buf: SourceDemoBuffer) {
        this.entityIndex = buf.readBoolean() ? buf.readBoolean() ? buf.readBits(5) : buf.readBits(11) : 0;
        this.soundNum = buf.readBoolean() ? buf.readBits(13) : 0;
        this.flags = buf.readBoolean() ? buf.readBits(9) : 0;
        this.channel = buf.readBoolean() ? buf.readBits(3) : 0;
        this.isAmbient = buf.readBoolean();
        this.isSentence = buf.readBoolean();

        if (this.flags !== SoundFlags.Stop) {
            if (buf.readBoolean()) {
                this.sequenceNumber = 0;
            } else if (buf.readBoolean()) {
                this.sequenceNumber = 1;
            } else {
                this.sequenceNumber = buf.readBits(10);
            }

            this.volume = buf.readBoolean() ? buf.readBits(7) / 127 : 0;
            this.soundLevel = buf.readBoolean() ? buf.readBits(9) : 0;
            this.pitch = buf.readBoolean() ? buf.readBits(8) : 0;

            if (buf.readBoolean()) {
                this.delay = buf.readBits(13) / 1000;
                if (this.delay < 0) {
                    this.delay *= 10;
                }
                this.delay -= 0.1;
            } else {
                this.delay = 0;
            }

            this.origin = {
                x: buf.readBoolean() ? buf.readBits(12) * 8 : 0,
                y: buf.readBoolean() ? buf.readBits(12) * 8 : 0,
                z: buf.readBoolean() ? buf.readBits(12) * 8 : 0,
            };

            this.speakerEntity = buf.readBoolean() ? buf.readBits(12) : 0;
        }
    }
}
