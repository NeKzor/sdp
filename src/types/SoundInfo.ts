// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceBuffer } from '../buffer.ts';

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
    readEntityIndex?: boolean;
    readEntityIndexShort?: boolean;
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
    read(buf: SourceBuffer) {
        this.readEntityIndex = buf.readBoolean();
        if (this.readEntityIndex) {
            this.readEntityIndexShort = buf.readBoolean();
            this.entityIndex = this.readEntityIndexShort ? buf.readBitsLE(5) : buf.readBitsLE(11);
        }
        this.soundNum = buf.readBoolean() ? buf.readBitsLE(13) : 0;
        this.flags = buf.readBoolean() ? buf.readBitsLE(9) : 0;
        this.channel = buf.readBoolean() ? buf.readBitsLE(3) : 0;
        this.isAmbient = buf.readBoolean();
        this.isSentence = buf.readBoolean();

        if (this.flags !== SoundFlags.Stop) {
            if (buf.readBoolean()) {
                this.sequenceNumber = 0;
                // deno-lint-ignore no-dupe-else-if
            } else if (buf.readBoolean()) {
                this.sequenceNumber = 1;
            } else {
                this.sequenceNumber = buf.readBitsLE(10);
            }

            this.volume = buf.readBoolean() ? buf.readBitsLE(7) / 127 : 0;
            this.soundLevel = buf.readBoolean() ? buf.readBitsLE(9) : 0;
            this.pitch = buf.readBoolean() ? buf.readBitsLE(8) : 0;

            if (buf.readBoolean()) {
                this.delay = buf.readBitsLE(13) / 1_000;
                if (this.delay < 0) {
                    this.delay *= 10;
                }
                this.delay -= 0.1;
            } else {
                this.delay = 0;
            }

            this.origin = {
                x: buf.readBoolean() ? buf.readBitsLE(12) * 8 : 0,
                y: buf.readBoolean() ? buf.readBitsLE(12) * 8 : 0,
                z: buf.readBoolean() ? buf.readBitsLE(12) * 8 : 0,
            };

            this.speakerEntity = buf.readBoolean() ? buf.readBitsLE(12) : 0;
        }
    }
    write(buf: SourceBuffer) {
        buf.writeBoolean(this.readEntityIndex!);
        if (this.readEntityIndex) {
            buf.writeBoolean(this.readEntityIndexShort!);
            this.readEntityIndexShort ? buf.writeBitsLE(this.entityIndex!, 5) : buf.writeBitsLE(this.entityIndex!, 11);
        }

        buf.writeBoolean(this.soundNum !== 0);
        if (this.soundNum !== 0) buf.writeBitsLE(this.soundNum!, 13);
        buf.writeBoolean(this.flags !== 0);
        if (this.flags !== 0) buf.writeBitsLE(this.flags!, 9);
        buf.writeBoolean(this.channel !== 0);
        if (this.channel !== 0) buf.writeBitsLE(this.channel!, 3);

        buf.writeBoolean(this.isAmbient!);
        buf.writeBoolean(this.isSentence!);

        if (this.flags !== SoundFlags.Stop) {
            buf.writeBoolean(this.sequenceNumber === 0);
            if (this.sequenceNumber !== 0) {
                buf.writeBoolean(this.sequenceNumber === 1);

                if (this.sequenceNumber !== 1) {
                    buf.writeBitsLE(this.sequenceNumber!, 10);
                }
            }

            buf.writeBoolean(this.volume !== 0);
            if (this.volume !== 0) buf.writeBitsLE(this.volume! * 127, 7);
            buf.writeBoolean(this.soundLevel !== 0);
            if (this.soundLevel !== 0) buf.writeBitsLE(this.soundLevel!, 9);
            buf.writeBoolean(this.pitch !== 0);
            if (this.pitch !== 0) buf.writeBitsLE(this.pitch!, 8);

            buf.writeBoolean(this.delay !== 0);
            if (this.delay !== 0) {
                this.delay! += 0.1;
                if (this.delay! < 0) {
                    this.delay! /= 10;
                }
                buf.writeBitsLE(this.delay! * 1_000, 13);
            }

            buf.writeBoolean(this.origin!.x !== 0);
            if (this.origin!.x !== 0) {
                buf.writeBitsLE(this.origin!.x * 8, 12);
            }
            buf.writeBoolean(this.origin!.y !== 0);
            if (this.origin!.y !== 0) {
                buf.writeBitsLE(this.origin!.y * 8, 12);
            }
            buf.writeBoolean(this.origin!.z !== 0);
            if (this.origin!.z !== 0) {
                buf.writeBitsLE(this.origin!.z * 8, 12);
            }

            buf.writeBoolean(this.speakerEntity !== 0);
            if (this.speakerEntity !== 0) {
                buf.writeBitsLE(this.speakerEntity!, 12);
            }
        }
    }
}
