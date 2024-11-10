import pb from 'npm:protobufjs/minimal.js';
import Long from 'npm:long';
import { CMsgQAngle, CMsgRGBA, CMsgVector, CMsgVector2D } from './netmessages.ts';

export const protobufPackage = '';

export enum EUserMessages {
    UM_VGUIMenu = 1,
    UM_Geiger = 2,
    UM_Train = 3,
    UM_HudText = 4,
    UM_SayText = 5,
    UM_SayText2 = 6,
    UM_TextMsg = 7,
    UM_HudMsg = 8,
    UM_ResetHud = 9,
    UM_Shake = 12,
    UM_Fade = 13,
    UM_Rumble = 14,
    UM_CloseCaption = 15,
    UM_CloseCaptionDirect = 16,
    UM_SendAudio = 17,
    UM_RawAudio = 18,
    UM_VoiceMask = 19,
    UM_RequestState = 20,
    UM_Damage = 21,
    UM_RadioText = 22,
    UM_HintText = 23,
    UM_KeyHintText = 24,
    UM_UpdateTeamMoney = 28,
    UM_StopSpectatorMode = 29,
    UM_DesiredTimescale = 31,
    UM_CurrentTimescale = 32,
    UM_AchievementEvent = 33,
    UM_PlayerStatsUpdate = 36,
    UM_CallVoteFailed = 45,
    UM_VoteStart = 46,
    UM_VotePass = 47,
    UM_VoteFailed = 48,
    UM_VoteSetup = 49,
    UM_SendLastKillerDamageToClient = 51,
    UM_ItemPickup = 53,
    UM_ShowMenu = 54,
    UM_BarTime = 55,
    UM_AmmoDenied = 56,
    UM_MarkAchievement = 57,
    UM_GlowPropTurnOff = 60,
    UM_SendPlayerItemDrops = 61,
    UM_SendPlayerItemFound = 63,
    UM_XpUpdate = 65,
    UM_ScoreLeaderboardData = 67,
    UM_PlayerDecalDigitalSignature = 68,
    UM_WeaponSound = 69,
    UM_UpdateScreenHealthBar = 70,
    UM_EntityOutlineHighlight = 71,
    UM_SSUI = 72,
    UM_SurvivalStats = 73,
    UM_DisconnectToLobby2 = 74,
    UM_Tilt = 250,
    UM_Battery = 251,
    UM_CreditsMsg = 253,
    UM_LogoTimeMsg = 254,
    UM_UpdateJalopyRadar = 255,
    UM_MessageText = 256,
    UM_StatsSkipState = 258,
    UM_PanoramaEvent = 512,
    UNRECOGNIZED = -1,
}

export function eUserMessagesFromJSON(object: any): EUserMessages {
    switch (object) {
        case 1:
        case 'UM_VGUIMenu':
            return EUserMessages.UM_VGUIMenu;
        case 2:
        case 'UM_Geiger':
            return EUserMessages.UM_Geiger;
        case 3:
        case 'UM_Train':
            return EUserMessages.UM_Train;
        case 4:
        case 'UM_HudText':
            return EUserMessages.UM_HudText;
        case 5:
        case 'UM_SayText':
            return EUserMessages.UM_SayText;
        case 6:
        case 'UM_SayText2':
            return EUserMessages.UM_SayText2;
        case 7:
        case 'UM_TextMsg':
            return EUserMessages.UM_TextMsg;
        case 8:
        case 'UM_HudMsg':
            return EUserMessages.UM_HudMsg;
        case 9:
        case 'UM_ResetHud':
            return EUserMessages.UM_ResetHud;
        case 12:
        case 'UM_Shake':
            return EUserMessages.UM_Shake;
        case 13:
        case 'UM_Fade':
            return EUserMessages.UM_Fade;
        case 14:
        case 'UM_Rumble':
            return EUserMessages.UM_Rumble;
        case 15:
        case 'UM_CloseCaption':
            return EUserMessages.UM_CloseCaption;
        case 16:
        case 'UM_CloseCaptionDirect':
            return EUserMessages.UM_CloseCaptionDirect;
        case 17:
        case 'UM_SendAudio':
            return EUserMessages.UM_SendAudio;
        case 18:
        case 'UM_RawAudio':
            return EUserMessages.UM_RawAudio;
        case 19:
        case 'UM_VoiceMask':
            return EUserMessages.UM_VoiceMask;
        case 20:
        case 'UM_RequestState':
            return EUserMessages.UM_RequestState;
        case 21:
        case 'UM_Damage':
            return EUserMessages.UM_Damage;
        case 22:
        case 'UM_RadioText':
            return EUserMessages.UM_RadioText;
        case 23:
        case 'UM_HintText':
            return EUserMessages.UM_HintText;
        case 24:
        case 'UM_KeyHintText':
            return EUserMessages.UM_KeyHintText;
        case 28:
        case 'UM_UpdateTeamMoney':
            return EUserMessages.UM_UpdateTeamMoney;
        case 29:
        case 'UM_StopSpectatorMode':
            return EUserMessages.UM_StopSpectatorMode;
        case 31:
        case 'UM_DesiredTimescale':
            return EUserMessages.UM_DesiredTimescale;
        case 32:
        case 'UM_CurrentTimescale':
            return EUserMessages.UM_CurrentTimescale;
        case 33:
        case 'UM_AchievementEvent':
            return EUserMessages.UM_AchievementEvent;
        case 36:
        case 'UM_PlayerStatsUpdate':
            return EUserMessages.UM_PlayerStatsUpdate;
        case 45:
        case 'UM_CallVoteFailed':
            return EUserMessages.UM_CallVoteFailed;
        case 46:
        case 'UM_VoteStart':
            return EUserMessages.UM_VoteStart;
        case 47:
        case 'UM_VotePass':
            return EUserMessages.UM_VotePass;
        case 48:
        case 'UM_VoteFailed':
            return EUserMessages.UM_VoteFailed;
        case 49:
        case 'UM_VoteSetup':
            return EUserMessages.UM_VoteSetup;
        case 51:
        case 'UM_SendLastKillerDamageToClient':
            return EUserMessages.UM_SendLastKillerDamageToClient;
        case 53:
        case 'UM_ItemPickup':
            return EUserMessages.UM_ItemPickup;
        case 54:
        case 'UM_ShowMenu':
            return EUserMessages.UM_ShowMenu;
        case 55:
        case 'UM_BarTime':
            return EUserMessages.UM_BarTime;
        case 56:
        case 'UM_AmmoDenied':
            return EUserMessages.UM_AmmoDenied;
        case 57:
        case 'UM_MarkAchievement':
            return EUserMessages.UM_MarkAchievement;
        case 60:
        case 'UM_GlowPropTurnOff':
            return EUserMessages.UM_GlowPropTurnOff;
        case 61:
        case 'UM_SendPlayerItemDrops':
            return EUserMessages.UM_SendPlayerItemDrops;
        case 63:
        case 'UM_SendPlayerItemFound':
            return EUserMessages.UM_SendPlayerItemFound;
        case 65:
        case 'UM_XpUpdate':
            return EUserMessages.UM_XpUpdate;
        case 67:
        case 'UM_ScoreLeaderboardData':
            return EUserMessages.UM_ScoreLeaderboardData;
        case 68:
        case 'UM_PlayerDecalDigitalSignature':
            return EUserMessages.UM_PlayerDecalDigitalSignature;
        case 69:
        case 'UM_WeaponSound':
            return EUserMessages.UM_WeaponSound;
        case 70:
        case 'UM_UpdateScreenHealthBar':
            return EUserMessages.UM_UpdateScreenHealthBar;
        case 71:
        case 'UM_EntityOutlineHighlight':
            return EUserMessages.UM_EntityOutlineHighlight;
        case 72:
        case 'UM_SSUI':
            return EUserMessages.UM_SSUI;
        case 73:
        case 'UM_SurvivalStats':
            return EUserMessages.UM_SurvivalStats;
        case 74:
        case 'UM_DisconnectToLobby2':
            return EUserMessages.UM_DisconnectToLobby2;
        case 250:
        case 'UM_Tilt':
            return EUserMessages.UM_Tilt;
        case 251:
        case 'UM_Battery':
            return EUserMessages.UM_Battery;
        case 253:
        case 'UM_CreditsMsg':
            return EUserMessages.UM_CreditsMsg;
        case 254:
        case 'UM_LogoTimeMsg':
            return EUserMessages.UM_LogoTimeMsg;
        case 255:
        case 'UM_UpdateJalopyRadar':
            return EUserMessages.UM_UpdateJalopyRadar;
        case 256:
        case 'UM_MessageText':
            return EUserMessages.UM_MessageText;
        case 258:
        case 'UM_StatsSkipState':
            return EUserMessages.UM_StatsSkipState;
        case 512:
        case 'UM_PanoramaEvent':
            return EUserMessages.UM_PanoramaEvent;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return EUserMessages.UNRECOGNIZED;
    }
}

