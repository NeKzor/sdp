// Copyright (c) 2023-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceDemoBuffer } from '../buffer.ts';
import type { SourceDemo } from '../demo.ts';
import { DemoMessages } from '../messages.ts';

export enum SarDataType {
    TimescaleCheat = 0x01,
    InitialCvar = 0x02,
    EntityInput = 0x03,
    EntityInputSlot = 0x04,
    PortalPlacement = 0x05,
    ChallengeFlags = 0x06,
    CrouchFly = 0x07,
    Pause = 0x08,
    WaitRun = 0x09,
    SpeedrunTime = 0x0A,
    Timestamp = 0x0B,
    FileChecksum = 0x0C,
    HwaitRun = 0x0D,
    Checksum = 0xFF,
    ChecksumV2 = 0xFE,
    Invalid = -1,
}

export enum ChecksumV2State {
    None,
    Invalid,
    Valid,
}

export type SarDataMessage<
    T extends SarDataType,
    M extends SarMessage = SarMessage,
> = M extends { type: T } ? M : never;

export function isSarMessage<T extends SarDataType>(type: T): (message: SarMessage) => message is SarDataMessage<T> {
    return function (message: SarMessage): message is SarDataMessage<T> {
        return message.type === type;
    };
}

export type SarMessage =
    | { type: SarDataType.Invalid }
    | {
        type: SarDataType.TimescaleCheat;
        timescale: number;
    }
    | {
        type: SarDataType.EntityInputSlot;
        slot: number;
        targetname: string;
        classname: string;
        inputname: string;
        parameter: string;
    }
    | {
        type: SarDataType.InitialCvar;
        pauseTicks: number;
    }
    | {
        type: SarDataType.InitialCvar;
        cvar: string;
        val: string;
    }
    | {
        type: SarDataType.Checksum;
        demoSum: number;
        sarSum: number;
    }
    | {
        type: SarDataType.ChecksumV2;
        sarSum: number;
        signature: ArrayBuffer;
    }
    | {
        type: SarDataType.EntityInput;
        targetname: string;
        classname: string;
        inputname: string;
        parameter: string;
    }
    | {
        type: SarDataType.PortalPlacement;
        x: number;
        y: number;
        z: number;
        slot: number;
        orange: boolean;
    }
    | {
        type: SarDataType.ChallengeFlags;
        slot: number;
    }
    | {
        type: SarDataType.CrouchFly;
        slot: number;
    }
    | {
        type: SarDataType.Pause;
        pauseTicks: number;
    }
    | {
        type: SarDataType.WaitRun;
        tick: number;
        cmd: string;
    }
    | {
        type: SarDataType.HwaitRun;
        ticks: number;
        cmd: string;
    }
    | {
        type: SarDataType.SpeedrunTime;
        nsplits: number;
        splits: {
            name: string;
            nsegs: number;
            segs: {
                name: string;
                ticks: number;
            }[];
        }[];
    }
    | {
        type: SarDataType.Timestamp;
        year: number;
        mon: number;
        day: number;
        hour: number;
        min: number;
        sec: number;
    }
    | {
        type: SarDataType.FileChecksum;
        path: string;
        sum: number;
    };

// _parse_sar_data
export const readSarMessageData = (data: SourceDemoBuffer, len: number): SarMessage => {
    if (len === 0) {
        return { type: SarDataType.Invalid };
    }

    const type = data.readUint8() as SarDataType;

    if (type === SarDataType.Checksum && len === 5) {
        len = 9;
    }

    switch (type) {
        case SarDataType.TimescaleCheat:
            if (len !== 5) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                timescale: data.readFloat32(),
            };
        case SarDataType.InitialCvar:
            return {
                type,
                cvar: data.readASCIIString(),
                val: data.readASCIIString(),
            };
        case SarDataType.EntityInputSlot:
            return {
                type,
                slot: data.readUint8(),
                targetname: data.readASCIIString(),
                classname: data.readASCIIString(),
                inputname: data.readASCIIString(),
                parameter: data.readASCIIString(),
            };
        case SarDataType.EntityInput:
            return {
                type,
                targetname: data.readASCIIString(),
                classname: data.readASCIIString(),
                inputname: data.readASCIIString(),
                parameter: data.readASCIIString(),
            };
        case SarDataType.Checksum:
            if (len !== 9) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                demoSum: data.readUint32(),
                sarSum: data.readUint32(),
            };
        case SarDataType.ChecksumV2:
            if (len !== 69) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                sarSum: data.readUint32(),
                signature: data.readArrayBuffer(64),
            };
        case SarDataType.PortalPlacement:
            if (len !== 15) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                slot: data.readUint8(),
                orange: Boolean(data.readUint8()),
                x: data.readFloat32(),
                y: data.readFloat32(),
                z: data.readFloat32(),
            };
        case SarDataType.ChallengeFlags:
        case SarDataType.CrouchFly:
            if (len !== 2) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                slot: data.readUint8(),
            };
        case SarDataType.Pause:
            if (len !== 5) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                pauseTicks: data.readUint32(),
            };
        case SarDataType.WaitRun:
            if (len < 6) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                tick: data.readUint32(),
                cmd: data.readASCIIString(),
            };
        case SarDataType.HwaitRun:
            if (len < 6) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                ticks: data.readUint32(),
                cmd: data.readASCIIString(),
            };
        case SarDataType.SpeedrunTime: {
            if (len < 5) {
                return { type: SarDataType.Invalid };
            }

            type SpeedrunMessage = SarDataMessage<SarDataType.SpeedrunTime>;
            type SplitsType = SpeedrunMessage['splits'][0];

            const out: SpeedrunMessage = {
                type,
                nsplits: data.readUint32(),
                splits: [],
            };

            for (let i = 0; i < out.nsplits; ++i) {
                const split: SplitsType = {
                    name: data.readASCIIString(),
                    nsegs: data.readUint32(),
                    segs: [],
                };

                for (let j = 0; j < split.nsegs; ++j) {
                    split.segs.push({
                        name: data.readASCIIString(),
                        ticks: data.readUint32(),
                    });
                }

                out.splits.push(split);
            }

            if (data.bitsLeft) {
                return { type: SarDataType.Invalid };
            }

            return out;
        }
        case SarDataType.Timestamp:
            if (len !== 8) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                year: data.readUint8() | (data.readUint8() << 8),
                mon: data.readUint8() + 1,
                day: data.readUint8(),
                hour: data.readUint8(),
                min: data.readUint8(),
                sec: data.readUint8(),
            };
        case SarDataType.FileChecksum:
            if (len < 6) {
                return { type: SarDataType.Invalid };
            }
            return {
                type,
                sum: data.readUint32(),
                path: data.readASCIIString(),
            };
        default:
            return { type: SarDataType.Invalid };
    }
};

export const readSarMessages = (demo: SourceDemo): SarMessage[] => {
    const messages: SarMessage[] = [];

    for (const message of demo.findMessages(DemoMessages.CustomData)) {
        const data = message.data!;

        // _parse_msg
        if (message.unk !== 0 || data.length === 64) {
            continue;
        }

        data.readArrayBuffer(8);
        const len = (data.length / 8) - 8;

        messages.push(readSarMessageData(data, len));
    }

    return messages;
};
