import pb from 'npm:protobufjs/minimal.js';
import Long from 'npm:long';
import { CMsgQAngle, CMsgVector } from './netmessages.ts';

export const protobufPackage = '';

export enum EP2CEUserMessages {
    UM_CreditsPortalMsg = 200,
    UM_ControlHelperAnimate = 203,
    UM_HudPingIndicator = 206,
    UM_OpenRadialMenu = 207,
    UM_AddLocator = 208,
    UM_MPMapCompleted = 209,
    UM_MPMapIncomplete = 210,
    UM_MPMapCompletedData = 211,
    UM_MPTauntEarned = 212,
    UM_MPTauntUnlocked = 213,
    UM_MPTauntLocked = 214,
    UM_MPAllTauntsLocked = 215,
    UM_PortalFX_Surface = 216,
    UM_PaintWorld = 217,
    UM_PaintEntity = 218,
    UM_ChangePaintColor = 219,
    UM_PaintBombExplode = 220,
    UM_RemoveAllPaint = 221,
    UM_PaintAllSurfaces = 222,
    UM_RemovePaint = 223,
    UM_ApplyHitBoxDamageEffect = 225,
    UM_SetMixLayerTriggerFactor = 226,
    UM_TransitionFade = 227,
    UM_ScoreboardTempUpdate = 228,
    UM_ChallengeModeCheatSession = 229,
    UM_ChallengeModeCloseAllUI = 230,
    UM_MPVSGameStart = 231,
    UM_MPVSGameOver = 232,
    UM_MPVSRoundEnd = 233,
    UM_PlaytestUpdate = 234,
    UNRECOGNIZED = -1,
}

export function eP2CEUserMessagesFromJSON(object: any): EP2CEUserMessages {
    switch (object) {
        case 200:
        case 'UM_CreditsPortalMsg':
            return EP2CEUserMessages.UM_CreditsPortalMsg;
        case 203:
        case 'UM_ControlHelperAnimate':
            return EP2CEUserMessages.UM_ControlHelperAnimate;
        case 206:
        case 'UM_HudPingIndicator':
            return EP2CEUserMessages.UM_HudPingIndicator;
        case 207:
        case 'UM_OpenRadialMenu':
            return EP2CEUserMessages.UM_OpenRadialMenu;
        case 208:
        case 'UM_AddLocator':
            return EP2CEUserMessages.UM_AddLocator;
        case 209:
        case 'UM_MPMapCompleted':
            return EP2CEUserMessages.UM_MPMapCompleted;
        case 210:
        case 'UM_MPMapIncomplete':
            return EP2CEUserMessages.UM_MPMapIncomplete;
        case 211:
        case 'UM_MPMapCompletedData':
            return EP2CEUserMessages.UM_MPMapCompletedData;
        case 212:
        case 'UM_MPTauntEarned':
            return EP2CEUserMessages.UM_MPTauntEarned;
        case 213:
        case 'UM_MPTauntUnlocked':
            return EP2CEUserMessages.UM_MPTauntUnlocked;
        case 214:
        case 'UM_MPTauntLocked':
            return EP2CEUserMessages.UM_MPTauntLocked;
        case 215:
        case 'UM_MPAllTauntsLocked':
            return EP2CEUserMessages.UM_MPAllTauntsLocked;
        case 216:
        case 'UM_PortalFX_Surface':
            return EP2CEUserMessages.UM_PortalFX_Surface;
        case 217:
        case 'UM_PaintWorld':
            return EP2CEUserMessages.UM_PaintWorld;
        case 218:
        case 'UM_PaintEntity':
            return EP2CEUserMessages.UM_PaintEntity;
        case 219:
        case 'UM_ChangePaintColor':
            return EP2CEUserMessages.UM_ChangePaintColor;
        case 220:
        case 'UM_PaintBombExplode':
            return EP2CEUserMessages.UM_PaintBombExplode;
        case 221:
        case 'UM_RemoveAllPaint':
            return EP2CEUserMessages.UM_RemoveAllPaint;
        case 222:
        case 'UM_PaintAllSurfaces':
            return EP2CEUserMessages.UM_PaintAllSurfaces;
        case 223:
        case 'UM_RemovePaint':
            return EP2CEUserMessages.UM_RemovePaint;
        case 225:
        case 'UM_ApplyHitBoxDamageEffect':
            return EP2CEUserMessages.UM_ApplyHitBoxDamageEffect;
        case 226:
        case 'UM_SetMixLayerTriggerFactor':
            return EP2CEUserMessages.UM_SetMixLayerTriggerFactor;
        case 227:
        case 'UM_TransitionFade':
            return EP2CEUserMessages.UM_TransitionFade;
        case 228:
        case 'UM_ScoreboardTempUpdate':
            return EP2CEUserMessages.UM_ScoreboardTempUpdate;
        case 229:
        case 'UM_ChallengeModeCheatSession':
            return EP2CEUserMessages.UM_ChallengeModeCheatSession;
        case 230:
        case 'UM_ChallengeModeCloseAllUI':
            return EP2CEUserMessages.UM_ChallengeModeCloseAllUI;
        case 231:
        case 'UM_MPVSGameStart':
            return EP2CEUserMessages.UM_MPVSGameStart;
        case 232:
        case 'UM_MPVSGameOver':
            return EP2CEUserMessages.UM_MPVSGameOver;
        case 233:
        case 'UM_MPVSRoundEnd':
            return EP2CEUserMessages.UM_MPVSRoundEnd;
        case 234:
        case 'UM_PlaytestUpdate':
            return EP2CEUserMessages.UM_PlaytestUpdate;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return EP2CEUserMessages.UNRECOGNIZED;
    }
}