export function eUserMessagesToJSON(object: EUserMessages): string {
    switch (object) {
        case EUserMessages.UM_VGUIMenu:
            return 'UM_VGUIMenu';
        case EUserMessages.UM_Geiger:
            return 'UM_Geiger';
        case EUserMessages.UM_Train:
            return 'UM_Train';
        case EUserMessages.UM_HudText:
            return 'UM_HudText';
        case EUserMessages.UM_SayText:
            return 'UM_SayText';
        case EUserMessages.UM_SayText2:
            return 'UM_SayText2';
        case EUserMessages.UM_TextMsg:
            return 'UM_TextMsg';
        case EUserMessages.UM_HudMsg:
            return 'UM_HudMsg';
        case EUserMessages.UM_ResetHud:
            return 'UM_ResetHud';
        case EUserMessages.UM_Shake:
            return 'UM_Shake';
        case EUserMessages.UM_Fade:
            return 'UM_Fade';
        case EUserMessages.UM_Rumble:
            return 'UM_Rumble';
        case EUserMessages.UM_CloseCaption:
            return 'UM_CloseCaption';
        case EUserMessages.UM_CloseCaptionDirect:
            return 'UM_CloseCaptionDirect';
        case EUserMessages.UM_SendAudio:
            return 'UM_SendAudio';
        case EUserMessages.UM_RawAudio:
            return 'UM_RawAudio';
        case EUserMessages.UM_VoiceMask:
            return 'UM_VoiceMask';
        case EUserMessages.UM_RequestState:
            return 'UM_RequestState';
        case EUserMessages.UM_Damage:
            return 'UM_Damage';
        case EUserMessages.UM_RadioText:
            return 'UM_RadioText';
        case EUserMessages.UM_HintText:
            return 'UM_HintText';
        case EUserMessages.UM_KeyHintText:
            return 'UM_KeyHintText';
        case EUserMessages.UM_UpdateTeamMoney:
            return 'UM_UpdateTeamMoney';
        case EUserMessages.UM_StopSpectatorMode:
            return 'UM_StopSpectatorMode';
        case EUserMessages.UM_DesiredTimescale:
            return 'UM_DesiredTimescale';
        case EUserMessages.UM_CurrentTimescale:
            return 'UM_CurrentTimescale';
        case EUserMessages.UM_AchievementEvent:
            return 'UM_AchievementEvent';
        case EUserMessages.UM_PlayerStatsUpdate:
            return 'UM_PlayerStatsUpdate';
        case EUserMessages.UM_CallVoteFailed:
            return 'UM_CallVoteFailed';
        case EUserMessages.UM_VoteStart:
            return 'UM_VoteStart';
        case EUserMessages.UM_VotePass:
            return 'UM_VotePass';
        case EUserMessages.UM_VoteFailed:
            return 'UM_VoteFailed';
        case EUserMessages.UM_VoteSetup:
            return 'UM_VoteSetup';
        case EUserMessages.UM_SendLastKillerDamageToClient:
            return 'UM_SendLastKillerDamageToClient';
        case EUserMessages.UM_ItemPickup:
            return 'UM_ItemPickup';
        case EUserMessages.UM_ShowMenu:
            return 'UM_ShowMenu';
        case EUserMessages.UM_BarTime:
            return 'UM_BarTime';
        case EUserMessages.UM_AmmoDenied:
            return 'UM_AmmoDenied';
        case EUserMessages.UM_MarkAchievement:
            return 'UM_MarkAchievement';
        case EUserMessages.UM_GlowPropTurnOff:
            return 'UM_GlowPropTurnOff';
        case EUserMessages.UM_SendPlayerItemDrops:
            return 'UM_SendPlayerItemDrops';
        case EUserMessages.UM_SendPlayerItemFound:
            return 'UM_SendPlayerItemFound';
        case EUserMessages.UM_XpUpdate:
            return 'UM_XpUpdate';
        case EUserMessages.UM_ScoreLeaderboardData:
            return 'UM_ScoreLeaderboardData';
        case EUserMessages.UM_PlayerDecalDigitalSignature:
            return 'UM_PlayerDecalDigitalSignature';
        case EUserMessages.UM_WeaponSound:
            return 'UM_WeaponSound';
        case EUserMessages.UM_UpdateScreenHealthBar:
            return 'UM_UpdateScreenHealthBar';
        case EUserMessages.UM_EntityOutlineHighlight:
            return 'UM_EntityOutlineHighlight';
        case EUserMessages.UM_SSUI:
            return 'UM_SSUI';
        case EUserMessages.UM_SurvivalStats:
            return 'UM_SurvivalStats';
        case EUserMessages.UM_DisconnectToLobby2:
            return 'UM_DisconnectToLobby2';
        case EUserMessages.UM_Tilt:
            return 'UM_Tilt';
        case EUserMessages.UM_Battery:
            return 'UM_Battery';
        case EUserMessages.UM_CreditsMsg:
            return 'UM_CreditsMsg';
        case EUserMessages.UM_LogoTimeMsg:
            return 'UM_LogoTimeMsg';
        case EUserMessages.UM_UpdateJalopyRadar:
            return 'UM_UpdateJalopyRadar';
        case EUserMessages.UM_MessageText:
            return 'UM_MessageText';
        case EUserMessages.UM_StatsSkipState:
            return 'UM_StatsSkipState';
        case EUserMessages.UM_PanoramaEvent:
            return 'UM_PanoramaEvent';
        case EUserMessages.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface CUsrMsgVGUIMenu {
    name: string;
    show: boolean;
    subkeys: CUsrMsgVGUIMenu_Subkey[];
}

export interface CUsrMsgVGUIMenu_Subkey {
    name: string;
    str: string;
}

export interface CUsrMsgGeiger {
    range: number;
}

export interface CUsrMsgTrain {
    train: number;
}

export interface CUsrMsgHudText {
    text: string;
}

export interface CUsrMsgSayText {
    entIdx: number;
    text: string;
    chat: boolean;
    textallchat: boolean;
}

export interface CUsrMsgSayText2 {
    entIdx: number;
    chat: boolean;
    msgName: string;
    params: string[];
    textallchat: boolean;
}

export interface CUsrMsgTextMsg {
    msgDst: number;
    params: string[];
}

export interface CUsrMsgHudMsg {
    channel: number;
    pos: CMsgVector2D | undefined;
    clr1: CMsgRGBA | undefined;
    clr2: CMsgRGBA | undefined;
    effect: number;
    fadeInTime: number;
    fadeOutTime: number;
    holdTime: number;
    fxTime: number;
    text: string;
}

export interface CUsrMsgShake {
    command: number;
    localAmplitude: number;
    frequency: number;
    duration: number;
}

export interface CUsrMsgFade {
    duration: number;
    holdTime: number;
    flags: number;
    clr: CMsgRGBA | undefined;
}

export interface CUsrMsgRumble {
    index: number;
    data: number;
    flags: number;
}

export interface CUsrMsgCloseCaption {
    hash: number;
    duration: number;
    fromPlayer: boolean;
}

export interface CUsrMsgCloseCaptionDirect {
    hash: number;
    duration: number;
    fromPlayer: boolean;
}

export interface CUsrMsgSendAudio {
    radioSound: string;
}

export interface CUsrMsgRawAudio {
    pitch: number;
    entidx: number;
    duration: number;
    voiceFilename: string;
}

export interface CUsrMsgVoiceMask {
    playerMasks: CUsrMsgVoiceMask_PlayerMask[];
    playerModEnable: boolean;
}

export interface CUsrMsgVoiceMask_PlayerMask {
    gameRulesMask: number;
    banMasks: number;
}

export interface CUsrMsgDamage {
    amount: number;
    inflictorWorldPos: CMsgVector | undefined;
    victimEntindex: number;
    amountMin: number;
    amountMax: number;
}

export interface CUsrMsgRadioText {
    msgDst: number;
    client: number;
    msgName: string;
    params: string[];
}

export interface CUsrMsgHintText {
    text: string;
}

export interface CUsrMsgKeyHintText {
    hints: string[];
}

export interface CUsrMsgWeaponSound {
    entidx: number;
    originX: number;
    originY: number;
    originZ: number;
    sound: string;
    timestamp: number;
}

export interface CUsrMsgUpdateScreenHealthBar {
    entidx: number;
    healthratioOld: number;
    healthratioNew: number;
    style: number;
}

export interface CUsrMsgEntityOutlineHighlight {
    entidx: number;
}

export interface CUsrMsgDesiredTimescale {
    desiredTimescale: number;
    durationRealtimeSec: number;
    interpolatorType: number;
    startBlendTime: number;
}

export interface CUsrMsgCurrentTimescale {
    curTimescale: number;
}

export interface CUsrMsgAchievementEvent {
    achievement: number;
    count: number;
    userId: number;
}

export interface CUsrMsgPlayerStatsUpdate {
    version: number;
    stats: CUsrMsgPlayerStatsUpdate_Stat[];
    userId: number;
    crc: number;
}

export interface CUsrMsgPlayerStatsUpdate_Stat {
    idx: number;
    delta: number;
}

export interface CUsrMsgCallVoteFailed {
    reason: number;
    time: number;
}

export interface CUsrMsgVoteStart {
    team: number;
    entIdx: number;
    voteType: number;
    dispStr: string;
    detailsStr: string;
    otherTeamStr: string;
    isYesNoVote: boolean;
}

export interface CUsrMsgVotePass {
    team: number;
    voteType: number;
    dispStr: string;
    detailsStr: string;
}

export interface CUsrMsgVoteFailed {
    team: number;
    reason: number;
}

export interface CUsrMsgVoteSetup {
    potentialIssues: string[];
}

export interface CUsrMsgSendLastKillerDamageToClient {
    numHitsGiven: number;
    damageGiven: number;
    numHitsTaken: number;
    damageTaken: number;
}

export interface CUsrMsgItemPickup {
    item: string;
}

export interface CUsrMsgShowMenu {
    bitsValidSlots: number;
    displayTime: number;
    menuString: string;
}

export interface CUsrMsgBarTime {
    time: string;
}

export interface CUsrMsgAmmoDenied {
    ammoIdx: number;
}

export interface CUsrMsgMarkAchievement {
    achievement: string;
}

export interface CUsrMsgGlowPropTurnOff {
    entidx: number;
}

export interface CUsrMsgTilt {
    command: number;
    easeInOut: boolean;
    angle: CMsgQAngle | undefined;
    duration: number;
    time: number;
}

export interface CUsrMsgBattery {
    value: number;
}

export interface CUsrMsgCreditsMsg {
    type: number;
}

export interface CUsrMsgLogoTimeMsg {
    length: number;
}

export interface CUsrMsgUpdateJalopyRadar {
    dummy: number;
}

export interface CUsrMsgMessageText {
    color: CMsgRGBA | undefined;
    text: string;
}

export interface CUsrMsgStatsSkipState {
    numSkips: number;
    numPlayers: number;
}

export interface CUsrMsgPanoramaEvent {
    event: string;
    payload: string;
}

export interface CUsrMsgResetHud {
    reset: boolean;
}

export interface CUsrMsgRequestState {
    dummy: number;
}

export interface CUsrMsgStopSpectatorMode {
    dummy: number;
}

function createBaseCUsrMsgVGUIMenu(): CUsrMsgVGUIMenu {
    return { name: '', show: false, subkeys: [] };
}

export const CUsrMsgVGUIMenu = {
    encode(message: CUsrMsgVGUIMenu, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.show === true) {
            writer.uint32(16).bool(message.show);
        }
        for (const v of message.subkeys) {
            CUsrMsgVGUIMenu_Subkey.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVGUIMenu {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVGUIMenu();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.show = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.subkeys.push(CUsrMsgVGUIMenu_Subkey.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVGUIMenu {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            show: isSet(object.show) ? globalThis.Boolean(object.show) : false,
            subkeys: globalThis.Array.isArray(object?.subkeys)
                ? object.subkeys.map((e: any) => CUsrMsgVGUIMenu_Subkey.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CUsrMsgVGUIMenu): unknown {
        const obj: any = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.show === true) {
            obj.show = message.show;
        }
        if (message.subkeys?.length) {
            obj.subkeys = message.subkeys.map((e) => CUsrMsgVGUIMenu_Subkey.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVGUIMenu>, I>>(base?: I): CUsrMsgVGUIMenu {
        return CUsrMsgVGUIMenu.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVGUIMenu>, I>>(object: I): CUsrMsgVGUIMenu {
        const message = createBaseCUsrMsgVGUIMenu();
        message.name = object.name ?? '';
        message.show = object.show ?? false;
        message.subkeys = object.subkeys?.map((e) => CUsrMsgVGUIMenu_Subkey.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCUsrMsgVGUIMenu_Subkey(): CUsrMsgVGUIMenu_Subkey {
    return { name: '', str: '' };
}

export const CUsrMsgVGUIMenu_Subkey = {
    encode(message: CUsrMsgVGUIMenu_Subkey, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.str !== '') {
            writer.uint32(18).string(message.str);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVGUIMenu_Subkey {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVGUIMenu_Subkey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.str = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVGUIMenu_Subkey {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            str: isSet(object.str) ? globalThis.String(object.str) : '',
        };
    },

    toJSON(message: CUsrMsgVGUIMenu_Subkey): unknown {
        const obj: any = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.str !== '') {
            obj.str = message.str;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVGUIMenu_Subkey>, I>>(base?: I): CUsrMsgVGUIMenu_Subkey {
        return CUsrMsgVGUIMenu_Subkey.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVGUIMenu_Subkey>, I>>(object: I): CUsrMsgVGUIMenu_Subkey {
        const message = createBaseCUsrMsgVGUIMenu_Subkey();
        message.name = object.name ?? '';
        message.str = object.str ?? '';
        return message;
    },
};

function createBaseCUsrMsgGeiger(): CUsrMsgGeiger {
    return { range: 0 };
}

export const CUsrMsgGeiger = {
    encode(message: CUsrMsgGeiger, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.range !== 0) {
            writer.uint32(8).int32(message.range);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgGeiger {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgGeiger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.range = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgGeiger {
        return { range: isSet(object.range) ? globalThis.Number(object.range) : 0 };
    },

    toJSON(message: CUsrMsgGeiger): unknown {
        const obj: any = {};
        if (message.range !== 0) {
            obj.range = Math.round(message.range);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgGeiger>, I>>(base?: I): CUsrMsgGeiger {
        return CUsrMsgGeiger.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgGeiger>, I>>(object: I): CUsrMsgGeiger {
        const message = createBaseCUsrMsgGeiger();
        message.range = object.range ?? 0;
        return message;
    },
};

function createBaseCUsrMsgTrain(): CUsrMsgTrain {
    return { train: 0 };
}

export const CUsrMsgTrain = {
    encode(message: CUsrMsgTrain, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.train !== 0) {
            writer.uint32(8).int32(message.train);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgTrain {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgTrain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.train = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgTrain {
        return { train: isSet(object.train) ? globalThis.Number(object.train) : 0 };
    },

    toJSON(message: CUsrMsgTrain): unknown {
        const obj: any = {};
        if (message.train !== 0) {
            obj.train = Math.round(message.train);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgTrain>, I>>(base?: I): CUsrMsgTrain {
        return CUsrMsgTrain.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgTrain>, I>>(object: I): CUsrMsgTrain {
        const message = createBaseCUsrMsgTrain();
        message.train = object.train ?? 0;
        return message;
    },
};

function createBaseCUsrMsgHudText(): CUsrMsgHudText {
    return { text: '' };
}

export const CUsrMsgHudText = {
    encode(message: CUsrMsgHudText, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgHudText {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgHudText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgHudText {
        return { text: isSet(object.text) ? globalThis.String(object.text) : '' };
    },

    toJSON(message: CUsrMsgHudText): unknown {
        const obj: any = {};
        if (message.text !== '') {
            obj.text = message.text;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgHudText>, I>>(base?: I): CUsrMsgHudText {
        return CUsrMsgHudText.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgHudText>, I>>(object: I): CUsrMsgHudText {
        const message = createBaseCUsrMsgHudText();
        message.text = object.text ?? '';
        return message;
    },
};

function createBaseCUsrMsgSayText(): CUsrMsgSayText {
    return { entIdx: 0, text: '', chat: false, textallchat: false };
}

export const CUsrMsgSayText = {
    encode(message: CUsrMsgSayText, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entIdx !== 0) {
            writer.uint32(8).int32(message.entIdx);
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        if (message.chat === true) {
            writer.uint32(24).bool(message.chat);
        }
        if (message.textallchat === true) {
            writer.uint32(32).bool(message.textallchat);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgSayText {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgSayText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entIdx = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.text = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.chat = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.textallchat = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgSayText {
        return {
            entIdx: isSet(object.entIdx) ? globalThis.Number(object.entIdx) : 0,
            text: isSet(object.text) ? globalThis.String(object.text) : '',
            chat: isSet(object.chat) ? globalThis.Boolean(object.chat) : false,
            textallchat: isSet(object.textallchat) ? globalThis.Boolean(object.textallchat) : false,
        };
    },

    toJSON(message: CUsrMsgSayText): unknown {
        const obj: any = {};
        if (message.entIdx !== 0) {
            obj.entIdx = Math.round(message.entIdx);
        }
        if (message.text !== '') {
            obj.text = message.text;
        }
        if (message.chat === true) {
            obj.chat = message.chat;
        }
        if (message.textallchat === true) {
            obj.textallchat = message.textallchat;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgSayText>, I>>(base?: I): CUsrMsgSayText {
        return CUsrMsgSayText.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgSayText>, I>>(object: I): CUsrMsgSayText {
        const message = createBaseCUsrMsgSayText();
        message.entIdx = object.entIdx ?? 0;
        message.text = object.text ?? '';
        message.chat = object.chat ?? false;
        message.textallchat = object.textallchat ?? false;
        return message;
    },
};

function createBaseCUsrMsgSayText2(): CUsrMsgSayText2 {
    return { entIdx: 0, chat: false, msgName: '', params: [], textallchat: false };
}

export const CUsrMsgSayText2 = {
    encode(message: CUsrMsgSayText2, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entIdx !== 0) {
            writer.uint32(8).int32(message.entIdx);
        }
        if (message.chat === true) {
            writer.uint32(16).bool(message.chat);
        }
        if (message.msgName !== '') {
            writer.uint32(26).string(message.msgName);
        }
        for (const v of message.params) {
            writer.uint32(34).string(v!);
        }
        if (message.textallchat === true) {
            writer.uint32(40).bool(message.textallchat);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgSayText2 {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgSayText2();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entIdx = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.chat = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.msgName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.params.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.textallchat = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgSayText2 {
        return {
            entIdx: isSet(object.entIdx) ? globalThis.Number(object.entIdx) : 0,
            chat: isSet(object.chat) ? globalThis.Boolean(object.chat) : false,
            msgName: isSet(object.msgName) ? globalThis.String(object.msgName) : '',
            params: globalThis.Array.isArray(object?.params) ? object.params.map((e: any) => globalThis.String(e)) : [],
            textallchat: isSet(object.textallchat) ? globalThis.Boolean(object.textallchat) : false,
        };
    },

    toJSON(message: CUsrMsgSayText2): unknown {
        const obj: any = {};
        if (message.entIdx !== 0) {
            obj.entIdx = Math.round(message.entIdx);
        }
        if (message.chat === true) {
            obj.chat = message.chat;
        }
        if (message.msgName !== '') {
            obj.msgName = message.msgName;
        }
        if (message.params?.length) {
            obj.params = message.params;
        }
        if (message.textallchat === true) {
            obj.textallchat = message.textallchat;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgSayText2>, I>>(base?: I): CUsrMsgSayText2 {
        return CUsrMsgSayText2.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgSayText2>, I>>(object: I): CUsrMsgSayText2 {
        const message = createBaseCUsrMsgSayText2();
        message.entIdx = object.entIdx ?? 0;
        message.chat = object.chat ?? false;
        message.msgName = object.msgName ?? '';
        message.params = object.params?.map((e) => e) || [];
        message.textallchat = object.textallchat ?? false;
        return message;
    },
};

function createBaseCUsrMsgTextMsg(): CUsrMsgTextMsg {
    return { msgDst: 0, params: [] };
}

export const CUsrMsgTextMsg = {
    encode(message: CUsrMsgTextMsg, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.msgDst !== 0) {
            writer.uint32(8).int32(message.msgDst);
        }
        for (const v of message.params) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgTextMsg {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgTextMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.msgDst = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.params.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgTextMsg {
        return {
            msgDst: isSet(object.msgDst) ? globalThis.Number(object.msgDst) : 0,
            params: globalThis.Array.isArray(object?.params) ? object.params.map((e: any) => globalThis.String(e)) : [],
        };
    },

    toJSON(message: CUsrMsgTextMsg): unknown {
        const obj: any = {};
        if (message.msgDst !== 0) {
            obj.msgDst = Math.round(message.msgDst);
        }
        if (message.params?.length) {
            obj.params = message.params;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgTextMsg>, I>>(base?: I): CUsrMsgTextMsg {
        return CUsrMsgTextMsg.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgTextMsg>, I>>(object: I): CUsrMsgTextMsg {
        const message = createBaseCUsrMsgTextMsg();
        message.msgDst = object.msgDst ?? 0;
        message.params = object.params?.map((e) => e) || [];
        return message;
    },
};

function createBaseCUsrMsgHudMsg(): CUsrMsgHudMsg {
    return {
        channel: 0,
        pos: undefined,
        clr1: undefined,
        clr2: undefined,
        effect: 0,
        fadeInTime: 0,
        fadeOutTime: 0,
        holdTime: 0,
        fxTime: 0,
        text: '',
    };
}

export const CUsrMsgHudMsg = {
    encode(message: CUsrMsgHudMsg, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.channel !== 0) {
            writer.uint32(8).int32(message.channel);
        }
        if (message.pos !== undefined) {
            CMsgVector2D.encode(message.pos, writer.uint32(18).fork()).ldelim();
        }
        if (message.clr1 !== undefined) {
            CMsgRGBA.encode(message.clr1, writer.uint32(26).fork()).ldelim();
        }
        if (message.clr2 !== undefined) {
            CMsgRGBA.encode(message.clr2, writer.uint32(34).fork()).ldelim();
        }
        if (message.effect !== 0) {
            writer.uint32(40).int32(message.effect);
        }
        if (message.fadeInTime !== 0) {
            writer.uint32(53).float(message.fadeInTime);
        }
        if (message.fadeOutTime !== 0) {
            writer.uint32(61).float(message.fadeOutTime);
        }
        if (message.holdTime !== 0) {
            writer.uint32(77).float(message.holdTime);
        }
        if (message.fxTime !== 0) {
            writer.uint32(85).float(message.fxTime);
        }
        if (message.text !== '') {
            writer.uint32(90).string(message.text);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgHudMsg {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgHudMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.channel = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pos = CMsgVector2D.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.clr1 = CMsgRGBA.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.clr2 = CMsgRGBA.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.effect = reader.int32();
                    continue;
                case 6:
                    if (tag !== 53) {
                        break;
                    }

                    message.fadeInTime = reader.float();
                    continue;
                case 7:
                    if (tag !== 61) {
                        break;
                    }

                    message.fadeOutTime = reader.float();
                    continue;
                case 9:
                    if (tag !== 77) {
                        break;
                    }

                    message.holdTime = reader.float();
                    continue;
                case 10:
                    if (tag !== 85) {
                        break;
                    }

                    message.fxTime = reader.float();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgHudMsg {
        return {
            channel: isSet(object.channel) ? globalThis.Number(object.channel) : 0,
            pos: isSet(object.pos) ? CMsgVector2D.fromJSON(object.pos) : undefined,
            clr1: isSet(object.clr1) ? CMsgRGBA.fromJSON(object.clr1) : undefined,
            clr2: isSet(object.clr2) ? CMsgRGBA.fromJSON(object.clr2) : undefined,
            effect: isSet(object.effect) ? globalThis.Number(object.effect) : 0,
            fadeInTime: isSet(object.fadeInTime) ? globalThis.Number(object.fadeInTime) : 0,
            fadeOutTime: isSet(object.fadeOutTime) ? globalThis.Number(object.fadeOutTime) : 0,
            holdTime: isSet(object.holdTime) ? globalThis.Number(object.holdTime) : 0,
            fxTime: isSet(object.fxTime) ? globalThis.Number(object.fxTime) : 0,
            text: isSet(object.text) ? globalThis.String(object.text) : '',
        };
    },

    toJSON(message: CUsrMsgHudMsg): unknown {
        const obj: any = {};
        if (message.channel !== 0) {
            obj.channel = Math.round(message.channel);
        }
        if (message.pos !== undefined) {
            obj.pos = CMsgVector2D.toJSON(message.pos);
        }
        if (message.clr1 !== undefined) {
            obj.clr1 = CMsgRGBA.toJSON(message.clr1);
        }
        if (message.clr2 !== undefined) {
            obj.clr2 = CMsgRGBA.toJSON(message.clr2);
        }
        if (message.effect !== 0) {
            obj.effect = Math.round(message.effect);
        }
        if (message.fadeInTime !== 0) {
            obj.fadeInTime = message.fadeInTime;
        }
        if (message.fadeOutTime !== 0) {
            obj.fadeOutTime = message.fadeOutTime;
        }
        if (message.holdTime !== 0) {
            obj.holdTime = message.holdTime;
        }
        if (message.fxTime !== 0) {
            obj.fxTime = message.fxTime;
        }
        if (message.text !== '') {
            obj.text = message.text;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgHudMsg>, I>>(base?: I): CUsrMsgHudMsg {
        return CUsrMsgHudMsg.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgHudMsg>, I>>(object: I): CUsrMsgHudMsg {
        const message = createBaseCUsrMsgHudMsg();
        message.channel = object.channel ?? 0;
        message.pos = (object.pos !== undefined && object.pos !== null)
            ? CMsgVector2D.fromPartial(object.pos)
            : undefined;
        message.clr1 = (object.clr1 !== undefined && object.clr1 !== null)
            ? CMsgRGBA.fromPartial(object.clr1)
            : undefined;
        message.clr2 = (object.clr2 !== undefined && object.clr2 !== null)
            ? CMsgRGBA.fromPartial(object.clr2)
            : undefined;
        message.effect = object.effect ?? 0;
        message.fadeInTime = object.fadeInTime ?? 0;
        message.fadeOutTime = object.fadeOutTime ?? 0;
        message.holdTime = object.holdTime ?? 0;
        message.fxTime = object.fxTime ?? 0;
        message.text = object.text ?? '';
        return message;
    },
};

function createBaseCUsrMsgShake(): CUsrMsgShake {
    return { command: 0, localAmplitude: 0, frequency: 0, duration: 0 };
}

export const CUsrMsgShake = {
    encode(message: CUsrMsgShake, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.command !== 0) {
            writer.uint32(8).int32(message.command);
        }
        if (message.localAmplitude !== 0) {
            writer.uint32(21).float(message.localAmplitude);
        }
        if (message.frequency !== 0) {
            writer.uint32(29).float(message.frequency);
        }
        if (message.duration !== 0) {
            writer.uint32(37).float(message.duration);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgShake {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgShake();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.command = reader.int32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.localAmplitude = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.frequency = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }

                    message.duration = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgShake {
        return {
            command: isSet(object.command) ? globalThis.Number(object.command) : 0,
            localAmplitude: isSet(object.localAmplitude) ? globalThis.Number(object.localAmplitude) : 0,
            frequency: isSet(object.frequency) ? globalThis.Number(object.frequency) : 0,
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
        };
    },

    toJSON(message: CUsrMsgShake): unknown {
        const obj: any = {};
        if (message.command !== 0) {
            obj.command = Math.round(message.command);
        }
        if (message.localAmplitude !== 0) {
            obj.localAmplitude = message.localAmplitude;
        }
        if (message.frequency !== 0) {
            obj.frequency = message.frequency;
        }
        if (message.duration !== 0) {
            obj.duration = message.duration;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgShake>, I>>(base?: I): CUsrMsgShake {
        return CUsrMsgShake.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgShake>, I>>(object: I): CUsrMsgShake {
        const message = createBaseCUsrMsgShake();
        message.command = object.command ?? 0;
        message.localAmplitude = object.localAmplitude ?? 0;
        message.frequency = object.frequency ?? 0;
        message.duration = object.duration ?? 0;
        return message;
    },
};

function createBaseCUsrMsgFade(): CUsrMsgFade {
    return { duration: 0, holdTime: 0, flags: 0, clr: undefined };
}

export const CUsrMsgFade = {
    encode(message: CUsrMsgFade, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.duration !== 0) {
            writer.uint32(8).int32(message.duration);
        }
        if (message.holdTime !== 0) {
            writer.uint32(16).int32(message.holdTime);
        }
        if (message.flags !== 0) {
            writer.uint32(24).int32(message.flags);
        }
        if (message.clr !== undefined) {
            CMsgRGBA.encode(message.clr, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgFade {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgFade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.duration = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.holdTime = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.flags = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.clr = CMsgRGBA.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgFade {
        return {
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
            holdTime: isSet(object.holdTime) ? globalThis.Number(object.holdTime) : 0,
            flags: isSet(object.flags) ? globalThis.Number(object.flags) : 0,
            clr: isSet(object.clr) ? CMsgRGBA.fromJSON(object.clr) : undefined,
        };
    },

    toJSON(message: CUsrMsgFade): unknown {
        const obj: any = {};
        if (message.duration !== 0) {
            obj.duration = Math.round(message.duration);
        }
        if (message.holdTime !== 0) {
            obj.holdTime = Math.round(message.holdTime);
        }
        if (message.flags !== 0) {
            obj.flags = Math.round(message.flags);
        }
        if (message.clr !== undefined) {
            obj.clr = CMsgRGBA.toJSON(message.clr);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgFade>, I>>(base?: I): CUsrMsgFade {
        return CUsrMsgFade.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgFade>, I>>(object: I): CUsrMsgFade {
        const message = createBaseCUsrMsgFade();
        message.duration = object.duration ?? 0;
        message.holdTime = object.holdTime ?? 0;
        message.flags = object.flags ?? 0;
        message.clr = (object.clr !== undefined && object.clr !== null) ? CMsgRGBA.fromPartial(object.clr) : undefined;
        return message;
    },
};

function createBaseCUsrMsgRumble(): CUsrMsgRumble {
    return { index: 0, data: 0, flags: 0 };
}

export const CUsrMsgRumble = {
    encode(message: CUsrMsgRumble, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.index !== 0) {
            writer.uint32(8).int32(message.index);
        }
        if (message.data !== 0) {
            writer.uint32(16).int32(message.data);
        }
        if (message.flags !== 0) {
            writer.uint32(24).int32(message.flags);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgRumble {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgRumble();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.index = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.data = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.flags = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgRumble {
        return {
            index: isSet(object.index) ? globalThis.Number(object.index) : 0,
            data: isSet(object.data) ? globalThis.Number(object.data) : 0,
            flags: isSet(object.flags) ? globalThis.Number(object.flags) : 0,
        };
    },

    toJSON(message: CUsrMsgRumble): unknown {
        const obj: any = {};
        if (message.index !== 0) {
            obj.index = Math.round(message.index);
        }
        if (message.data !== 0) {
            obj.data = Math.round(message.data);
        }
        if (message.flags !== 0) {
            obj.flags = Math.round(message.flags);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgRumble>, I>>(base?: I): CUsrMsgRumble {
        return CUsrMsgRumble.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgRumble>, I>>(object: I): CUsrMsgRumble {
        const message = createBaseCUsrMsgRumble();
        message.index = object.index ?? 0;
        message.data = object.data ?? 0;
        message.flags = object.flags ?? 0;
        return message;
    },
};

function createBaseCUsrMsgCloseCaption(): CUsrMsgCloseCaption {
    return { hash: 0, duration: 0, fromPlayer: false };
}

export const CUsrMsgCloseCaption = {
    encode(message: CUsrMsgCloseCaption, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.hash !== 0) {
            writer.uint32(8).uint32(message.hash);
        }
        if (message.duration !== 0) {
            writer.uint32(16).int32(message.duration);
        }
        if (message.fromPlayer === true) {
            writer.uint32(24).bool(message.fromPlayer);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgCloseCaption {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgCloseCaption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.hash = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.duration = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.fromPlayer = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgCloseCaption {
        return {
            hash: isSet(object.hash) ? globalThis.Number(object.hash) : 0,
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
            fromPlayer: isSet(object.fromPlayer) ? globalThis.Boolean(object.fromPlayer) : false,
        };
    },

    toJSON(message: CUsrMsgCloseCaption): unknown {
        const obj: any = {};
        if (message.hash !== 0) {
            obj.hash = Math.round(message.hash);
        }
        if (message.duration !== 0) {
            obj.duration = Math.round(message.duration);
        }
        if (message.fromPlayer === true) {
            obj.fromPlayer = message.fromPlayer;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgCloseCaption>, I>>(base?: I): CUsrMsgCloseCaption {
        return CUsrMsgCloseCaption.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgCloseCaption>, I>>(object: I): CUsrMsgCloseCaption {
        const message = createBaseCUsrMsgCloseCaption();
        message.hash = object.hash ?? 0;
        message.duration = object.duration ?? 0;
        message.fromPlayer = object.fromPlayer ?? false;
        return message;
    },
};

function createBaseCUsrMsgCloseCaptionDirect(): CUsrMsgCloseCaptionDirect {
    return { hash: 0, duration: 0, fromPlayer: false };
}

export const CUsrMsgCloseCaptionDirect = {
    encode(message: CUsrMsgCloseCaptionDirect, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.hash !== 0) {
            writer.uint32(8).uint32(message.hash);
        }
        if (message.duration !== 0) {
            writer.uint32(16).int32(message.duration);
        }
        if (message.fromPlayer === true) {
            writer.uint32(24).bool(message.fromPlayer);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgCloseCaptionDirect {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgCloseCaptionDirect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.hash = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.duration = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.fromPlayer = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgCloseCaptionDirect {
        return {
            hash: isSet(object.hash) ? globalThis.Number(object.hash) : 0,
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
            fromPlayer: isSet(object.fromPlayer) ? globalThis.Boolean(object.fromPlayer) : false,
        };
    },

    toJSON(message: CUsrMsgCloseCaptionDirect): unknown {
        const obj: any = {};
        if (message.hash !== 0) {
            obj.hash = Math.round(message.hash);
        }
        if (message.duration !== 0) {
            obj.duration = Math.round(message.duration);
        }
        if (message.fromPlayer === true) {
            obj.fromPlayer = message.fromPlayer;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgCloseCaptionDirect>, I>>(base?: I): CUsrMsgCloseCaptionDirect {
        return CUsrMsgCloseCaptionDirect.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgCloseCaptionDirect>, I>>(object: I): CUsrMsgCloseCaptionDirect {
        const message = createBaseCUsrMsgCloseCaptionDirect();
        message.hash = object.hash ?? 0;
        message.duration = object.duration ?? 0;
        message.fromPlayer = object.fromPlayer ?? false;
        return message;
    },
};

function createBaseCUsrMsgSendAudio(): CUsrMsgSendAudio {
    return { radioSound: '' };
}

export const CUsrMsgSendAudio = {
    encode(message: CUsrMsgSendAudio, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.radioSound !== '') {
            writer.uint32(10).string(message.radioSound);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgSendAudio {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgSendAudio();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.radioSound = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgSendAudio {
        return { radioSound: isSet(object.radioSound) ? globalThis.String(object.radioSound) : '' };
    },

    toJSON(message: CUsrMsgSendAudio): unknown {
        const obj: any = {};
        if (message.radioSound !== '') {
            obj.radioSound = message.radioSound;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgSendAudio>, I>>(base?: I): CUsrMsgSendAudio {
        return CUsrMsgSendAudio.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgSendAudio>, I>>(object: I): CUsrMsgSendAudio {
        const message = createBaseCUsrMsgSendAudio();
        message.radioSound = object.radioSound ?? '';
        return message;
    },
};

function createBaseCUsrMsgRawAudio(): CUsrMsgRawAudio {
    return { pitch: 0, entidx: 0, duration: 0, voiceFilename: '' };
}

export const CUsrMsgRawAudio = {
    encode(message: CUsrMsgRawAudio, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.pitch !== 0) {
            writer.uint32(8).int32(message.pitch);
        }
        if (message.entidx !== 0) {
            writer.uint32(16).int32(message.entidx);
        }
        if (message.duration !== 0) {
            writer.uint32(29).float(message.duration);
        }
        if (message.voiceFilename !== '') {
            writer.uint32(34).string(message.voiceFilename);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgRawAudio {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgRawAudio();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.pitch = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.entidx = reader.int32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.duration = reader.float();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.voiceFilename = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgRawAudio {
        return {
            pitch: isSet(object.pitch) ? globalThis.Number(object.pitch) : 0,
            entidx: isSet(object.entidx) ? globalThis.Number(object.entidx) : 0,
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
            voiceFilename: isSet(object.voiceFilename) ? globalThis.String(object.voiceFilename) : '',
        };
    },

    toJSON(message: CUsrMsgRawAudio): unknown {
        const obj: any = {};
        if (message.pitch !== 0) {
            obj.pitch = Math.round(message.pitch);
        }
        if (message.entidx !== 0) {
            obj.entidx = Math.round(message.entidx);
        }
        if (message.duration !== 0) {
            obj.duration = message.duration;
        }
        if (message.voiceFilename !== '') {
            obj.voiceFilename = message.voiceFilename;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgRawAudio>, I>>(base?: I): CUsrMsgRawAudio {
        return CUsrMsgRawAudio.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgRawAudio>, I>>(object: I): CUsrMsgRawAudio {
        const message = createBaseCUsrMsgRawAudio();
        message.pitch = object.pitch ?? 0;
        message.entidx = object.entidx ?? 0;
        message.duration = object.duration ?? 0;
        message.voiceFilename = object.voiceFilename ?? '';
        return message;
    },
};

function createBaseCUsrMsgVoiceMask(): CUsrMsgVoiceMask {
    return { playerMasks: [], playerModEnable: false };
}

export const CUsrMsgVoiceMask = {
    encode(message: CUsrMsgVoiceMask, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        for (const v of message.playerMasks) {
            CUsrMsgVoiceMask_PlayerMask.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.playerModEnable === true) {
            writer.uint32(16).bool(message.playerModEnable);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVoiceMask {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVoiceMask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.playerMasks.push(CUsrMsgVoiceMask_PlayerMask.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.playerModEnable = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVoiceMask {
        return {
            playerMasks: globalThis.Array.isArray(object?.playerMasks)
                ? object.playerMasks.map((e: any) => CUsrMsgVoiceMask_PlayerMask.fromJSON(e))
                : [],
            playerModEnable: isSet(object.playerModEnable) ? globalThis.Boolean(object.playerModEnable) : false,
        };
    },

    toJSON(message: CUsrMsgVoiceMask): unknown {
        const obj: any = {};
        if (message.playerMasks?.length) {
            obj.playerMasks = message.playerMasks.map((e) => CUsrMsgVoiceMask_PlayerMask.toJSON(e));
        }
        if (message.playerModEnable === true) {
            obj.playerModEnable = message.playerModEnable;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVoiceMask>, I>>(base?: I): CUsrMsgVoiceMask {
        return CUsrMsgVoiceMask.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVoiceMask>, I>>(object: I): CUsrMsgVoiceMask {
        const message = createBaseCUsrMsgVoiceMask();
        message.playerMasks = object.playerMasks?.map((e) => CUsrMsgVoiceMask_PlayerMask.fromPartial(e)) || [];
        message.playerModEnable = object.playerModEnable ?? false;
        return message;
    },
};

function createBaseCUsrMsgVoiceMask_PlayerMask(): CUsrMsgVoiceMask_PlayerMask {
    return { gameRulesMask: 0, banMasks: 0 };
}

export const CUsrMsgVoiceMask_PlayerMask = {
    encode(message: CUsrMsgVoiceMask_PlayerMask, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.gameRulesMask !== 0) {
            writer.uint32(8).uint64(message.gameRulesMask);
        }
        if (message.banMasks !== 0) {
            writer.uint32(16).uint64(message.banMasks);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVoiceMask_PlayerMask {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVoiceMask_PlayerMask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.gameRulesMask = longToNumber(reader.uint64() as Long);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.banMasks = longToNumber(reader.uint64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVoiceMask_PlayerMask {
        return {
            gameRulesMask: isSet(object.gameRulesMask) ? globalThis.Number(object.gameRulesMask) : 0,
            banMasks: isSet(object.banMasks) ? globalThis.Number(object.banMasks) : 0,
        };
    },

    toJSON(message: CUsrMsgVoiceMask_PlayerMask): unknown {
        const obj: any = {};
        if (message.gameRulesMask !== 0) {
            obj.gameRulesMask = Math.round(message.gameRulesMask);
        }
        if (message.banMasks !== 0) {
            obj.banMasks = Math.round(message.banMasks);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVoiceMask_PlayerMask>, I>>(base?: I): CUsrMsgVoiceMask_PlayerMask {
        return CUsrMsgVoiceMask_PlayerMask.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVoiceMask_PlayerMask>, I>>(object: I): CUsrMsgVoiceMask_PlayerMask {
        const message = createBaseCUsrMsgVoiceMask_PlayerMask();
        message.gameRulesMask = object.gameRulesMask ?? 0;
        message.banMasks = object.banMasks ?? 0;
        return message;
    },
};

function createBaseCUsrMsgDamage(): CUsrMsgDamage {
    return { amount: 0, inflictorWorldPos: undefined, victimEntindex: 0, amountMin: 0, amountMax: 0 };
}

export const CUsrMsgDamage = {
    encode(message: CUsrMsgDamage, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.amount !== 0) {
            writer.uint32(8).int32(message.amount);
        }
        if (message.inflictorWorldPos !== undefined) {
            CMsgVector.encode(message.inflictorWorldPos, writer.uint32(18).fork()).ldelim();
        }
        if (message.victimEntindex !== 0) {
            writer.uint32(24).int32(message.victimEntindex);
        }
        if (message.amountMin !== 0) {
            writer.uint32(32).int32(message.amountMin);
        }
        if (message.amountMax !== 0) {
            writer.uint32(40).int32(message.amountMax);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgDamage {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgDamage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.amount = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.inflictorWorldPos = CMsgVector.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.victimEntindex = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.amountMin = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.amountMax = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgDamage {
        return {
            amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
            inflictorWorldPos: isSet(object.inflictorWorldPos)
                ? CMsgVector.fromJSON(object.inflictorWorldPos)
                : undefined,
            victimEntindex: isSet(object.victimEntindex) ? globalThis.Number(object.victimEntindex) : 0,
            amountMin: isSet(object.amountMin) ? globalThis.Number(object.amountMin) : 0,
            amountMax: isSet(object.amountMax) ? globalThis.Number(object.amountMax) : 0,
        };
    },

    toJSON(message: CUsrMsgDamage): unknown {
        const obj: any = {};
        if (message.amount !== 0) {
            obj.amount = Math.round(message.amount);
        }
        if (message.inflictorWorldPos !== undefined) {
            obj.inflictorWorldPos = CMsgVector.toJSON(message.inflictorWorldPos);
        }
        if (message.victimEntindex !== 0) {
            obj.victimEntindex = Math.round(message.victimEntindex);
        }
        if (message.amountMin !== 0) {
            obj.amountMin = Math.round(message.amountMin);
        }
        if (message.amountMax !== 0) {
            obj.amountMax = Math.round(message.amountMax);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgDamage>, I>>(base?: I): CUsrMsgDamage {
        return CUsrMsgDamage.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgDamage>, I>>(object: I): CUsrMsgDamage {
        const message = createBaseCUsrMsgDamage();
        message.amount = object.amount ?? 0;
        message.inflictorWorldPos = (object.inflictorWorldPos !== undefined && object.inflictorWorldPos !== null)
            ? CMsgVector.fromPartial(object.inflictorWorldPos)
            : undefined;
        message.victimEntindex = object.victimEntindex ?? 0;
        message.amountMin = object.amountMin ?? 0;
        message.amountMax = object.amountMax ?? 0;
        return message;
    },
};

function createBaseCUsrMsgRadioText(): CUsrMsgRadioText {
    return { msgDst: 0, client: 0, msgName: '', params: [] };
}

export const CUsrMsgRadioText = {
    encode(message: CUsrMsgRadioText, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.msgDst !== 0) {
            writer.uint32(8).int32(message.msgDst);
        }
        if (message.client !== 0) {
            writer.uint32(16).int32(message.client);
        }
        if (message.msgName !== '') {
            writer.uint32(26).string(message.msgName);
        }
        for (const v of message.params) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgRadioText {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgRadioText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.msgDst = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.client = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.msgName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.params.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgRadioText {
        return {
            msgDst: isSet(object.msgDst) ? globalThis.Number(object.msgDst) : 0,
            client: isSet(object.client) ? globalThis.Number(object.client) : 0,
            msgName: isSet(object.msgName) ? globalThis.String(object.msgName) : '',
            params: globalThis.Array.isArray(object?.params) ? object.params.map((e: any) => globalThis.String(e)) : [],
        };
    },

    toJSON(message: CUsrMsgRadioText): unknown {
        const obj: any = {};
        if (message.msgDst !== 0) {
            obj.msgDst = Math.round(message.msgDst);
        }
        if (message.client !== 0) {
            obj.client = Math.round(message.client);
        }
        if (message.msgName !== '') {
            obj.msgName = message.msgName;
        }
        if (message.params?.length) {
            obj.params = message.params;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgRadioText>, I>>(base?: I): CUsrMsgRadioText {
        return CUsrMsgRadioText.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgRadioText>, I>>(object: I): CUsrMsgRadioText {
        const message = createBaseCUsrMsgRadioText();
        message.msgDst = object.msgDst ?? 0;
        message.client = object.client ?? 0;
        message.msgName = object.msgName ?? '';
        message.params = object.params?.map((e) => e) || [];
        return message;
    },
};

function createBaseCUsrMsgHintText(): CUsrMsgHintText {
    return { text: '' };
}

export const CUsrMsgHintText = {
    encode(message: CUsrMsgHintText, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgHintText {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgHintText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgHintText {
        return { text: isSet(object.text) ? globalThis.String(object.text) : '' };
    },

    toJSON(message: CUsrMsgHintText): unknown {
        const obj: any = {};
        if (message.text !== '') {
            obj.text = message.text;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgHintText>, I>>(base?: I): CUsrMsgHintText {
        return CUsrMsgHintText.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgHintText>, I>>(object: I): CUsrMsgHintText {
        const message = createBaseCUsrMsgHintText();
        message.text = object.text ?? '';
        return message;
    },
};

function createBaseCUsrMsgKeyHintText(): CUsrMsgKeyHintText {
    return { hints: [] };
}

export const CUsrMsgKeyHintText = {
    encode(message: CUsrMsgKeyHintText, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        for (const v of message.hints) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgKeyHintText {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgKeyHintText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.hints.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgKeyHintText {
        return {
            hints: globalThis.Array.isArray(object?.hints) ? object.hints.map((e: any) => globalThis.String(e)) : [],
        };
    },

    toJSON(message: CUsrMsgKeyHintText): unknown {
        const obj: any = {};
        if (message.hints?.length) {
            obj.hints = message.hints;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgKeyHintText>, I>>(base?: I): CUsrMsgKeyHintText {
        return CUsrMsgKeyHintText.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgKeyHintText>, I>>(object: I): CUsrMsgKeyHintText {
        const message = createBaseCUsrMsgKeyHintText();
        message.hints = object.hints?.map((e) => e) || [];
        return message;
    },
};

function createBaseCUsrMsgWeaponSound(): CUsrMsgWeaponSound {
    return { entidx: 0, originX: 0, originY: 0, originZ: 0, sound: '', timestamp: 0 };
}

export const CUsrMsgWeaponSound = {
    encode(message: CUsrMsgWeaponSound, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entidx !== 0) {
            writer.uint32(8).int32(message.entidx);
        }
        if (message.originX !== 0) {
            writer.uint32(21).float(message.originX);
        }
        if (message.originY !== 0) {
            writer.uint32(29).float(message.originY);
        }
        if (message.originZ !== 0) {
            writer.uint32(37).float(message.originZ);
        }
        if (message.sound !== '') {
            writer.uint32(42).string(message.sound);
        }
        if (message.timestamp !== 0) {
            writer.uint32(53).float(message.timestamp);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgWeaponSound {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgWeaponSound();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entidx = reader.int32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.originX = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.originY = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }

                    message.originZ = reader.float();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.sound = reader.string();
                    continue;
                case 6:
                    if (tag !== 53) {
                        break;
                    }

                    message.timestamp = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgWeaponSound {
        return {
            entidx: isSet(object.entidx) ? globalThis.Number(object.entidx) : 0,
            originX: isSet(object.originX) ? globalThis.Number(object.originX) : 0,
            originY: isSet(object.originY) ? globalThis.Number(object.originY) : 0,
            originZ: isSet(object.originZ) ? globalThis.Number(object.originZ) : 0,
            sound: isSet(object.sound) ? globalThis.String(object.sound) : '',
            timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
        };
    },

    toJSON(message: CUsrMsgWeaponSound): unknown {
        const obj: any = {};
        if (message.entidx !== 0) {
            obj.entidx = Math.round(message.entidx);
        }
        if (message.originX !== 0) {
            obj.originX = message.originX;
        }
        if (message.originY !== 0) {
            obj.originY = message.originY;
        }
        if (message.originZ !== 0) {
            obj.originZ = message.originZ;
        }
        if (message.sound !== '') {
            obj.sound = message.sound;
        }
        if (message.timestamp !== 0) {
            obj.timestamp = message.timestamp;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgWeaponSound>, I>>(base?: I): CUsrMsgWeaponSound {
        return CUsrMsgWeaponSound.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgWeaponSound>, I>>(object: I): CUsrMsgWeaponSound {
        const message = createBaseCUsrMsgWeaponSound();
        message.entidx = object.entidx ?? 0;
        message.originX = object.originX ?? 0;
        message.originY = object.originY ?? 0;
        message.originZ = object.originZ ?? 0;
        message.sound = object.sound ?? '';
        message.timestamp = object.timestamp ?? 0;
        return message;
    },
};

function createBaseCUsrMsgUpdateScreenHealthBar(): CUsrMsgUpdateScreenHealthBar {
    return { entidx: 0, healthratioOld: 0, healthratioNew: 0, style: 0 };
}

export const CUsrMsgUpdateScreenHealthBar = {
    encode(message: CUsrMsgUpdateScreenHealthBar, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entidx !== 0) {
            writer.uint32(8).int32(message.entidx);
        }
        if (message.healthratioOld !== 0) {
            writer.uint32(21).float(message.healthratioOld);
        }
        if (message.healthratioNew !== 0) {
            writer.uint32(29).float(message.healthratioNew);
        }
        if (message.style !== 0) {
            writer.uint32(32).int32(message.style);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgUpdateScreenHealthBar {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgUpdateScreenHealthBar();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entidx = reader.int32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.healthratioOld = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.healthratioNew = reader.float();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.style = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgUpdateScreenHealthBar {
        return {
            entidx: isSet(object.entidx) ? globalThis.Number(object.entidx) : 0,
            healthratioOld: isSet(object.healthratioOld) ? globalThis.Number(object.healthratioOld) : 0,
            healthratioNew: isSet(object.healthratioNew) ? globalThis.Number(object.healthratioNew) : 0,
            style: isSet(object.style) ? globalThis.Number(object.style) : 0,
        };
    },

    toJSON(message: CUsrMsgUpdateScreenHealthBar): unknown {
        const obj: any = {};
        if (message.entidx !== 0) {
            obj.entidx = Math.round(message.entidx);
        }
        if (message.healthratioOld !== 0) {
            obj.healthratioOld = message.healthratioOld;
        }
        if (message.healthratioNew !== 0) {
            obj.healthratioNew = message.healthratioNew;
        }
        if (message.style !== 0) {
            obj.style = Math.round(message.style);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgUpdateScreenHealthBar>, I>>(base?: I): CUsrMsgUpdateScreenHealthBar {
        return CUsrMsgUpdateScreenHealthBar.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgUpdateScreenHealthBar>, I>>(
        object: I,
    ): CUsrMsgUpdateScreenHealthBar {
        const message = createBaseCUsrMsgUpdateScreenHealthBar();
        message.entidx = object.entidx ?? 0;
        message.healthratioOld = object.healthratioOld ?? 0;
        message.healthratioNew = object.healthratioNew ?? 0;
        message.style = object.style ?? 0;
        return message;
    },
};

function createBaseCUsrMsgEntityOutlineHighlight(): CUsrMsgEntityOutlineHighlight {
    return { entidx: 0 };
}

export const CUsrMsgEntityOutlineHighlight = {
    encode(message: CUsrMsgEntityOutlineHighlight, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entidx !== 0) {
            writer.uint32(8).int32(message.entidx);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgEntityOutlineHighlight {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgEntityOutlineHighlight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entidx = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgEntityOutlineHighlight {
        return { entidx: isSet(object.entidx) ? globalThis.Number(object.entidx) : 0 };
    },

    toJSON(message: CUsrMsgEntityOutlineHighlight): unknown {
        const obj: any = {};
        if (message.entidx !== 0) {
            obj.entidx = Math.round(message.entidx);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgEntityOutlineHighlight>, I>>(base?: I): CUsrMsgEntityOutlineHighlight {
        return CUsrMsgEntityOutlineHighlight.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgEntityOutlineHighlight>, I>>(
        object: I,
    ): CUsrMsgEntityOutlineHighlight {
        const message = createBaseCUsrMsgEntityOutlineHighlight();
        message.entidx = object.entidx ?? 0;
        return message;
    },
};

function createBaseCUsrMsgDesiredTimescale(): CUsrMsgDesiredTimescale {
    return { desiredTimescale: 0, durationRealtimeSec: 0, interpolatorType: 0, startBlendTime: 0 };
}

export const CUsrMsgDesiredTimescale = {
    encode(message: CUsrMsgDesiredTimescale, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.desiredTimescale !== 0) {
            writer.uint32(13).float(message.desiredTimescale);
        }
        if (message.durationRealtimeSec !== 0) {
            writer.uint32(21).float(message.durationRealtimeSec);
        }
        if (message.interpolatorType !== 0) {
            writer.uint32(24).int32(message.interpolatorType);
        }
        if (message.startBlendTime !== 0) {
            writer.uint32(37).float(message.startBlendTime);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgDesiredTimescale {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgDesiredTimescale();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.desiredTimescale = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.durationRealtimeSec = reader.float();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.interpolatorType = reader.int32();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }

                    message.startBlendTime = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgDesiredTimescale {
        return {
            desiredTimescale: isSet(object.desiredTimescale) ? globalThis.Number(object.desiredTimescale) : 0,
            durationRealtimeSec: isSet(object.durationRealtimeSec) ? globalThis.Number(object.durationRealtimeSec) : 0,
            interpolatorType: isSet(object.interpolatorType) ? globalThis.Number(object.interpolatorType) : 0,
            startBlendTime: isSet(object.startBlendTime) ? globalThis.Number(object.startBlendTime) : 0,
        };
    },

    toJSON(message: CUsrMsgDesiredTimescale): unknown {
        const obj: any = {};
        if (message.desiredTimescale !== 0) {
            obj.desiredTimescale = message.desiredTimescale;
        }
        if (message.durationRealtimeSec !== 0) {
            obj.durationRealtimeSec = message.durationRealtimeSec;
        }
        if (message.interpolatorType !== 0) {
            obj.interpolatorType = Math.round(message.interpolatorType);
        }
        if (message.startBlendTime !== 0) {
            obj.startBlendTime = message.startBlendTime;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgDesiredTimescale>, I>>(base?: I): CUsrMsgDesiredTimescale {
        return CUsrMsgDesiredTimescale.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgDesiredTimescale>, I>>(object: I): CUsrMsgDesiredTimescale {
        const message = createBaseCUsrMsgDesiredTimescale();
        message.desiredTimescale = object.desiredTimescale ?? 0;
        message.durationRealtimeSec = object.durationRealtimeSec ?? 0;
        message.interpolatorType = object.interpolatorType ?? 0;
        message.startBlendTime = object.startBlendTime ?? 0;
        return message;
    },
};

function createBaseCUsrMsgCurrentTimescale(): CUsrMsgCurrentTimescale {
    return { curTimescale: 0 };
}

export const CUsrMsgCurrentTimescale = {
    encode(message: CUsrMsgCurrentTimescale, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.curTimescale !== 0) {
            writer.uint32(13).float(message.curTimescale);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgCurrentTimescale {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgCurrentTimescale();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.curTimescale = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgCurrentTimescale {
        return { curTimescale: isSet(object.curTimescale) ? globalThis.Number(object.curTimescale) : 0 };
    },

    toJSON(message: CUsrMsgCurrentTimescale): unknown {
        const obj: any = {};
        if (message.curTimescale !== 0) {
            obj.curTimescale = message.curTimescale;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgCurrentTimescale>, I>>(base?: I): CUsrMsgCurrentTimescale {
        return CUsrMsgCurrentTimescale.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgCurrentTimescale>, I>>(object: I): CUsrMsgCurrentTimescale {
        const message = createBaseCUsrMsgCurrentTimescale();
        message.curTimescale = object.curTimescale ?? 0;
        return message;
    },
};

function createBaseCUsrMsgAchievementEvent(): CUsrMsgAchievementEvent {
    return { achievement: 0, count: 0, userId: 0 };
}

export const CUsrMsgAchievementEvent = {
    encode(message: CUsrMsgAchievementEvent, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.achievement !== 0) {
            writer.uint32(8).int32(message.achievement);
        }
        if (message.count !== 0) {
            writer.uint32(16).int32(message.count);
        }
        if (message.userId !== 0) {
            writer.uint32(24).int32(message.userId);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgAchievementEvent {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgAchievementEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.achievement = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.count = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.userId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgAchievementEvent {
        return {
            achievement: isSet(object.achievement) ? globalThis.Number(object.achievement) : 0,
            count: isSet(object.count) ? globalThis.Number(object.count) : 0,
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
        };
    },

    toJSON(message: CUsrMsgAchievementEvent): unknown {
        const obj: any = {};
        if (message.achievement !== 0) {
            obj.achievement = Math.round(message.achievement);
        }
        if (message.count !== 0) {
            obj.count = Math.round(message.count);
        }
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgAchievementEvent>, I>>(base?: I): CUsrMsgAchievementEvent {
        return CUsrMsgAchievementEvent.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgAchievementEvent>, I>>(object: I): CUsrMsgAchievementEvent {
        const message = createBaseCUsrMsgAchievementEvent();
        message.achievement = object.achievement ?? 0;
        message.count = object.count ?? 0;
        message.userId = object.userId ?? 0;
        return message;
    },
};

function createBaseCUsrMsgPlayerStatsUpdate(): CUsrMsgPlayerStatsUpdate {
    return { version: 0, stats: [], userId: 0, crc: 0 };
}

export const CUsrMsgPlayerStatsUpdate = {
    encode(message: CUsrMsgPlayerStatsUpdate, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.version !== 0) {
            writer.uint32(8).int32(message.version);
        }
        for (const v of message.stats) {
            CUsrMsgPlayerStatsUpdate_Stat.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        if (message.userId !== 0) {
            writer.uint32(40).int32(message.userId);
        }
        if (message.crc !== 0) {
            writer.uint32(48).int32(message.crc);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPlayerStatsUpdate {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPlayerStatsUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.version = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.stats.push(CUsrMsgPlayerStatsUpdate_Stat.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.userId = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.crc = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPlayerStatsUpdate {
        return {
            version: isSet(object.version) ? globalThis.Number(object.version) : 0,
            stats: globalThis.Array.isArray(object?.stats)
                ? object.stats.map((e: any) => CUsrMsgPlayerStatsUpdate_Stat.fromJSON(e))
                : [],
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
            crc: isSet(object.crc) ? globalThis.Number(object.crc) : 0,
        };
    },

    toJSON(message: CUsrMsgPlayerStatsUpdate): unknown {
        const obj: any = {};
        if (message.version !== 0) {
            obj.version = Math.round(message.version);
        }
        if (message.stats?.length) {
            obj.stats = message.stats.map((e) => CUsrMsgPlayerStatsUpdate_Stat.toJSON(e));
        }
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        if (message.crc !== 0) {
            obj.crc = Math.round(message.crc);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPlayerStatsUpdate>, I>>(base?: I): CUsrMsgPlayerStatsUpdate {
        return CUsrMsgPlayerStatsUpdate.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPlayerStatsUpdate>, I>>(object: I): CUsrMsgPlayerStatsUpdate {
        const message = createBaseCUsrMsgPlayerStatsUpdate();
        message.version = object.version ?? 0;
        message.stats = object.stats?.map((e) => CUsrMsgPlayerStatsUpdate_Stat.fromPartial(e)) || [];
        message.userId = object.userId ?? 0;
        message.crc = object.crc ?? 0;
        return message;
    },
};

function createBaseCUsrMsgPlayerStatsUpdate_Stat(): CUsrMsgPlayerStatsUpdate_Stat {
    return { idx: 0, delta: 0 };
}

export const CUsrMsgPlayerStatsUpdate_Stat = {
    encode(message: CUsrMsgPlayerStatsUpdate_Stat, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.idx !== 0) {
            writer.uint32(8).int32(message.idx);
        }
        if (message.delta !== 0) {
            writer.uint32(16).int32(message.delta);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPlayerStatsUpdate_Stat {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPlayerStatsUpdate_Stat();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.idx = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.delta = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPlayerStatsUpdate_Stat {
        return {
            idx: isSet(object.idx) ? globalThis.Number(object.idx) : 0,
            delta: isSet(object.delta) ? globalThis.Number(object.delta) : 0,
        };
    },

    toJSON(message: CUsrMsgPlayerStatsUpdate_Stat): unknown {
        const obj: any = {};
        if (message.idx !== 0) {
            obj.idx = Math.round(message.idx);
        }
        if (message.delta !== 0) {
            obj.delta = Math.round(message.delta);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPlayerStatsUpdate_Stat>, I>>(base?: I): CUsrMsgPlayerStatsUpdate_Stat {
        return CUsrMsgPlayerStatsUpdate_Stat.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPlayerStatsUpdate_Stat>, I>>(
        object: I,
    ): CUsrMsgPlayerStatsUpdate_Stat {
        const message = createBaseCUsrMsgPlayerStatsUpdate_Stat();
        message.idx = object.idx ?? 0;
        message.delta = object.delta ?? 0;
        return message;
    },
};

function createBaseCUsrMsgCallVoteFailed(): CUsrMsgCallVoteFailed {
    return { reason: 0, time: 0 };
}

export const CUsrMsgCallVoteFailed = {
    encode(message: CUsrMsgCallVoteFailed, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.reason !== 0) {
            writer.uint32(8).int32(message.reason);
        }
        if (message.time !== 0) {
            writer.uint32(16).int32(message.time);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgCallVoteFailed {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgCallVoteFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.reason = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.time = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgCallVoteFailed {
        return {
            reason: isSet(object.reason) ? globalThis.Number(object.reason) : 0,
            time: isSet(object.time) ? globalThis.Number(object.time) : 0,
        };
    },

    toJSON(message: CUsrMsgCallVoteFailed): unknown {
        const obj: any = {};
        if (message.reason !== 0) {
            obj.reason = Math.round(message.reason);
        }
        if (message.time !== 0) {
            obj.time = Math.round(message.time);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgCallVoteFailed>, I>>(base?: I): CUsrMsgCallVoteFailed {
        return CUsrMsgCallVoteFailed.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgCallVoteFailed>, I>>(object: I): CUsrMsgCallVoteFailed {
        const message = createBaseCUsrMsgCallVoteFailed();
        message.reason = object.reason ?? 0;
        message.time = object.time ?? 0;
        return message;
    },
};

function createBaseCUsrMsgVoteStart(): CUsrMsgVoteStart {
    return { team: 0, entIdx: 0, voteType: 0, dispStr: '', detailsStr: '', otherTeamStr: '', isYesNoVote: false };
}

export const CUsrMsgVoteStart = {
    encode(message: CUsrMsgVoteStart, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.team !== 0) {
            writer.uint32(8).int32(message.team);
        }
        if (message.entIdx !== 0) {
            writer.uint32(16).int32(message.entIdx);
        }
        if (message.voteType !== 0) {
            writer.uint32(24).int32(message.voteType);
        }
        if (message.dispStr !== '') {
            writer.uint32(34).string(message.dispStr);
        }
        if (message.detailsStr !== '') {
            writer.uint32(42).string(message.detailsStr);
        }
        if (message.otherTeamStr !== '') {
            writer.uint32(50).string(message.otherTeamStr);
        }
        if (message.isYesNoVote === true) {
            writer.uint32(56).bool(message.isYesNoVote);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVoteStart {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVoteStart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.team = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.entIdx = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.voteType = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.dispStr = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.detailsStr = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.otherTeamStr = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.isYesNoVote = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVoteStart {
        return {
            team: isSet(object.team) ? globalThis.Number(object.team) : 0,
            entIdx: isSet(object.entIdx) ? globalThis.Number(object.entIdx) : 0,
            voteType: isSet(object.voteType) ? globalThis.Number(object.voteType) : 0,
            dispStr: isSet(object.dispStr) ? globalThis.String(object.dispStr) : '',
            detailsStr: isSet(object.detailsStr) ? globalThis.String(object.detailsStr) : '',
            otherTeamStr: isSet(object.otherTeamStr) ? globalThis.String(object.otherTeamStr) : '',
            isYesNoVote: isSet(object.isYesNoVote) ? globalThis.Boolean(object.isYesNoVote) : false,
        };
    },

    toJSON(message: CUsrMsgVoteStart): unknown {
        const obj: any = {};
        if (message.team !== 0) {
            obj.team = Math.round(message.team);
        }
        if (message.entIdx !== 0) {
            obj.entIdx = Math.round(message.entIdx);
        }
        if (message.voteType !== 0) {
            obj.voteType = Math.round(message.voteType);
        }
        if (message.dispStr !== '') {
            obj.dispStr = message.dispStr;
        }
        if (message.detailsStr !== '') {
            obj.detailsStr = message.detailsStr;
        }
        if (message.otherTeamStr !== '') {
            obj.otherTeamStr = message.otherTeamStr;
        }
        if (message.isYesNoVote === true) {
            obj.isYesNoVote = message.isYesNoVote;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVoteStart>, I>>(base?: I): CUsrMsgVoteStart {
        return CUsrMsgVoteStart.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVoteStart>, I>>(object: I): CUsrMsgVoteStart {
        const message = createBaseCUsrMsgVoteStart();
        message.team = object.team ?? 0;
        message.entIdx = object.entIdx ?? 0;
        message.voteType = object.voteType ?? 0;
        message.dispStr = object.dispStr ?? '';
        message.detailsStr = object.detailsStr ?? '';
        message.otherTeamStr = object.otherTeamStr ?? '';
        message.isYesNoVote = object.isYesNoVote ?? false;
        return message;
    },
};

function createBaseCUsrMsgVotePass(): CUsrMsgVotePass {
    return { team: 0, voteType: 0, dispStr: '', detailsStr: '' };
}

export const CUsrMsgVotePass = {
    encode(message: CUsrMsgVotePass, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.team !== 0) {
            writer.uint32(8).int32(message.team);
        }
        if (message.voteType !== 0) {
            writer.uint32(16).int32(message.voteType);
        }
        if (message.dispStr !== '') {
            writer.uint32(26).string(message.dispStr);
        }
        if (message.detailsStr !== '') {
            writer.uint32(34).string(message.detailsStr);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVotePass {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVotePass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.team = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.voteType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.dispStr = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.detailsStr = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVotePass {
        return {
            team: isSet(object.team) ? globalThis.Number(object.team) : 0,
            voteType: isSet(object.voteType) ? globalThis.Number(object.voteType) : 0,
            dispStr: isSet(object.dispStr) ? globalThis.String(object.dispStr) : '',
            detailsStr: isSet(object.detailsStr) ? globalThis.String(object.detailsStr) : '',
        };
    },

    toJSON(message: CUsrMsgVotePass): unknown {
        const obj: any = {};
        if (message.team !== 0) {
            obj.team = Math.round(message.team);
        }
        if (message.voteType !== 0) {
            obj.voteType = Math.round(message.voteType);
        }
        if (message.dispStr !== '') {
            obj.dispStr = message.dispStr;
        }
        if (message.detailsStr !== '') {
            obj.detailsStr = message.detailsStr;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVotePass>, I>>(base?: I): CUsrMsgVotePass {
        return CUsrMsgVotePass.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVotePass>, I>>(object: I): CUsrMsgVotePass {
        const message = createBaseCUsrMsgVotePass();
        message.team = object.team ?? 0;
        message.voteType = object.voteType ?? 0;
        message.dispStr = object.dispStr ?? '';
        message.detailsStr = object.detailsStr ?? '';
        return message;
    },
};

function createBaseCUsrMsgVoteFailed(): CUsrMsgVoteFailed {
    return { team: 0, reason: 0 };
}

export const CUsrMsgVoteFailed = {
    encode(message: CUsrMsgVoteFailed, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.team !== 0) {
            writer.uint32(8).int32(message.team);
        }
        if (message.reason !== 0) {
            writer.uint32(16).int32(message.reason);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVoteFailed {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVoteFailed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.team = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.reason = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVoteFailed {
        return {
            team: isSet(object.team) ? globalThis.Number(object.team) : 0,
            reason: isSet(object.reason) ? globalThis.Number(object.reason) : 0,
        };
    },

    toJSON(message: CUsrMsgVoteFailed): unknown {
        const obj: any = {};
        if (message.team !== 0) {
            obj.team = Math.round(message.team);
        }
        if (message.reason !== 0) {
            obj.reason = Math.round(message.reason);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVoteFailed>, I>>(base?: I): CUsrMsgVoteFailed {
        return CUsrMsgVoteFailed.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVoteFailed>, I>>(object: I): CUsrMsgVoteFailed {
        const message = createBaseCUsrMsgVoteFailed();
        message.team = object.team ?? 0;
        message.reason = object.reason ?? 0;
        return message;
    },
};

function createBaseCUsrMsgVoteSetup(): CUsrMsgVoteSetup {
    return { potentialIssues: [] };
}

export const CUsrMsgVoteSetup = {
    encode(message: CUsrMsgVoteSetup, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        for (const v of message.potentialIssues) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgVoteSetup {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgVoteSetup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.potentialIssues.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgVoteSetup {
        return {
            potentialIssues: globalThis.Array.isArray(object?.potentialIssues)
                ? object.potentialIssues.map((e: any) => globalThis.String(e))
                : [],
        };
    },

    toJSON(message: CUsrMsgVoteSetup): unknown {
        const obj: any = {};
        if (message.potentialIssues?.length) {
            obj.potentialIssues = message.potentialIssues;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgVoteSetup>, I>>(base?: I): CUsrMsgVoteSetup {
        return CUsrMsgVoteSetup.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgVoteSetup>, I>>(object: I): CUsrMsgVoteSetup {
        const message = createBaseCUsrMsgVoteSetup();
        message.potentialIssues = object.potentialIssues?.map((e) => e) || [];
        return message;
    },
};

function createBaseCUsrMsgSendLastKillerDamageToClient(): CUsrMsgSendLastKillerDamageToClient {
    return { numHitsGiven: 0, damageGiven: 0, numHitsTaken: 0, damageTaken: 0 };
}

export const CUsrMsgSendLastKillerDamageToClient = {
    encode(message: CUsrMsgSendLastKillerDamageToClient, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.numHitsGiven !== 0) {
            writer.uint32(8).int32(message.numHitsGiven);
        }
        if (message.damageGiven !== 0) {
            writer.uint32(16).int32(message.damageGiven);
        }
        if (message.numHitsTaken !== 0) {
            writer.uint32(24).int32(message.numHitsTaken);
        }
        if (message.damageTaken !== 0) {
            writer.uint32(32).int32(message.damageTaken);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgSendLastKillerDamageToClient {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgSendLastKillerDamageToClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.numHitsGiven = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.damageGiven = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.numHitsTaken = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.damageTaken = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgSendLastKillerDamageToClient {
        return {
            numHitsGiven: isSet(object.numHitsGiven) ? globalThis.Number(object.numHitsGiven) : 0,
            damageGiven: isSet(object.damageGiven) ? globalThis.Number(object.damageGiven) : 0,
            numHitsTaken: isSet(object.numHitsTaken) ? globalThis.Number(object.numHitsTaken) : 0,
            damageTaken: isSet(object.damageTaken) ? globalThis.Number(object.damageTaken) : 0,
        };
    },

    toJSON(message: CUsrMsgSendLastKillerDamageToClient): unknown {
        const obj: any = {};
        if (message.numHitsGiven !== 0) {
            obj.numHitsGiven = Math.round(message.numHitsGiven);
        }
        if (message.damageGiven !== 0) {
            obj.damageGiven = Math.round(message.damageGiven);
        }
        if (message.numHitsTaken !== 0) {
            obj.numHitsTaken = Math.round(message.numHitsTaken);
        }
        if (message.damageTaken !== 0) {
            obj.damageTaken = Math.round(message.damageTaken);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgSendLastKillerDamageToClient>, I>>(
        base?: I,
    ): CUsrMsgSendLastKillerDamageToClient {
        return CUsrMsgSendLastKillerDamageToClient.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgSendLastKillerDamageToClient>, I>>(
        object: I,
    ): CUsrMsgSendLastKillerDamageToClient {
        const message = createBaseCUsrMsgSendLastKillerDamageToClient();
        message.numHitsGiven = object.numHitsGiven ?? 0;
        message.damageGiven = object.damageGiven ?? 0;
        message.numHitsTaken = object.numHitsTaken ?? 0;
        message.damageTaken = object.damageTaken ?? 0;
        return message;
    },
};

function createBaseCUsrMsgItemPickup(): CUsrMsgItemPickup {
    return { item: '' };
}

export const CUsrMsgItemPickup = {
    encode(message: CUsrMsgItemPickup, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.item !== '') {
            writer.uint32(10).string(message.item);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgItemPickup {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgItemPickup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.item = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgItemPickup {
        return { item: isSet(object.item) ? globalThis.String(object.item) : '' };
    },

    toJSON(message: CUsrMsgItemPickup): unknown {
        const obj: any = {};
        if (message.item !== '') {
            obj.item = message.item;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgItemPickup>, I>>(base?: I): CUsrMsgItemPickup {
        return CUsrMsgItemPickup.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgItemPickup>, I>>(object: I): CUsrMsgItemPickup {
        const message = createBaseCUsrMsgItemPickup();
        message.item = object.item ?? '';
        return message;
    },
};

function createBaseCUsrMsgShowMenu(): CUsrMsgShowMenu {
    return { bitsValidSlots: 0, displayTime: 0, menuString: '' };
}

export const CUsrMsgShowMenu = {
    encode(message: CUsrMsgShowMenu, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.bitsValidSlots !== 0) {
            writer.uint32(8).int32(message.bitsValidSlots);
        }
        if (message.displayTime !== 0) {
            writer.uint32(16).int32(message.displayTime);
        }
        if (message.menuString !== '') {
            writer.uint32(26).string(message.menuString);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgShowMenu {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgShowMenu();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.bitsValidSlots = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.displayTime = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.menuString = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgShowMenu {
        return {
            bitsValidSlots: isSet(object.bitsValidSlots) ? globalThis.Number(object.bitsValidSlots) : 0,
            displayTime: isSet(object.displayTime) ? globalThis.Number(object.displayTime) : 0,
            menuString: isSet(object.menuString) ? globalThis.String(object.menuString) : '',
        };
    },

    toJSON(message: CUsrMsgShowMenu): unknown {
        const obj: any = {};
        if (message.bitsValidSlots !== 0) {
            obj.bitsValidSlots = Math.round(message.bitsValidSlots);
        }
        if (message.displayTime !== 0) {
            obj.displayTime = Math.round(message.displayTime);
        }
        if (message.menuString !== '') {
            obj.menuString = message.menuString;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgShowMenu>, I>>(base?: I): CUsrMsgShowMenu {
        return CUsrMsgShowMenu.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgShowMenu>, I>>(object: I): CUsrMsgShowMenu {
        const message = createBaseCUsrMsgShowMenu();
        message.bitsValidSlots = object.bitsValidSlots ?? 0;
        message.displayTime = object.displayTime ?? 0;
        message.menuString = object.menuString ?? '';
        return message;
    },
};

function createBaseCUsrMsgBarTime(): CUsrMsgBarTime {
    return { time: '' };
}

export const CUsrMsgBarTime = {
    encode(message: CUsrMsgBarTime, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.time !== '') {
            writer.uint32(10).string(message.time);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgBarTime {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgBarTime();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.time = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgBarTime {
        return { time: isSet(object.time) ? globalThis.String(object.time) : '' };
    },

    toJSON(message: CUsrMsgBarTime): unknown {
        const obj: any = {};
        if (message.time !== '') {
            obj.time = message.time;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgBarTime>, I>>(base?: I): CUsrMsgBarTime {
        return CUsrMsgBarTime.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgBarTime>, I>>(object: I): CUsrMsgBarTime {
        const message = createBaseCUsrMsgBarTime();
        message.time = object.time ?? '';
        return message;
    },
};

function createBaseCUsrMsgAmmoDenied(): CUsrMsgAmmoDenied {
    return { ammoIdx: 0 };
}

export const CUsrMsgAmmoDenied = {
    encode(message: CUsrMsgAmmoDenied, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.ammoIdx !== 0) {
            writer.uint32(8).int32(message.ammoIdx);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgAmmoDenied {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgAmmoDenied();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.ammoIdx = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgAmmoDenied {
        return { ammoIdx: isSet(object.ammoIdx) ? globalThis.Number(object.ammoIdx) : 0 };
    },

    toJSON(message: CUsrMsgAmmoDenied): unknown {
        const obj: any = {};
        if (message.ammoIdx !== 0) {
            obj.ammoIdx = Math.round(message.ammoIdx);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgAmmoDenied>, I>>(base?: I): CUsrMsgAmmoDenied {
        return CUsrMsgAmmoDenied.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgAmmoDenied>, I>>(object: I): CUsrMsgAmmoDenied {
        const message = createBaseCUsrMsgAmmoDenied();
        message.ammoIdx = object.ammoIdx ?? 0;
        return message;
    },
};

function createBaseCUsrMsgMarkAchievement(): CUsrMsgMarkAchievement {
    return { achievement: '' };
}

export const CUsrMsgMarkAchievement = {
    encode(message: CUsrMsgMarkAchievement, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.achievement !== '') {
            writer.uint32(10).string(message.achievement);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMarkAchievement {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMarkAchievement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.achievement = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMarkAchievement {
        return { achievement: isSet(object.achievement) ? globalThis.String(object.achievement) : '' };
    },

    toJSON(message: CUsrMsgMarkAchievement): unknown {
        const obj: any = {};
        if (message.achievement !== '') {
            obj.achievement = message.achievement;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMarkAchievement>, I>>(base?: I): CUsrMsgMarkAchievement {
        return CUsrMsgMarkAchievement.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMarkAchievement>, I>>(object: I): CUsrMsgMarkAchievement {
        const message = createBaseCUsrMsgMarkAchievement();
        message.achievement = object.achievement ?? '';
        return message;
    },
};

function createBaseCUsrMsgGlowPropTurnOff(): CUsrMsgGlowPropTurnOff {
    return { entidx: 0 };
}

export const CUsrMsgGlowPropTurnOff = {
    encode(message: CUsrMsgGlowPropTurnOff, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entidx !== 0) {
            writer.uint32(8).int32(message.entidx);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgGlowPropTurnOff {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgGlowPropTurnOff();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entidx = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgGlowPropTurnOff {
        return { entidx: isSet(object.entidx) ? globalThis.Number(object.entidx) : 0 };
    },

    toJSON(message: CUsrMsgGlowPropTurnOff): unknown {
        const obj: any = {};
        if (message.entidx !== 0) {
            obj.entidx = Math.round(message.entidx);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgGlowPropTurnOff>, I>>(base?: I): CUsrMsgGlowPropTurnOff {
        return CUsrMsgGlowPropTurnOff.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgGlowPropTurnOff>, I>>(object: I): CUsrMsgGlowPropTurnOff {
        const message = createBaseCUsrMsgGlowPropTurnOff();
        message.entidx = object.entidx ?? 0;
        return message;
    },
};

function createBaseCUsrMsgTilt(): CUsrMsgTilt {
    return { command: 0, easeInOut: false, angle: undefined, duration: 0, time: 0 };
}

export const CUsrMsgTilt = {
    encode(message: CUsrMsgTilt, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.command !== 0) {
            writer.uint32(8).int32(message.command);
        }
        if (message.easeInOut === true) {
            writer.uint32(16).bool(message.easeInOut);
        }
        if (message.angle !== undefined) {
            CMsgQAngle.encode(message.angle, writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== 0) {
            writer.uint32(37).float(message.duration);
        }
        if (message.time !== 0) {
            writer.uint32(45).float(message.time);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgTilt {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgTilt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.command = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.easeInOut = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.angle = CMsgQAngle.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }

                    message.duration = reader.float();
                    continue;
                case 5:
                    if (tag !== 45) {
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

    fromJSON(object: any): CUsrMsgTilt {
        return {
            command: isSet(object.command) ? globalThis.Number(object.command) : 0,
            easeInOut: isSet(object.easeInOut) ? globalThis.Boolean(object.easeInOut) : false,
            angle: isSet(object.angle) ? CMsgQAngle.fromJSON(object.angle) : undefined,
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
            time: isSet(object.time) ? globalThis.Number(object.time) : 0,
        };
    },

    toJSON(message: CUsrMsgTilt): unknown {
        const obj: any = {};
        if (message.command !== 0) {
            obj.command = Math.round(message.command);
        }
        if (message.easeInOut === true) {
            obj.easeInOut = message.easeInOut;
        }
        if (message.angle !== undefined) {
            obj.angle = CMsgQAngle.toJSON(message.angle);
        }
        if (message.duration !== 0) {
            obj.duration = message.duration;
        }
        if (message.time !== 0) {
            obj.time = message.time;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgTilt>, I>>(base?: I): CUsrMsgTilt {
        return CUsrMsgTilt.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgTilt>, I>>(object: I): CUsrMsgTilt {
        const message = createBaseCUsrMsgTilt();
        message.command = object.command ?? 0;
        message.easeInOut = object.easeInOut ?? false;
        message.angle = (object.angle !== undefined && object.angle !== null)
            ? CMsgQAngle.fromPartial(object.angle)
            : undefined;
        message.duration = object.duration ?? 0;
        message.time = object.time ?? 0;
        return message;
    },
};

function createBaseCUsrMsgBattery(): CUsrMsgBattery {
    return { value: 0 };
}

export const CUsrMsgBattery = {
    encode(message: CUsrMsgBattery, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgBattery {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgBattery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.value = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgBattery {
        return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
    },

    toJSON(message: CUsrMsgBattery): unknown {
        const obj: any = {};
        if (message.value !== 0) {
            obj.value = Math.round(message.value);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgBattery>, I>>(base?: I): CUsrMsgBattery {
        return CUsrMsgBattery.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgBattery>, I>>(object: I): CUsrMsgBattery {
        const message = createBaseCUsrMsgBattery();
        message.value = object.value ?? 0;
        return message;
    },
};

function createBaseCUsrMsgCreditsMsg(): CUsrMsgCreditsMsg {
    return { type: 0 };
}

export const CUsrMsgCreditsMsg = {
    encode(message: CUsrMsgCreditsMsg, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgCreditsMsg {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgCreditsMsg();
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

    fromJSON(object: any): CUsrMsgCreditsMsg {
        return { type: isSet(object.type) ? globalThis.Number(object.type) : 0 };
    },

    toJSON(message: CUsrMsgCreditsMsg): unknown {
        const obj: any = {};
        if (message.type !== 0) {
            obj.type = Math.round(message.type);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgCreditsMsg>, I>>(base?: I): CUsrMsgCreditsMsg {
        return CUsrMsgCreditsMsg.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgCreditsMsg>, I>>(object: I): CUsrMsgCreditsMsg {
        const message = createBaseCUsrMsgCreditsMsg();
        message.type = object.type ?? 0;
        return message;
    },
};

function createBaseCUsrMsgLogoTimeMsg(): CUsrMsgLogoTimeMsg {
    return { length: 0 };
}

export const CUsrMsgLogoTimeMsg = {
    encode(message: CUsrMsgLogoTimeMsg, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.length !== 0) {
            writer.uint32(13).float(message.length);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgLogoTimeMsg {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgLogoTimeMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.length = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgLogoTimeMsg {
        return { length: isSet(object.length) ? globalThis.Number(object.length) : 0 };
    },

    toJSON(message: CUsrMsgLogoTimeMsg): unknown {
        const obj: any = {};
        if (message.length !== 0) {
            obj.length = message.length;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgLogoTimeMsg>, I>>(base?: I): CUsrMsgLogoTimeMsg {
        return CUsrMsgLogoTimeMsg.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgLogoTimeMsg>, I>>(object: I): CUsrMsgLogoTimeMsg {
        const message = createBaseCUsrMsgLogoTimeMsg();
        message.length = object.length ?? 0;
        return message;
    },
};

function createBaseCUsrMsgUpdateJalopyRadar(): CUsrMsgUpdateJalopyRadar {
    return { dummy: 0 };
}

export const CUsrMsgUpdateJalopyRadar = {
    encode(message: CUsrMsgUpdateJalopyRadar, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgUpdateJalopyRadar {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgUpdateJalopyRadar();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.dummy = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgUpdateJalopyRadar {
        return { dummy: isSet(object.dummy) ? globalThis.Number(object.dummy) : 0 };
    },

    toJSON(message: CUsrMsgUpdateJalopyRadar): unknown {
        const obj: any = {};
        if (message.dummy !== 0) {
            obj.dummy = Math.round(message.dummy);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgUpdateJalopyRadar>, I>>(base?: I): CUsrMsgUpdateJalopyRadar {
        return CUsrMsgUpdateJalopyRadar.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgUpdateJalopyRadar>, I>>(object: I): CUsrMsgUpdateJalopyRadar {
        const message = createBaseCUsrMsgUpdateJalopyRadar();
        message.dummy = object.dummy ?? 0;
        return message;
    },
};

function createBaseCUsrMsgMessageText(): CUsrMsgMessageText {
    return { color: undefined, text: '' };
}

export const CUsrMsgMessageText = {
    encode(message: CUsrMsgMessageText, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.color !== undefined) {
            CMsgRGBA.encode(message.color, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== '') {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgMessageText {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgMessageText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.color = CMsgRGBA.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgMessageText {
        return {
            color: isSet(object.color) ? CMsgRGBA.fromJSON(object.color) : undefined,
            text: isSet(object.text) ? globalThis.String(object.text) : '',
        };
    },

    toJSON(message: CUsrMsgMessageText): unknown {
        const obj: any = {};
        if (message.color !== undefined) {
            obj.color = CMsgRGBA.toJSON(message.color);
        }
        if (message.text !== '') {
            obj.text = message.text;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgMessageText>, I>>(base?: I): CUsrMsgMessageText {
        return CUsrMsgMessageText.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgMessageText>, I>>(object: I): CUsrMsgMessageText {
        const message = createBaseCUsrMsgMessageText();
        message.color = (object.color !== undefined && object.color !== null)
            ? CMsgRGBA.fromPartial(object.color)
            : undefined;
        message.text = object.text ?? '';
        return message;
    },
};

function createBaseCUsrMsgStatsSkipState(): CUsrMsgStatsSkipState {
    return { numSkips: 0, numPlayers: 0 };
}

export const CUsrMsgStatsSkipState = {
    encode(message: CUsrMsgStatsSkipState, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.numSkips !== 0) {
            writer.uint32(8).int32(message.numSkips);
        }
        if (message.numPlayers !== 0) {
            writer.uint32(16).int32(message.numPlayers);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgStatsSkipState {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgStatsSkipState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.numSkips = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.numPlayers = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgStatsSkipState {
        return {
            numSkips: isSet(object.numSkips) ? globalThis.Number(object.numSkips) : 0,
            numPlayers: isSet(object.numPlayers) ? globalThis.Number(object.numPlayers) : 0,
        };
    },

    toJSON(message: CUsrMsgStatsSkipState): unknown {
        const obj: any = {};
        if (message.numSkips !== 0) {
            obj.numSkips = Math.round(message.numSkips);
        }
        if (message.numPlayers !== 0) {
            obj.numPlayers = Math.round(message.numPlayers);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgStatsSkipState>, I>>(base?: I): CUsrMsgStatsSkipState {
        return CUsrMsgStatsSkipState.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgStatsSkipState>, I>>(object: I): CUsrMsgStatsSkipState {
        const message = createBaseCUsrMsgStatsSkipState();
        message.numSkips = object.numSkips ?? 0;
        message.numPlayers = object.numPlayers ?? 0;
        return message;
    },
};

function createBaseCUsrMsgPanoramaEvent(): CUsrMsgPanoramaEvent {
    return { event: '', payload: '' };
}

export const CUsrMsgPanoramaEvent = {
    encode(message: CUsrMsgPanoramaEvent, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.event !== '') {
            writer.uint32(10).string(message.event);
        }
        if (message.payload !== '') {
            writer.uint32(18).string(message.payload);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgPanoramaEvent {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgPanoramaEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.event = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.payload = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgPanoramaEvent {
        return {
            event: isSet(object.event) ? globalThis.String(object.event) : '',
            payload: isSet(object.payload) ? globalThis.String(object.payload) : '',
        };
    },

    toJSON(message: CUsrMsgPanoramaEvent): unknown {
        const obj: any = {};
        if (message.event !== '') {
            obj.event = message.event;
        }
        if (message.payload !== '') {
            obj.payload = message.payload;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgPanoramaEvent>, I>>(base?: I): CUsrMsgPanoramaEvent {
        return CUsrMsgPanoramaEvent.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgPanoramaEvent>, I>>(object: I): CUsrMsgPanoramaEvent {
        const message = createBaseCUsrMsgPanoramaEvent();
        message.event = object.event ?? '';
        message.payload = object.payload ?? '';
        return message;
    },
};

function createBaseCUsrMsgResetHud(): CUsrMsgResetHud {
    return { reset: false };
}

export const CUsrMsgResetHud = {
    encode(message: CUsrMsgResetHud, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.reset === true) {
            writer.uint32(8).bool(message.reset);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgResetHud {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgResetHud();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.reset = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgResetHud {
        return { reset: isSet(object.reset) ? globalThis.Boolean(object.reset) : false };
    },

    toJSON(message: CUsrMsgResetHud): unknown {
        const obj: any = {};
        if (message.reset === true) {
            obj.reset = message.reset;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgResetHud>, I>>(base?: I): CUsrMsgResetHud {
        return CUsrMsgResetHud.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgResetHud>, I>>(object: I): CUsrMsgResetHud {
        const message = createBaseCUsrMsgResetHud();
        message.reset = object.reset ?? false;
        return message;
    },
};

function createBaseCUsrMsgRequestState(): CUsrMsgRequestState {
    return { dummy: 0 };
}

export const CUsrMsgRequestState = {
    encode(message: CUsrMsgRequestState, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgRequestState {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgRequestState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.dummy = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgRequestState {
        return { dummy: isSet(object.dummy) ? globalThis.Number(object.dummy) : 0 };
    },

    toJSON(message: CUsrMsgRequestState): unknown {
        const obj: any = {};
        if (message.dummy !== 0) {
            obj.dummy = Math.round(message.dummy);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgRequestState>, I>>(base?: I): CUsrMsgRequestState {
        return CUsrMsgRequestState.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgRequestState>, I>>(object: I): CUsrMsgRequestState {
        const message = createBaseCUsrMsgRequestState();
        message.dummy = object.dummy ?? 0;
        return message;
    },
};

function createBaseCUsrMsgStopSpectatorMode(): CUsrMsgStopSpectatorMode {
    return { dummy: 0 };
}

export const CUsrMsgStopSpectatorMode = {
    encode(message: CUsrMsgStopSpectatorMode, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.dummy !== 0) {
            writer.uint32(8).int32(message.dummy);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CUsrMsgStopSpectatorMode {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCUsrMsgStopSpectatorMode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.dummy = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CUsrMsgStopSpectatorMode {
        return { dummy: isSet(object.dummy) ? globalThis.Number(object.dummy) : 0 };
    },

    toJSON(message: CUsrMsgStopSpectatorMode): unknown {
        const obj: any = {};
        if (message.dummy !== 0) {
            obj.dummy = Math.round(message.dummy);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CUsrMsgStopSpectatorMode>, I>>(base?: I): CUsrMsgStopSpectatorMode {
        return CUsrMsgStopSpectatorMode.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CUsrMsgStopSpectatorMode>, I>>(object: I): CUsrMsgStopSpectatorMode {
        const message = createBaseCUsrMsgStopSpectatorMode();
        message.dummy = object.dummy ?? 0;
        return message;
    },
};

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
