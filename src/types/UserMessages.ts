/*
 * Copyright (c) 2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from '../buffer.ts';
import { SourceDemo } from '../demo.ts';
import { QAngle } from './QAngle.ts';
import { Vector } from './Vector.ts';

export class UserMessage {
    type: number;
    constructor(type: number) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.constructor.name;
    }
    read(_buf: SourceDemoBuffer, _demo: SourceDemo) {
        throw new Error(`read() for ${this.constructor.name} not implemented!`);
    }
    write(_buf: SourceDemoBuffer, _demo: SourceDemo) {
        throw new Error(`write() for ${this.constructor.name} not implemented!`);
    }
    as<T extends UserMessage>() {
        return this as unknown as T;
    }
}

export class Geiger extends UserMessage {
    geigerRange?: number;
    read(buf: SourceDemoBuffer) {
        this.geigerRange = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.geigerRange!);
    }
}
export class Train extends UserMessage {
    pos?: number;
    read(buf: SourceDemoBuffer) {
        this.pos = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.pos!);
    }
}
export class HudText extends UserMessage {
    text?: string;
    read(buf: SourceDemoBuffer) {
        this.text = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.text!);
    }
}
export class SayText extends UserMessage {
    client?: number;
    text?: string;
    wantsToChat?: number;
    read(buf: SourceDemoBuffer) {
        this.client = buf.readUint8();
        this.text = buf.readASCIIString();
        this.wantsToChat = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.client!);
        buf.writeASCIIString(this.text!);
        buf.writeUint8(this.wantsToChat!);
    }
}
export class SayText2 extends UserMessage {
    client?: number;
    text?: string;
    wantsToChat?: number;
    messageText?: string;
    messages?: [string, string, string, string];
    read(buf: SourceDemoBuffer) {
        this.client = buf.readUint8();
        this.text = buf.readASCIIString();
        this.wantsToChat = buf.readUint8();
        this.messageText = buf.readASCIIString();
        this.messages = [
            buf.readASCIIString(),
            buf.readASCIIString(),
            buf.readASCIIString(),
            buf.readASCIIString(),
        ];
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.client!);
        buf.writeASCIIString(this.text!);
        buf.writeUint8(this.wantsToChat!);
        buf.writeASCIIString(this.messageText!);

        for (const message of this.messages!.values()) {
            buf.writeASCIIString(message);
        }
    }
}
export enum HudPrint {
    Notify = 1,
    Console = 2,
    Talk = 3,
    Center = 4,
}
export class TextMsg extends UserMessage {
    msgDest?: HudPrint;
    output?: [string, string, string, string, string];
    read(buf: SourceDemoBuffer) {
        this.msgDest = buf.readUint8();
        this.output = ['', '', '', '', ''];

        for (let i = 0; i < 5; ++i) {
            this.output[i] = buf.readASCIIString();
        }
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.msgDest!);

        for (const str of this.output!.values() ?? []) {
            buf.writeASCIIString(str);
        }
    }
}
export interface HudTextParms {
    x: number;
    y: number;
    effect: number;
    r1: number;
    g1: number;
    b1: number;
    a1: number;
    r2: number;
    g2: number;
    b2: number;
    a2: number;
    fadeinTime: number;
    fadeoutTime: number;
    holdTime: number;
    fxTime: number;
    channel: number;
}
export class HudMsg extends UserMessage {
    textParms?: HudTextParms;
    message?: string;
    read(buf: SourceDemoBuffer) {
        this.textParms = {
            channel: buf.readUint8(),
            x: buf.readFloat32(),
            y: buf.readFloat32(),
            r1: buf.readUint8(),
            g1: buf.readUint8(),
            b1: buf.readUint8(),
            a1: buf.readUint8(),
            r2: buf.readUint8(),
            g2: buf.readUint8(),
            b2: buf.readUint8(),
            a2: buf.readUint8(),
            effect: buf.readFloat32(),
            fadeinTime: buf.readFloat32(),
            fadeoutTime: buf.readFloat32(),
            holdTime: buf.readFloat32(),
            fxTime: buf.readFloat32(),
        };
        this.message = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.textParms!.channel);
        buf.writeFloat32(this.textParms!.x);
        buf.writeFloat32(this.textParms!.y);
        buf.writeUint8(this.textParms!.r1);
        buf.writeUint8(this.textParms!.g1);
        buf.writeUint8(this.textParms!.b1);
        buf.writeUint8(this.textParms!.a1);
        buf.writeUint8(this.textParms!.r2);
        buf.writeUint8(this.textParms!.g2);
        buf.writeUint8(this.textParms!.b2);
        buf.writeUint8(this.textParms!.a2);
        buf.writeFloat32(this.textParms!.effect);
        buf.writeFloat32(this.textParms!.fadeinTime);
        buf.writeFloat32(this.textParms!.fadeoutTime);
        buf.writeFloat32(this.textParms!.holdTime);
        buf.writeFloat32(this.textParms!.fxTime);
        buf.writeASCIIString(this.message!);
    }
}
export class ResetHUD extends UserMessage {
    reset?: number;
    read(buf: SourceDemoBuffer) {
        this.reset = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.reset!);
    }
}
export class GameTitle extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class ItemPickup extends UserMessage {
    name?: string;
    read(buf: SourceDemoBuffer) {
        this.name = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.name!);
    }
}
// NOTE: Unused
export class ShowMenu extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export enum ShakeCommand {
    Start = 0,
    Stop = 1,
    Amplitude = 2,
    Frequency = 3,
    StartRumbleOnly = 4,
    StartNoRumble = 5,
}
export class Shake extends UserMessage {
    command?: ShakeCommand;
    amplitude?: number;
    frequency?: number;
    duration?: number;
    read(buf: SourceDemoBuffer) {
        this.command = buf.readUint8();
        this.amplitude = buf.readFloat32();
        this.frequency = buf.readFloat32();
        this.duration = buf.readFloat32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.command!);
        buf.writeFloat32(this.amplitude!);
        buf.writeFloat32(this.frequency!);
        buf.writeFloat32(this.duration!);
    }
}
export class Tilt extends UserMessage {
    command?: number;
    easeInOut?: number;
    angle?: QAngle;
    duration?: number;
    time?: number;
    read(buf: SourceDemoBuffer) {
        this.command = buf.readUint8();
        this.easeInOut = buf.readUint8();
        this.angle = buf.readQAngle();
        this.duration = buf.readFloat32();
        this.time = buf.readFloat32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.command!);
        buf.writeUint8(this.easeInOut!);
        buf.writeQAngle(this.angle!);
        buf.writeFloat32(this.duration!);
        buf.writeFloat32(this.time!);
    }
}
export class Fade extends UserMessage {
    duration?: number;
    holdTime?: number;
    fadeFlags?: number;
    fade?: { r: number; g: number; b: number; a: number };
    read(buf: SourceDemoBuffer) {
        this.duration = buf.readUint16();
        this.holdTime = buf.readUint16();
        this.fadeFlags = buf.readUint16();
        this.fade = {
            r: buf.readUint8(),
            g: buf.readUint8(),
            b: buf.readUint8(),
            a: buf.readUint8(),
        };
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint16(this.duration!);
        buf.writeUint16(this.holdTime!);
        buf.writeUint16(this.fadeFlags!);
        buf.writeUint8(this.fade!.r);
        buf.writeUint8(this.fade!.g);
        buf.writeUint8(this.fade!.b);
        buf.writeUint8(this.fade!.a);
    }
}
export class VGUIMenu extends UserMessage {
    name?: string;
    show?: number;
    size?: number;
    keyValues?: { key: string; value: string }[];
    read(buf: SourceDemoBuffer) {
        this.name = buf.readASCIIString();
        this.show = buf.readUint8();
        this.size = buf.readUint8();
        this.keyValues = [];

        for (let i = 0; i < this.size; ++i) {
            this.keyValues.push({
                key: buf.readASCIIString(),
                value: buf.readASCIIString(),
            });
        }
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.name!);
        buf.writeUint8(this.show!);
        buf.writeUint8(this.size!);

        this.keyValues!.forEach(({ key, value }) => {
            buf.writeASCIIString(key);
            buf.writeASCIIString(value);
        });
    }
}
export class Rumble extends UserMessage {
    index?: number;
    data?: number;
    flags?: number;
    read(buf: SourceDemoBuffer) {
        this.index = buf.readUint8();
        this.data = buf.readUint8();
        this.flags = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.index!);
        buf.writeUint8(this.data!);
        buf.writeUint8(this.flags!);
    }
}
export class Battery extends UserMessage {
    battery?: number;
    read(buf: SourceDemoBuffer) {
        this.battery = buf.readUint16();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint16(this.battery!);
    }
}
// NOTE: Unused
export class Damage extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class VoiceMask extends UserMessage {
    audiblePlayers?: [number, number];
    serverBannedPlayers?: [number, number];
    serverModEnabled?: number;
    read(buf: SourceDemoBuffer) {
        const VOICE_MAX_PLAYERS_DW = 2;

        this.audiblePlayers = [0, 0];
        this.serverBannedPlayers = [0, 0];

        for (let index = 0; index < VOICE_MAX_PLAYERS_DW; ++index) {
            this.audiblePlayers[index] = buf.readUint32();
            this.serverBannedPlayers[index] = buf.readUint32();
        }

        this.serverModEnabled = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        const VOICE_MAX_PLAYERS_DW = 2;

        for (let index = 0; index < VOICE_MAX_PLAYERS_DW; ++index) {
            buf.writeUint32(this.audiblePlayers![index]!);
            buf.writeUint32(this.serverBannedPlayers![index]!);
        }

        buf.writeUint8(this.serverModEnabled!);
    }
}
export class RequestState extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class CloseCaption extends UserMessage {
    hash?: number;
    duration?: number;
    fromPlayer?: boolean;
    read(buf: SourceDemoBuffer) {
        this.hash = buf.readUint32();
        this.duration = buf.readBits(15, false);
        this.fromPlayer = buf.readBoolean();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint32(this.hash!);
        buf.writeBits(this.duration!, 15);
        buf.writeBoolean(this.fromPlayer!);
    }
}
export class CloseCaptionDirect extends UserMessage {
    hash?: number;
    duration?: number;
    fromPlayer?: boolean;
    read(buf: SourceDemoBuffer) {
        this.hash = buf.readUint32();
        this.duration = buf.readBits(15, false);
        this.fromPlayer = buf.readBoolean();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint32(this.hash!);
        buf.writeBits(this.duration!, 15);
        buf.writeBoolean(this.fromPlayer!);
    }
}
export class HintText extends UserMessage {
    hintString?: string;
    read(buf: SourceDemoBuffer) {
        this.hintString = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.hintString!);
    }
}
export class KeyHintText extends UserMessage {
    messages?: 1;
    message?: string;
    read(buf: SourceDemoBuffer) {
        this.messages = buf.readUint8() as 1;
        this.message = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.messages!);
        buf.writeASCIIString(this.message!);
    }
}
// NOTE: Unused
export class SquadMemberDied extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// NOTE: Unused
export class AmmoDenied extends UserMessage {
    ammo?: number;
    read(_buf: SourceDemoBuffer) {
        // this.ammo = buf.readUint16();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeUint16(this.ammo);
    }
}
export enum CreditsType {
    Logo = 1,
    Intro = 2,
    Outro = 3,
}
export class CreditsMsg extends UserMessage {
    creditsType?: CreditsType;
    read(buf: SourceDemoBuffer) {
        this.creditsType = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.creditsType!);
    }
}
export class LogoTimeMsg extends UserMessage {
    time?: number;
    read(buf: SourceDemoBuffer) {
        this.time = buf.readFloat32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeFloat32(this.time!);
    }
}
// NOTE: Unused
export class AchievementEvent extends UserMessage {
    achievementId?: number;
    read(_buf: SourceDemoBuffer) {
        // this.achievementId = buf.readUint16();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeUint16(this.achievementId);
    }
}
export class UpdateJalopyRadar extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class CurrentTimescale extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export enum GameTimescaleInterpolators {
    Linear = 0,
    Accel = 1,
    DeAccel = 2,
    EaseInOut = 3,
}
export class DesiredTimescale extends UserMessage {
    desiredTimescale?: number;
    durationRealTimeSeconds?: number;
    interpolationType?: GameTimescaleInterpolators;
    startBlendTime?: number;
    read(buf: SourceDemoBuffer) {
        this.desiredTimescale = buf.readFloat32();
        this.durationRealTimeSeconds = buf.readFloat32();
        this.interpolationType = buf.readUint8();
        this.startBlendTime = buf.readFloat32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeFloat32(this.desiredTimescale!);
        buf.writeFloat32(this.durationRealTimeSeconds!);
        buf.writeUint8(this.interpolationType!);
        buf.writeFloat32(this.startBlendTime!);
    }
}
export enum PortalCreditsType {
    Logo = 1,
    Intro = 2,
    Outro = 3,
    OutroPortal = 4,
}
export class CreditsPortalMsg extends UserMessage {
    creditsType?: PortalCreditsType;
    read(buf: SourceDemoBuffer) {
        this.creditsType = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.creditsType!);
    }
}
// NOTE: Unused
export class InventoryFlash extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// NOTE: Unused
export class IndicatorFlash extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// NOTE: Unused
export class ControlHelperAnimate extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// NOTE: Unused
export class TakePhoto extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// NOTE: Unused
export class Flash extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class HudPingIndicator extends UserMessage {
    position?: Vector;
    read(buf: SourceDemoBuffer) {
        this.position = buf.readVector();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeVector(this.position!);
    }
}
// NOTE: Unused
export class OpenRadialMenu extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// TODO
export class AddLocator extends UserMessage {
    playerIndex?: number;
    entityHandle?: number;
    displayTime?: number;
    position?: Vector;
    normal?: Vector;
    iconName?: string;
    read(_buf: SourceDemoBuffer) {
        // this.playerIndex = buf.readUint16();
        // this.entityHandle = buf.readUint32();
        // this.displayTime = buf.readFloat32();
        // this.position = buf.readVectorCoord();
        // this.normal = buf.readVector();
        // this.iconName = buf.readASCIIString();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeUint16(this.playerIndex!);
        // buf.writeUint32(this.entityHandle!);
        // buf.writeFloat32(this.displayTime!);
        // buf.writeVectorCoord(this.position!);
        // buf.writeVector(this.normal!);
        // buf.writeASCIIString(this.iconName!);
    }
}
export class MPMapCompleted extends UserMessage {
    branch?: number;
    level?: number;
    read(buf: SourceDemoBuffer) {
        this.branch = buf.readUint8();
        this.level = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.branch!);
        buf.writeUint8(this.level!);
    }
}
export class MPMapIncomplete extends UserMessage {
    branch?: number;
    level?: number;
    read(buf: SourceDemoBuffer) {
        this.branch = buf.readUint8();
        this.level = buf.readUint8();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint8(this.branch!);
        buf.writeUint8(this.level!);
    }
}
// TODO
export class MPMapCompletedData extends UserMessage {
    levelCompletions?: boolean[][][];
    read(_buf: SourceDemoBuffer) {
        // const MAX_PORTAL2_COOP_BRANCHES = 6;
        // const MAX_PORTAL2_COOP_LEVELS_PER_BRANCH = 16;
        // const numBits = 2 * MAX_PORTAL2_COOP_BRANCHES * MAX_PORTAL2_COOP_LEVELS_PER_BRANCH;
        // const buffer = buf.readArrayBuffer(numBits / 8);

        // let current = 0;
        // let mask = 0x01;

        // this.levelCompletions = [];

        // for (let player = 0; player < 2; ++player) {
        //     this.levelCompletions[player] = [];

        //     for (let branch = 0; branch < MAX_PORTAL2_COOP_BRANCHES; ++branch) {
        //         this.levelCompletions[player]![branch] = [];

        //         for (let level = 0; level < MAX_PORTAL2_COOP_LEVELS_PER_BRANCH; ++level) {
        //             if ((buffer.at(current)! & mask) !== 0) {
        //                 this.levelCompletions![player]![branch]![level] = true;
        //             }

        //             mask <<= 1;

        //             if (mask > 0x100) {
        //                 ++current;
        //                 mask = 0x01;
        //             }
        //         }
        //     }
        // }
    }
    write(_buf: SourceDemoBuffer) {
        // const MAX_PORTAL2_COOP_BRANCHES = 6;
        // const MAX_PORTAL2_COOP_LEVELS_PER_BRANCH = 16;
        // const numBits = 2 * MAX_PORTAL2_COOP_BRANCHES * MAX_PORTAL2_COOP_LEVELS_PER_BRANCH;
        // const buffer = new Uint8Array(8 + numBits / 8);

        // let current = 0;
        // let mask = 0x01;

        // this.levelCompletions = [];

        // for (let player = 0; player < 2; ++player) {
        //     this.levelCompletions[player] = [];

        //     for (let branch = 0; branch < MAX_PORTAL2_COOP_BRANCHES; ++branch) {
        //         this.levelCompletions[player]![branch] = [];

        //         for (let level = 0; level < MAX_PORTAL2_COOP_LEVELS_PER_BRANCH; ++level) {
        //             const completed = this.levelCompletions![player]![branch]![level];
        //             buffer.set(new Uint8Array([completed ? mask : 0x00]), current);

        //             mask <<= 1;

        //             if (mask > 0x100) {
        //                 ++current;
        //                 mask = 0x01;
        //             }
        //         }
        //     }
        // }

        // buf.writeArrayBuffer(buffer, buffer.byteLength);
    }
}
export class MPTauntEarned extends UserMessage {
    taunt?: string;
    awardSilently?: boolean;
    read(buf: SourceDemoBuffer) {
        this.taunt = buf.readASCIIString();
        this.awardSilently = buf.readBoolean();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.taunt!);
        buf.writeBoolean(this.awardSilently!);
    }
}
export class MPTauntUnlocked extends UserMessage {
    taunt?: string;
    read(buf: SourceDemoBuffer) {
        this.taunt = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.taunt!);
    }
}
export class MPTauntLocked extends UserMessage {
    taunt?: string;
    read(buf: SourceDemoBuffer) {
        this.taunt = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.taunt!);
    }
}
export class MPAllTauntsLocked extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export enum PortalFizzleType {
    Success = 0,
    CantFit = 1,
    OverlappedLinked = 2,
    BadVolume = 3,
    BadSurface = 4,
    Killed = 5,
    Cleanser = 6,
    Close = 7,
    NearBlue = 8,
    NearRed = 9,
    None = 10,
}
// TODO: vector coord is incorrect :>
export class PortalFX_Surface extends UserMessage {
    entIndex?: number;
    playerEntIndex?: number;
    team?: number;
    portalNum?: number;
    effect?: PortalFizzleType;
    vecOrigin?: Vector;
    angles?: QAngle;
    read(_buf: SourceDemoBuffer) {
        // this.entIndex = buf.readInt16();
        // this.playerEntIndex = buf.readInt16();
        // this.team = buf.readInt8();
        // this.portalNum = buf.readInt8();
        // this.effect = buf.readInt8();
        // this.vecOrigin = buf.readVectorCoord();
        // this.angles = buf.readAngles();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeInt16(this.entIndex!);
        // buf.writeInt16(this.playerEntIndex!);
        // buf.writeInt8(this.team!);
        // buf.writeInt8(this.portalNum!);
        // buf.writeInt8(this.effect!);
        // buf.writeVectorCoord(this.vecOrigin!);
        // buf.writeAngles(this.angles!);
    }
}
// TODO
export class PaintWorld extends UserMessage {
    unk1?: number;
    unk2?: number;
    unk3?: number;
    unk4?: number;
    unk5?: number;
    read(_buf: SourceDemoBuffer) {
        // this.unk1 = buf.readUint8();
        // this.unk2 = buf.readUint32();
        // this.unk3 = buf.readFloat32();
        // this.unk4 = buf.readFloat32();
        // this.unk5 = buf.readUint8();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeUint8(this.unk1!);
        // buf.writeUint32(this.unk2!);
        // buf.writeFloat32(this.unk3!);
        // buf.writeFloat32(this.unk4!);
        // buf.writeUint8(this.unk5!);
    }
}
// TODO
export class PaintEntity extends UserMessage {
    unk1?: number;
    unk2?: number;
    unk3?: number;
    unk4?: number;
    unk5?: number;
    read(_buf: SourceDemoBuffer) {
        // this.unk1 = buf.readUint32();
        // this.unk2 = buf.readUint8();
        // this.unk3 = buf.readFloat32();
        // this.unk4 = buf.readFloat32();
        // this.unk5 = buf.readFloat32();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeUint32(this.unk1!);
        // buf.writeUint8(this.unk2!);
        // buf.writeFloat32(this.unk3!);
        // buf.writeFloat32(this.unk4!);
        // buf.writeFloat32(this.unk5!);
    }
}
// TODO
export class ChangePaintColor extends UserMessage {
    unk1?: number;
    unk2?: number;
    read(_buf: SourceDemoBuffer) {
        // this.unk1 = buf.readUint32();
        // this.unk2 = buf.readUint8();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeUint32(this.unk1!);
        // buf.writeUint8(this.unk2!);
    }
}
// NOTE: Unused
export class PaintBombExplode extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class RemoveAllPaint extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// NOTE: Unused
export class PaintAllSurfaces extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class RemovePaint extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
// NOTE: Unused
export class StartSurvey extends UserMessage {
    handle?: number;
    read(buf: SourceDemoBuffer) {
        this.handle = buf.readUint32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint32(this.handle!);
    }
}
// TODO
export class ApplyHitBoxDamageEffect extends UserMessage {
    entityHandle?: number;
    effectIndex?: number;
    hits?: number;
    read(_buf: SourceDemoBuffer) {
        // this.entityHandle = buf.readUint32();
        // this.effectIndex = buf.readUint8();
        // this.hits = buf.readUint8();
    }
    write(_buf: SourceDemoBuffer) {
        // buf.writeUint32(this.entityHandle!);
        // buf.writeUint8(this.effectIndex!);
        // buf.writeUint8(this.hits!);
    }
}
export class SetMixLayerTriggerFactor extends UserMessage {
    layer?: string;
    group?: string;
    factor?: number;
    read(buf: SourceDemoBuffer) {
        this.layer = buf.readASCIIString();
        this.group = buf.readASCIIString();
        this.factor = buf.readFloat32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.layer!);
        buf.writeASCIIString(this.group!);
        buf.writeFloat32(this.factor!);
    }
}
export class TransitionFade extends UserMessage {
    fade?: number;
    read(buf: SourceDemoBuffer) {
        this.fade = buf.readFloat32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeFloat32(this.fade!);
    }
}
export class ScoreboardTempUpdate extends UserMessage {
    portalScore?: number;
    timeScore?: number;
    read(buf: SourceDemoBuffer) {
        this.portalScore = buf.readUint32();
        this.timeScore = buf.readUint32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint32(this.portalScore!);
        buf.writeUint32(this.timeScore!);
    }
}
export class ChallengeModeCheatSession extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}
export class ChallengeModeCloseAllUI extends UserMessage {
    read(_buf: SourceDemoBuffer) {}
    write(_buf: SourceDemoBuffer) {}
}

export const UserMessages = {
    Portal2Engine: [
        Geiger, // 0
        Train, // 1
        HudText, // 2
        SayText, // 3
        SayText2, // 4
        TextMsg, // 5
        HudMsg, // 6
        ResetHUD, // 7
        GameTitle, // 8
        ItemPickup, // 9
        ShowMenu, // 10
        Shake, // 11
        Tilt, // 12
        Fade, // 13
        VGUIMenu, // 14
        Rumble, // 15
        Battery, // 16
        Damage, // 17
        VoiceMask, // 18
        RequestState, // 19
        CloseCaption, // 20
        CloseCaptionDirect, // 21
        HintText, // 22
        KeyHintText, // 23
        SquadMemberDied, // 24
        AmmoDenied, // 25
        CreditsMsg, // 26
        LogoTimeMsg, // 27
        AchievementEvent, // 28
        UpdateJalopyRadar, // 29
        CurrentTimescale, // 30
        DesiredTimescale, // 31
        CreditsPortalMsg, // 32
        InventoryFlash, // 33
        IndicatorFlash, // 34
        ControlHelperAnimate, // 35
        TakePhoto, // 36
        Flash, // 37
        HudPingIndicator, // 38
        OpenRadialMenu, // 39
        AddLocator, // 40
        MPMapCompleted, // 41
        MPMapIncomplete, // 42
        MPMapCompletedData, // 43
        MPTauntEarned, // 44
        MPTauntUnlocked, // 45
        MPTauntLocked, // 46
        MPAllTauntsLocked, // 47
        PortalFX_Surface, // 48
        PaintWorld, // 49
        PaintEntity, // 50
        ChangePaintColor, // 51
        PaintBombExplode, // 52
        RemoveAllPaint, // 53
        PaintAllSurfaces, // 54
        RemovePaint, // 55
        StartSurvey, // 56
        ApplyHitBoxDamageEffect, // 57
        SetMixLayerTriggerFactor, // 58
        TransitionFade, // 59
        ScoreboardTempUpdate, // 60
        ChallengeModeCheatSession, // 61
        ChallengeModeCloseAllUI, // 62
        // not registered:
        //      VoiceSubtitle { client: i8, menu: i8, item: i8 }
        //      StatsCrawlMsg {}
        //      creditsMsg {}
        //      MPVSGameOver { unk: i8 }
        //      MPVSRoundEnd { unk: i8 }
        //      MPVSGameStart { unk: i8 }
    ],
};