export function eP2CEUserMessagesToJSON(object: EP2CEUserMessages): string {
    switch (object) {
        case EP2CEUserMessages.UM_CreditsPortalMsg:
            return 'UM_CreditsPortalMsg';
        case EP2CEUserMessages.UM_ControlHelperAnimate:
            return 'UM_ControlHelperAnimate';
        case EP2CEUserMessages.UM_HudPingIndicator:
            return 'UM_HudPingIndicator';
        case EP2CEUserMessages.UM_OpenRadialMenu:
            return 'UM_OpenRadialMenu';
        case EP2CEUserMessages.UM_AddLocator:
            return 'UM_AddLocator';
        case EP2CEUserMessages.UM_MPMapCompleted:
            return 'UM_MPMapCompleted';
        case EP2CEUserMessages.UM_MPMapIncomplete:
            return 'UM_MPMapIncomplete';
        case EP2CEUserMessages.UM_MPMapCompletedData:
            return 'UM_MPMapCompletedData';
        case EP2CEUserMessages.UM_MPTauntEarned:
            return 'UM_MPTauntEarned';
        case EP2CEUserMessages.UM_MPTauntUnlocked:
            return 'UM_MPTauntUnlocked';
        case EP2CEUserMessages.UM_MPTauntLocked:
            return 'UM_MPTauntLocked';
        case EP2CEUserMessages.UM_MPAllTauntsLocked:
            return 'UM_MPAllTauntsLocked';
        case EP2CEUserMessages.UM_PortalFX_Surface:
            return 'UM_PortalFX_Surface';
        case EP2CEUserMessages.UM_PaintWorld:
            return 'UM_PaintWorld';
        case EP2CEUserMessages.UM_PaintEntity:
            return 'UM_PaintEntity';
        case EP2CEUserMessages.UM_ChangePaintColor:
            return 'UM_ChangePaintColor';
        case EP2CEUserMessages.UM_PaintBombExplode:
            return 'UM_PaintBombExplode';
        case EP2CEUserMessages.UM_RemoveAllPaint:
            return 'UM_RemoveAllPaint';
        case EP2CEUserMessages.UM_PaintAllSurfaces:
            return 'UM_PaintAllSurfaces';
        case EP2CEUserMessages.UM_RemovePaint:
            return 'UM_RemovePaint';
        case EP2CEUserMessages.UM_ApplyHitBoxDamageEffect:
            return 'UM_ApplyHitBoxDamageEffect';
        case EP2CEUserMessages.UM_SetMixLayerTriggerFactor:
            return 'UM_SetMixLayerTriggerFactor';
        case EP2CEUserMessages.UM_TransitionFade:
            return 'UM_TransitionFade';
        case EP2CEUserMessages.UM_ScoreboardTempUpdate:
            return 'UM_ScoreboardTempUpdate';
        case EP2CEUserMessages.UM_ChallengeModeCheatSession:
            return 'UM_ChallengeModeCheatSession';
        case EP2CEUserMessages.UM_ChallengeModeCloseAllUI:
            return 'UM_ChallengeModeCloseAllUI';
        case EP2CEUserMessages.UM_MPVSGameStart:
            return 'UM_MPVSGameStart';
        case EP2CEUserMessages.UM_MPVSGameOver:
            return 'UM_MPVSGameOver';
        case EP2CEUserMessages.UM_MPVSRoundEnd:
            return 'UM_MPVSRoundEnd';
        case EP2CEUserMessages.UM_PlaytestUpdate:
            return 'UM_PlaytestUpdate';
        case EP2CEUserMessages.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface CUsrMsgCreditsPortalMsg {
    type: number;
}

export interface CUsrMsgControlHelperAnimate {
    clear: number;
    frontIcon: number;
}

export interface CUsrMsgHudPingIndicator {
    location: CMsgVector | undefined;
}

export interface CUsrMsgOpenRadialMenu {
    data: number;
}

export interface CUsrMsgAddLocator {
    entityIndex: number;
    targetHandle: number;
    time: number;
    position: CMsgVector | undefined;
    normal: CMsgVector | undefined;
    command: string;
}

export interface CUsrMsgMPMapCompleted {
    branch: number;
    level: number;
}

export interface CUsrMsgMPMapIncomplete {
    branch: number;
    level: number;
}

export interface CUsrMsgMPMapCompletedData {
    data: Uint8Array;
}

export interface CUsrMsgMPTauntEarned {
    taunt: string;
    silent: boolean;
}

export interface CUsrMsgMPTauntUnlocked {
    taunt: string;
}

export interface CUsrMsgMPTauntLocked {
    taunt: string;
}

export interface CUsrMsgMPAllTauntsLocked {
    data: number;
}

export interface CUsrMsgPortalFXSurface {
    entityIndex: number;
    playerIndex: number;
    team: number;
    portal: number;
    effect: number;
    origin: CMsgVector | undefined;
    angles: CMsgQAngle | undefined;
}

export interface CUsrMsgPaintWorld {
    brush: number;
    power: number;
    radius: number;
    alpha: number;
    locationCount: number;
    center: CMsgVector | undefined;
    offset: CMsgVector[];
}

export interface CUsrMsgPaintEntity {
    entity: number;
    power: number;
    center: CMsgVector | undefined;
}

export interface CUsrMsgChangePaintColor {
    weapon: number;
    power: number;
}

export interface CUsrMsgRemoveAllPaint {
    data: number;
}

export interface CUsrMsgPaintAllSurfaces {
    power: number;
}

export interface CUsrMsgRemovePaint {
    entity: number;
}

export interface CUsrMsgApplyHitBoxDamageEffect {
    entity: number;
    damageEffect: number;
    particleEffect: number;
}

export interface CUsrMsgSetMixLayerTriggerFactor {
    layer: string;
    group: string;
    factor: number;
}

export interface CUsrMsgTransitionFade {
    time: number;
}

export interface CUsrMsgScoreboardTempUpdate {
    portals: number;
    time: number;
}

export interface CUsrMsgChallengeModeCheatSession {
    data: number;
}

export interface CUsrMsgChallengeModeCloseAllUI {
    data: number;
}

export interface CUsrMsgMPVSGameStart {
    countdown: boolean;
}

export interface CUsrMsgMPVSGameOver {
    winner: number;
}

export interface CUsrMsgMPVSRoundEnd {
    winner: number;
}

export interface CUsrMsgPlaytestUpdate {
    type: CUsrMsgPlaytestUpdate_Type;
}

export enum CUsrMsgPlaytestUpdate_Type {
    START = 1,
    END = 2,
    UNRECOGNIZED = -1,
}

export function cUsrMsgPlaytestUpdate_TypeFromJSON(object: any): CUsrMsgPlaytestUpdate_Type {
    switch (object) {
        case 1:
        case 'START':
            return CUsrMsgPlaytestUpdate_Type.START;
        case 2:
        case 'END':
            return CUsrMsgPlaytestUpdate_Type.END;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CUsrMsgPlaytestUpdate_Type.UNRECOGNIZED;
    }
}

export function cUsrMsgPlaytestUpdate_TypeToJSON(object: CUsrMsgPlaytestUpdate_Type): string {
    switch (object) {
        case CUsrMsgPlaytestUpdate_Type.START:
            return 'START';
        case CUsrMsgPlaytestUpdate_Type.END:
            return 'END';
        case CUsrMsgPlaytestUpdate_Type.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

function createBaseCUsrMsgCreditsPortalMsg(): CUsrMsgCreditsPortalMsg {
    return { type: 0 };
}

export const CUsrMsgCreditsPortalMsg = {
    encode(message: CUsrMsgCreditsPortalMsg, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgCreditsPortalMsg {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgCreditsPortalMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.type = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgCreditsPortalMsg {
        return { type: isSet(object.type) ? globalThis.Number(object.type) : 0 };
    },

    toJSON(message: CUsrMsgCreditsPortalMsg): unknown {
        const obj: any = {};
        if (message.type !== 0) {
            obj.type = Math.round(message.type);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgCreditsPortalMsg>, I>>(base?: I): CUsrMsgCreditsPortalMsg {
        return CUsrMsgCreditsPortalMsg.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgCreditsPortalMsg>, I>>(object: I): CUsrMsgCreditsPortalMsg {
        const message = createBaseCUsrMsgCreditsPortalMsg();
        message.type = object.type ?? 0;
        return message;
    },
};

function createBaseCUsrMsgControlHelperAnimate(): CUsrMsgControlHelperAnimate {
    return { clear: 0, frontIcon: 0 };
}

export const CUsrMsgControlHelperAnimate = {
    encode(message: CUsrMsgControlHelperAnimate, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.clear !== 0) {
            writer.uint32(8).int32(message.clear);
        }
        if (message.frontIcon !== 0) {
            writer.uint32(16).int32(message.frontIcon);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgControlHelperAnimate {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgControlHelperAnimate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.clear = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.frontIcon = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgControlHelperAnimate {
        return {
            clear: isSet(object.clear) ? globalThis.Number(object.clear) : 0,
            frontIcon: isSet(object.frontIcon) ? globalThis.Number(object.frontIcon) : 0,
        };
    },

    toJSON(message: CUsrMsgControlHelperAnimate): unknown {
        const obj: any = {};
        if (message.clear !== 0) {
            obj.clear = Math.round(message.clear);
        }
        if (message.frontIcon !== 0) {
            obj.frontIcon = Math.round(message.frontIcon);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgControlHelperAnimate>, I>>(base?: I): CUsrMsgControlHelperAnimate {
        return CUsrMsgControlHelperAnimate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgControlHelperAnimate>, I>>(object: I): CUsrMsgControlHelperAnimate {
        const message = createBaseCUsrMsgControlHelperAnimate();
        message.clear = object.clear ?? 0;
        message.frontIcon = object.frontIcon ?? 0;
        return message;
    },
};

function createBaseCUsrMsgHudPingIndicator(): CUsrMsgHudPingIndicator {
    return { location: undefined };
}

export const CUsrMsgHudPingIndicator = {
    encode(message: CUsrMsgHudPingIndicator, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.location !== undefined) {
            CMsgVector.encode(message.location, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgHudPingIndicator {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgHudPingIndicator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.location = CMsgVector.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgHudPingIndicator {
        return { location: isSet(object.location) ? CMsgVector.fromJSON(object.location) : undefined };
    },

    toJSON(message: CUsrMsgHudPingIndicator): unknown {
        const obj: any = {};
        if (message.location !== undefined) {
            obj.location = CMsgVector.toJSON(message.location);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgHudPingIndicator>, I>>(base?: I): CUsrMsgHudPingIndicator {
        return CUsrMsgHudPingIndicator.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgHudPingIndicator>, I>>(object: I): CUsrMsgHudPingIndicator {
        const message = createBaseCUsrMsgHudPingIndicator();
        message.location = (object.location !== undefined && object.location !== null)
            ? CMsgVector.fromPartial(object.location)
            : undefined;
        return message;
    },
};

function createBaseCUsrMsgOpenRadialMenu(): CUsrMsgOpenRadialMenu {
    return { data: 0 };
}

export const CUsrMsgOpenRadialMenu = {
    encode(message: CUsrMsgOpenRadialMenu, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.data !== 0) {
            writer.uint32(8).int32(message.data);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgOpenRadialMenu {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgOpenRadialMenu();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.data = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgOpenRadialMenu {
        return { data: isSet(object.data) ? globalThis.Number(object.data) : 0 };
    },

    toJSON(message: CUsrMsgOpenRadialMenu): unknown {
        const obj: any = {};
        if (message.data !== 0) {
            obj.data = Math.round(message.data);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgOpenRadialMenu>, I>>(base?: I): CUsrMsgOpenRadialMenu {
        return CUsrMsgOpenRadialMenu.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgOpenRadialMenu>, I>>(object: I): CUsrMsgOpenRadialMenu {
        const message = createBaseCUsrMsgOpenRadialMenu();
        message.data = object.data ?? 0;
        return message;
    },
};

function createBaseCUsrMsgAddLocator(): CUsrMsgAddLocator {
    return { entityIndex: 0, targetHandle: 0, time: 0, position: undefined, normal: undefined, command: '' };
}

export const CUsrMsgAddLocator = {
    encode(message: CUsrMsgAddLocator, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entityIndex !== 0) {
            writer.uint32(8).int32(message.entityIndex);
        }
        if (message.targetHandle !== 0) {
            writer.uint32(16).int64(message.targetHandle);
        }
        if (message.time !== 0) {
            writer.uint32(29).float(message.time);
        }
        if (message.position !== undefined) {
            CMsgVector.encode(message.position, writer.uint32(34).fork()).ldelim();
        }
        if (message.normal !== undefined) {
            CMsgVector.encode(message.normal, writer.uint32(42).fork()).ldelim();
        }
        if (message.command !== '') {
            writer.uint32(50).string(message.command);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgAddLocator {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgAddLocator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entityIndex = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.targetHandle = longToNumber(reader.int64() as Long);
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.time = reader.float();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.position = CMsgVector.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.normal = CMsgVector.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.command = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgAddLocator {
        return {
            entityIndex: isSet(object.entityIndex) ? globalThis.Number(object.entityIndex) : 0,
            targetHandle: isSet(object.targetHandle) ? globalThis.Number(object.targetHandle) : 0,
            time: isSet(object.time) ? globalThis.Number(object.time) : 0,
            position: isSet(object.position) ? CMsgVector.fromJSON(object.position) : undefined,
            normal: isSet(object.normal) ? CMsgVector.fromJSON(object.normal) : undefined,
            command: isSet(object.command) ? globalThis.String(object.command) : '',
        };
    },

    toJSON(message: CUsrMsgAddLocator): unknown {
        const obj: any = {};
        if (message.entityIndex !== 0) {
            obj.entityIndex = Math.round(message.entityIndex);
        }
        if (message.targetHandle !== 0) {
            obj.targetHandle = Math.round(message.targetHandle);
        }
        if (message.time !== 0) {
            obj.time = message.time;
        }
        if (message.position !== undefined) {
            obj.position = CMsgVector.toJSON(message.position);
        }
        if (message.normal !== undefined) {
            obj.normal = CMsgVector.toJSON(message.normal);
        }
        if (message.command !== '') {
            obj.command = message.command;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgAddLocator>, I>>(base?: I): CUsrMsgAddLocator {
        return CUsrMsgAddLocator.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgAddLocator>, I>>(object: I): CUsrMsgAddLocator {
        const message = createBaseCUsrMsgAddLocator();
        message.entityIndex = object.entityIndex ?? 0;
        message.targetHandle = object.targetHandle ?? 0;
        message.time = object.time ?? 0;
        message.position = (object.position !== undefined && object.position !== null)
            ? CMsgVector.fromPartial(object.position)
            : undefined;
        message.normal = (object.normal !== undefined && object.normal !== null)
            ? CMsgVector.fromPartial(object.normal)
            : undefined;
        message.command = object.command ?? '';
        return message;
    },
};

function createBaseCUsrMsgMPMapCompleted(): CUsrMsgMPMapCompleted {
    return { branch: 0, level: 0 };
}

export const CUsrMsgMPMapCompleted = {
    encode(message: CUsrMsgMPMapCompleted, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.branch !== 0) {
            writer.uint32(8).int32(message.branch);
        }
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPMapCompleted {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPMapCompleted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.branch = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.level = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPMapCompleted {
        return {
            branch: isSet(object.branch) ? globalThis.Number(object.branch) : 0,
            level: isSet(object.level) ? globalThis.Number(object.level) : 0,
        };
    },

    toJSON(message: CUsrMsgMPMapCompleted): unknown {
        const obj: any = {};
        if (message.branch !== 0) {
            obj.branch = Math.round(message.branch);
        }
        if (message.level !== 0) {
            obj.level = Math.round(message.level);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPMapCompleted>, I>>(base?: I): CUsrMsgMPMapCompleted {
        return CUsrMsgMPMapCompleted.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPMapCompleted>, I>>(object: I): CUsrMsgMPMapCompleted {
        const message = createBaseCUsrMsgMPMapCompleted();
        message.branch = object.branch ?? 0;
        message.level = object.level ?? 0;
        return message;
    },
};

function createBaseCUsrMsgMPMapIncomplete(): CUsrMsgMPMapIncomplete {
    return { branch: 0, level: 0 };
}

export const CUsrMsgMPMapIncomplete = {
    encode(message: CUsrMsgMPMapIncomplete, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.branch !== 0) {
            writer.uint32(8).int32(message.branch);
        }
        if (message.level !== 0) {
            writer.uint32(16).int32(message.level);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPMapIncomplete {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPMapIncomplete();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.branch = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.level = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPMapIncomplete {
        return {
            branch: isSet(object.branch) ? globalThis.Number(object.branch) : 0,
            level: isSet(object.level) ? globalThis.Number(object.level) : 0,
        };
    },

    toJSON(message: CUsrMsgMPMapIncomplete): unknown {
        const obj: any = {};
        if (message.branch !== 0) {
            obj.branch = Math.round(message.branch);
        }
        if (message.level !== 0) {
            obj.level = Math.round(message.level);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPMapIncomplete>, I>>(base?: I): CUsrMsgMPMapIncomplete {
        return CUsrMsgMPMapIncomplete.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPMapIncomplete>, I>>(object: I): CUsrMsgMPMapIncomplete {
        const message = createBaseCUsrMsgMPMapIncomplete();
        message.branch = object.branch ?? 0;
        message.level = object.level ?? 0;
        return message;
    },
};

function createBaseCUsrMsgMPMapCompletedData(): CUsrMsgMPMapCompletedData {
    return { data: new Uint8Array(0) };
}

export const CUsrMsgMPMapCompletedData = {
    encode(message: CUsrMsgMPMapCompletedData, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPMapCompletedData {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPMapCompletedData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.data = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPMapCompletedData {
        return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
    },

    toJSON(message: CUsrMsgMPMapCompletedData): unknown {
        const obj: any = {};
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPMapCompletedData>, I>>(base?: I): CUsrMsgMPMapCompletedData {
        return CUsrMsgMPMapCompletedData.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPMapCompletedData>, I>>(object: I): CUsrMsgMPMapCompletedData {
        const message = createBaseCUsrMsgMPMapCompletedData();
        message.data = object.data ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCUsrMsgMPTauntEarned(): CUsrMsgMPTauntEarned {
    return { taunt: '', silent: false };
}

export const CUsrMsgMPTauntEarned = {
    encode(message: CUsrMsgMPTauntEarned, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.taunt !== '') {
            writer.uint32(10).string(message.taunt);
        }
        if (message.silent === true) {
            writer.uint32(16).bool(message.silent);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPTauntEarned {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPTauntEarned();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.taunt = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.silent = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPTauntEarned {
        return {
            taunt: isSet(object.taunt) ? globalThis.String(object.taunt) : '',
            silent: isSet(object.silent) ? globalThis.Boolean(object.silent) : false,
        };
    },

    toJSON(message: CUsrMsgMPTauntEarned): unknown {
        const obj: any = {};
        if (message.taunt !== '') {
            obj.taunt = message.taunt;
        }
        if (message.silent === true) {
            obj.silent = message.silent;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPTauntEarned>, I>>(base?: I): CUsrMsgMPTauntEarned {
        return CUsrMsgMPTauntEarned.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPTauntEarned>, I>>(object: I): CUsrMsgMPTauntEarned {
        const message = createBaseCUsrMsgMPTauntEarned();
        message.taunt = object.taunt ?? '';
        message.silent = object.silent ?? false;
        return message;
    },
};

function createBaseCUsrMsgMPTauntUnlocked(): CUsrMsgMPTauntUnlocked {
    return { taunt: '' };
}

export const CUsrMsgMPTauntUnlocked = {
    encode(message: CUsrMsgMPTauntUnlocked, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.taunt !== '') {
            writer.uint32(10).string(message.taunt);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPTauntUnlocked {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPTauntUnlocked();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.taunt = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPTauntUnlocked {
        return { taunt: isSet(object.taunt) ? globalThis.String(object.taunt) : '' };
    },

    toJSON(message: CUsrMsgMPTauntUnlocked): unknown {
        const obj: any = {};
        if (message.taunt !== '') {
            obj.taunt = message.taunt;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPTauntUnlocked>, I>>(base?: I): CUsrMsgMPTauntUnlocked {
        return CUsrMsgMPTauntUnlocked.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPTauntUnlocked>, I>>(object: I): CUsrMsgMPTauntUnlocked {
        const message = createBaseCUsrMsgMPTauntUnlocked();
        message.taunt = object.taunt ?? '';
        return message;
    },
};

function createBaseCUsrMsgMPTauntLocked(): CUsrMsgMPTauntLocked {
    return { taunt: '' };
}

export const CUsrMsgMPTauntLocked = {
    encode(message: CUsrMsgMPTauntLocked, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.taunt !== '') {
            writer.uint32(10).string(message.taunt);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPTauntLocked {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPTauntLocked();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.taunt = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPTauntLocked {
        return { taunt: isSet(object.taunt) ? globalThis.String(object.taunt) : '' };
    },

    toJSON(message: CUsrMsgMPTauntLocked): unknown {
        const obj: any = {};
        if (message.taunt !== '') {
            obj.taunt = message.taunt;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPTauntLocked>, I>>(base?: I): CUsrMsgMPTauntLocked {
        return CUsrMsgMPTauntLocked.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPTauntLocked>, I>>(object: I): CUsrMsgMPTauntLocked {
        const message = createBaseCUsrMsgMPTauntLocked();
        message.taunt = object.taunt ?? '';
        return message;
    },
};

function createBaseCUsrMsgMPAllTauntsLocked(): CUsrMsgMPAllTauntsLocked {
    return { data: 0 };
}

export const CUsrMsgMPAllTauntsLocked = {
    encode(message: CUsrMsgMPAllTauntsLocked, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.data !== 0) {
            writer.uint32(8).int32(message.data);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPAllTauntsLocked {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPAllTauntsLocked();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.data = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPAllTauntsLocked {
        return { data: isSet(object.data) ? globalThis.Number(object.data) : 0 };
    },

    toJSON(message: CUsrMsgMPAllTauntsLocked): unknown {
        const obj: any = {};
        if (message.data !== 0) {
            obj.data = Math.round(message.data);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPAllTauntsLocked>, I>>(base?: I): CUsrMsgMPAllTauntsLocked {
        return CUsrMsgMPAllTauntsLocked.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPAllTauntsLocked>, I>>(object: I): CUsrMsgMPAllTauntsLocked {
        const message = createBaseCUsrMsgMPAllTauntsLocked();
        message.data = object.data ?? 0;
        return message;
    },
};

function createBaseCUsrMsgPortalFXSurface(): CUsrMsgPortalFXSurface {
    return { entityIndex: 0, playerIndex: 0, team: 0, portal: 0, effect: 0, origin: undefined, angles: undefined };
}

export const CUsrMsgPortalFXSurface = {
    encode(message: CUsrMsgPortalFXSurface, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entityIndex !== 0) {
            writer.uint32(8).int32(message.entityIndex);
        }
        if (message.playerIndex !== 0) {
            writer.uint32(16).int32(message.playerIndex);
        }
        if (message.team !== 0) {
            writer.uint32(24).int32(message.team);
        }
        if (message.portal !== 0) {
            writer.uint32(32).int32(message.portal);
        }
        if (message.effect !== 0) {
            writer.uint32(40).int32(message.effect);
        }
        if (message.origin !== undefined) {
            CMsgVector.encode(message.origin, writer.uint32(50).fork()).ldelim();
        }
        if (message.angles !== undefined) {
            CMsgQAngle.encode(message.angles, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPortalFXSurface {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPortalFXSurface();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entityIndex = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.playerIndex = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.team = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.portal = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.effect = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.origin = CMsgVector.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.angles = CMsgQAngle.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPortalFXSurface {
        return {
            entityIndex: isSet(object.entityIndex) ? globalThis.Number(object.entityIndex) : 0,
            playerIndex: isSet(object.playerIndex) ? globalThis.Number(object.playerIndex) : 0,
            team: isSet(object.team) ? globalThis.Number(object.team) : 0,
            portal: isSet(object.portal) ? globalThis.Number(object.portal) : 0,
            effect: isSet(object.effect) ? globalThis.Number(object.effect) : 0,
            origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
            angles: isSet(object.angles) ? CMsgQAngle.fromJSON(object.angles) : undefined,
        };
    },

    toJSON(message: CUsrMsgPortalFXSurface): unknown {
        const obj: any = {};
        if (message.entityIndex !== 0) {
            obj.entityIndex = Math.round(message.entityIndex);
        }
        if (message.playerIndex !== 0) {
            obj.playerIndex = Math.round(message.playerIndex);
        }
        if (message.team !== 0) {
            obj.team = Math.round(message.team);
        }
        if (message.portal !== 0) {
            obj.portal = Math.round(message.portal);
        }
        if (message.effect !== 0) {
            obj.effect = Math.round(message.effect);
        }
        if (message.origin !== undefined) {
            obj.origin = CMsgVector.toJSON(message.origin);
        }
        if (message.angles !== undefined) {
            obj.angles = CMsgQAngle.toJSON(message.angles);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPortalFXSurface>, I>>(base?: I): CUsrMsgPortalFXSurface {
        return CUsrMsgPortalFXSurface.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPortalFXSurface>, I>>(object: I): CUsrMsgPortalFXSurface {
        const message = createBaseCUsrMsgPortalFXSurface();
        message.entityIndex = object.entityIndex ?? 0;
        message.playerIndex = object.playerIndex ?? 0;
        message.team = object.team ?? 0;
        message.portal = object.portal ?? 0;
        message.effect = object.effect ?? 0;
        message.origin = (object.origin !== undefined && object.origin !== null)
            ? CMsgVector.fromPartial(object.origin)
            : undefined;
        message.angles = (object.angles !== undefined && object.angles !== null)
            ? CMsgQAngle.fromPartial(object.angles)
            : undefined;
        return message;
    },
};

function createBaseCUsrMsgPaintWorld(): CUsrMsgPaintWorld {
    return { brush: 0, power: 0, radius: 0, alpha: 0, locationCount: 0, center: undefined, offset: [] };
}

export const CUsrMsgPaintWorld = {
    encode(message: CUsrMsgPaintWorld, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.brush !== 0) {
            writer.uint32(8).int64(message.brush);
        }
        if (message.power !== 0) {
            writer.uint32(16).int32(message.power);
        }
        if (message.radius !== 0) {
            writer.uint32(29).float(message.radius);
        }
        if (message.alpha !== 0) {
            writer.uint32(37).float(message.alpha);
        }
        if (message.locationCount !== 0) {
            writer.uint32(40).int32(message.locationCount);
        }
        if (message.center !== undefined) {
            CMsgVector.encode(message.center, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.offset) {
            CMsgVector.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPaintWorld {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPaintWorld();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.brush = longToNumber(reader.int64() as Long);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.power = reader.int32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.radius = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }

                    message.alpha = reader.float();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.locationCount = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.center = CMsgVector.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.offset.push(CMsgVector.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPaintWorld {
        return {
            brush: isSet(object.brush) ? globalThis.Number(object.brush) : 0,
            power: isSet(object.power) ? globalThis.Number(object.power) : 0,
            radius: isSet(object.radius) ? globalThis.Number(object.radius) : 0,
            alpha: isSet(object.alpha) ? globalThis.Number(object.alpha) : 0,
            locationCount: isSet(object.locationCount) ? globalThis.Number(object.locationCount) : 0,
            center: isSet(object.center) ? CMsgVector.fromJSON(object.center) : undefined,
            offset: globalThis.Array.isArray(object?.offset)
                ? object.offset.map((e: any) => CMsgVector.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CUsrMsgPaintWorld): unknown {
        const obj: any = {};
        if (message.brush !== 0) {
            obj.brush = Math.round(message.brush);
        }
        if (message.power !== 0) {
            obj.power = Math.round(message.power);
        }
        if (message.radius !== 0) {
            obj.radius = message.radius;
        }
        if (message.alpha !== 0) {
            obj.alpha = message.alpha;
        }
        if (message.locationCount !== 0) {
            obj.locationCount = Math.round(message.locationCount);
        }
        if (message.center !== undefined) {
            obj.center = CMsgVector.toJSON(message.center);
        }
        if (message.offset?.length) {
            obj.offset = message.offset.map((e) => CMsgVector.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPaintWorld>, I>>(base?: I): CUsrMsgPaintWorld {
        return CUsrMsgPaintWorld.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPaintWorld>, I>>(object: I): CUsrMsgPaintWorld {
        const message = createBaseCUsrMsgPaintWorld();
        message.brush = object.brush ?? 0;
        message.power = object.power ?? 0;
        message.radius = object.radius ?? 0;
        message.alpha = object.alpha ?? 0;
        message.locationCount = object.locationCount ?? 0;
        message.center = (object.center !== undefined && object.center !== null)
            ? CMsgVector.fromPartial(object.center)
            : undefined;
        message.offset = object.offset?.map((e) => CMsgVector.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCUsrMsgPaintEntity(): CUsrMsgPaintEntity {
    return { entity: 0, power: 0, center: undefined };
}

export const CUsrMsgPaintEntity = {
    encode(message: CUsrMsgPaintEntity, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entity !== 0) {
            writer.uint32(8).int64(message.entity);
        }
        if (message.power !== 0) {
            writer.uint32(16).int32(message.power);
        }
        if (message.center !== undefined) {
            CMsgVector.encode(message.center, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPaintEntity {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPaintEntity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entity = longToNumber(reader.int64() as Long);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.power = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.center = CMsgVector.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPaintEntity {
        return {
            entity: isSet(object.entity) ? globalThis.Number(object.entity) : 0,
            power: isSet(object.power) ? globalThis.Number(object.power) : 0,
            center: isSet(object.center) ? CMsgVector.fromJSON(object.center) : undefined,
        };
    },

    toJSON(message: CUsrMsgPaintEntity): unknown {
        const obj: any = {};
        if (message.entity !== 0) {
            obj.entity = Math.round(message.entity);
        }
        if (message.power !== 0) {
            obj.power = Math.round(message.power);
        }
        if (message.center !== undefined) {
            obj.center = CMsgVector.toJSON(message.center);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPaintEntity>, I>>(base?: I): CUsrMsgPaintEntity {
        return CUsrMsgPaintEntity.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPaintEntity>, I>>(object: I): CUsrMsgPaintEntity {
        const message = createBaseCUsrMsgPaintEntity();
        message.entity = object.entity ?? 0;
        message.power = object.power ?? 0;
        message.center = (object.center !== undefined && object.center !== null)
            ? CMsgVector.fromPartial(object.center)
            : undefined;
        return message;
    },
};

function createBaseCUsrMsgChangePaintColor(): CUsrMsgChangePaintColor {
    return { weapon: 0, power: 0 };
}

export const CUsrMsgChangePaintColor = {
    encode(message: CUsrMsgChangePaintColor, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.weapon !== 0) {
            writer.uint32(8).int64(message.weapon);
        }
        if (message.power !== 0) {
            writer.uint32(16).int32(message.power);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgChangePaintColor {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgChangePaintColor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.weapon = longToNumber(reader.int64() as Long);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.power = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgChangePaintColor {
        return {
            weapon: isSet(object.weapon) ? globalThis.Number(object.weapon) : 0,
            power: isSet(object.power) ? globalThis.Number(object.power) : 0,
        };
    },

    toJSON(message: CUsrMsgChangePaintColor): unknown {
        const obj: any = {};
        if (message.weapon !== 0) {
            obj.weapon = Math.round(message.weapon);
        }
        if (message.power !== 0) {
            obj.power = Math.round(message.power);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgChangePaintColor>, I>>(base?: I): CUsrMsgChangePaintColor {
        return CUsrMsgChangePaintColor.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgChangePaintColor>, I>>(object: I): CUsrMsgChangePaintColor {
        const message = createBaseCUsrMsgChangePaintColor();
        message.weapon = object.weapon ?? 0;
        message.power = object.power ?? 0;
        return message;
    },
};

function createBaseCUsrMsgRemoveAllPaint(): CUsrMsgRemoveAllPaint {
    return { data: 0 };
}

export const CUsrMsgRemoveAllPaint = {
    encode(message: CUsrMsgRemoveAllPaint, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.data !== 0) {
            writer.uint32(8).int32(message.data);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgRemoveAllPaint {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgRemoveAllPaint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.data = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgRemoveAllPaint {
        return { data: isSet(object.data) ? globalThis.Number(object.data) : 0 };
    },

    toJSON(message: CUsrMsgRemoveAllPaint): unknown {
        const obj: any = {};
        if (message.data !== 0) {
            obj.data = Math.round(message.data);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgRemoveAllPaint>, I>>(base?: I): CUsrMsgRemoveAllPaint {
        return CUsrMsgRemoveAllPaint.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgRemoveAllPaint>, I>>(object: I): CUsrMsgRemoveAllPaint {
        const message = createBaseCUsrMsgRemoveAllPaint();
        message.data = object.data ?? 0;
        return message;
    },
};

function createBaseCUsrMsgPaintAllSurfaces(): CUsrMsgPaintAllSurfaces {
    return { power: 0 };
}

export const CUsrMsgPaintAllSurfaces = {
    encode(message: CUsrMsgPaintAllSurfaces, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.power !== 0) {
            writer.uint32(8).int32(message.power);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPaintAllSurfaces {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPaintAllSurfaces();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.power = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPaintAllSurfaces {
        return { power: isSet(object.power) ? globalThis.Number(object.power) : 0 };
    },

    toJSON(message: CUsrMsgPaintAllSurfaces): unknown {
        const obj: any = {};
        if (message.power !== 0) {
            obj.power = Math.round(message.power);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPaintAllSurfaces>, I>>(base?: I): CUsrMsgPaintAllSurfaces {
        return CUsrMsgPaintAllSurfaces.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPaintAllSurfaces>, I>>(object: I): CUsrMsgPaintAllSurfaces {
        const message = createBaseCUsrMsgPaintAllSurfaces();
        message.power = object.power ?? 0;
        return message;
    },
};

function createBaseCUsrMsgRemovePaint(): CUsrMsgRemovePaint {
    return { entity: 0 };
}

export const CUsrMsgRemovePaint = {
    encode(message: CUsrMsgRemovePaint, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entity !== 0) {
            writer.uint32(8).int64(message.entity);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgRemovePaint {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgRemovePaint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entity = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgRemovePaint {
        return { entity: isSet(object.entity) ? globalThis.Number(object.entity) : 0 };
    },

    toJSON(message: CUsrMsgRemovePaint): unknown {
        const obj: any = {};
        if (message.entity !== 0) {
            obj.entity = Math.round(message.entity);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgRemovePaint>, I>>(base?: I): CUsrMsgRemovePaint {
        return CUsrMsgRemovePaint.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgRemovePaint>, I>>(object: I): CUsrMsgRemovePaint {
        const message = createBaseCUsrMsgRemovePaint();
        message.entity = object.entity ?? 0;
        return message;
    },
};

function createBaseCUsrMsgApplyHitBoxDamageEffect(): CUsrMsgApplyHitBoxDamageEffect {
    return { entity: 0, damageEffect: 0, particleEffect: 0 };
}

export const CUsrMsgApplyHitBoxDamageEffect = {
    encode(message: CUsrMsgApplyHitBoxDamageEffect, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entity !== 0) {
            writer.uint32(8).int64(message.entity);
        }
        if (message.damageEffect !== 0) {
            writer.uint32(16).int32(message.damageEffect);
        }
        if (message.particleEffect !== 0) {
            writer.uint32(24).int32(message.particleEffect);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgApplyHitBoxDamageEffect {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgApplyHitBoxDamageEffect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entity = longToNumber(reader.int64() as Long);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.damageEffect = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.particleEffect = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgApplyHitBoxDamageEffect {
        return {
            entity: isSet(object.entity) ? globalThis.Number(object.entity) : 0,
            damageEffect: isSet(object.damageEffect) ? globalThis.Number(object.damageEffect) : 0,
            particleEffect: isSet(object.particleEffect) ? globalThis.Number(object.particleEffect) : 0,
        };
    },

    toJSON(message: CUsrMsgApplyHitBoxDamageEffect): unknown {
        const obj: any = {};
        if (message.entity !== 0) {
            obj.entity = Math.round(message.entity);
        }
        if (message.damageEffect !== 0) {
            obj.damageEffect = Math.round(message.damageEffect);
        }
        if (message.particleEffect !== 0) {
            obj.particleEffect = Math.round(message.particleEffect);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgApplyHitBoxDamageEffect>, I>>(base?: I): CUsrMsgApplyHitBoxDamageEffect {
        return CUsrMsgApplyHitBoxDamageEffect.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgApplyHitBoxDamageEffect>, I>>(
        object: I,
    ): CUsrMsgApplyHitBoxDamageEffect {
        const message = createBaseCUsrMsgApplyHitBoxDamageEffect();
        message.entity = object.entity ?? 0;
        message.damageEffect = object.damageEffect ?? 0;
        message.particleEffect = object.particleEffect ?? 0;
        return message;
    },
};

function createBaseCUsrMsgSetMixLayerTriggerFactor(): CUsrMsgSetMixLayerTriggerFactor {
    return { layer: '', group: '', factor: 0 };
}

export const CUsrMsgSetMixLayerTriggerFactor = {
    encode(message: CUsrMsgSetMixLayerTriggerFactor, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.layer !== '') {
            writer.uint32(10).string(message.layer);
        }
        if (message.group !== '') {
            writer.uint32(18).string(message.group);
        }
        if (message.factor !== 0) {
            writer.uint32(29).float(message.factor);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgSetMixLayerTriggerFactor {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgSetMixLayerTriggerFactor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.layer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.group = reader.string();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.factor = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgSetMixLayerTriggerFactor {
        return {
            layer: isSet(object.layer) ? globalThis.String(object.layer) : '',
            group: isSet(object.group) ? globalThis.String(object.group) : '',
            factor: isSet(object.factor) ? globalThis.Number(object.factor) : 0,
        };
    },

    toJSON(message: CUsrMsgSetMixLayerTriggerFactor): unknown {
        const obj: any = {};
        if (message.layer !== '') {
            obj.layer = message.layer;
        }
        if (message.group !== '') {
            obj.group = message.group;
        }
        if (message.factor !== 0) {
            obj.factor = message.factor;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgSetMixLayerTriggerFactor>, I>>(
        base?: I,
    ): CUsrMsgSetMixLayerTriggerFactor {
        return CUsrMsgSetMixLayerTriggerFactor.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgSetMixLayerTriggerFactor>, I>>(
        object: I,
    ): CUsrMsgSetMixLayerTriggerFactor {
        const message = createBaseCUsrMsgSetMixLayerTriggerFactor();
        message.layer = object.layer ?? '';
        message.group = object.group ?? '';
        message.factor = object.factor ?? 0;
        return message;
    },
};

function createBaseCUsrMsgTransitionFade(): CUsrMsgTransitionFade {
    return { time: 0 };
}

export const CUsrMsgTransitionFade = {
    encode(message: CUsrMsgTransitionFade, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.time !== 0) {
            writer.uint32(13).float(message.time);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgTransitionFade {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgTransitionFade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.time = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgTransitionFade {
        return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
    },

    toJSON(message: CUsrMsgTransitionFade): unknown {
        const obj: any = {};
        if (message.time !== 0) {
            obj.time = message.time;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgTransitionFade>, I>>(base?: I): CUsrMsgTransitionFade {
        return CUsrMsgTransitionFade.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgTransitionFade>, I>>(object: I): CUsrMsgTransitionFade {
        const message = createBaseCUsrMsgTransitionFade();
        message.time = object.time ?? 0;
        return message;
    },
};

function createBaseCUsrMsgScoreboardTempUpdate(): CUsrMsgScoreboardTempUpdate {
    return { portals: 0, time: 0 };
}

export const CUsrMsgScoreboardTempUpdate = {
    encode(message: CUsrMsgScoreboardTempUpdate, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.portals !== 0) {
            writer.uint32(8).int64(message.portals);
        }
        if (message.time !== 0) {
            writer.uint32(16).int64(message.time);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgScoreboardTempUpdate {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgScoreboardTempUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.portals = longToNumber(reader.int64() as Long);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.time = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgScoreboardTempUpdate {
        return {
            portals: isSet(object.portals) ? globalThis.Number(object.portals) : 0,
            time: isSet(object.time) ? globalThis.Number(object.time) : 0,
        };
    },

    toJSON(message: CUsrMsgScoreboardTempUpdate): unknown {
        const obj: any = {};
        if (message.portals !== 0) {
            obj.portals = Math.round(message.portals);
        }
        if (message.time !== 0) {
            obj.time = Math.round(message.time);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgScoreboardTempUpdate>, I>>(base?: I): CUsrMsgScoreboardTempUpdate {
        return CUsrMsgScoreboardTempUpdate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgScoreboardTempUpdate>, I>>(object: I): CUsrMsgScoreboardTempUpdate {
        const message = createBaseCUsrMsgScoreboardTempUpdate();
        message.portals = object.portals ?? 0;
        message.time = object.time ?? 0;
        return message;
    },
};

function createBaseCUsrMsgChallengeModeCheatSession(): CUsrMsgChallengeModeCheatSession {
    return { data: 0 };
}

export const CUsrMsgChallengeModeCheatSession = {
    encode(message: CUsrMsgChallengeModeCheatSession, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.data !== 0) {
            writer.uint32(8).int32(message.data);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgChallengeModeCheatSession {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgChallengeModeCheatSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.data = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgChallengeModeCheatSession {
        return { data: isSet(object.data) ? globalThis.Number(object.data) : 0 };
    },

    toJSON(message: CUsrMsgChallengeModeCheatSession): unknown {
        const obj: any = {};
        if (message.data !== 0) {
            obj.data = Math.round(message.data);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgChallengeModeCheatSession>, I>>(
        base?: I,
    ): CUsrMsgChallengeModeCheatSession {
        return CUsrMsgChallengeModeCheatSession.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgChallengeModeCheatSession>, I>>(
        object: I,
    ): CUsrMsgChallengeModeCheatSession {
        const message = createBaseCUsrMsgChallengeModeCheatSession();
        message.data = object.data ?? 0;
        return message;
    },
};

function createBaseCUsrMsgChallengeModeCloseAllUI(): CUsrMsgChallengeModeCloseAllUI {
    return { data: 0 };
}

export const CUsrMsgChallengeModeCloseAllUI = {
    encode(message: CUsrMsgChallengeModeCloseAllUI, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.data !== 0) {
            writer.uint32(8).int32(message.data);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgChallengeModeCloseAllUI {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgChallengeModeCloseAllUI();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.data = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgChallengeModeCloseAllUI {
        return { data: isSet(object.data) ? globalThis.Number(object.data) : 0 };
    },

    toJSON(message: CUsrMsgChallengeModeCloseAllUI): unknown {
        const obj: any = {};
        if (message.data !== 0) {
            obj.data = Math.round(message.data);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgChallengeModeCloseAllUI>, I>>(base?: I): CUsrMsgChallengeModeCloseAllUI {
        return CUsrMsgChallengeModeCloseAllUI.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgChallengeModeCloseAllUI>, I>>(
        object: I,
    ): CUsrMsgChallengeModeCloseAllUI {
        const message = createBaseCUsrMsgChallengeModeCloseAllUI();
        message.data = object.data ?? 0;
        return message;
    },
};

function createBaseCUsrMsgMPVSGameStart(): CUsrMsgMPVSGameStart {
    return { countdown: false };
}

export const CUsrMsgMPVSGameStart = {
    encode(message: CUsrMsgMPVSGameStart, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.countdown === true) {
            writer.uint32(8).bool(message.countdown);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPVSGameStart {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPVSGameStart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.countdown = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPVSGameStart {
        return { countdown: isSet(object.countdown) ? globalThis.Boolean(object.countdown) : false };
    },

    toJSON(message: CUsrMsgMPVSGameStart): unknown {
        const obj: any = {};
        if (message.countdown === true) {
            obj.countdown = message.countdown;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPVSGameStart>, I>>(base?: I): CUsrMsgMPVSGameStart {
        return CUsrMsgMPVSGameStart.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPVSGameStart>, I>>(object: I): CUsrMsgMPVSGameStart {
        const message = createBaseCUsrMsgMPVSGameStart();
        message.countdown = object.countdown ?? false;
        return message;
    },
};

function createBaseCUsrMsgMPVSGameOver(): CUsrMsgMPVSGameOver {
    return { winner: 0 };
}

export const CUsrMsgMPVSGameOver = {
    encode(message: CUsrMsgMPVSGameOver, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.winner !== 0) {
            writer.uint32(8).int32(message.winner);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPVSGameOver {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPVSGameOver();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.winner = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPVSGameOver {
        return { winner: isSet(object.winner) ? globalThis.Number(object.winner) : 0 };
    },

    toJSON(message: CUsrMsgMPVSGameOver): unknown {
        const obj: any = {};
        if (message.winner !== 0) {
            obj.winner = Math.round(message.winner);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPVSGameOver>, I>>(base?: I): CUsrMsgMPVSGameOver {
        return CUsrMsgMPVSGameOver.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPVSGameOver>, I>>(object: I): CUsrMsgMPVSGameOver {
        const message = createBaseCUsrMsgMPVSGameOver();
        message.winner = object.winner ?? 0;
        return message;
    },
};

function createBaseCUsrMsgMPVSRoundEnd(): CUsrMsgMPVSRoundEnd {
    return { winner: 0 };
}

export const CUsrMsgMPVSRoundEnd = {
    encode(message: CUsrMsgMPVSRoundEnd, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.winner !== 0) {
            writer.uint32(8).int32(message.winner);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMPVSRoundEnd {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMPVSRoundEnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.winner = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMPVSRoundEnd {
        return { winner: isSet(object.winner) ? globalThis.Number(object.winner) : 0 };
    },

    toJSON(message: CUsrMsgMPVSRoundEnd): unknown {
        const obj: any = {};
        if (message.winner !== 0) {
            obj.winner = Math.round(message.winner);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMPVSRoundEnd>, I>>(base?: I): CUsrMsgMPVSRoundEnd {
        return CUsrMsgMPVSRoundEnd.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMPVSRoundEnd>, I>>(object: I): CUsrMsgMPVSRoundEnd {
        const message = createBaseCUsrMsgMPVSRoundEnd();
        message.winner = object.winner ?? 0;
        return message;
    },
};

function createBaseCUsrMsgPlaytestUpdate(): CUsrMsgPlaytestUpdate {
    return { type: 1 };
}

export const CUsrMsgPlaytestUpdate = {
    encode(message: CUsrMsgPlaytestUpdate, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.type !== 1) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPlaytestUpdate {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPlaytestUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.type = reader.int32() as any;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPlaytestUpdate {
        return { type: isSet(object.type) ? cUsrMsgPlaytestUpdate_TypeFromJSON(object.type) : 1 };
    },

    toJSON(message: CUsrMsgPlaytestUpdate): unknown {
        const obj: any = {};
        if (message.type !== 1) {
            obj.type = cUsrMsgPlaytestUpdate_TypeToJSON(message.type);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPlaytestUpdate>, I>>(base?: I): CUsrMsgPlaytestUpdate {
        return CUsrMsgPlaytestUpdate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPlaytestUpdate>, I>>(object: I): CUsrMsgPlaytestUpdate {
        const message = createBaseCUsrMsgPlaytestUpdate();
        message.type = object.type ?? 1;
        return message;
    },
};

function bytesFromBase64(b64: string): Uint8Array {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    arr.forEach((byte) => {
        bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
    : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
    : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (pb.util.Long !== Long) {
    pb.util.Long = Long as any;
    pb.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
