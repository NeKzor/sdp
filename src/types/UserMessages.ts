// Copyright (c) 2023-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceBuffer } from '../buffer.ts';
import type { QAngle } from './QAngle.ts';
import type { Vector } from './Vector.ts';

export class UserMessage {
    type: number;
    constructor(type: number) {
        this.type = type;
    }
    getType(): number {
        return this.type;
    }
    getName(): string {
        return this.constructor.name;
    }
    read(_buf: SourceBuffer): void {
        throw new Error(`read() for ${this.constructor.name} not implemented!`);
    }
    write(_buf: SourceBuffer): void {
        throw new Error(`write() for ${this.constructor.name} not implemented!`);
    }
    as<T extends UserMessage>(): T {
        return this as unknown as T;
    }
}

export class Geiger extends UserMessage {
    geigerRange?: number;
    override read(buf: SourceBuffer): void {
        this.geigerRange = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.geigerRange!);
    }
}
export class Train extends UserMessage {
    pos?: number;
    override read(buf: SourceBuffer): void {
        this.pos = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.pos!);
    }
}
export class HudText extends UserMessage {
    text?: string;
    override read(buf: SourceBuffer): void {
        this.text = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.text!);
    }
}
export class SayText extends UserMessage {
    client?: number;
    text?: string;
    wantsToChat?: number;
    override read(buf: SourceBuffer): void {
        this.client = buf.readUint8();
        this.text = buf.readCString();
        this.wantsToChat = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.client!);
        buf.writeCString(this.text!);
        buf.writeUint8(this.wantsToChat!);
    }
}
export class SayText2 extends UserMessage {
    client?: number;
    text?: string;
    wantsToChat?: number;
    messageText?: string;
    messages?: [string, string, string, string];
    override read(buf: SourceBuffer): void {
        this.client = buf.readUint8();
        this.text = buf.readCString();
        this.wantsToChat = buf.readUint8();
        this.messageText = buf.readCString();
        this.messages = [
            buf.readCString(),
            buf.readCString(),
            buf.readCString(),
            buf.readCString(),
        ];
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.client!);
        buf.writeCString(this.text!);
        buf.writeUint8(this.wantsToChat!);
        buf.writeCString(this.messageText!);

