// Copyright (c) 2023-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceBuffer } from '../buffer.ts';
import type { SourceDemo } from '../demo.ts';
import { DemoMessages } from '../messages.ts';

export class SarMessage {
    timescale?: number;
    slot?: number;
    pauseTicks?: number;
    initialCvar?: {
        cvar: string;
        val: string;
    };
    checksum?: {
        demoSum: number;
        sarSum: number;
    };
    checksumV2?: {
        sarSum: number;
        signature: ArrayBuffer;
    };
    entityInput?: {
        targetname: string;
        classname: string;
        inputname: string;
        parameter: string;
    };
    portalPlacement?: {
        x: number;
        y: number;
        z: number;
        orange: boolean;
    };
    waitRun?: {
        tick: number;
        cmd: string;
    };
    hwaitRun?: {
        ticks: number;
        cmd: string;
    };
    speedrunTime?: {
        nsplits: number;
        splits?: {
            name: string;
            nsegs: number;
            segs?: {
                name: string;
                ticks: number;
            }[];
        }[];
    };
    timestamp?: {
        year: number;
        mon: number;
        day: number;
        hour: number;
        min: number;
        sec: number;
    };
    fileChecksum?: {
        path: string;
        sum: number;
    };

    constructor(public type: SarDataType) {
    }
}

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

export interface SarResult {
    demo: SourceDemo;
    messages: SarMessage[];
}

// _parse_sar_data
export const readSarMessageData = (data: SourceBuffer, len: number): SarMessage => {
    if (len === 0) {
        return new SarMessage(SarDataType.Invalid);
    }

    const type = data.readUint8() as SarDataType;

    if (type === SarDataType.Checksum && len === 5) {
        len = 9;
    }

    const out = new SarMessage(SarDataType.Invalid);
    out.type = type;

    switch (type) {
        case SarDataType.TimescaleCheat:
            if (len !== 5) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.timescale = data.readFloat32LE();
            break;
        case SarDataType.InitialCvar:
            out.initialCvar = {
                cvar: data.readCString(),
                val: data.readCString(),
            };
            break;
            // deno-lint-ignore no-fallthrough
        case SarDataType.EntityInputSlot:
            out.slot = data.readUint8();
        case SarDataType.EntityInput:
            out.entityInput = {
                targetname: data.readCString(),
                classname: data.readCString(),
                inputname: data.readCString(),
                parameter: data.readCString(),
            };
            break;
        case SarDataType.Checksum:
            if (len !== 9) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.checksum = {
                demoSum: data.readUint32LE(),
                sarSum: data.readUint32LE(),
            };
            break;
        case SarDataType.ChecksumV2:
            if (len !== 69) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.checksumV2 = {
                sarSum: data.readUint32LE(),
                signature: data.readArray(64),
            };
            break;
        case SarDataType.PortalPlacement:
            if (len !== 15) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.slot = data.readUint8();
            out.portalPlacement = {
                orange: Boolean(data.readUint8()),
                x: data.readFloat32LE(),
                y: data.readFloat32LE(),
                z: data.readFloat32LE(),
            };
            break;
        case SarDataType.ChallengeFlags:
        case SarDataType.CrouchFly:
            if (len !== 2) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.slot = data.readUint8();
            break;
        case SarDataType.Pause:
            if (len !== 5) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.pauseTicks = data.readUint32LE();
            break;
        case SarDataType.WaitRun:
            if (len < 6) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.waitRun = {
                tick: data.readUint32LE(),
                cmd: data.readCString(),
            };
            break;
        case SarDataType.HwaitRun:
            if (len < 6) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.hwaitRun = {
                ticks: data.readUint32LE(),
                cmd: data.readCString(),
            };
            break;
        case SarDataType.SpeedrunTime:
            if (len < 5) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.speedrunTime = {
                nsplits: data.readUint32LE(),
                splits: [],
            };
            for (let i = 0; i < out.speedrunTime.nsplits; ++i) {
                type Inner<T> = T extends (infer U)[] ? U : T;
                type SplitsType = Exclude<
                    Inner<Exclude<SarMessage['speedrunTime'], undefined>['splits']>,
                    undefined
                >;

                const split: SplitsType = {
                    name: data.readCString(),
                    nsegs: data.readUint32LE(),
                    segs: [],
                };

                for (let j = 0; j < split.nsegs; ++j) {
                    split.segs!.push({
                        name: data.readCString(),
                        ticks: data.readUint32LE(),
                    });
                }

                out.speedrunTime.splits!.push(split);
            }

            if (data.bitsLeft) {
                out.type = SarDataType.Invalid;
                break;
            }

            break;
        case SarDataType.Timestamp:
            if (len !== 8) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.timestamp = {
                year: data.readUint8() | (data.readUint8() << 8),
                mon: data.readUint8() + 1,
                day: data.readUint8(),
                hour: data.readUint8(),
                min: data.readUint8(),
                sec: data.readUint8(),
            };
            break;
        case SarDataType.FileChecksum:
            if (len < 6) {
                out.type = SarDataType.Invalid;
                break;
            }
            out.fileChecksum = {
                sum: data.readUint32LE(),
                path: data.readCString(),
            };
            break;
        default:
            out.type = SarDataType.Invalid;
            break;
    }

    return out;
};

export const readSarData = (demo: SourceDemo): SarResult => {
    const messages: SarMessage[] = [];

    for (const message of demo.findMessages(DemoMessages.CustomData)) {
        const data = message.data;

        // _parse_msg
        if (message.callbackIndex !== 0 || data.allocatedBits === 64) {
            continue;
        }

        data.readArray(8);
        const len = (data.allocatedBits / 8) - 8;

        messages.push(readSarMessageData(data, len));
    }

    return {
        demo,
        messages,
    } as SarResult;
};