        for (const message of this.messages!.values()) {
            buf.writeCString(message);
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
    override read(buf: SourceBuffer): void {
        this.msgDest = buf.readUint8();
        this.output = ['', '', '', '', ''];

        for (let i = 0; i < 5; ++i) {
            this.output[i] = buf.readCString();
        }
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.msgDest!);

        for (const str of this.output!.values() ?? []) {
            buf.writeCString(str);
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
    override read(buf: SourceBuffer): void {
        this.textParms = {
            channel: buf.readUint8(),
            x: buf.readFloat32LE(),
            y: buf.readFloat32LE(),
            r1: buf.readUint8(),
            g1: buf.readUint8(),
            b1: buf.readUint8(),
            a1: buf.readUint8(),
            r2: buf.readUint8(),
            g2: buf.readUint8(),
            b2: buf.readUint8(),
            a2: buf.readUint8(),
            effect: buf.readFloat32LE(),
            fadeinTime: buf.readFloat32LE(),
            fadeoutTime: buf.readFloat32LE(),
            holdTime: buf.readFloat32LE(),
            fxTime: buf.readFloat32LE(),
        };
        this.message = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.textParms!.channel);
        buf.writeFloat32LE(this.textParms!.x);
        buf.writeFloat32LE(this.textParms!.y);
        buf.writeUint8(this.textParms!.r1);
        buf.writeUint8(this.textParms!.g1);
        buf.writeUint8(this.textParms!.b1);
        buf.writeUint8(this.textParms!.a1);
        buf.writeUint8(this.textParms!.r2);
        buf.writeUint8(this.textParms!.g2);
        buf.writeUint8(this.textParms!.b2);
        buf.writeUint8(this.textParms!.a2);
        buf.writeFloat32LE(this.textParms!.effect);
        buf.writeFloat32LE(this.textParms!.fadeinTime);
        buf.writeFloat32LE(this.textParms!.fadeoutTime);
        buf.writeFloat32LE(this.textParms!.holdTime);
        buf.writeFloat32LE(this.textParms!.fxTime);
        buf.writeCString(this.message!);
    }
}
export class ResetHUD extends UserMessage {
    reset?: number;
    override read(buf: SourceBuffer): void {
        this.reset = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.reset!);
    }
}
export class GameTitle extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class ItemPickup extends UserMessage {
    name?: string;
    override read(buf: SourceBuffer): void {
        this.name = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.name!);
    }
}
// NOTE: Unused
export class ShowMenu extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
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
    override read(buf: SourceBuffer): void {
        this.command = buf.readUint8();
        this.amplitude = buf.readFloat32LE();
        this.frequency = buf.readFloat32LE();
        this.duration = buf.readFloat32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.command!);
        buf.writeFloat32LE(this.amplitude!);
        buf.writeFloat32LE(this.frequency!);
        buf.writeFloat32LE(this.duration!);
    }
}
export class Tilt extends UserMessage {
    command?: number;
    easeInOut?: number;
    angle?: QAngle;
    duration?: number;
    time?: number;
    override read(buf: SourceBuffer): void {
        this.command = buf.readUint8();
        this.easeInOut = buf.readUint8();
        this.angle = buf.readQAngle();
        this.duration = buf.readFloat32LE();
        this.time = buf.readFloat32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.command!);
        buf.writeUint8(this.easeInOut!);
        buf.writeQAngle(this.angle!);
        buf.writeFloat32LE(this.duration!);
        buf.writeFloat32LE(this.time!);
    }
}
export class Fade extends UserMessage {
    duration?: number;
    holdTime?: number;
    fadeFlags?: number;
    fade?: { r: number; g: number; b: number; a: number };
    override read(buf: SourceBuffer): void {
        this.duration = buf.readUint16LE();
        this.holdTime = buf.readUint16LE();
        this.fadeFlags = buf.readUint16LE();
        this.fade = {
            r: buf.readUint8(),
            g: buf.readUint8(),
            b: buf.readUint8(),
            a: buf.readUint8(),
        };
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint16LE(this.duration!);
        buf.writeUint16LE(this.holdTime!);
        buf.writeUint16LE(this.fadeFlags!);
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
    override read(buf: SourceBuffer): void {
        this.name = buf.readCString();
        this.show = buf.readUint8();
        this.size = buf.readUint8();
        this.keyValues = [];

        for (let i = 0; i < this.size; ++i) {
            this.keyValues.push({
                key: buf.readCString(),
                value: buf.readCString(),
            });
        }
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.name!);
        buf.writeUint8(this.show!);
        buf.writeUint8(this.size!);

        this.keyValues!.forEach(({ key, value }) => {
            buf.writeCString(key);
            buf.writeCString(value);
        });
    }
}
export class Rumble extends UserMessage {
    index?: number;
    data?: number;
    flags?: number;
    override read(buf: SourceBuffer): void {
        this.index = buf.readUint8();
        this.data = buf.readUint8();
        this.flags = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.index!);
        buf.writeUint8(this.data!);
        buf.writeUint8(this.flags!);
    }
}
export class Battery extends UserMessage {
    battery?: number;
    override read(buf: SourceBuffer): void {
        this.battery = buf.readUint16LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint16LE(this.battery!);
    }
}
// NOTE: Unused
export class Damage extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class VoiceMask extends UserMessage {
    audiblePlayers?: [number, number];
    serverBannedPlayers?: [number, number];
    serverModEnabled?: number;
    override read(buf: SourceBuffer): void {
        const VOICE_MAX_PLAYERS_DW = 2;

        this.audiblePlayers = [0, 0];
        this.serverBannedPlayers = [0, 0];

        for (let index = 0; index < VOICE_MAX_PLAYERS_DW; ++index) {
            this.audiblePlayers[index] = buf.readUint32LE();
            this.serverBannedPlayers[index] = buf.readUint32LE();
        }

        this.serverModEnabled = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        const VOICE_MAX_PLAYERS_DW = 2;

        for (let index = 0; index < VOICE_MAX_PLAYERS_DW; ++index) {
            buf.writeUint32LE(this.audiblePlayers![index]!);
            buf.writeUint32LE(this.serverBannedPlayers![index]!);
        }

        buf.writeUint8(this.serverModEnabled!);
    }
}
export class RequestState extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class CloseCaption extends UserMessage {
    hash?: number;
    duration?: number;
    fromPlayer?: boolean;
    override read(buf: SourceBuffer): void {
        this.hash = buf.readUint32LE();
        this.duration = buf.readUBitsLE(15);
        this.fromPlayer = buf.readBoolean();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint32LE(this.hash!);
        buf.writeBitsLE(this.duration!, 15);
        buf.writeBoolean(this.fromPlayer!);
    }
}
export class CloseCaptionDirect extends UserMessage {
    hash?: number;
    duration?: number;
    fromPlayer?: boolean;
    override read(buf: SourceBuffer): void {
        this.hash = buf.readUint32LE();
        this.duration = buf.readUBitsLE(15);
        this.fromPlayer = buf.readBoolean();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint32LE(this.hash!);
        buf.writeBitsLE(this.duration!, 15);
        buf.writeBoolean(this.fromPlayer!);
    }
}
export class HintText extends UserMessage {
    hintString?: string;
    override read(buf: SourceBuffer): void {
        this.hintString = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.hintString!);
    }
}
export class KeyHintText extends UserMessage {
    messages?: 1;
    message?: string;
    override read(buf: SourceBuffer): void {
        this.messages = buf.readUint8() as 1;
        this.message = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.messages!);
        buf.writeCString(this.message!);
    }
}
// NOTE: Unused
export class SquadMemberDied extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// NOTE: Unused
export class AmmoDenied extends UserMessage {
    ammo?: number;
    override read(_buf: SourceBuffer): void {
        // this.ammo = buf.readUint16();
    }
    override write(_buf: SourceBuffer): void {
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
    override read(buf: SourceBuffer): void {
        this.creditsType = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.creditsType!);
    }
}
export class LogoTimeMsg extends UserMessage {
    time?: number;
    override read(buf: SourceBuffer): void {
        this.time = buf.readFloat32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeFloat32LE(this.time!);
    }
}
// NOTE: Unused
export class AchievementEvent extends UserMessage {
    achievementId?: number;
    override read(_buf: SourceBuffer): void {
        // this.achievementId = buf.readUint16();
    }
    override write(_buf: SourceBuffer): void {
        // buf.writeUint16(this.achievementId);
    }
}
export class UpdateJalopyRadar extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class CurrentTimescale extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
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
    override read(buf: SourceBuffer): void {
        this.desiredTimescale = buf.readFloat32LE();
        this.durationRealTimeSeconds = buf.readFloat32LE();
        this.interpolationType = buf.readUint8();
        this.startBlendTime = buf.readFloat32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeFloat32LE(this.desiredTimescale!);
        buf.writeFloat32LE(this.durationRealTimeSeconds!);
        buf.writeUint8(this.interpolationType!);
        buf.writeFloat32LE(this.startBlendTime!);
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
    override read(buf: SourceBuffer): void {
        this.creditsType = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.creditsType!);
    }
}
// NOTE: Unused
export class InventoryFlash extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// NOTE: Unused
export class IndicatorFlash extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// NOTE: Unused
export class ControlHelperAnimate extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// NOTE: Unused
export class TakePhoto extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// NOTE: Unused
export class Flash extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class HudPingIndicator extends UserMessage {
    position?: Vector;
    override read(buf: SourceBuffer): void {
        this.position = buf.readVector();
    }
    override write(buf: SourceBuffer): void {
        buf.writeVector(this.position!);
    }
}
// NOTE: Unused
export class OpenRadialMenu extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// TODO
export class AddLocator extends UserMessage {
    playerIndex?: number;
    entityHandle?: number;
    displayTime?: number;
    position?: Vector;
    normal?: Vector;
    iconName?: string;
    override read(_buf: SourceBuffer): void {
        // this.playerIndex = buf.readUint16();
        // this.entityHandle = buf.readUint32LE();
        // this.displayTime = buf.readFloat32LE();
        // this.position = buf.readVectorCoord();
        // this.normal = buf.readVector();
        // this.iconName = buf.readCString();
    }
    override write(_buf: SourceBuffer): void {
        // buf.writeUint16(this.playerIndex!);
        // buf.writeUint32LE(this.entityHandle!);
        // buf.writeFloat32LE(this.displayTime!);
        // buf.writeVectorCoord(this.position!);
        // buf.writeVector(this.normal!);
        // buf.writeCString(this.iconName!);
    }
}
export class MPMapCompleted extends UserMessage {
    branch?: number;
    level?: number;
    override read(buf: SourceBuffer): void {
        this.branch = buf.readUint8();
        this.level = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.branch!);
        buf.writeUint8(this.level!);
    }
}
export class MPMapIncomplete extends UserMessage {
    branch?: number;
    level?: number;
    override read(buf: SourceBuffer): void {
        this.branch = buf.readUint8();
        this.level = buf.readUint8();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint8(this.branch!);
        buf.writeUint8(this.level!);
    }
}
// TODO
export class MPMapCompletedData extends UserMessage {
    levelCompletions?: boolean[][][];
    override read(_buf: SourceBuffer): void {
        // const MAX_PORTAL2_COOP_BRANCHES = 6;
        // const MAX_PORTAL2_COOP_LEVELS_PER_BRANCH = 16;
        // const numBits = 2 * MAX_PORTAL2_COOP_BRANCHES * MAX_PORTAL2_COOP_LEVELS_PER_BRANCH;
        // const buffer = buf.readArray(numBits / 8);

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
    override write(_buf: SourceBuffer): void {
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

        // buf.writeArray(buffer, buffer.byteLength);
    }
}
export class MPTauntEarned extends UserMessage {
    taunt?: string;
    awardSilently?: boolean;
    override read(buf: SourceBuffer): void {
        this.taunt = buf.readCString();
        this.awardSilently = buf.readBoolean();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.taunt!);
        buf.writeBoolean(this.awardSilently!);
    }
}
export class MPTauntUnlocked extends UserMessage {
    taunt?: string;
    override read(buf: SourceBuffer): void {
        this.taunt = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.taunt!);
    }
}
export class MPTauntLocked extends UserMessage {
    taunt?: string;
    override read(buf: SourceBuffer): void {
        this.taunt = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.taunt!);
    }
}
export class MPAllTauntsLocked extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
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
    override read(_buf: SourceBuffer): void {
        // this.entIndex = buf.readInt16LE();
        // this.playerEntIndex = buf.readInt16LE();
        // this.team = buf.readInt8();
        // this.portalNum = buf.readInt8();
        // this.effect = buf.readInt8();
        // this.vecOrigin = buf.readVectorCoord();
        // this.angles = buf.readAngles();
    }
    override write(_buf: SourceBuffer): void {
        // buf.writeInt16LE(this.entIndex!);
        // buf.writeInt16LE(this.playerEntIndex!);
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
    override read(_buf: SourceBuffer): void {
        // this.unk1 = buf.readUint8();
        // this.unk2 = buf.readUint32LE();
        // this.unk3 = buf.readFloat32LE();
        // this.unk4 = buf.readFloat32LE();
        // this.unk5 = buf.readUint8();
    }
    override write(_buf: SourceBuffer): void {
        // buf.writeUint8(this.unk1!);
        // buf.writeUint32LE(this.unk2!);
        // buf.writeFloat32LE(this.unk3!);
        // buf.writeFloat32LE(this.unk4!);
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
    override read(_buf: SourceBuffer): void {
        // this.unk1 = buf.readUint32LE();
        // this.unk2 = buf.readUint8();
        // this.unk3 = buf.readFloat32LE();
        // this.unk4 = buf.readFloat32LE();
        // this.unk5 = buf.readFloat32LE();
    }
    override write(_buf: SourceBuffer): void {
        // buf.writeUint32LE(this.unk1!);
        // buf.writeUint8(this.unk2!);
        // buf.writeFloat32LE(this.unk3!);
        // buf.writeFloat32LE(this.unk4!);
        // buf.writeFloat32LE(this.unk5!);
    }
}
// TODO
export class ChangePaintColor extends UserMessage {
    unk1?: number;
    unk2?: number;
    override read(_buf: SourceBuffer): void {
        // this.unk1 = buf.readUint32LE();
        // this.unk2 = buf.readUint8();
    }
    override write(_buf: SourceBuffer): void {
        // buf.writeUint32LE(this.unk1!);
        // buf.writeUint8(this.unk2!);
    }
}
// NOTE: Unused
export class PaintBombExplode extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class RemoveAllPaint extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// NOTE: Unused
export class PaintAllSurfaces extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class RemovePaint extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
// NOTE: Unused
export class StartSurvey extends UserMessage {
    handle?: number;
    override read(buf: SourceBuffer): void {
        this.handle = buf.readUint32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint32LE(this.handle!);
    }
}
// TODO
export class ApplyHitBoxDamageEffect extends UserMessage {
    entityHandle?: number;
    effectIndex?: number;
    hits?: number;
    override read(_buf: SourceBuffer): void {
        // this.entityHandle = buf.readUint32LE();
        // this.effectIndex = buf.readUint8();
        // this.hits = buf.readUint8();
    }
    override write(_buf: SourceBuffer): void {
        // buf.writeUint32LE(this.entityHandle!);
        // buf.writeUint8(this.effectIndex!);
        // buf.writeUint8(this.hits!);
    }
}
export class SetMixLayerTriggerFactor extends UserMessage {
    layer?: string;
    group?: string;
    factor?: number;
    override read(buf: SourceBuffer): void {
        this.layer = buf.readCString();
        this.group = buf.readCString();
        this.factor = buf.readFloat32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.layer!);
        buf.writeCString(this.group!);
        buf.writeFloat32LE(this.factor!);
    }
}
export class TransitionFade extends UserMessage {
    fade?: number;
    override read(buf: SourceBuffer): void {
        this.fade = buf.readFloat32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeFloat32LE(this.fade!);
    }
}
export class ScoreboardTempUpdate extends UserMessage {
    portalScore?: number;
    timeScore?: number;
    override read(buf: SourceBuffer): void {
        this.portalScore = buf.readUint32LE();
        this.timeScore = buf.readUint32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeUint32LE(this.portalScore!);
        buf.writeUint32LE(this.timeScore!);
    }
}
export class ChallengeModeCheatSession extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
}
export class ChallengeModeCloseAllUI extends UserMessage {
    override read(_buf: SourceBuffer): void {}
    override write(_buf: SourceBuffer): void {}
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
