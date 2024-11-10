import pb from 'npm:protobufjs/minimal.js';
import Long from 'npm:long';
import {
    ENetworkDisconnectionReason,
    eNetworkDisconnectionReasonFromJSON,
    eNetworkDisconnectionReasonToJSON,
} from './network_connection.ts';

export const protobufPackage = '';

export enum NETMessages {
    net_NOP = 0,
    net_Disconnect = 1,
    net_File = 2,
    net_SplitScreenUser = 3,
    net_Tick = 4,
    net_StringCmd = 5,
    net_SetConVar = 6,
    net_SignonState = 7,
    net_PlayerAvatarData = 100,
    UNRECOGNIZED = -1,
}

export function nETMessagesFromJSON(object: any): NETMessages {
    switch (object) {
        case 0:
        case 'net_NOP':
            return NETMessages.net_NOP;
        case 1:
        case 'net_Disconnect':
            return NETMessages.net_Disconnect;
        case 2:
        case 'net_File':
            return NETMessages.net_File;
        case 3:
        case 'net_SplitScreenUser':
            return NETMessages.net_SplitScreenUser;
        case 4:
        case 'net_Tick':
            return NETMessages.net_Tick;
        case 5:
        case 'net_StringCmd':
            return NETMessages.net_StringCmd;
        case 6:
        case 'net_SetConVar':
            return NETMessages.net_SetConVar;
        case 7:
        case 'net_SignonState':
            return NETMessages.net_SignonState;
        case 100:
        case 'net_PlayerAvatarData':
            return NETMessages.net_PlayerAvatarData;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return NETMessages.UNRECOGNIZED;
    }
}

export function nETMessagesToJSON(object: NETMessages): string | undefined {
    switch (object) {
        case NETMessages.net_NOP:
            return 'net_NOP';
        case NETMessages.net_Disconnect:
            return 'net_Disconnect';
        case NETMessages.net_File:
            return 'net_File';
        case NETMessages.net_SplitScreenUser:
            return 'net_SplitScreenUser';
        case NETMessages.net_Tick:
            return 'net_Tick';
        case NETMessages.net_StringCmd:
            return 'net_StringCmd';
        case NETMessages.net_SetConVar:
            return 'net_SetConVar';
        case NETMessages.net_SignonState:
            return 'net_SignonState';
        case NETMessages.net_PlayerAvatarData:
            return 'net_PlayerAvatarData';
        case NETMessages.UNRECOGNIZED:
        default:
            return undefined;
    }
}

export enum CLCMessages {
    clc_ClientInfo = 8,
    clc_Move = 9,
    clc_VoiceData = 10,
    clc_BaselineAck = 11,
    clc_ListenEvents = 12,
    clc_RespondCvarValue = 13,
    clc_FileCRCCheck = 14,
    clc_LoadingProgress = 15,
    clc_SplitPlayerConnect = 16,
    clc_ClientMessage = 17,
    clc_CmdKeyValues = 18,
    clc_HltvReplay = 20,
    clc_HltvFixupOperatorTick = 21,
    clc_HltvFixupOperatorReceiver = 22,
    UNRECOGNIZED = -1,
}

export function cLCMessagesFromJSON(object: any): CLCMessages {
    switch (object) {
        case 8:
        case 'clc_ClientInfo':
            return CLCMessages.clc_ClientInfo;
        case 9:
        case 'clc_Move':
            return CLCMessages.clc_Move;
        case 10:
        case 'clc_VoiceData':
            return CLCMessages.clc_VoiceData;
        case 11:
        case 'clc_BaselineAck':
            return CLCMessages.clc_BaselineAck;
        case 12:
        case 'clc_ListenEvents':
            return CLCMessages.clc_ListenEvents;
        case 13:
        case 'clc_RespondCvarValue':
            return CLCMessages.clc_RespondCvarValue;
        case 14:
        case 'clc_FileCRCCheck':
            return CLCMessages.clc_FileCRCCheck;
        case 15:
        case 'clc_LoadingProgress':
            return CLCMessages.clc_LoadingProgress;
        case 16:
        case 'clc_SplitPlayerConnect':
            return CLCMessages.clc_SplitPlayerConnect;
        case 17:
        case 'clc_ClientMessage':
            return CLCMessages.clc_ClientMessage;
        case 18:
        case 'clc_CmdKeyValues':
            return CLCMessages.clc_CmdKeyValues;
        case 20:
        case 'clc_HltvReplay':
            return CLCMessages.clc_HltvReplay;
        case 21:
        case 'clc_HltvFixupOperatorTick':
            return CLCMessages.clc_HltvFixupOperatorTick;
        case 22:
        case 'clc_HltvFixupOperatorReceiver':
            return CLCMessages.clc_HltvFixupOperatorReceiver;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CLCMessages.UNRECOGNIZED;
    }
}

export function cLCMessagesToJSON(object: CLCMessages): string | undefined {
    switch (object) {
        case CLCMessages.clc_ClientInfo:
            return 'clc_ClientInfo';
        case CLCMessages.clc_Move:
            return 'clc_Move';
        case CLCMessages.clc_VoiceData:
            return 'clc_VoiceData';
        case CLCMessages.clc_BaselineAck:
            return 'clc_BaselineAck';
        case CLCMessages.clc_ListenEvents:
            return 'clc_ListenEvents';
        case CLCMessages.clc_RespondCvarValue:
            return 'clc_RespondCvarValue';
        case CLCMessages.clc_FileCRCCheck:
            return 'clc_FileCRCCheck';
        case CLCMessages.clc_LoadingProgress:
            return 'clc_LoadingProgress';
        case CLCMessages.clc_SplitPlayerConnect:
            return 'clc_SplitPlayerConnect';
        case CLCMessages.clc_ClientMessage:
            return 'clc_ClientMessage';
        case CLCMessages.clc_CmdKeyValues:
            return 'clc_CmdKeyValues';
        case CLCMessages.clc_HltvReplay:
            return 'clc_HltvReplay';
        case CLCMessages.clc_HltvFixupOperatorTick:
            return 'clc_HltvFixupOperatorTick';
        case CLCMessages.clc_HltvFixupOperatorReceiver:
            return 'clc_HltvFixupOperatorReceiver';
        case CLCMessages.UNRECOGNIZED:
        default:
            return undefined;
    }
}

export enum VoiceDataFormatT {
    VOICEDATA_FORMAT_STEAM = 0,
    VOICEDATA_FORMAT_ENGINE = 1,
    UNRECOGNIZED = -1,
}

export function voiceDataFormatTFromJSON(object: any): VoiceDataFormatT {
    switch (object) {
        case 0:
        case 'VOICEDATA_FORMAT_STEAM':
            return VoiceDataFormatT.VOICEDATA_FORMAT_STEAM;
        case 1:
        case 'VOICEDATA_FORMAT_ENGINE':
            return VoiceDataFormatT.VOICEDATA_FORMAT_ENGINE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return VoiceDataFormatT.UNRECOGNIZED;
    }
}

export function voiceDataFormatTToJSON(object: VoiceDataFormatT): string {
    switch (object) {
        case VoiceDataFormatT.VOICEDATA_FORMAT_STEAM:
            return 'VOICEDATA_FORMAT_STEAM';
        case VoiceDataFormatT.VOICEDATA_FORMAT_ENGINE:
            return 'VOICEDATA_FORMAT_ENGINE';
        case VoiceDataFormatT.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export enum ESplitScreenMessageType {
    MSG_SPLITSCREEN_ADDUSER = 0,
    MSG_SPLITSCREEN_REMOVEUSER = 1,
    MSG_SPLITSCREEN_TYPE_BITS = 1,
    UNRECOGNIZED = -1,
}

export function eSplitScreenMessageTypeFromJSON(object: any): ESplitScreenMessageType {
    switch (object) {
        case 0:
        case 'MSG_SPLITSCREEN_ADDUSER':
            return ESplitScreenMessageType.MSG_SPLITSCREEN_ADDUSER;
        case 1:
        case 'MSG_SPLITSCREEN_REMOVEUSER':
            return ESplitScreenMessageType.MSG_SPLITSCREEN_REMOVEUSER;
        case 1:
        case 'MSG_SPLITSCREEN_TYPE_BITS':
            return ESplitScreenMessageType.MSG_SPLITSCREEN_TYPE_BITS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ESplitScreenMessageType.UNRECOGNIZED;
    }
}

export function eSplitScreenMessageTypeToJSON(object: ESplitScreenMessageType): string {
    switch (object) {
        case ESplitScreenMessageType.MSG_SPLITSCREEN_ADDUSER:
            return 'MSG_SPLITSCREEN_ADDUSER';
        case ESplitScreenMessageType.MSG_SPLITSCREEN_REMOVEUSER:
            return 'MSG_SPLITSCREEN_REMOVEUSER';
        case ESplitScreenMessageType.MSG_SPLITSCREEN_TYPE_BITS:
            return 'MSG_SPLITSCREEN_TYPE_BITS';
        case ESplitScreenMessageType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export enum SVCMessages {
    svc_ServerInfo = 8,
    svc_SendTable = 9,
    svc_ClassInfo = 10,
    svc_SetPause = 11,
    svc_CreateStringTable = 12,
    svc_UpdateStringTable = 13,
    svc_VoiceInit = 14,
    svc_VoiceData = 15,
    svc_Print = 16,
    svc_Sounds = 17,
    svc_SetView = 18,
    svc_FixAngle = 19,
    svc_CrosshairAngle = 20,
    svc_BSPDecal = 21,
    svc_SplitScreen = 22,
    svc_UserMessage = 23,
    svc_EntityMessage = 24,
    svc_GameEvent = 25,
    svc_PacketEntities = 26,
    svc_TempEntities = 27,
    svc_Prefetch = 28,
    svc_GameEventList = 30,
    svc_GetCvarValue = 31,
    svc_PaintmapData = 33,
    svc_CmdKeyValues = 34,
    svc_EncryptedData = 35,
    svc_HltvReplay = 36,
    svc_Broadcast_Command = 38,
    svc_HltvFixupOperatorStatus = 39,
    UNRECOGNIZED = -1,
}

export function sVCMessagesFromJSON(object: any): SVCMessages {
    switch (object) {
        case 8:
        case 'svc_ServerInfo':
            return SVCMessages.svc_ServerInfo;
        case 9:
        case 'svc_SendTable':
            return SVCMessages.svc_SendTable;
        case 10:
        case 'svc_ClassInfo':
            return SVCMessages.svc_ClassInfo;
        case 11:
        case 'svc_SetPause':
            return SVCMessages.svc_SetPause;
        case 12:
        case 'svc_CreateStringTable':
            return SVCMessages.svc_CreateStringTable;
        case 13:
        case 'svc_UpdateStringTable':
            return SVCMessages.svc_UpdateStringTable;
        case 14:
        case 'svc_VoiceInit':
            return SVCMessages.svc_VoiceInit;
        case 15:
        case 'svc_VoiceData':
            return SVCMessages.svc_VoiceData;
        case 16:
        case 'svc_Print':
            return SVCMessages.svc_Print;
        case 17:
        case 'svc_Sounds':
            return SVCMessages.svc_Sounds;
        case 18:
        case 'svc_SetView':
            return SVCMessages.svc_SetView;
        case 19:
        case 'svc_FixAngle':
            return SVCMessages.svc_FixAngle;
        case 20:
        case 'svc_CrosshairAngle':
            return SVCMessages.svc_CrosshairAngle;
        case 21:
        case 'svc_BSPDecal':
            return SVCMessages.svc_BSPDecal;
        case 22:
        case 'svc_SplitScreen':
            return SVCMessages.svc_SplitScreen;
        case 23:
        case 'svc_UserMessage':
            return SVCMessages.svc_UserMessage;
        case 24:
        case 'svc_EntityMessage':
            return SVCMessages.svc_EntityMessage;
        case 25:
        case 'svc_GameEvent':
            return SVCMessages.svc_GameEvent;
        case 26:
        case 'svc_PacketEntities':
            return SVCMessages.svc_PacketEntities;
        case 27:
        case 'svc_TempEntities':
            return SVCMessages.svc_TempEntities;
        case 28:
        case 'svc_Prefetch':
            return SVCMessages.svc_Prefetch;
        case 30:
        case 'svc_GameEventList':
            return SVCMessages.svc_GameEventList;
        case 31:
        case 'svc_GetCvarValue':
            return SVCMessages.svc_GetCvarValue;
        case 33:
        case 'svc_PaintmapData':
            return SVCMessages.svc_PaintmapData;
        case 34:
        case 'svc_CmdKeyValues':
            return SVCMessages.svc_CmdKeyValues;
        case 35:
        case 'svc_EncryptedData':
            return SVCMessages.svc_EncryptedData;
        case 36:
        case 'svc_HltvReplay':
            return SVCMessages.svc_HltvReplay;
        case 38:
        case 'svc_Broadcast_Command':
            return SVCMessages.svc_Broadcast_Command;
        case 39:
        case 'svc_HltvFixupOperatorStatus':
            return SVCMessages.svc_HltvFixupOperatorStatus;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SVCMessages.UNRECOGNIZED;
    }
}

export function sVCMessagesToJSON(object: SVCMessages): string | undefined {
    switch (object) {
        case SVCMessages.svc_ServerInfo:
            return 'svc_ServerInfo';
        case SVCMessages.svc_SendTable:
            return 'svc_SendTable';
        case SVCMessages.svc_ClassInfo:
            return 'svc_ClassInfo';
        case SVCMessages.svc_SetPause:
            return 'svc_SetPause';
        case SVCMessages.svc_CreateStringTable:
            return 'svc_CreateStringTable';
        case SVCMessages.svc_UpdateStringTable:
            return 'svc_UpdateStringTable';
        case SVCMessages.svc_VoiceInit:
            return 'svc_VoiceInit';
        case SVCMessages.svc_VoiceData:
            return 'svc_VoiceData';
        case SVCMessages.svc_Print:
            return 'svc_Print';
        case SVCMessages.svc_Sounds:
            return 'svc_Sounds';
        case SVCMessages.svc_SetView:
            return 'svc_SetView';
        case SVCMessages.svc_FixAngle:
            return 'svc_FixAngle';
        case SVCMessages.svc_CrosshairAngle:
            return 'svc_CrosshairAngle';
        case SVCMessages.svc_BSPDecal:
            return 'svc_BSPDecal';
        case SVCMessages.svc_SplitScreen:
            return 'svc_SplitScreen';
        case SVCMessages.svc_UserMessage:
            return 'svc_UserMessage';
        case SVCMessages.svc_EntityMessage:
            return 'svc_EntityMessage';
        case SVCMessages.svc_GameEvent:
            return 'svc_GameEvent';
        case SVCMessages.svc_PacketEntities:
            return 'svc_PacketEntities';
        case SVCMessages.svc_TempEntities:
            return 'svc_TempEntities';
        case SVCMessages.svc_Prefetch:
            return 'svc_Prefetch';
        case SVCMessages.svc_GameEventList:
            return 'svc_GameEventList';
        case SVCMessages.svc_GetCvarValue:
            return 'svc_GetCvarValue';
        case SVCMessages.svc_PaintmapData:
            return 'svc_PaintmapData';
        case SVCMessages.svc_CmdKeyValues:
            return 'svc_CmdKeyValues';
        case SVCMessages.svc_EncryptedData:
            return 'svc_EncryptedData';
        case SVCMessages.svc_HltvReplay:
            return 'svc_HltvReplay';
        case SVCMessages.svc_Broadcast_Command:
            return 'svc_Broadcast_Command';
        case SVCMessages.svc_HltvFixupOperatorStatus:
            return 'svc_HltvFixupOperatorStatus';
        case SVCMessages.UNRECOGNIZED:
        default:
            return undefined;
    }
}

export enum ReplayEventTypeT {
    REPLAY_EVENT_CANCEL = 0,
    REPLAY_EVENT_DEATH = 1,
    REPLAY_EVENT_GENERIC = 2,
    REPLAY_EVENT_STUCK_NEED_FULL_UPDATE = 3,
    REPLAY_EVENT_VICTORY = 4,
    UNRECOGNIZED = -1,
}

export function replayEventTypeTFromJSON(object: any): ReplayEventTypeT {
    switch (object) {
        case 0:
        case 'REPLAY_EVENT_CANCEL':
            return ReplayEventTypeT.REPLAY_EVENT_CANCEL;
        case 1:
        case 'REPLAY_EVENT_DEATH':
            return ReplayEventTypeT.REPLAY_EVENT_DEATH;
        case 2:
        case 'REPLAY_EVENT_GENERIC':
            return ReplayEventTypeT.REPLAY_EVENT_GENERIC;
        case 3:
        case 'REPLAY_EVENT_STUCK_NEED_FULL_UPDATE':
            return ReplayEventTypeT.REPLAY_EVENT_STUCK_NEED_FULL_UPDATE;
        case 4:
        case 'REPLAY_EVENT_VICTORY':
            return ReplayEventTypeT.REPLAY_EVENT_VICTORY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ReplayEventTypeT.UNRECOGNIZED;
    }
}

export function replayEventTypeTToJSON(object: ReplayEventTypeT): string {
    switch (object) {
        case ReplayEventTypeT.REPLAY_EVENT_CANCEL:
            return 'REPLAY_EVENT_CANCEL';
        case ReplayEventTypeT.REPLAY_EVENT_DEATH:
            return 'REPLAY_EVENT_DEATH';
        case ReplayEventTypeT.REPLAY_EVENT_GENERIC:
            return 'REPLAY_EVENT_GENERIC';
        case ReplayEventTypeT.REPLAY_EVENT_STUCK_NEED_FULL_UPDATE:
            return 'REPLAY_EVENT_STUCK_NEED_FULL_UPDATE';
        case ReplayEventTypeT.REPLAY_EVENT_VICTORY:
            return 'REPLAY_EVENT_VICTORY';
        case ReplayEventTypeT.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface CMsgVector {
    x: number;
    y: number;
    z: number;
}

export interface CMsgVector2D {
    x: number;
    y: number;
}

export interface CMsgQAngle {
    x: number;
    y: number;
    z: number;
}

export interface CMsgRGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface CNETMsgTick {
    tick: number;
    hostComputationtime: number;
    hostComputationtimeStdDeviation: number;
    hostFramestarttimeStdDeviation: number;
    hltvReplayFlags: number;
}

export interface CNETMsgStringCmd {
    command: string;
}

export interface CNETMsgSignonState {
    signonState: number;
    spawnCount: number;
    numServerPlayers: number;
    playersNetworkids: string[];
    mapName: string;
}

export interface CMsgCVars {
    cvars: CMsgCVars_CVar[];
}

export interface CMsgCVars_CVar {
    name: string;
    value: string;
    dictionaryName: number;
}

export interface CNETMsgSetConVar {
    convars: CMsgCVars | undefined;
}

export interface CNETMsgNOP {
}

export interface CNETMsgDisconnect {
    reason: ENetworkDisconnectionReason;
}

export interface CNETMsgFile {
    transferId: number;
    fileName: string;
    isReplayDemoFile: boolean;
    deny: boolean;
}

export interface CNETMsgSplitScreenUser {
    slot: number;
}

export interface CNETMsgPlayerAvatarData {
    accountid: number;
    rgb: Uint8Array;
}

export interface CCLCMsgClientInfo {
    sendTableCrc: number;
    serverCount: number;
    isHltv: boolean;
    isReplay: boolean;
    friendsId: number;
    friendsName: string;
    customFiles: number[];
}

export interface CCLCMsgMove {
    numBackupCommands: number;
    numNewCommands: number;
    data: Uint8Array;
}

export interface CCLCMsgVoiceData {
    data: Uint8Array;
    xuid: number;
    format: VoiceDataFormatT;
    sequenceBytes: number;
    sectionNumber: number;
    uncompressedSampleOffset: number;
}

export interface CCLCMsgBaselineAck {
    baselineTick: number;
    baselineNr: number;
}

export interface CCLCMsgListenEvents {
    eventMask: number[];
}

export interface CCLCMsgRespondCvarValue {
    cookie: number;
    statusCode: number;
    name: string;
    value: string;
}

export interface CCLCMsgFileCRCCheck {
    codePath: number;
    path: string;
    codeFilename: number;
    filename: string;
    fileFraction: number;
    md5: Uint8Array;
    crc: number;
    fileHashType: number;
    fileLen: number;
    packFileId: number;
    packFileNumber: number;
}

export interface CCLCMsgLoadingProgress {
    progress: number;
}

export interface CCLCMsgSplitPlayerConnect {
    convars: CMsgCVars | undefined;
}

export interface CCLCMsgCmdKeyValues {
    keyvalues: Uint8Array;
}

export interface CSVCMsgServerInfo {
    protocol: number;
    serverCount: number;
    isDedicated: boolean;
    isOfficialValveServer: boolean;
    isHltv: boolean;
    isReplay: boolean;
    isRedirectingToProxyRelay: boolean;
    cOs: number;
    mapCrc: number;
    clientCrc: number;
    stringTableCrc: number;
    maxClients: number;
    maxClasses: number;
    playerSlot: number;
    tickInterval: number;
    gameDir: string;
    mapName: string;
    mapGroupName: string;
    skyName: string;
    hostName: string;
    publicIp: number;
    ugcMapId: number;
}

export interface CSVCMsgClassInfo {
    createOnClient: boolean;
    classes: CSVCMsgClassInfo_classT[];
}

export interface CSVCMsgClassInfo_classT {
    classId: number;
    dataTableName: string;
    className: string;
}

export interface CSVCMsgSendTable {
    isEnd: boolean;
    netTableName: string;
    needsDecoder: boolean;
    props: CSVCMsgSendTable_sendpropT[];
}

export interface CSVCMsgSendTable_sendpropT {
    type: number;
    varName: string;
    flags: number;
    priority: number;
    dtName: string;
    numElements: number;
    lowValue: number;
    highValue: number;
    numBits: number;
}

export interface CSVCMsgPrint {
    text: string;
}

export interface CSVCMsgSetPause {
    paused: boolean;
}

export interface CSVCMsgSetView {
    entityIndex: number;
}

export interface CSVCMsgCreateStringTable {
    name: string;
    maxEntries: number;
    numEntries: number;
    userDataFixedSize: boolean;
    userDataSize: number;
    userDataSizeBits: number;
    flags: number;
    stringData: Uint8Array;
}

export interface CSVCMsgUpdateStringTable {
    tableId: number;
    numChangedEntries: number;
    stringData: Uint8Array;
}

export interface CSVCMsgVoiceInit {
    quality: number;
    codec: string;
    version: number;
}

export interface CSVCMsgVoiceData {
    client: number;
    proximity: boolean;
    xuid: number;
    audibleMask: number;
    voiceData: Uint8Array;
    caster: boolean;
    format: VoiceDataFormatT;
    sequenceBytes: number;
    sectionNumber: number;
    uncompressedSampleOffset: number;
}

export interface CSVCMsgFixAngle {
    relative: boolean;
    angle: CMsgQAngle | undefined;
}

export interface CSVCMsgCrosshairAngle {
    angle: CMsgQAngle | undefined;
}

export interface CSVCMsgPrefetch {
    soundIndex: number;
}

export interface CSVCMsgBSPDecal {
    pos: CMsgVector | undefined;
    decalTextureIndex: number;
    entityIndex: number;
    modelIndex: number;
    lowPriority: boolean;
}

export interface CSVCMsgSplitScreen {
    type: ESplitScreenMessageType;
    slot: number;
    playerIndex: number;
}

export interface CSVCMsgGetCvarValue {
    cookie: number;
    cvarName: string;
}

export interface CSVCMsgUserMessage {
    msgType: number;
    msgData: Uint8Array;
    passthrough: number;
}

export interface CSVCMsgPaintmapData {
    paintmap: Uint8Array;
}

export interface CSVCMsgGameEvent {
    eventName: string;
    eventid: number;
    keys: CSVCMsgGameEvent_keyT[];
    passthrough: number;
}

export interface CSVCMsgGameEvent_keyT {
    type: number;
    valString: string;
    valFloat: number;
    valLong: number;
    valShort: number;
    valByte: number;
    valBool: boolean;
    valUint64: number;
    valWstring: Uint8Array;
}

export interface CSVCMsgGameEventList {
    descriptors: CSVCMsgGameEventList_descriptorT[];
}

export interface CSVCMsgGameEventList_keyT {
    type: number;
    name: string;
}

export interface CSVCMsgGameEventList_descriptorT {
    eventid: number;
    name: string;
    keys: CSVCMsgGameEventList_keyT[];
}

export interface CSVCMsgTempEntities {
    reliable: boolean;
    numEntries: number;
    entityData: Uint8Array;
}

export interface CSVCMsgPacketEntities {
    maxEntries: number;
    updatedEntries: number;
    isDelta: boolean;
    updateBaseline: boolean;
    baseline: number;
    deltaFrom: number;
    entityData: Uint8Array;
}

export interface CSVCMsgSounds {
    reliableSound: boolean;
    sounds: CSVCMsgSounds_sounddataT[];
}

export interface CSVCMsgSounds_sounddataT {
    originX: number;
    originY: number;
    originZ: number;
    volume: number;
    delayValue: number;
    sequenceNumber: number;
    entityIndex: number;
    channel: number;
    pitch: number;
    flags: number;
    soundNum: number;
    soundNumHandle: number;
    speakerEntity: number;
    randomSeed: number;
    soundLevel: number;
    isSentence: boolean;
    isAmbient: boolean;
}

export interface CSVCMsgEntityMsg {
    entIndex: number;
    classId: number;
    entData: Uint8Array;
}

export interface CSVCMsgCmdKeyValues {
    keyvalues: Uint8Array;
}

export interface CSVCMsgEncryptedData {
    encrypted: Uint8Array;
    keyType: number;
}

export interface CSVCMsgHltvReplay {
    delay: number;
    primaryTarget: number;
    replayStopAt: number;
    replayStartAt: number;
    replaySlowdownBegin: number;
    replaySlowdownEnd: number;
    replaySlowdownRate: number;
    reason: number;
}

export interface CCLCMsgHltvReplay {
    request: number;
    slowdownLength: number;
    slowdownRate: number;
    primaryTargetEntIndex: number;
    eventTime: number;
}

export interface CSVCMsgBroadcastCommand {
    cmd: string;
}

export interface CCLCMsgHltvFixupOperatorTick {
    tick: number;
    propsData: Uint8Array;
    origin: CMsgVector | undefined;
    eyeAngles: CMsgQAngle | undefined;
    observerMode: number;
    cameramanScoreboard: boolean;
    observerTarget: number;
    viewOffset: CMsgVector | undefined;
}

export interface CSVCMsgHltvFixupOperatorStatus {
    mode: number;
    overrideOperatorName: string;
}

function createBaseCMsgVector(): CMsgVector {
    return { x: 0, y: 0, z: 0 };
}

export const CMsgVector = {
    encode(message: CMsgVector, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CMsgVector {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgVector();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.y = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.z = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CMsgVector {
        return {
            x: isSet(object.x) ? globalThis.Number(object.x) : 0,
            y: isSet(object.y) ? globalThis.Number(object.y) : 0,
            z: isSet(object.z) ? globalThis.Number(object.z) : 0,
        };
    },

    toJSON(message: CMsgVector): unknown {
        const obj: any = {};
        if (message.x !== 0) {
            obj.x = message.x;
        }
        if (message.y !== 0) {
            obj.y = message.y;
        }
        if (message.z !== 0) {
            obj.z = message.z;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CMsgVector>, I>>(base?: I): CMsgVector {
        return CMsgVector.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CMsgVector>, I>>(object: I): CMsgVector {
        const message = createBaseCMsgVector();
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        message.z = object.z ?? 0;
        return message;
    },
};

function createBaseCMsgVector2D(): CMsgVector2D {
    return { x: 0, y: 0 };
}

export const CMsgVector2D = {
    encode(message: CMsgVector2D, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CMsgVector2D {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgVector2D();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.y = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CMsgVector2D {
        return {
            x: isSet(object.x) ? globalThis.Number(object.x) : 0,
            y: isSet(object.y) ? globalThis.Number(object.y) : 0,
        };
    },

    toJSON(message: CMsgVector2D): unknown {
        const obj: any = {};
        if (message.x !== 0) {
            obj.x = message.x;
        }
        if (message.y !== 0) {
            obj.y = message.y;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CMsgVector2D>, I>>(base?: I): CMsgVector2D {
        return CMsgVector2D.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CMsgVector2D>, I>>(object: I): CMsgVector2D {
        const message = createBaseCMsgVector2D();
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        return message;
    },
};

function createBaseCMsgQAngle(): CMsgQAngle {
    return { x: 0, y: 0, z: 0 };
}

export const CMsgQAngle = {
    encode(message: CMsgQAngle, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CMsgQAngle {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgQAngle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.y = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.z = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CMsgQAngle {
        return {
            x: isSet(object.x) ? globalThis.Number(object.x) : 0,
            y: isSet(object.y) ? globalThis.Number(object.y) : 0,
            z: isSet(object.z) ? globalThis.Number(object.z) : 0,
        };
    },

    toJSON(message: CMsgQAngle): unknown {
        const obj: any = {};
        if (message.x !== 0) {
            obj.x = message.x;
        }
        if (message.y !== 0) {
            obj.y = message.y;
        }
        if (message.z !== 0) {
            obj.z = message.z;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CMsgQAngle>, I>>(base?: I): CMsgQAngle {
        return CMsgQAngle.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CMsgQAngle>, I>>(object: I): CMsgQAngle {
        const message = createBaseCMsgQAngle();
        message.x = object.x ?? 0;
        message.y = object.y ?? 0;
        message.z = object.z ?? 0;
        return message;
    },
};

function createBaseCMsgRGBA(): CMsgRGBA {
    return { r: 0, g: 0, b: 0, a: 0 };
}

export const CMsgRGBA = {
    encode(message: CMsgRGBA, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.r !== 0) {
            writer.uint32(8).int32(message.r);
        }
        if (message.g !== 0) {
            writer.uint32(16).int32(message.g);
        }
        if (message.b !== 0) {
            writer.uint32(24).int32(message.b);
        }
        if (message.a !== 0) {
            writer.uint32(32).int32(message.a);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CMsgRGBA {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgRGBA();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.r = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.g = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.b = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.a = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CMsgRGBA {
        return {
            r: isSet(object.r) ? globalThis.Number(object.r) : 0,
            g: isSet(object.g) ? globalThis.Number(object.g) : 0,
            b: isSet(object.b) ? globalThis.Number(object.b) : 0,
            a: isSet(object.a) ? globalThis.Number(object.a) : 0,
        };
    },

    toJSON(message: CMsgRGBA): unknown {
        const obj: any = {};
        if (message.r !== 0) {
            obj.r = Math.round(message.r);
        }
        if (message.g !== 0) {
            obj.g = Math.round(message.g);
        }
        if (message.b !== 0) {
            obj.b = Math.round(message.b);
        }
        if (message.a !== 0) {
            obj.a = Math.round(message.a);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CMsgRGBA>, I>>(base?: I): CMsgRGBA {
        return CMsgRGBA.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CMsgRGBA>, I>>(object: I): CMsgRGBA {
        const message = createBaseCMsgRGBA();
        message.r = object.r ?? 0;
        message.g = object.g ?? 0;
        message.b = object.b ?? 0;
        message.a = object.a ?? 0;
        return message;
    },
};

function createBaseCNETMsgTick(): CNETMsgTick {
    return {
        tick: 0,
        hostComputationtime: 0,
        hostComputationtimeStdDeviation: 0,
        hostFramestarttimeStdDeviation: 0,
        hltvReplayFlags: 0,
    };
}

export const CNETMsgTick = {
    encode(message: CNETMsgTick, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.tick !== 0) {
            writer.uint32(8).uint32(message.tick);
        }
        if (message.hostComputationtime !== 0) {
            writer.uint32(32).uint32(message.hostComputationtime);
        }
        if (message.hostComputationtimeStdDeviation !== 0) {
            writer.uint32(40).uint32(message.hostComputationtimeStdDeviation);
        }
        if (message.hostFramestarttimeStdDeviation !== 0) {
            writer.uint32(48).uint32(message.hostFramestarttimeStdDeviation);
        }
        if (message.hltvReplayFlags !== 0) {
            writer.uint32(56).uint32(message.hltvReplayFlags);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgTick {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgTick();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.tick = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.hostComputationtime = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.hostComputationtimeStdDeviation = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.hostFramestarttimeStdDeviation = reader.uint32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.hltvReplayFlags = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CNETMsgTick {
        return {
            tick: isSet(object.tick) ? globalThis.Number(object.tick) : 0,
            hostComputationtime: isSet(object.hostComputationtime) ? globalThis.Number(object.hostComputationtime) : 0,
            hostComputationtimeStdDeviation: isSet(object.hostComputationtimeStdDeviation)
                ? globalThis.Number(object.hostComputationtimeStdDeviation)
                : 0,
            hostFramestarttimeStdDeviation: isSet(object.hostFramestarttimeStdDeviation)
                ? globalThis.Number(object.hostFramestarttimeStdDeviation)
                : 0,
            hltvReplayFlags: isSet(object.hltvReplayFlags) ? globalThis.Number(object.hltvReplayFlags) : 0,
        };
    },

    toJSON(message: CNETMsgTick): unknown {
        const obj: any = {};
        if (message.tick !== 0) {
            obj.tick = Math.round(message.tick);
        }
        if (message.hostComputationtime !== 0) {
            obj.hostComputationtime = Math.round(message.hostComputationtime);
        }
        if (message.hostComputationtimeStdDeviation !== 0) {
            obj.hostComputationtimeStdDeviation = Math.round(message.hostComputationtimeStdDeviation);
        }
        if (message.hostFramestarttimeStdDeviation !== 0) {
            obj.hostFramestarttimeStdDeviation = Math.round(message.hostFramestarttimeStdDeviation);
        }
        if (message.hltvReplayFlags !== 0) {
            obj.hltvReplayFlags = Math.round(message.hltvReplayFlags);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgTick>, I>>(base?: I): CNETMsgTick {
        return CNETMsgTick.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgTick>, I>>(object: I): CNETMsgTick {
        const message = createBaseCNETMsgTick();
        message.tick = object.tick ?? 0;
        message.hostComputationtime = object.hostComputationtime ?? 0;
        message.hostComputationtimeStdDeviation = object.hostComputationtimeStdDeviation ?? 0;
        message.hostFramestarttimeStdDeviation = object.hostFramestarttimeStdDeviation ?? 0;
        message.hltvReplayFlags = object.hltvReplayFlags ?? 0;
        return message;
    },
};

function createBaseCNETMsgStringCmd(): CNETMsgStringCmd {
    return { command: '' };
}

export const CNETMsgStringCmd = {
    encode(message: CNETMsgStringCmd, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.command !== '') {
            writer.uint32(10).string(message.command);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgStringCmd {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgStringCmd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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

    fromJSON(object: any): CNETMsgStringCmd {
        return { command: isSet(object.command) ? globalThis.String(object.command) : '' };
    },

    toJSON(message: CNETMsgStringCmd): unknown {
        const obj: any = {};
        if (message.command !== '') {
            obj.command = message.command;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgStringCmd>, I>>(base?: I): CNETMsgStringCmd {
        return CNETMsgStringCmd.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgStringCmd>, I>>(object: I): CNETMsgStringCmd {
        const message = createBaseCNETMsgStringCmd();
        message.command = object.command ?? '';
        return message;
    },
};

function createBaseCNETMsgSignonState(): CNETMsgSignonState {
    return { signonState: 0, spawnCount: 0, numServerPlayers: 0, playersNetworkids: [], mapName: '' };
}

export const CNETMsgSignonState = {
    encode(message: CNETMsgSignonState, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.signonState !== 0) {
            writer.uint32(8).uint32(message.signonState);
        }
        if (message.spawnCount !== 0) {
            writer.uint32(16).uint32(message.spawnCount);
        }
        if (message.numServerPlayers !== 0) {
            writer.uint32(24).uint32(message.numServerPlayers);
        }
        for (const v of message.playersNetworkids) {
            writer.uint32(34).string(v!);
        }
        if (message.mapName !== '') {
            writer.uint32(42).string(message.mapName);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgSignonState {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgSignonState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.signonState = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.spawnCount = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.numServerPlayers = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.playersNetworkids.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.mapName = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CNETMsgSignonState {
        return {
            signonState: isSet(object.signonState) ? globalThis.Number(object.signonState) : 0,
            spawnCount: isSet(object.spawnCount) ? globalThis.Number(object.spawnCount) : 0,
            numServerPlayers: isSet(object.numServerPlayers) ? globalThis.Number(object.numServerPlayers) : 0,
            playersNetworkids: globalThis.Array.isArray(object?.playersNetworkids)
                ? object.playersNetworkids.map((e: any) => globalThis.String(e))
                : [],
            mapName: isSet(object.mapName) ? globalThis.String(object.mapName) : '',
        };
    },

    toJSON(message: CNETMsgSignonState): unknown {
        const obj: any = {};
        if (message.signonState !== 0) {
            obj.signonState = Math.round(message.signonState);
        }
        if (message.spawnCount !== 0) {
            obj.spawnCount = Math.round(message.spawnCount);
        }
        if (message.numServerPlayers !== 0) {
            obj.numServerPlayers = Math.round(message.numServerPlayers);
        }
        if (message.playersNetworkids?.length) {
            obj.playersNetworkids = message.playersNetworkids;
        }
        if (message.mapName !== '') {
            obj.mapName = message.mapName;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgSignonState>, I>>(base?: I): CNETMsgSignonState {
        return CNETMsgSignonState.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgSignonState>, I>>(object: I): CNETMsgSignonState {
        const message = createBaseCNETMsgSignonState();
        message.signonState = object.signonState ?? 0;
        message.spawnCount = object.spawnCount ?? 0;
        message.numServerPlayers = object.numServerPlayers ?? 0;
        message.playersNetworkids = object.playersNetworkids?.map((e) => e) || [];
        message.mapName = object.mapName ?? '';
        return message;
    },
};

function createBaseCMsgCVars(): CMsgCVars {
    return { cvars: [] };
}

export const CMsgCVars = {
    encode(message: CMsgCVars, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        for (const v of message.cvars) {
            CMsgCVars_CVar.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CMsgCVars {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgCVars();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.cvars.push(CMsgCVars_CVar.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CMsgCVars {
        return {
            cvars: globalThis.Array.isArray(object?.cvars)
                ? object.cvars.map((e: any) => CMsgCVars_CVar.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CMsgCVars): unknown {
        const obj: any = {};
        if (message.cvars?.length) {
            obj.cvars = message.cvars.map((e) => CMsgCVars_CVar.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CMsgCVars>, I>>(base?: I): CMsgCVars {
        return CMsgCVars.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CMsgCVars>, I>>(object: I): CMsgCVars {
        const message = createBaseCMsgCVars();
        message.cvars = object.cvars?.map((e) => CMsgCVars_CVar.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCMsgCVars_CVar(): CMsgCVars_CVar {
    return { name: '', value: '', dictionaryName: 0 };
}

export const CMsgCVars_CVar = {
    encode(message: CMsgCVars_CVar, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        if (message.dictionaryName !== 0) {
            writer.uint32(24).uint32(message.dictionaryName);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CMsgCVars_CVar {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCMsgCVars_CVar();
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

                    message.value = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.dictionaryName = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CMsgCVars_CVar {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            value: isSet(object.value) ? globalThis.String(object.value) : '',
            dictionaryName: isSet(object.dictionaryName) ? globalThis.Number(object.dictionaryName) : 0,
        };
    },

    toJSON(message: CMsgCVars_CVar): unknown {
        const obj: any = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.value !== '') {
            obj.value = message.value;
        }
        if (message.dictionaryName !== 0) {
            obj.dictionaryName = Math.round(message.dictionaryName);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CMsgCVars_CVar>, I>>(base?: I): CMsgCVars_CVar {
        return CMsgCVars_CVar.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CMsgCVars_CVar>, I>>(object: I): CMsgCVars_CVar {
        const message = createBaseCMsgCVars_CVar();
        message.name = object.name ?? '';
        message.value = object.value ?? '';
        message.dictionaryName = object.dictionaryName ?? 0;
        return message;
    },
};

function createBaseCNETMsgSetConVar(): CNETMsgSetConVar {
    return { convars: undefined };
}

export const CNETMsgSetConVar = {
    encode(message: CNETMsgSetConVar, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.convars !== undefined) {
            CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgSetConVar {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgSetConVar();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.convars = CMsgCVars.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CNETMsgSetConVar {
        return { convars: isSet(object.convars) ? CMsgCVars.fromJSON(object.convars) : undefined };
    },

    toJSON(message: CNETMsgSetConVar): unknown {
        const obj: any = {};
        if (message.convars !== undefined) {
            obj.convars = CMsgCVars.toJSON(message.convars);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgSetConVar>, I>>(base?: I): CNETMsgSetConVar {
        return CNETMsgSetConVar.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgSetConVar>, I>>(object: I): CNETMsgSetConVar {
        const message = createBaseCNETMsgSetConVar();
        message.convars = (object.convars !== undefined && object.convars !== null)
            ? CMsgCVars.fromPartial(object.convars)
            : undefined;
        return message;
    },
};

function createBaseCNETMsgNOP(): CNETMsgNOP {
    return {};
}

export const CNETMsgNOP = {
    encode(_: CNETMsgNOP, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgNOP {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgNOP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): CNETMsgNOP {
        return {};
    },

    toJSON(_: CNETMsgNOP): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgNOP>, I>>(base?: I): CNETMsgNOP {
        return CNETMsgNOP.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgNOP>, I>>(_: I): CNETMsgNOP {
        const message = createBaseCNETMsgNOP();
        return message;
    },
};

function createBaseCNETMsgDisconnect(): CNETMsgDisconnect {
    return { reason: 0 };
}

export const CNETMsgDisconnect = {
    encode(message: CNETMsgDisconnect, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.reason !== 0) {
            writer.uint32(8).int32(message.reason);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgDisconnect {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgDisconnect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.reason = reader.int32() as any;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CNETMsgDisconnect {
        return { reason: isSet(object.reason) ? eNetworkDisconnectionReasonFromJSON(object.reason) : 0 };
    },

    toJSON(message: CNETMsgDisconnect): unknown {
        const obj: any = {};
        if (message.reason !== 0) {
            obj.reason = eNetworkDisconnectionReasonToJSON(message.reason);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgDisconnect>, I>>(base?: I): CNETMsgDisconnect {
        return CNETMsgDisconnect.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgDisconnect>, I>>(object: I): CNETMsgDisconnect {
        const message = createBaseCNETMsgDisconnect();
        message.reason = object.reason ?? 0;
        return message;
    },
};

function createBaseCNETMsgFile(): CNETMsgFile {
    return { transferId: 0, fileName: '', isReplayDemoFile: false, deny: false };
}

export const CNETMsgFile = {
    encode(message: CNETMsgFile, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.transferId !== 0) {
            writer.uint32(8).int32(message.transferId);
        }
        if (message.fileName !== '') {
            writer.uint32(18).string(message.fileName);
        }
        if (message.isReplayDemoFile === true) {
            writer.uint32(24).bool(message.isReplayDemoFile);
        }
        if (message.deny === true) {
            writer.uint32(32).bool(message.deny);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgFile {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgFile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.transferId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.fileName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.isReplayDemoFile = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.deny = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CNETMsgFile {
        return {
            transferId: isSet(object.transferId) ? globalThis.Number(object.transferId) : 0,
            fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : '',
            isReplayDemoFile: isSet(object.isReplayDemoFile) ? globalThis.Boolean(object.isReplayDemoFile) : false,
            deny: isSet(object.deny) ? globalThis.Boolean(object.deny) : false,
        };
    },

    toJSON(message: CNETMsgFile): unknown {
        const obj: any = {};
        if (message.transferId !== 0) {
            obj.transferId = Math.round(message.transferId);
        }
        if (message.fileName !== '') {
            obj.fileName = message.fileName;
        }
        if (message.isReplayDemoFile === true) {
            obj.isReplayDemoFile = message.isReplayDemoFile;
        }
        if (message.deny === true) {
            obj.deny = message.deny;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgFile>, I>>(base?: I): CNETMsgFile {
        return CNETMsgFile.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgFile>, I>>(object: I): CNETMsgFile {
        const message = createBaseCNETMsgFile();
        message.transferId = object.transferId ?? 0;
        message.fileName = object.fileName ?? '';
        message.isReplayDemoFile = object.isReplayDemoFile ?? false;
        message.deny = object.deny ?? false;
        return message;
    },
};

function createBaseCNETMsgSplitScreenUser(): CNETMsgSplitScreenUser {
    return { slot: 0 };
}

export const CNETMsgSplitScreenUser = {
    encode(message: CNETMsgSplitScreenUser, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.slot !== 0) {
            writer.uint32(8).int32(message.slot);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgSplitScreenUser {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgSplitScreenUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.slot = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CNETMsgSplitScreenUser {
        return { slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0 };
    },

    toJSON(message: CNETMsgSplitScreenUser): unknown {
        const obj: any = {};
        if (message.slot !== 0) {
            obj.slot = Math.round(message.slot);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgSplitScreenUser>, I>>(base?: I): CNETMsgSplitScreenUser {
        return CNETMsgSplitScreenUser.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgSplitScreenUser>, I>>(object: I): CNETMsgSplitScreenUser {
        const message = createBaseCNETMsgSplitScreenUser();
        message.slot = object.slot ?? 0;
        return message;
    },
};

function createBaseCNETMsgPlayerAvatarData(): CNETMsgPlayerAvatarData {
    return { accountid: 0, rgb: new Uint8Array(0) };
}

export const CNETMsgPlayerAvatarData = {
    encode(message: CNETMsgPlayerAvatarData, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.accountid !== 0) {
            writer.uint32(8).uint32(message.accountid);
        }
        if (message.rgb.length !== 0) {
            writer.uint32(18).bytes(message.rgb);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CNETMsgPlayerAvatarData {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCNETMsgPlayerAvatarData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.accountid = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.rgb = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CNETMsgPlayerAvatarData {
        return {
            accountid: isSet(object.accountid) ? globalThis.Number(object.accountid) : 0,
            rgb: isSet(object.rgb) ? bytesFromBase64(object.rgb) : new Uint8Array(0),
        };
    },

    toJSON(message: CNETMsgPlayerAvatarData): unknown {
        const obj: any = {};
        if (message.accountid !== 0) {
            obj.accountid = Math.round(message.accountid);
        }
        if (message.rgb.length !== 0) {
            obj.rgb = base64FromBytes(message.rgb);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CNETMsgPlayerAvatarData>, I>>(base?: I): CNETMsgPlayerAvatarData {
        return CNETMsgPlayerAvatarData.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CNETMsgPlayerAvatarData>, I>>(object: I): CNETMsgPlayerAvatarData {
        const message = createBaseCNETMsgPlayerAvatarData();
        message.accountid = object.accountid ?? 0;
        message.rgb = object.rgb ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCCLCMsgClientInfo(): CCLCMsgClientInfo {
    return {
        sendTableCrc: 0,
        serverCount: 0,
        isHltv: false,
        isReplay: false,
        friendsId: 0,
        friendsName: '',
        customFiles: [],
    };
}

export const CCLCMsgClientInfo = {
    encode(message: CCLCMsgClientInfo, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.sendTableCrc !== 0) {
            writer.uint32(13).fixed32(message.sendTableCrc);
        }
        if (message.serverCount !== 0) {
            writer.uint32(16).uint32(message.serverCount);
        }
        if (message.isHltv === true) {
            writer.uint32(24).bool(message.isHltv);
        }
        if (message.isReplay === true) {
            writer.uint32(32).bool(message.isReplay);
        }
        if (message.friendsId !== 0) {
            writer.uint32(40).uint32(message.friendsId);
        }
        if (message.friendsName !== '') {
            writer.uint32(50).string(message.friendsName);
        }
        writer.uint32(58).fork();
        for (const v of message.customFiles) {
            writer.fixed32(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgClientInfo {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgClientInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.sendTableCrc = reader.fixed32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.serverCount = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.isHltv = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.isReplay = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.friendsId = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.friendsName = reader.string();
                    continue;
                case 7:
                    if (tag === 61) {
                        message.customFiles.push(reader.fixed32());

                        continue;
                    }

                    if (tag === 58) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.customFiles.push(reader.fixed32());
                        }

                        continue;
                    }

                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgClientInfo {
        return {
            sendTableCrc: isSet(object.sendTableCrc) ? globalThis.Number(object.sendTableCrc) : 0,
            serverCount: isSet(object.serverCount) ? globalThis.Number(object.serverCount) : 0,
            isHltv: isSet(object.isHltv) ? globalThis.Boolean(object.isHltv) : false,
            isReplay: isSet(object.isReplay) ? globalThis.Boolean(object.isReplay) : false,
            friendsId: isSet(object.friendsId) ? globalThis.Number(object.friendsId) : 0,
            friendsName: isSet(object.friendsName) ? globalThis.String(object.friendsName) : '',
            customFiles: globalThis.Array.isArray(object?.customFiles)
                ? object.customFiles.map((e: any) => globalThis.Number(e))
                : [],
        };
    },

    toJSON(message: CCLCMsgClientInfo): unknown {
        const obj: any = {};
        if (message.sendTableCrc !== 0) {
            obj.sendTableCrc = Math.round(message.sendTableCrc);
        }
        if (message.serverCount !== 0) {
            obj.serverCount = Math.round(message.serverCount);
        }
        if (message.isHltv === true) {
            obj.isHltv = message.isHltv;
        }
        if (message.isReplay === true) {
            obj.isReplay = message.isReplay;
        }
        if (message.friendsId !== 0) {
            obj.friendsId = Math.round(message.friendsId);
        }
        if (message.friendsName !== '') {
            obj.friendsName = message.friendsName;
        }
        if (message.customFiles?.length) {
            obj.customFiles = message.customFiles.map((e) => Math.round(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgClientInfo>, I>>(base?: I): CCLCMsgClientInfo {
        return CCLCMsgClientInfo.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgClientInfo>, I>>(object: I): CCLCMsgClientInfo {
        const message = createBaseCCLCMsgClientInfo();
        message.sendTableCrc = object.sendTableCrc ?? 0;
        message.serverCount = object.serverCount ?? 0;
        message.isHltv = object.isHltv ?? false;
        message.isReplay = object.isReplay ?? false;
        message.friendsId = object.friendsId ?? 0;
        message.friendsName = object.friendsName ?? '';
        message.customFiles = object.customFiles?.map((e) => e) || [];
        return message;
    },
};

function createBaseCCLCMsgMove(): CCLCMsgMove {
    return { numBackupCommands: 0, numNewCommands: 0, data: new Uint8Array(0) };
}

export const CCLCMsgMove = {
    encode(message: CCLCMsgMove, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.numBackupCommands !== 0) {
            writer.uint32(8).uint32(message.numBackupCommands);
        }
        if (message.numNewCommands !== 0) {
            writer.uint32(16).uint32(message.numNewCommands);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgMove {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgMove();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.numBackupCommands = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.numNewCommands = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
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

    fromJSON(object: any): CCLCMsgMove {
        return {
            numBackupCommands: isSet(object.numBackupCommands) ? globalThis.Number(object.numBackupCommands) : 0,
            numNewCommands: isSet(object.numNewCommands) ? globalThis.Number(object.numNewCommands) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
        };
    },

    toJSON(message: CCLCMsgMove): unknown {
        const obj: any = {};
        if (message.numBackupCommands !== 0) {
            obj.numBackupCommands = Math.round(message.numBackupCommands);
        }
        if (message.numNewCommands !== 0) {
            obj.numNewCommands = Math.round(message.numNewCommands);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgMove>, I>>(base?: I): CCLCMsgMove {
        return CCLCMsgMove.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgMove>, I>>(object: I): CCLCMsgMove {
        const message = createBaseCCLCMsgMove();
        message.numBackupCommands = object.numBackupCommands ?? 0;
        message.numNewCommands = object.numNewCommands ?? 0;
        message.data = object.data ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCCLCMsgVoiceData(): CCLCMsgVoiceData {
    return {
        data: new Uint8Array(0),
        xuid: 0,
        format: 0,
        sequenceBytes: 0,
        sectionNumber: 0,
        uncompressedSampleOffset: 0,
    };
}

export const CCLCMsgVoiceData = {
    encode(message: CCLCMsgVoiceData, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.xuid !== 0) {
            writer.uint32(17).fixed64(message.xuid);
        }
        if (message.format !== 0) {
            writer.uint32(24).int32(message.format);
        }
        if (message.sequenceBytes !== 0) {
            writer.uint32(32).int32(message.sequenceBytes);
        }
        if (message.sectionNumber !== 0) {
            writer.uint32(40).uint32(message.sectionNumber);
        }
        if (message.uncompressedSampleOffset !== 0) {
            writer.uint32(48).uint32(message.uncompressedSampleOffset);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgVoiceData {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgVoiceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.data = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }

                    message.xuid = longToNumber(reader.fixed64() as Long);
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.format = reader.int32() as any;
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.sequenceBytes = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.sectionNumber = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.uncompressedSampleOffset = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgVoiceData {
        return {
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
            xuid: isSet(object.xuid) ? globalThis.Number(object.xuid) : 0,
            format: isSet(object.format) ? voiceDataFormatTFromJSON(object.format) : 0,
            sequenceBytes: isSet(object.sequenceBytes) ? globalThis.Number(object.sequenceBytes) : 0,
            sectionNumber: isSet(object.sectionNumber) ? globalThis.Number(object.sectionNumber) : 0,
            uncompressedSampleOffset: isSet(object.uncompressedSampleOffset)
                ? globalThis.Number(object.uncompressedSampleOffset)
                : 0,
        };
    },

    toJSON(message: CCLCMsgVoiceData): unknown {
        const obj: any = {};
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        if (message.xuid !== 0) {
            obj.xuid = Math.round(message.xuid);
        }
        if (message.format !== 0) {
            obj.format = voiceDataFormatTToJSON(message.format);
        }
        if (message.sequenceBytes !== 0) {
            obj.sequenceBytes = Math.round(message.sequenceBytes);
        }
        if (message.sectionNumber !== 0) {
            obj.sectionNumber = Math.round(message.sectionNumber);
        }
        if (message.uncompressedSampleOffset !== 0) {
            obj.uncompressedSampleOffset = Math.round(message.uncompressedSampleOffset);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgVoiceData>, I>>(base?: I): CCLCMsgVoiceData {
        return CCLCMsgVoiceData.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgVoiceData>, I>>(object: I): CCLCMsgVoiceData {
        const message = createBaseCCLCMsgVoiceData();
        message.data = object.data ?? new Uint8Array(0);
        message.xuid = object.xuid ?? 0;
        message.format = object.format ?? 0;
        message.sequenceBytes = object.sequenceBytes ?? 0;
        message.sectionNumber = object.sectionNumber ?? 0;
        message.uncompressedSampleOffset = object.uncompressedSampleOffset ?? 0;
        return message;
    },
};

function createBaseCCLCMsgBaselineAck(): CCLCMsgBaselineAck {
    return { baselineTick: 0, baselineNr: 0 };
}

export const CCLCMsgBaselineAck = {
    encode(message: CCLCMsgBaselineAck, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.baselineTick !== 0) {
            writer.uint32(8).int32(message.baselineTick);
        }
        if (message.baselineNr !== 0) {
            writer.uint32(16).int32(message.baselineNr);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgBaselineAck {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgBaselineAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.baselineTick = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.baselineNr = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgBaselineAck {
        return {
            baselineTick: isSet(object.baselineTick) ? globalThis.Number(object.baselineTick) : 0,
            baselineNr: isSet(object.baselineNr) ? globalThis.Number(object.baselineNr) : 0,
        };
    },

    toJSON(message: CCLCMsgBaselineAck): unknown {
        const obj: any = {};
        if (message.baselineTick !== 0) {
            obj.baselineTick = Math.round(message.baselineTick);
        }
        if (message.baselineNr !== 0) {
            obj.baselineNr = Math.round(message.baselineNr);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgBaselineAck>, I>>(base?: I): CCLCMsgBaselineAck {
        return CCLCMsgBaselineAck.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgBaselineAck>, I>>(object: I): CCLCMsgBaselineAck {
        const message = createBaseCCLCMsgBaselineAck();
        message.baselineTick = object.baselineTick ?? 0;
        message.baselineNr = object.baselineNr ?? 0;
        return message;
    },
};

function createBaseCCLCMsgListenEvents(): CCLCMsgListenEvents {
    return { eventMask: [] };
}

export const CCLCMsgListenEvents = {
    encode(message: CCLCMsgListenEvents, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        writer.uint32(10).fork();
        for (const v of message.eventMask) {
            writer.fixed64(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgListenEvents {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgListenEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 9) {
                        message.eventMask.push(longToNumber(reader.fixed64() as Long));

                        continue;
                    }

                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.eventMask.push(longToNumber(reader.fixed64() as Long));
                        }

                        continue;
                    }

                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgListenEvents {
        return {
            eventMask: globalThis.Array.isArray(object?.eventMask)
                ? object.eventMask.map((e: any) => globalThis.Number(e))
                : [],
        };
    },

    toJSON(message: CCLCMsgListenEvents): unknown {
        const obj: any = {};
        if (message.eventMask?.length) {
            obj.eventMask = message.eventMask.map((e) => Math.round(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgListenEvents>, I>>(base?: I): CCLCMsgListenEvents {
        return CCLCMsgListenEvents.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgListenEvents>, I>>(object: I): CCLCMsgListenEvents {
        const message = createBaseCCLCMsgListenEvents();
        message.eventMask = object.eventMask?.map((e) => e) || [];
        return message;
    },
};

function createBaseCCLCMsgRespondCvarValue(): CCLCMsgRespondCvarValue {
    return { cookie: 0, statusCode: 0, name: '', value: '' };
}

export const CCLCMsgRespondCvarValue = {
    encode(message: CCLCMsgRespondCvarValue, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.cookie !== 0) {
            writer.uint32(8).int32(message.cookie);
        }
        if (message.statusCode !== 0) {
            writer.uint32(16).int32(message.statusCode);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.value !== '') {
            writer.uint32(34).string(message.value);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgRespondCvarValue {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgRespondCvarValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.cookie = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.statusCode = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgRespondCvarValue {
        return {
            cookie: isSet(object.cookie) ? globalThis.Number(object.cookie) : 0,
            statusCode: isSet(object.statusCode) ? globalThis.Number(object.statusCode) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            value: isSet(object.value) ? globalThis.String(object.value) : '',
        };
    },

    toJSON(message: CCLCMsgRespondCvarValue): unknown {
        const obj: any = {};
        if (message.cookie !== 0) {
            obj.cookie = Math.round(message.cookie);
        }
        if (message.statusCode !== 0) {
            obj.statusCode = Math.round(message.statusCode);
        }
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.value !== '') {
            obj.value = message.value;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgRespondCvarValue>, I>>(base?: I): CCLCMsgRespondCvarValue {
        return CCLCMsgRespondCvarValue.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgRespondCvarValue>, I>>(object: I): CCLCMsgRespondCvarValue {
        const message = createBaseCCLCMsgRespondCvarValue();
        message.cookie = object.cookie ?? 0;
        message.statusCode = object.statusCode ?? 0;
        message.name = object.name ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

function createBaseCCLCMsgFileCRCCheck(): CCLCMsgFileCRCCheck {
    return {
        codePath: 0,
        path: '',
        codeFilename: 0,
        filename: '',
        fileFraction: 0,
        md5: new Uint8Array(0),
        crc: 0,
        fileHashType: 0,
        fileLen: 0,
        packFileId: 0,
        packFileNumber: 0,
    };
}

export const CCLCMsgFileCRCCheck = {
    encode(message: CCLCMsgFileCRCCheck, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.codePath !== 0) {
            writer.uint32(8).int32(message.codePath);
        }
        if (message.path !== '') {
            writer.uint32(18).string(message.path);
        }
        if (message.codeFilename !== 0) {
            writer.uint32(24).int32(message.codeFilename);
        }
        if (message.filename !== '') {
            writer.uint32(34).string(message.filename);
        }
        if (message.fileFraction !== 0) {
            writer.uint32(40).int32(message.fileFraction);
        }
        if (message.md5.length !== 0) {
            writer.uint32(50).bytes(message.md5);
        }
        if (message.crc !== 0) {
            writer.uint32(56).uint32(message.crc);
        }
        if (message.fileHashType !== 0) {
            writer.uint32(64).int32(message.fileHashType);
        }
        if (message.fileLen !== 0) {
            writer.uint32(72).int32(message.fileLen);
        }
        if (message.packFileId !== 0) {
            writer.uint32(80).int32(message.packFileId);
        }
        if (message.packFileNumber !== 0) {
            writer.uint32(88).int32(message.packFileNumber);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgFileCRCCheck {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgFileCRCCheck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.codePath = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.path = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.codeFilename = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.filename = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.fileFraction = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.md5 = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.crc = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.fileHashType = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.fileLen = reader.int32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.packFileId = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }

                    message.packFileNumber = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgFileCRCCheck {
        return {
            codePath: isSet(object.codePath) ? globalThis.Number(object.codePath) : 0,
            path: isSet(object.path) ? globalThis.String(object.path) : '',
            codeFilename: isSet(object.codeFilename) ? globalThis.Number(object.codeFilename) : 0,
            filename: isSet(object.filename) ? globalThis.String(object.filename) : '',
            fileFraction: isSet(object.fileFraction) ? globalThis.Number(object.fileFraction) : 0,
            md5: isSet(object.md5) ? bytesFromBase64(object.md5) : new Uint8Array(0),
            crc: isSet(object.crc) ? globalThis.Number(object.crc) : 0,
            fileHashType: isSet(object.fileHashType) ? globalThis.Number(object.fileHashType) : 0,
            fileLen: isSet(object.fileLen) ? globalThis.Number(object.fileLen) : 0,
            packFileId: isSet(object.packFileId) ? globalThis.Number(object.packFileId) : 0,
            packFileNumber: isSet(object.packFileNumber) ? globalThis.Number(object.packFileNumber) : 0,
        };
    },

    toJSON(message: CCLCMsgFileCRCCheck): unknown {
        const obj: any = {};
        if (message.codePath !== 0) {
            obj.codePath = Math.round(message.codePath);
        }
        if (message.path !== '') {
            obj.path = message.path;
        }
        if (message.codeFilename !== 0) {
            obj.codeFilename = Math.round(message.codeFilename);
        }
        if (message.filename !== '') {
            obj.filename = message.filename;
        }
        if (message.fileFraction !== 0) {
            obj.fileFraction = Math.round(message.fileFraction);
        }
        if (message.md5.length !== 0) {
            obj.md5 = base64FromBytes(message.md5);
        }
        if (message.crc !== 0) {
            obj.crc = Math.round(message.crc);
        }
        if (message.fileHashType !== 0) {
            obj.fileHashType = Math.round(message.fileHashType);
        }
        if (message.fileLen !== 0) {
            obj.fileLen = Math.round(message.fileLen);
        }
        if (message.packFileId !== 0) {
            obj.packFileId = Math.round(message.packFileId);
        }
        if (message.packFileNumber !== 0) {
            obj.packFileNumber = Math.round(message.packFileNumber);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgFileCRCCheck>, I>>(base?: I): CCLCMsgFileCRCCheck {
        return CCLCMsgFileCRCCheck.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgFileCRCCheck>, I>>(object: I): CCLCMsgFileCRCCheck {
        const message = createBaseCCLCMsgFileCRCCheck();
        message.codePath = object.codePath ?? 0;
        message.path = object.path ?? '';
        message.codeFilename = object.codeFilename ?? 0;
        message.filename = object.filename ?? '';
        message.fileFraction = object.fileFraction ?? 0;
        message.md5 = object.md5 ?? new Uint8Array(0);
        message.crc = object.crc ?? 0;
        message.fileHashType = object.fileHashType ?? 0;
        message.fileLen = object.fileLen ?? 0;
        message.packFileId = object.packFileId ?? 0;
        message.packFileNumber = object.packFileNumber ?? 0;
        return message;
    },
};

function createBaseCCLCMsgLoadingProgress(): CCLCMsgLoadingProgress {
    return { progress: 0 };
}

export const CCLCMsgLoadingProgress = {
    encode(message: CCLCMsgLoadingProgress, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.progress !== 0) {
            writer.uint32(8).int32(message.progress);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgLoadingProgress {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgLoadingProgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.progress = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgLoadingProgress {
        return { progress: isSet(object.progress) ? globalThis.Number(object.progress) : 0 };
    },

    toJSON(message: CCLCMsgLoadingProgress): unknown {
        const obj: any = {};
        if (message.progress !== 0) {
            obj.progress = Math.round(message.progress);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgLoadingProgress>, I>>(base?: I): CCLCMsgLoadingProgress {
        return CCLCMsgLoadingProgress.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgLoadingProgress>, I>>(object: I): CCLCMsgLoadingProgress {
        const message = createBaseCCLCMsgLoadingProgress();
        message.progress = object.progress ?? 0;
        return message;
    },
};

function createBaseCCLCMsgSplitPlayerConnect(): CCLCMsgSplitPlayerConnect {
    return { convars: undefined };
}

export const CCLCMsgSplitPlayerConnect = {
    encode(message: CCLCMsgSplitPlayerConnect, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.convars !== undefined) {
            CMsgCVars.encode(message.convars, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgSplitPlayerConnect {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgSplitPlayerConnect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.convars = CMsgCVars.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgSplitPlayerConnect {
        return { convars: isSet(object.convars) ? CMsgCVars.fromJSON(object.convars) : undefined };
    },

    toJSON(message: CCLCMsgSplitPlayerConnect): unknown {
        const obj: any = {};
        if (message.convars !== undefined) {
            obj.convars = CMsgCVars.toJSON(message.convars);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgSplitPlayerConnect>, I>>(base?: I): CCLCMsgSplitPlayerConnect {
        return CCLCMsgSplitPlayerConnect.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgSplitPlayerConnect>, I>>(object: I): CCLCMsgSplitPlayerConnect {
        const message = createBaseCCLCMsgSplitPlayerConnect();
        message.convars = (object.convars !== undefined && object.convars !== null)
            ? CMsgCVars.fromPartial(object.convars)
            : undefined;
        return message;
    },
};

function createBaseCCLCMsgCmdKeyValues(): CCLCMsgCmdKeyValues {
    return { keyvalues: new Uint8Array(0) };
}

export const CCLCMsgCmdKeyValues = {
    encode(message: CCLCMsgCmdKeyValues, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.keyvalues.length !== 0) {
            writer.uint32(10).bytes(message.keyvalues);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgCmdKeyValues {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgCmdKeyValues();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.keyvalues = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgCmdKeyValues {
        return { keyvalues: isSet(object.keyvalues) ? bytesFromBase64(object.keyvalues) : new Uint8Array(0) };
    },

    toJSON(message: CCLCMsgCmdKeyValues): unknown {
        const obj: any = {};
        if (message.keyvalues.length !== 0) {
            obj.keyvalues = base64FromBytes(message.keyvalues);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgCmdKeyValues>, I>>(base?: I): CCLCMsgCmdKeyValues {
        return CCLCMsgCmdKeyValues.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgCmdKeyValues>, I>>(object: I): CCLCMsgCmdKeyValues {
        const message = createBaseCCLCMsgCmdKeyValues();
        message.keyvalues = object.keyvalues ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgServerInfo(): CSVCMsgServerInfo {
    return {
        protocol: 0,
        serverCount: 0,
        isDedicated: false,
        isOfficialValveServer: false,
        isHltv: false,
        isReplay: false,
        isRedirectingToProxyRelay: false,
        cOs: 0,
        mapCrc: 0,
        clientCrc: 0,
        stringTableCrc: 0,
        maxClients: 0,
        maxClasses: 0,
        playerSlot: 0,
        tickInterval: 0,
        gameDir: '',
        mapName: '',
        mapGroupName: '',
        skyName: '',
        hostName: '',
        publicIp: 0,
        ugcMapId: 0,
    };
}

export const CSVCMsgServerInfo = {
    encode(message: CSVCMsgServerInfo, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.protocol !== 0) {
            writer.uint32(8).int32(message.protocol);
        }
        if (message.serverCount !== 0) {
            writer.uint32(16).int32(message.serverCount);
        }
        if (message.isDedicated === true) {
            writer.uint32(24).bool(message.isDedicated);
        }
        if (message.isOfficialValveServer === true) {
            writer.uint32(32).bool(message.isOfficialValveServer);
        }
        if (message.isHltv === true) {
            writer.uint32(40).bool(message.isHltv);
        }
        if (message.isReplay === true) {
            writer.uint32(48).bool(message.isReplay);
        }
        if (message.isRedirectingToProxyRelay === true) {
            writer.uint32(168).bool(message.isRedirectingToProxyRelay);
        }
        if (message.cOs !== 0) {
            writer.uint32(56).int32(message.cOs);
        }
        if (message.mapCrc !== 0) {
            writer.uint32(69).fixed32(message.mapCrc);
        }
        if (message.clientCrc !== 0) {
            writer.uint32(77).fixed32(message.clientCrc);
        }
        if (message.stringTableCrc !== 0) {
            writer.uint32(85).fixed32(message.stringTableCrc);
        }
        if (message.maxClients !== 0) {
            writer.uint32(88).int32(message.maxClients);
        }
        if (message.maxClasses !== 0) {
            writer.uint32(96).int32(message.maxClasses);
        }
        if (message.playerSlot !== 0) {
            writer.uint32(104).int32(message.playerSlot);
        }
        if (message.tickInterval !== 0) {
            writer.uint32(117).float(message.tickInterval);
        }
        if (message.gameDir !== '') {
            writer.uint32(122).string(message.gameDir);
        }
        if (message.mapName !== '') {
            writer.uint32(130).string(message.mapName);
        }
        if (message.mapGroupName !== '') {
            writer.uint32(138).string(message.mapGroupName);
        }
        if (message.skyName !== '') {
            writer.uint32(146).string(message.skyName);
        }
        if (message.hostName !== '') {
            writer.uint32(154).string(message.hostName);
        }
        if (message.publicIp !== 0) {
            writer.uint32(160).uint32(message.publicIp);
        }
        if (message.ugcMapId !== 0) {
            writer.uint32(176).uint64(message.ugcMapId);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgServerInfo {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgServerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.protocol = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.serverCount = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.isDedicated = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.isOfficialValveServer = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.isHltv = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.isReplay = reader.bool();
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }

                    message.isRedirectingToProxyRelay = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.cOs = reader.int32();
                    continue;
                case 8:
                    if (tag !== 69) {
                        break;
                    }

                    message.mapCrc = reader.fixed32();
                    continue;
                case 9:
                    if (tag !== 77) {
                        break;
                    }

                    message.clientCrc = reader.fixed32();
                    continue;
                case 10:
                    if (tag !== 85) {
                        break;
                    }

                    message.stringTableCrc = reader.fixed32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }

                    message.maxClients = reader.int32();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }

                    message.maxClasses = reader.int32();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }

                    message.playerSlot = reader.int32();
                    continue;
                case 14:
                    if (tag !== 117) {
                        break;
                    }

                    message.tickInterval = reader.float();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }

                    message.gameDir = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }

                    message.mapName = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }

                    message.mapGroupName = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }

                    message.skyName = reader.string();
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }

                    message.hostName = reader.string();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }

                    message.publicIp = reader.uint32();
                    continue;
                case 22:
                    if (tag !== 176) {
                        break;
                    }

                    message.ugcMapId = longToNumber(reader.uint64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgServerInfo {
        return {
            protocol: isSet(object.protocol) ? globalThis.Number(object.protocol) : 0,
            serverCount: isSet(object.serverCount) ? globalThis.Number(object.serverCount) : 0,
            isDedicated: isSet(object.isDedicated) ? globalThis.Boolean(object.isDedicated) : false,
            isOfficialValveServer: isSet(object.isOfficialValveServer)
                ? globalThis.Boolean(object.isOfficialValveServer)
                : false,
            isHltv: isSet(object.isHltv) ? globalThis.Boolean(object.isHltv) : false,
            isReplay: isSet(object.isReplay) ? globalThis.Boolean(object.isReplay) : false,
            isRedirectingToProxyRelay: isSet(object.isRedirectingToProxyRelay)
                ? globalThis.Boolean(object.isRedirectingToProxyRelay)
                : false,
            cOs: isSet(object.cOs) ? globalThis.Number(object.cOs) : 0,
            mapCrc: isSet(object.mapCrc) ? globalThis.Number(object.mapCrc) : 0,
            clientCrc: isSet(object.clientCrc) ? globalThis.Number(object.clientCrc) : 0,
            stringTableCrc: isSet(object.stringTableCrc) ? globalThis.Number(object.stringTableCrc) : 0,
            maxClients: isSet(object.maxClients) ? globalThis.Number(object.maxClients) : 0,
            maxClasses: isSet(object.maxClasses) ? globalThis.Number(object.maxClasses) : 0,
            playerSlot: isSet(object.playerSlot) ? globalThis.Number(object.playerSlot) : 0,
            tickInterval: isSet(object.tickInterval) ? globalThis.Number(object.tickInterval) : 0,
            gameDir: isSet(object.gameDir) ? globalThis.String(object.gameDir) : '',
            mapName: isSet(object.mapName) ? globalThis.String(object.mapName) : '',
            mapGroupName: isSet(object.mapGroupName) ? globalThis.String(object.mapGroupName) : '',
            skyName: isSet(object.skyName) ? globalThis.String(object.skyName) : '',
            hostName: isSet(object.hostName) ? globalThis.String(object.hostName) : '',
            publicIp: isSet(object.publicIp) ? globalThis.Number(object.publicIp) : 0,
            ugcMapId: isSet(object.ugcMapId) ? globalThis.Number(object.ugcMapId) : 0,
        };
    },

    toJSON(message: CSVCMsgServerInfo): unknown {
        const obj: any = {};
        if (message.protocol !== 0) {
            obj.protocol = Math.round(message.protocol);
        }
        if (message.serverCount !== 0) {
            obj.serverCount = Math.round(message.serverCount);
        }
        if (message.isDedicated === true) {
            obj.isDedicated = message.isDedicated;
        }
        if (message.isOfficialValveServer === true) {
            obj.isOfficialValveServer = message.isOfficialValveServer;
        }
        if (message.isHltv === true) {
            obj.isHltv = message.isHltv;
        }
        if (message.isReplay === true) {
            obj.isReplay = message.isReplay;
        }
        if (message.isRedirectingToProxyRelay === true) {
            obj.isRedirectingToProxyRelay = message.isRedirectingToProxyRelay;
        }
        if (message.cOs !== 0) {
            obj.cOs = Math.round(message.cOs);
        }
        if (message.mapCrc !== 0) {
            obj.mapCrc = Math.round(message.mapCrc);
        }
        if (message.clientCrc !== 0) {
            obj.clientCrc = Math.round(message.clientCrc);
        }
        if (message.stringTableCrc !== 0) {
            obj.stringTableCrc = Math.round(message.stringTableCrc);
        }
        if (message.maxClients !== 0) {
            obj.maxClients = Math.round(message.maxClients);
        }
        if (message.maxClasses !== 0) {
            obj.maxClasses = Math.round(message.maxClasses);
        }
        if (message.playerSlot !== 0) {
            obj.playerSlot = Math.round(message.playerSlot);
        }
        if (message.tickInterval !== 0) {
            obj.tickInterval = message.tickInterval;
        }
        if (message.gameDir !== '') {
            obj.gameDir = message.gameDir;
        }
        if (message.mapName !== '') {
            obj.mapName = message.mapName;
        }
        if (message.mapGroupName !== '') {
            obj.mapGroupName = message.mapGroupName;
        }
        if (message.skyName !== '') {
            obj.skyName = message.skyName;
        }
        if (message.hostName !== '') {
            obj.hostName = message.hostName;
        }
        if (message.publicIp !== 0) {
            obj.publicIp = Math.round(message.publicIp);
        }
        if (message.ugcMapId !== 0) {
            obj.ugcMapId = Math.round(message.ugcMapId);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgServerInfo>, I>>(base?: I): CSVCMsgServerInfo {
        return CSVCMsgServerInfo.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgServerInfo>, I>>(object: I): CSVCMsgServerInfo {
        const message = createBaseCSVCMsgServerInfo();
        message.protocol = object.protocol ?? 0;
        message.serverCount = object.serverCount ?? 0;
        message.isDedicated = object.isDedicated ?? false;
        message.isOfficialValveServer = object.isOfficialValveServer ?? false;
        message.isHltv = object.isHltv ?? false;
        message.isReplay = object.isReplay ?? false;
        message.isRedirectingToProxyRelay = object.isRedirectingToProxyRelay ?? false;
        message.cOs = object.cOs ?? 0;
        message.mapCrc = object.mapCrc ?? 0;
        message.clientCrc = object.clientCrc ?? 0;
        message.stringTableCrc = object.stringTableCrc ?? 0;
        message.maxClients = object.maxClients ?? 0;
        message.maxClasses = object.maxClasses ?? 0;
        message.playerSlot = object.playerSlot ?? 0;
        message.tickInterval = object.tickInterval ?? 0;
        message.gameDir = object.gameDir ?? '';
        message.mapName = object.mapName ?? '';
        message.mapGroupName = object.mapGroupName ?? '';
        message.skyName = object.skyName ?? '';
        message.hostName = object.hostName ?? '';
        message.publicIp = object.publicIp ?? 0;
        message.ugcMapId = object.ugcMapId ?? 0;
        return message;
    },
};

function createBaseCSVCMsgClassInfo(): CSVCMsgClassInfo {
    return { createOnClient: false, classes: [] };
}

export const CSVCMsgClassInfo = {
    encode(message: CSVCMsgClassInfo, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.createOnClient === true) {
            writer.uint32(8).bool(message.createOnClient);
        }
        for (const v of message.classes) {
            CSVCMsgClassInfo_classT.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgClassInfo {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgClassInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.createOnClient = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.classes.push(CSVCMsgClassInfo_classT.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgClassInfo {
        return {
            createOnClient: isSet(object.createOnClient) ? globalThis.Boolean(object.createOnClient) : false,
            classes: globalThis.Array.isArray(object?.classes)
                ? object.classes.map((e: any) => CSVCMsgClassInfo_classT.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CSVCMsgClassInfo): unknown {
        const obj: any = {};
        if (message.createOnClient === true) {
            obj.createOnClient = message.createOnClient;
        }
        if (message.classes?.length) {
            obj.classes = message.classes.map((e) => CSVCMsgClassInfo_classT.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgClassInfo>, I>>(base?: I): CSVCMsgClassInfo {
        return CSVCMsgClassInfo.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgClassInfo>, I>>(object: I): CSVCMsgClassInfo {
        const message = createBaseCSVCMsgClassInfo();
        message.createOnClient = object.createOnClient ?? false;
        message.classes = object.classes?.map((e) => CSVCMsgClassInfo_classT.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCSVCMsgClassInfo_classT(): CSVCMsgClassInfo_classT {
    return { classId: 0, dataTableName: '', className: '' };
}

export const CSVCMsgClassInfo_classT = {
    encode(message: CSVCMsgClassInfo_classT, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.classId !== 0) {
            writer.uint32(8).int32(message.classId);
        }
        if (message.dataTableName !== '') {
            writer.uint32(18).string(message.dataTableName);
        }
        if (message.className !== '') {
            writer.uint32(26).string(message.className);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgClassInfo_classT {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgClassInfo_classT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.classId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.dataTableName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.className = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgClassInfo_classT {
        return {
            classId: isSet(object.classId) ? globalThis.Number(object.classId) : 0,
            dataTableName: isSet(object.dataTableName) ? globalThis.String(object.dataTableName) : '',
            className: isSet(object.className) ? globalThis.String(object.className) : '',
        };
    },

    toJSON(message: CSVCMsgClassInfo_classT): unknown {
        const obj: any = {};
        if (message.classId !== 0) {
            obj.classId = Math.round(message.classId);
        }
        if (message.dataTableName !== '') {
            obj.dataTableName = message.dataTableName;
        }
        if (message.className !== '') {
            obj.className = message.className;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgClassInfo_classT>, I>>(base?: I): CSVCMsgClassInfo_classT {
        return CSVCMsgClassInfo_classT.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgClassInfo_classT>, I>>(object: I): CSVCMsgClassInfo_classT {
        const message = createBaseCSVCMsgClassInfo_classT();
        message.classId = object.classId ?? 0;
        message.dataTableName = object.dataTableName ?? '';
        message.className = object.className ?? '';
        return message;
    },
};

function createBaseCSVCMsgSendTable(): CSVCMsgSendTable {
    return { isEnd: false, netTableName: '', needsDecoder: false, props: [] };
}

export const CSVCMsgSendTable = {
    encode(message: CSVCMsgSendTable, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.isEnd === true) {
            writer.uint32(8).bool(message.isEnd);
        }
        if (message.netTableName !== '') {
            writer.uint32(18).string(message.netTableName);
        }
        if (message.needsDecoder === true) {
            writer.uint32(24).bool(message.needsDecoder);
        }
        for (const v of message.props) {
            CSVCMsgSendTable_sendpropT.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgSendTable {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSendTable();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.isEnd = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.netTableName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.needsDecoder = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.props.push(CSVCMsgSendTable_sendpropT.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgSendTable {
        return {
            isEnd: isSet(object.isEnd) ? globalThis.Boolean(object.isEnd) : false,
            netTableName: isSet(object.netTableName) ? globalThis.String(object.netTableName) : '',
            needsDecoder: isSet(object.needsDecoder) ? globalThis.Boolean(object.needsDecoder) : false,
            props: globalThis.Array.isArray(object?.props)
                ? object.props.map((e: any) => CSVCMsgSendTable_sendpropT.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CSVCMsgSendTable): unknown {
        const obj: any = {};
        if (message.isEnd === true) {
            obj.isEnd = message.isEnd;
        }
        if (message.netTableName !== '') {
            obj.netTableName = message.netTableName;
        }
        if (message.needsDecoder === true) {
            obj.needsDecoder = message.needsDecoder;
        }
        if (message.props?.length) {
            obj.props = message.props.map((e) => CSVCMsgSendTable_sendpropT.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgSendTable>, I>>(base?: I): CSVCMsgSendTable {
        return CSVCMsgSendTable.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgSendTable>, I>>(object: I): CSVCMsgSendTable {
        const message = createBaseCSVCMsgSendTable();
        message.isEnd = object.isEnd ?? false;
        message.netTableName = object.netTableName ?? '';
        message.needsDecoder = object.needsDecoder ?? false;
        message.props = object.props?.map((e) => CSVCMsgSendTable_sendpropT.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCSVCMsgSendTable_sendpropT(): CSVCMsgSendTable_sendpropT {
    return {
        type: 0,
        varName: '',
        flags: 0,
        priority: 0,
        dtName: '',
        numElements: 0,
        lowValue: 0,
        highValue: 0,
        numBits: 0,
    };
}

export const CSVCMsgSendTable_sendpropT = {
    encode(message: CSVCMsgSendTable_sendpropT, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.varName !== '') {
            writer.uint32(18).string(message.varName);
        }
        if (message.flags !== 0) {
            writer.uint32(24).int32(message.flags);
        }
        if (message.priority !== 0) {
            writer.uint32(32).int32(message.priority);
        }
        if (message.dtName !== '') {
            writer.uint32(42).string(message.dtName);
        }
        if (message.numElements !== 0) {
            writer.uint32(48).int32(message.numElements);
        }
        if (message.lowValue !== 0) {
            writer.uint32(61).float(message.lowValue);
        }
        if (message.highValue !== 0) {
            writer.uint32(69).float(message.highValue);
        }
        if (message.numBits !== 0) {
            writer.uint32(72).int32(message.numBits);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgSendTable_sendpropT {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSendTable_sendpropT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.varName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.flags = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.priority = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.dtName = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.numElements = reader.int32();
                    continue;
                case 7:
                    if (tag !== 61) {
                        break;
                    }

                    message.lowValue = reader.float();
                    continue;
                case 8:
                    if (tag !== 69) {
                        break;
                    }

                    message.highValue = reader.float();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.numBits = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgSendTable_sendpropT {
        return {
            type: isSet(object.type) ? globalThis.Number(object.type) : 0,
            varName: isSet(object.varName) ? globalThis.String(object.varName) : '',
            flags: isSet(object.flags) ? globalThis.Number(object.flags) : 0,
            priority: isSet(object.priority) ? globalThis.Number(object.priority) : 0,
            dtName: isSet(object.dtName) ? globalThis.String(object.dtName) : '',
            numElements: isSet(object.numElements) ? globalThis.Number(object.numElements) : 0,
            lowValue: isSet(object.lowValue) ? globalThis.Number(object.lowValue) : 0,
            highValue: isSet(object.highValue) ? globalThis.Number(object.highValue) : 0,
            numBits: isSet(object.numBits) ? globalThis.Number(object.numBits) : 0,
        };
    },

    toJSON(message: CSVCMsgSendTable_sendpropT): unknown {
        const obj: any = {};
        if (message.type !== 0) {
            obj.type = Math.round(message.type);
        }
        if (message.varName !== '') {
            obj.varName = message.varName;
        }
        if (message.flags !== 0) {
            obj.flags = Math.round(message.flags);
        }
        if (message.priority !== 0) {
            obj.priority = Math.round(message.priority);
        }
        if (message.dtName !== '') {
            obj.dtName = message.dtName;
        }
        if (message.numElements !== 0) {
            obj.numElements = Math.round(message.numElements);
        }
        if (message.lowValue !== 0) {
            obj.lowValue = message.lowValue;
        }
        if (message.highValue !== 0) {
            obj.highValue = message.highValue;
        }
        if (message.numBits !== 0) {
            obj.numBits = Math.round(message.numBits);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgSendTable_sendpropT>, I>>(base?: I): CSVCMsgSendTable_sendpropT {
        return CSVCMsgSendTable_sendpropT.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgSendTable_sendpropT>, I>>(object: I): CSVCMsgSendTable_sendpropT {
        const message = createBaseCSVCMsgSendTable_sendpropT();
        message.type = object.type ?? 0;
        message.varName = object.varName ?? '';
        message.flags = object.flags ?? 0;
        message.priority = object.priority ?? 0;
        message.dtName = object.dtName ?? '';
        message.numElements = object.numElements ?? 0;
        message.lowValue = object.lowValue ?? 0;
        message.highValue = object.highValue ?? 0;
        message.numBits = object.numBits ?? 0;
        return message;
    },
};

function createBaseCSVCMsgPrint(): CSVCMsgPrint {
    return { text: '' };
}

export const CSVCMsgPrint = {
    encode(message: CSVCMsgPrint, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.text !== '') {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgPrint {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPrint();
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

    fromJSON(object: any): CSVCMsgPrint {
        return { text: isSet(object.text) ? globalThis.String(object.text) : '' };
    },

    toJSON(message: CSVCMsgPrint): unknown {
        const obj: any = {};
        if (message.text !== '') {
            obj.text = message.text;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgPrint>, I>>(base?: I): CSVCMsgPrint {
        return CSVCMsgPrint.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgPrint>, I>>(object: I): CSVCMsgPrint {
        const message = createBaseCSVCMsgPrint();
        message.text = object.text ?? '';
        return message;
    },
};

function createBaseCSVCMsgSetPause(): CSVCMsgSetPause {
    return { paused: false };
}

export const CSVCMsgSetPause = {
    encode(message: CSVCMsgSetPause, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.paused === true) {
            writer.uint32(8).bool(message.paused);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgSetPause {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSetPause();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.paused = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgSetPause {
        return { paused: isSet(object.paused) ? globalThis.Boolean(object.paused) : false };
    },

    toJSON(message: CSVCMsgSetPause): unknown {
        const obj: any = {};
        if (message.paused === true) {
            obj.paused = message.paused;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgSetPause>, I>>(base?: I): CSVCMsgSetPause {
        return CSVCMsgSetPause.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgSetPause>, I>>(object: I): CSVCMsgSetPause {
        const message = createBaseCSVCMsgSetPause();
        message.paused = object.paused ?? false;
        return message;
    },
};

function createBaseCSVCMsgSetView(): CSVCMsgSetView {
    return { entityIndex: 0 };
}

export const CSVCMsgSetView = {
    encode(message: CSVCMsgSetView, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entityIndex !== 0) {
            writer.uint32(8).int32(message.entityIndex);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgSetView {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSetView();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entityIndex = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgSetView {
        return { entityIndex: isSet(object.entityIndex) ? globalThis.Number(object.entityIndex) : 0 };
    },

    toJSON(message: CSVCMsgSetView): unknown {
        const obj: any = {};
        if (message.entityIndex !== 0) {
            obj.entityIndex = Math.round(message.entityIndex);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgSetView>, I>>(base?: I): CSVCMsgSetView {
        return CSVCMsgSetView.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgSetView>, I>>(object: I): CSVCMsgSetView {
        const message = createBaseCSVCMsgSetView();
        message.entityIndex = object.entityIndex ?? 0;
        return message;
    },
};

function createBaseCSVCMsgCreateStringTable(): CSVCMsgCreateStringTable {
    return {
        name: '',
        maxEntries: 0,
        numEntries: 0,
        userDataFixedSize: false,
        userDataSize: 0,
        userDataSizeBits: 0,
        flags: 0,
        stringData: new Uint8Array(0),
    };
}

export const CSVCMsgCreateStringTable = {
    encode(message: CSVCMsgCreateStringTable, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(16).int32(message.maxEntries);
        }
        if (message.numEntries !== 0) {
            writer.uint32(24).int32(message.numEntries);
        }
        if (message.userDataFixedSize === true) {
            writer.uint32(32).bool(message.userDataFixedSize);
        }
        if (message.userDataSize !== 0) {
            writer.uint32(40).int32(message.userDataSize);
        }
        if (message.userDataSizeBits !== 0) {
            writer.uint32(48).int32(message.userDataSizeBits);
        }
        if (message.flags !== 0) {
            writer.uint32(56).int32(message.flags);
        }
        if (message.stringData.length !== 0) {
            writer.uint32(66).bytes(message.stringData);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgCreateStringTable {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgCreateStringTable();
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

                    message.maxEntries = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.numEntries = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.userDataFixedSize = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.userDataSize = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.userDataSizeBits = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.flags = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.stringData = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgCreateStringTable {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            maxEntries: isSet(object.maxEntries) ? globalThis.Number(object.maxEntries) : 0,
            numEntries: isSet(object.numEntries) ? globalThis.Number(object.numEntries) : 0,
            userDataFixedSize: isSet(object.userDataFixedSize) ? globalThis.Boolean(object.userDataFixedSize) : false,
            userDataSize: isSet(object.userDataSize) ? globalThis.Number(object.userDataSize) : 0,
            userDataSizeBits: isSet(object.userDataSizeBits) ? globalThis.Number(object.userDataSizeBits) : 0,
            flags: isSet(object.flags) ? globalThis.Number(object.flags) : 0,
            stringData: isSet(object.stringData) ? bytesFromBase64(object.stringData) : new Uint8Array(0),
        };
    },

    toJSON(message: CSVCMsgCreateStringTable): unknown {
        const obj: any = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.maxEntries !== 0) {
            obj.maxEntries = Math.round(message.maxEntries);
        }
        if (message.numEntries !== 0) {
            obj.numEntries = Math.round(message.numEntries);
        }
        if (message.userDataFixedSize === true) {
            obj.userDataFixedSize = message.userDataFixedSize;
        }
        if (message.userDataSize !== 0) {
            obj.userDataSize = Math.round(message.userDataSize);
        }
        if (message.userDataSizeBits !== 0) {
            obj.userDataSizeBits = Math.round(message.userDataSizeBits);
        }
        if (message.flags !== 0) {
            obj.flags = Math.round(message.flags);
        }
        if (message.stringData.length !== 0) {
            obj.stringData = base64FromBytes(message.stringData);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgCreateStringTable>, I>>(base?: I): CSVCMsgCreateStringTable {
        return CSVCMsgCreateStringTable.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgCreateStringTable>, I>>(object: I): CSVCMsgCreateStringTable {
        const message = createBaseCSVCMsgCreateStringTable();
        message.name = object.name ?? '';
        message.maxEntries = object.maxEntries ?? 0;
        message.numEntries = object.numEntries ?? 0;
        message.userDataFixedSize = object.userDataFixedSize ?? false;
        message.userDataSize = object.userDataSize ?? 0;
        message.userDataSizeBits = object.userDataSizeBits ?? 0;
        message.flags = object.flags ?? 0;
        message.stringData = object.stringData ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgUpdateStringTable(): CSVCMsgUpdateStringTable {
    return { tableId: 0, numChangedEntries: 0, stringData: new Uint8Array(0) };
}

export const CSVCMsgUpdateStringTable = {
    encode(message: CSVCMsgUpdateStringTable, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.tableId !== 0) {
            writer.uint32(8).int32(message.tableId);
        }
        if (message.numChangedEntries !== 0) {
            writer.uint32(16).int32(message.numChangedEntries);
        }
        if (message.stringData.length !== 0) {
            writer.uint32(26).bytes(message.stringData);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgUpdateStringTable {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgUpdateStringTable();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.tableId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.numChangedEntries = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.stringData = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgUpdateStringTable {
        return {
            tableId: isSet(object.tableId) ? globalThis.Number(object.tableId) : 0,
            numChangedEntries: isSet(object.numChangedEntries) ? globalThis.Number(object.numChangedEntries) : 0,
            stringData: isSet(object.stringData) ? bytesFromBase64(object.stringData) : new Uint8Array(0),
        };
    },

    toJSON(message: CSVCMsgUpdateStringTable): unknown {
        const obj: any = {};
        if (message.tableId !== 0) {
            obj.tableId = Math.round(message.tableId);
        }
        if (message.numChangedEntries !== 0) {
            obj.numChangedEntries = Math.round(message.numChangedEntries);
        }
        if (message.stringData.length !== 0) {
            obj.stringData = base64FromBytes(message.stringData);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgUpdateStringTable>, I>>(base?: I): CSVCMsgUpdateStringTable {
        return CSVCMsgUpdateStringTable.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgUpdateStringTable>, I>>(object: I): CSVCMsgUpdateStringTable {
        const message = createBaseCSVCMsgUpdateStringTable();
        message.tableId = object.tableId ?? 0;
        message.numChangedEntries = object.numChangedEntries ?? 0;
        message.stringData = object.stringData ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgVoiceInit(): CSVCMsgVoiceInit {
    return { quality: 0, codec: '', version: 0 };
}

export const CSVCMsgVoiceInit = {
    encode(message: CSVCMsgVoiceInit, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.quality !== 0) {
            writer.uint32(8).int32(message.quality);
        }
        if (message.codec !== '') {
            writer.uint32(18).string(message.codec);
        }
        if (message.version !== 0) {
            writer.uint32(24).int32(message.version);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgVoiceInit {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgVoiceInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.quality = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.codec = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.version = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgVoiceInit {
        return {
            quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
            codec: isSet(object.codec) ? globalThis.String(object.codec) : '',
            version: isSet(object.version) ? globalThis.Number(object.version) : 0,
        };
    },

    toJSON(message: CSVCMsgVoiceInit): unknown {
        const obj: any = {};
        if (message.quality !== 0) {
            obj.quality = Math.round(message.quality);
        }
        if (message.codec !== '') {
            obj.codec = message.codec;
        }
        if (message.version !== 0) {
            obj.version = Math.round(message.version);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgVoiceInit>, I>>(base?: I): CSVCMsgVoiceInit {
        return CSVCMsgVoiceInit.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgVoiceInit>, I>>(object: I): CSVCMsgVoiceInit {
        const message = createBaseCSVCMsgVoiceInit();
        message.quality = object.quality ?? 0;
        message.codec = object.codec ?? '';
        message.version = object.version ?? 0;
        return message;
    },
};

function createBaseCSVCMsgVoiceData(): CSVCMsgVoiceData {
    return {
        client: 0,
        proximity: false,
        xuid: 0,
        audibleMask: 0,
        voiceData: new Uint8Array(0),
        caster: false,
        format: 0,
        sequenceBytes: 0,
        sectionNumber: 0,
        uncompressedSampleOffset: 0,
    };
}

export const CSVCMsgVoiceData = {
    encode(message: CSVCMsgVoiceData, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.client !== 0) {
            writer.uint32(8).int32(message.client);
        }
        if (message.proximity === true) {
            writer.uint32(16).bool(message.proximity);
        }
        if (message.xuid !== 0) {
            writer.uint32(25).fixed64(message.xuid);
        }
        if (message.audibleMask !== 0) {
            writer.uint32(32).int32(message.audibleMask);
        }
        if (message.voiceData.length !== 0) {
            writer.uint32(42).bytes(message.voiceData);
        }
        if (message.caster === true) {
            writer.uint32(48).bool(message.caster);
        }
        if (message.format !== 0) {
            writer.uint32(56).int32(message.format);
        }
        if (message.sequenceBytes !== 0) {
            writer.uint32(64).int32(message.sequenceBytes);
        }
        if (message.sectionNumber !== 0) {
            writer.uint32(72).uint32(message.sectionNumber);
        }
        if (message.uncompressedSampleOffset !== 0) {
            writer.uint32(80).uint32(message.uncompressedSampleOffset);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgVoiceData {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgVoiceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.client = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.proximity = reader.bool();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }

                    message.xuid = longToNumber(reader.fixed64() as Long);
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.audibleMask = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.voiceData = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.caster = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.format = reader.int32() as any;
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.sequenceBytes = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.sectionNumber = reader.uint32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.uncompressedSampleOffset = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgVoiceData {
        return {
            client: isSet(object.client) ? globalThis.Number(object.client) : 0,
            proximity: isSet(object.proximity) ? globalThis.Boolean(object.proximity) : false,
            xuid: isSet(object.xuid) ? globalThis.Number(object.xuid) : 0,
            audibleMask: isSet(object.audibleMask) ? globalThis.Number(object.audibleMask) : 0,
            voiceData: isSet(object.voiceData) ? bytesFromBase64(object.voiceData) : new Uint8Array(0),
            caster: isSet(object.caster) ? globalThis.Boolean(object.caster) : false,
            format: isSet(object.format) ? voiceDataFormatTFromJSON(object.format) : 0,
            sequenceBytes: isSet(object.sequenceBytes) ? globalThis.Number(object.sequenceBytes) : 0,
            sectionNumber: isSet(object.sectionNumber) ? globalThis.Number(object.sectionNumber) : 0,
            uncompressedSampleOffset: isSet(object.uncompressedSampleOffset)
                ? globalThis.Number(object.uncompressedSampleOffset)
                : 0,
        };
    },

    toJSON(message: CSVCMsgVoiceData): unknown {
        const obj: any = {};
        if (message.client !== 0) {
            obj.client = Math.round(message.client);
        }
        if (message.proximity === true) {
            obj.proximity = message.proximity;
        }
        if (message.xuid !== 0) {
            obj.xuid = Math.round(message.xuid);
        }
        if (message.audibleMask !== 0) {
            obj.audibleMask = Math.round(message.audibleMask);
        }
        if (message.voiceData.length !== 0) {
            obj.voiceData = base64FromBytes(message.voiceData);
        }
        if (message.caster === true) {
            obj.caster = message.caster;
        }
        if (message.format !== 0) {
            obj.format = voiceDataFormatTToJSON(message.format);
        }
        if (message.sequenceBytes !== 0) {
            obj.sequenceBytes = Math.round(message.sequenceBytes);
        }
        if (message.sectionNumber !== 0) {
            obj.sectionNumber = Math.round(message.sectionNumber);
        }
        if (message.uncompressedSampleOffset !== 0) {
            obj.uncompressedSampleOffset = Math.round(message.uncompressedSampleOffset);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgVoiceData>, I>>(base?: I): CSVCMsgVoiceData {
        return CSVCMsgVoiceData.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgVoiceData>, I>>(object: I): CSVCMsgVoiceData {
        const message = createBaseCSVCMsgVoiceData();
        message.client = object.client ?? 0;
        message.proximity = object.proximity ?? false;
        message.xuid = object.xuid ?? 0;
        message.audibleMask = object.audibleMask ?? 0;
        message.voiceData = object.voiceData ?? new Uint8Array(0);
        message.caster = object.caster ?? false;
        message.format = object.format ?? 0;
        message.sequenceBytes = object.sequenceBytes ?? 0;
        message.sectionNumber = object.sectionNumber ?? 0;
        message.uncompressedSampleOffset = object.uncompressedSampleOffset ?? 0;
        return message;
    },
};

function createBaseCSVCMsgFixAngle(): CSVCMsgFixAngle {
    return { relative: false, angle: undefined };
}

export const CSVCMsgFixAngle = {
    encode(message: CSVCMsgFixAngle, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.relative === true) {
            writer.uint32(8).bool(message.relative);
        }
        if (message.angle !== undefined) {
            CMsgQAngle.encode(message.angle, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgFixAngle {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgFixAngle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.relative = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.angle = CMsgQAngle.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgFixAngle {
        return {
            relative: isSet(object.relative) ? globalThis.Boolean(object.relative) : false,
            angle: isSet(object.angle) ? CMsgQAngle.fromJSON(object.angle) : undefined,
        };
    },

    toJSON(message: CSVCMsgFixAngle): unknown {
        const obj: any = {};
        if (message.relative === true) {
            obj.relative = message.relative;
        }
        if (message.angle !== undefined) {
            obj.angle = CMsgQAngle.toJSON(message.angle);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgFixAngle>, I>>(base?: I): CSVCMsgFixAngle {
        return CSVCMsgFixAngle.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgFixAngle>, I>>(object: I): CSVCMsgFixAngle {
        const message = createBaseCSVCMsgFixAngle();
        message.relative = object.relative ?? false;
        message.angle = (object.angle !== undefined && object.angle !== null)
            ? CMsgQAngle.fromPartial(object.angle)
            : undefined;
        return message;
    },
};

function createBaseCSVCMsgCrosshairAngle(): CSVCMsgCrosshairAngle {
    return { angle: undefined };
}

export const CSVCMsgCrosshairAngle = {
    encode(message: CSVCMsgCrosshairAngle, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.angle !== undefined) {
            CMsgQAngle.encode(message.angle, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgCrosshairAngle {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgCrosshairAngle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.angle = CMsgQAngle.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgCrosshairAngle {
        return { angle: isSet(object.angle) ? CMsgQAngle.fromJSON(object.angle) : undefined };
    },

    toJSON(message: CSVCMsgCrosshairAngle): unknown {
        const obj: any = {};
        if (message.angle !== undefined) {
            obj.angle = CMsgQAngle.toJSON(message.angle);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgCrosshairAngle>, I>>(base?: I): CSVCMsgCrosshairAngle {
        return CSVCMsgCrosshairAngle.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgCrosshairAngle>, I>>(object: I): CSVCMsgCrosshairAngle {
        const message = createBaseCSVCMsgCrosshairAngle();
        message.angle = (object.angle !== undefined && object.angle !== null)
            ? CMsgQAngle.fromPartial(object.angle)
            : undefined;
        return message;
    },
};

function createBaseCSVCMsgPrefetch(): CSVCMsgPrefetch {
    return { soundIndex: 0 };
}

export const CSVCMsgPrefetch = {
    encode(message: CSVCMsgPrefetch, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.soundIndex !== 0) {
            writer.uint32(8).int32(message.soundIndex);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgPrefetch {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPrefetch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.soundIndex = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgPrefetch {
        return { soundIndex: isSet(object.soundIndex) ? globalThis.Number(object.soundIndex) : 0 };
    },

    toJSON(message: CSVCMsgPrefetch): unknown {
        const obj: any = {};
        if (message.soundIndex !== 0) {
            obj.soundIndex = Math.round(message.soundIndex);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgPrefetch>, I>>(base?: I): CSVCMsgPrefetch {
        return CSVCMsgPrefetch.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgPrefetch>, I>>(object: I): CSVCMsgPrefetch {
        const message = createBaseCSVCMsgPrefetch();
        message.soundIndex = object.soundIndex ?? 0;
        return message;
    },
};

function createBaseCSVCMsgBSPDecal(): CSVCMsgBSPDecal {
    return { pos: undefined, decalTextureIndex: 0, entityIndex: 0, modelIndex: 0, lowPriority: false };
}

export const CSVCMsgBSPDecal = {
    encode(message: CSVCMsgBSPDecal, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.pos !== undefined) {
            CMsgVector.encode(message.pos, writer.uint32(10).fork()).ldelim();
        }
        if (message.decalTextureIndex !== 0) {
            writer.uint32(16).int32(message.decalTextureIndex);
        }
        if (message.entityIndex !== 0) {
            writer.uint32(24).int32(message.entityIndex);
        }
        if (message.modelIndex !== 0) {
            writer.uint32(32).int32(message.modelIndex);
        }
        if (message.lowPriority === true) {
            writer.uint32(40).bool(message.lowPriority);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgBSPDecal {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgBSPDecal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pos = CMsgVector.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.decalTextureIndex = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.entityIndex = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.modelIndex = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.lowPriority = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgBSPDecal {
        return {
            pos: isSet(object.pos) ? CMsgVector.fromJSON(object.pos) : undefined,
            decalTextureIndex: isSet(object.decalTextureIndex) ? globalThis.Number(object.decalTextureIndex) : 0,
            entityIndex: isSet(object.entityIndex) ? globalThis.Number(object.entityIndex) : 0,
            modelIndex: isSet(object.modelIndex) ? globalThis.Number(object.modelIndex) : 0,
            lowPriority: isSet(object.lowPriority) ? globalThis.Boolean(object.lowPriority) : false,
        };
    },

    toJSON(message: CSVCMsgBSPDecal): unknown {
        const obj: any = {};
        if (message.pos !== undefined) {
            obj.pos = CMsgVector.toJSON(message.pos);
        }
        if (message.decalTextureIndex !== 0) {
            obj.decalTextureIndex = Math.round(message.decalTextureIndex);
        }
        if (message.entityIndex !== 0) {
            obj.entityIndex = Math.round(message.entityIndex);
        }
        if (message.modelIndex !== 0) {
            obj.modelIndex = Math.round(message.modelIndex);
        }
        if (message.lowPriority === true) {
            obj.lowPriority = message.lowPriority;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgBSPDecal>, I>>(base?: I): CSVCMsgBSPDecal {
        return CSVCMsgBSPDecal.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgBSPDecal>, I>>(object: I): CSVCMsgBSPDecal {
        const message = createBaseCSVCMsgBSPDecal();
        message.pos = (object.pos !== undefined && object.pos !== null)
            ? CMsgVector.fromPartial(object.pos)
            : undefined;
        message.decalTextureIndex = object.decalTextureIndex ?? 0;
        message.entityIndex = object.entityIndex ?? 0;
        message.modelIndex = object.modelIndex ?? 0;
        message.lowPriority = object.lowPriority ?? false;
        return message;
    },
};

function createBaseCSVCMsgSplitScreen(): CSVCMsgSplitScreen {
    return { type: 0, slot: 0, playerIndex: 0 };
}

export const CSVCMsgSplitScreen = {
    encode(message: CSVCMsgSplitScreen, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.slot !== 0) {
            writer.uint32(16).int32(message.slot);
        }
        if (message.playerIndex !== 0) {
            writer.uint32(24).int32(message.playerIndex);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgSplitScreen {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSplitScreen();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.type = reader.int32() as any;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.slot = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.playerIndex = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgSplitScreen {
        return {
            type: isSet(object.type) ? eSplitScreenMessageTypeFromJSON(object.type) : 0,
            slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0,
            playerIndex: isSet(object.playerIndex) ? globalThis.Number(object.playerIndex) : 0,
        };
    },

    toJSON(message: CSVCMsgSplitScreen): unknown {
        const obj: any = {};
        if (message.type !== 0) {
            obj.type = eSplitScreenMessageTypeToJSON(message.type);
        }
        if (message.slot !== 0) {
            obj.slot = Math.round(message.slot);
        }
        if (message.playerIndex !== 0) {
            obj.playerIndex = Math.round(message.playerIndex);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgSplitScreen>, I>>(base?: I): CSVCMsgSplitScreen {
        return CSVCMsgSplitScreen.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgSplitScreen>, I>>(object: I): CSVCMsgSplitScreen {
        const message = createBaseCSVCMsgSplitScreen();
        message.type = object.type ?? 0;
        message.slot = object.slot ?? 0;
        message.playerIndex = object.playerIndex ?? 0;
        return message;
    },
};

function createBaseCSVCMsgGetCvarValue(): CSVCMsgGetCvarValue {
    return { cookie: 0, cvarName: '' };
}

export const CSVCMsgGetCvarValue = {
    encode(message: CSVCMsgGetCvarValue, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.cookie !== 0) {
            writer.uint32(8).int32(message.cookie);
        }
        if (message.cvarName !== '') {
            writer.uint32(18).string(message.cvarName);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgGetCvarValue {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGetCvarValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.cookie = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.cvarName = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgGetCvarValue {
        return {
            cookie: isSet(object.cookie) ? globalThis.Number(object.cookie) : 0,
            cvarName: isSet(object.cvarName) ? globalThis.String(object.cvarName) : '',
        };
    },

    toJSON(message: CSVCMsgGetCvarValue): unknown {
        const obj: any = {};
        if (message.cookie !== 0) {
            obj.cookie = Math.round(message.cookie);
        }
        if (message.cvarName !== '') {
            obj.cvarName = message.cvarName;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgGetCvarValue>, I>>(base?: I): CSVCMsgGetCvarValue {
        return CSVCMsgGetCvarValue.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgGetCvarValue>, I>>(object: I): CSVCMsgGetCvarValue {
        const message = createBaseCSVCMsgGetCvarValue();
        message.cookie = object.cookie ?? 0;
        message.cvarName = object.cvarName ?? '';
        return message;
    },
};

function createBaseCSVCMsgUserMessage(): CSVCMsgUserMessage {
    return { msgType: 0, msgData: new Uint8Array(0), passthrough: 0 };
}

export const CSVCMsgUserMessage = {
    encode(message: CSVCMsgUserMessage, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.msgType !== 0) {
            writer.uint32(8).int32(message.msgType);
        }
        if (message.msgData.length !== 0) {
            writer.uint32(18).bytes(message.msgData);
        }
        if (message.passthrough !== 0) {
            writer.uint32(24).int32(message.passthrough);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgUserMessage {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgUserMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.msgType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.msgData = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.passthrough = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgUserMessage {
        return {
            msgType: isSet(object.msgType) ? globalThis.Number(object.msgType) : 0,
            msgData: isSet(object.msgData) ? bytesFromBase64(object.msgData) : new Uint8Array(0),
            passthrough: isSet(object.passthrough) ? globalThis.Number(object.passthrough) : 0,
        };
    },

    toJSON(message: CSVCMsgUserMessage): unknown {
        const obj: any = {};
        if (message.msgType !== 0) {
            obj.msgType = Math.round(message.msgType);
        }
        if (message.msgData.length !== 0) {
            obj.msgData = base64FromBytes(message.msgData);
        }
        if (message.passthrough !== 0) {
            obj.passthrough = Math.round(message.passthrough);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgUserMessage>, I>>(base?: I): CSVCMsgUserMessage {
        return CSVCMsgUserMessage.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgUserMessage>, I>>(object: I): CSVCMsgUserMessage {
        const message = createBaseCSVCMsgUserMessage();
        message.msgType = object.msgType ?? 0;
        message.msgData = object.msgData ?? new Uint8Array(0);
        message.passthrough = object.passthrough ?? 0;
        return message;
    },
};

function createBaseCSVCMsgPaintmapData(): CSVCMsgPaintmapData {
    return { paintmap: new Uint8Array(0) };
}

export const CSVCMsgPaintmapData = {
    encode(message: CSVCMsgPaintmapData, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.paintmap.length !== 0) {
            writer.uint32(10).bytes(message.paintmap);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgPaintmapData {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPaintmapData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.paintmap = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgPaintmapData {
        return { paintmap: isSet(object.paintmap) ? bytesFromBase64(object.paintmap) : new Uint8Array(0) };
    },

    toJSON(message: CSVCMsgPaintmapData): unknown {
        const obj: any = {};
        if (message.paintmap.length !== 0) {
            obj.paintmap = base64FromBytes(message.paintmap);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgPaintmapData>, I>>(base?: I): CSVCMsgPaintmapData {
        return CSVCMsgPaintmapData.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgPaintmapData>, I>>(object: I): CSVCMsgPaintmapData {
        const message = createBaseCSVCMsgPaintmapData();
        message.paintmap = object.paintmap ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgGameEvent(): CSVCMsgGameEvent {
    return { eventName: '', eventid: 0, keys: [], passthrough: 0 };
}

export const CSVCMsgGameEvent = {
    encode(message: CSVCMsgGameEvent, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.eventName !== '') {
            writer.uint32(10).string(message.eventName);
        }
        if (message.eventid !== 0) {
            writer.uint32(16).int32(message.eventid);
        }
        for (const v of message.keys) {
            CSVCMsgGameEvent_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.passthrough !== 0) {
            writer.uint32(32).int32(message.passthrough);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgGameEvent {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.eventName = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.eventid = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.keys.push(CSVCMsgGameEvent_keyT.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.passthrough = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgGameEvent {
        return {
            eventName: isSet(object.eventName) ? globalThis.String(object.eventName) : '',
            eventid: isSet(object.eventid) ? globalThis.Number(object.eventid) : 0,
            keys: globalThis.Array.isArray(object?.keys)
                ? object.keys.map((e: any) => CSVCMsgGameEvent_keyT.fromJSON(e))
                : [],
            passthrough: isSet(object.passthrough) ? globalThis.Number(object.passthrough) : 0,
        };
    },

    toJSON(message: CSVCMsgGameEvent): unknown {
        const obj: any = {};
        if (message.eventName !== '') {
            obj.eventName = message.eventName;
        }
        if (message.eventid !== 0) {
            obj.eventid = Math.round(message.eventid);
        }
        if (message.keys?.length) {
            obj.keys = message.keys.map((e) => CSVCMsgGameEvent_keyT.toJSON(e));
        }
        if (message.passthrough !== 0) {
            obj.passthrough = Math.round(message.passthrough);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgGameEvent>, I>>(base?: I): CSVCMsgGameEvent {
        return CSVCMsgGameEvent.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEvent>, I>>(object: I): CSVCMsgGameEvent {
        const message = createBaseCSVCMsgGameEvent();
        message.eventName = object.eventName ?? '';
        message.eventid = object.eventid ?? 0;
        message.keys = object.keys?.map((e) => CSVCMsgGameEvent_keyT.fromPartial(e)) || [];
        message.passthrough = object.passthrough ?? 0;
        return message;
    },
};

function createBaseCSVCMsgGameEvent_keyT(): CSVCMsgGameEvent_keyT {
    return {
        type: 0,
        valString: '',
        valFloat: 0,
        valLong: 0,
        valShort: 0,
        valByte: 0,
        valBool: false,
        valUint64: 0,
        valWstring: new Uint8Array(0),
    };
}

export const CSVCMsgGameEvent_keyT = {
    encode(message: CSVCMsgGameEvent_keyT, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.valString !== '') {
            writer.uint32(18).string(message.valString);
        }
        if (message.valFloat !== 0) {
            writer.uint32(29).float(message.valFloat);
        }
        if (message.valLong !== 0) {
            writer.uint32(32).int32(message.valLong);
        }
        if (message.valShort !== 0) {
            writer.uint32(40).int32(message.valShort);
        }
        if (message.valByte !== 0) {
            writer.uint32(48).int32(message.valByte);
        }
        if (message.valBool === true) {
            writer.uint32(56).bool(message.valBool);
        }
        if (message.valUint64 !== 0) {
            writer.uint32(64).uint64(message.valUint64);
        }
        if (message.valWstring.length !== 0) {
            writer.uint32(74).bytes(message.valWstring);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgGameEvent_keyT {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEvent_keyT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.valString = reader.string();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.valFloat = reader.float();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.valLong = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.valShort = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.valByte = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.valBool = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.valUint64 = longToNumber(reader.uint64() as Long);
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.valWstring = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgGameEvent_keyT {
        return {
            type: isSet(object.type) ? globalThis.Number(object.type) : 0,
            valString: isSet(object.valString) ? globalThis.String(object.valString) : '',
            valFloat: isSet(object.valFloat) ? globalThis.Number(object.valFloat) : 0,
            valLong: isSet(object.valLong) ? globalThis.Number(object.valLong) : 0,
            valShort: isSet(object.valShort) ? globalThis.Number(object.valShort) : 0,
            valByte: isSet(object.valByte) ? globalThis.Number(object.valByte) : 0,
            valBool: isSet(object.valBool) ? globalThis.Boolean(object.valBool) : false,
            valUint64: isSet(object.valUint64) ? globalThis.Number(object.valUint64) : 0,
            valWstring: isSet(object.valWstring) ? bytesFromBase64(object.valWstring) : new Uint8Array(0),
        };
    },

    toJSON(message: CSVCMsgGameEvent_keyT): unknown {
        const obj: any = {};
        if (message.type !== 0) {
            obj.type = Math.round(message.type);
        }
        if (message.valString !== '') {
            obj.valString = message.valString;
        }
        if (message.valFloat !== 0) {
            obj.valFloat = message.valFloat;
        }
        if (message.valLong !== 0) {
            obj.valLong = Math.round(message.valLong);
        }
        if (message.valShort !== 0) {
            obj.valShort = Math.round(message.valShort);
        }
        if (message.valByte !== 0) {
            obj.valByte = Math.round(message.valByte);
        }
        if (message.valBool === true) {
            obj.valBool = message.valBool;
        }
        if (message.valUint64 !== 0) {
            obj.valUint64 = Math.round(message.valUint64);
        }
        if (message.valWstring.length !== 0) {
            obj.valWstring = base64FromBytes(message.valWstring);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgGameEvent_keyT>, I>>(base?: I): CSVCMsgGameEvent_keyT {
        return CSVCMsgGameEvent_keyT.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEvent_keyT>, I>>(object: I): CSVCMsgGameEvent_keyT {
        const message = createBaseCSVCMsgGameEvent_keyT();
        message.type = object.type ?? 0;
        message.valString = object.valString ?? '';
        message.valFloat = object.valFloat ?? 0;
        message.valLong = object.valLong ?? 0;
        message.valShort = object.valShort ?? 0;
        message.valByte = object.valByte ?? 0;
        message.valBool = object.valBool ?? false;
        message.valUint64 = object.valUint64 ?? 0;
        message.valWstring = object.valWstring ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgGameEventList(): CSVCMsgGameEventList {
    return { descriptors: [] };
}

export const CSVCMsgGameEventList = {
    encode(message: CSVCMsgGameEventList, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        for (const v of message.descriptors) {
            CSVCMsgGameEventList_descriptorT.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgGameEventList {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEventList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.descriptors.push(CSVCMsgGameEventList_descriptorT.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgGameEventList {
        return {
            descriptors: globalThis.Array.isArray(object?.descriptors)
                ? object.descriptors.map((e: any) => CSVCMsgGameEventList_descriptorT.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CSVCMsgGameEventList): unknown {
        const obj: any = {};
        if (message.descriptors?.length) {
            obj.descriptors = message.descriptors.map((e) => CSVCMsgGameEventList_descriptorT.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgGameEventList>, I>>(base?: I): CSVCMsgGameEventList {
        return CSVCMsgGameEventList.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEventList>, I>>(object: I): CSVCMsgGameEventList {
        const message = createBaseCSVCMsgGameEventList();
        message.descriptors = object.descriptors?.map((e) => CSVCMsgGameEventList_descriptorT.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCSVCMsgGameEventList_keyT(): CSVCMsgGameEventList_keyT {
    return { type: 0, name: '' };
}

export const CSVCMsgGameEventList_keyT = {
    encode(message: CSVCMsgGameEventList_keyT, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgGameEventList_keyT {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEventList_keyT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgGameEventList_keyT {
        return {
            type: isSet(object.type) ? globalThis.Number(object.type) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
        };
    },

    toJSON(message: CSVCMsgGameEventList_keyT): unknown {
        const obj: any = {};
        if (message.type !== 0) {
            obj.type = Math.round(message.type);
        }
        if (message.name !== '') {
            obj.name = message.name;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgGameEventList_keyT>, I>>(base?: I): CSVCMsgGameEventList_keyT {
        return CSVCMsgGameEventList_keyT.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEventList_keyT>, I>>(object: I): CSVCMsgGameEventList_keyT {
        const message = createBaseCSVCMsgGameEventList_keyT();
        message.type = object.type ?? 0;
        message.name = object.name ?? '';
        return message;
    },
};

function createBaseCSVCMsgGameEventList_descriptorT(): CSVCMsgGameEventList_descriptorT {
    return { eventid: 0, name: '', keys: [] };
}

export const CSVCMsgGameEventList_descriptorT = {
    encode(message: CSVCMsgGameEventList_descriptorT, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.eventid !== 0) {
            writer.uint32(8).int32(message.eventid);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.keys) {
            CSVCMsgGameEventList_keyT.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgGameEventList_descriptorT {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgGameEventList_descriptorT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.eventid = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.keys.push(CSVCMsgGameEventList_keyT.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgGameEventList_descriptorT {
        return {
            eventid: isSet(object.eventid) ? globalThis.Number(object.eventid) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : '',
            keys: globalThis.Array.isArray(object?.keys)
                ? object.keys.map((e: any) => CSVCMsgGameEventList_keyT.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CSVCMsgGameEventList_descriptorT): unknown {
        const obj: any = {};
        if (message.eventid !== 0) {
            obj.eventid = Math.round(message.eventid);
        }
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.keys?.length) {
            obj.keys = message.keys.map((e) => CSVCMsgGameEventList_keyT.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgGameEventList_descriptorT>, I>>(
        base?: I,
    ): CSVCMsgGameEventList_descriptorT {
        return CSVCMsgGameEventList_descriptorT.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgGameEventList_descriptorT>, I>>(
        object: I,
    ): CSVCMsgGameEventList_descriptorT {
        const message = createBaseCSVCMsgGameEventList_descriptorT();
        message.eventid = object.eventid ?? 0;
        message.name = object.name ?? '';
        message.keys = object.keys?.map((e) => CSVCMsgGameEventList_keyT.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCSVCMsgTempEntities(): CSVCMsgTempEntities {
    return { reliable: false, numEntries: 0, entityData: new Uint8Array(0) };
}

export const CSVCMsgTempEntities = {
    encode(message: CSVCMsgTempEntities, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.reliable === true) {
            writer.uint32(8).bool(message.reliable);
        }
        if (message.numEntries !== 0) {
            writer.uint32(16).int32(message.numEntries);
        }
        if (message.entityData.length !== 0) {
            writer.uint32(26).bytes(message.entityData);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgTempEntities {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgTempEntities();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.reliable = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.numEntries = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.entityData = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgTempEntities {
        return {
            reliable: isSet(object.reliable) ? globalThis.Boolean(object.reliable) : false,
            numEntries: isSet(object.numEntries) ? globalThis.Number(object.numEntries) : 0,
            entityData: isSet(object.entityData) ? bytesFromBase64(object.entityData) : new Uint8Array(0),
        };
    },

    toJSON(message: CSVCMsgTempEntities): unknown {
        const obj: any = {};
        if (message.reliable === true) {
            obj.reliable = message.reliable;
        }
        if (message.numEntries !== 0) {
            obj.numEntries = Math.round(message.numEntries);
        }
        if (message.entityData.length !== 0) {
            obj.entityData = base64FromBytes(message.entityData);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgTempEntities>, I>>(base?: I): CSVCMsgTempEntities {
        return CSVCMsgTempEntities.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgTempEntities>, I>>(object: I): CSVCMsgTempEntities {
        const message = createBaseCSVCMsgTempEntities();
        message.reliable = object.reliable ?? false;
        message.numEntries = object.numEntries ?? 0;
        message.entityData = object.entityData ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgPacketEntities(): CSVCMsgPacketEntities {
    return {
        maxEntries: 0,
        updatedEntries: 0,
        isDelta: false,
        updateBaseline: false,
        baseline: 0,
        deltaFrom: 0,
        entityData: new Uint8Array(0),
    };
}

export const CSVCMsgPacketEntities = {
    encode(message: CSVCMsgPacketEntities, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.maxEntries !== 0) {
            writer.uint32(8).int32(message.maxEntries);
        }
        if (message.updatedEntries !== 0) {
            writer.uint32(16).int32(message.updatedEntries);
        }
        if (message.isDelta === true) {
            writer.uint32(24).bool(message.isDelta);
        }
        if (message.updateBaseline === true) {
            writer.uint32(32).bool(message.updateBaseline);
        }
        if (message.baseline !== 0) {
            writer.uint32(40).int32(message.baseline);
        }
        if (message.deltaFrom !== 0) {
            writer.uint32(48).int32(message.deltaFrom);
        }
        if (message.entityData.length !== 0) {
            writer.uint32(58).bytes(message.entityData);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgPacketEntities {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgPacketEntities();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.maxEntries = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.updatedEntries = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.isDelta = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.updateBaseline = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.baseline = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.deltaFrom = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.entityData = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgPacketEntities {
        return {
            maxEntries: isSet(object.maxEntries) ? globalThis.Number(object.maxEntries) : 0,
            updatedEntries: isSet(object.updatedEntries) ? globalThis.Number(object.updatedEntries) : 0,
            isDelta: isSet(object.isDelta) ? globalThis.Boolean(object.isDelta) : false,
            updateBaseline: isSet(object.updateBaseline) ? globalThis.Boolean(object.updateBaseline) : false,
            baseline: isSet(object.baseline) ? globalThis.Number(object.baseline) : 0,
            deltaFrom: isSet(object.deltaFrom) ? globalThis.Number(object.deltaFrom) : 0,
            entityData: isSet(object.entityData) ? bytesFromBase64(object.entityData) : new Uint8Array(0),
        };
    },

    toJSON(message: CSVCMsgPacketEntities): unknown {
        const obj: any = {};
        if (message.maxEntries !== 0) {
            obj.maxEntries = Math.round(message.maxEntries);
        }
        if (message.updatedEntries !== 0) {
            obj.updatedEntries = Math.round(message.updatedEntries);
        }
        if (message.isDelta === true) {
            obj.isDelta = message.isDelta;
        }
        if (message.updateBaseline === true) {
            obj.updateBaseline = message.updateBaseline;
        }
        if (message.baseline !== 0) {
            obj.baseline = Math.round(message.baseline);
        }
        if (message.deltaFrom !== 0) {
            obj.deltaFrom = Math.round(message.deltaFrom);
        }
        if (message.entityData.length !== 0) {
            obj.entityData = base64FromBytes(message.entityData);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgPacketEntities>, I>>(base?: I): CSVCMsgPacketEntities {
        return CSVCMsgPacketEntities.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgPacketEntities>, I>>(object: I): CSVCMsgPacketEntities {
        const message = createBaseCSVCMsgPacketEntities();
        message.maxEntries = object.maxEntries ?? 0;
        message.updatedEntries = object.updatedEntries ?? 0;
        message.isDelta = object.isDelta ?? false;
        message.updateBaseline = object.updateBaseline ?? false;
        message.baseline = object.baseline ?? 0;
        message.deltaFrom = object.deltaFrom ?? 0;
        message.entityData = object.entityData ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgSounds(): CSVCMsgSounds {
    return { reliableSound: false, sounds: [] };
}

export const CSVCMsgSounds = {
    encode(message: CSVCMsgSounds, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.reliableSound === true) {
            writer.uint32(8).bool(message.reliableSound);
        }
        for (const v of message.sounds) {
            CSVCMsgSounds_sounddataT.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgSounds {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSounds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.reliableSound = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.sounds.push(CSVCMsgSounds_sounddataT.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgSounds {
        return {
            reliableSound: isSet(object.reliableSound) ? globalThis.Boolean(object.reliableSound) : false,
            sounds: globalThis.Array.isArray(object?.sounds)
                ? object.sounds.map((e: any) => CSVCMsgSounds_sounddataT.fromJSON(e))
                : [],
        };
    },

    toJSON(message: CSVCMsgSounds): unknown {
        const obj: any = {};
        if (message.reliableSound === true) {
            obj.reliableSound = message.reliableSound;
        }
        if (message.sounds?.length) {
            obj.sounds = message.sounds.map((e) => CSVCMsgSounds_sounddataT.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgSounds>, I>>(base?: I): CSVCMsgSounds {
        return CSVCMsgSounds.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgSounds>, I>>(object: I): CSVCMsgSounds {
        const message = createBaseCSVCMsgSounds();
        message.reliableSound = object.reliableSound ?? false;
        message.sounds = object.sounds?.map((e) => CSVCMsgSounds_sounddataT.fromPartial(e)) || [];
        return message;
    },
};

function createBaseCSVCMsgSounds_sounddataT(): CSVCMsgSounds_sounddataT {
    return {
        originX: 0,
        originY: 0,
        originZ: 0,
        volume: 0,
        delayValue: 0,
        sequenceNumber: 0,
        entityIndex: 0,
        channel: 0,
        pitch: 0,
        flags: 0,
        soundNum: 0,
        soundNumHandle: 0,
        speakerEntity: 0,
        randomSeed: 0,
        soundLevel: 0,
        isSentence: false,
        isAmbient: false,
    };
}

export const CSVCMsgSounds_sounddataT = {
    encode(message: CSVCMsgSounds_sounddataT, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.originX !== 0) {
            writer.uint32(8).sint32(message.originX);
        }
        if (message.originY !== 0) {
            writer.uint32(16).sint32(message.originY);
        }
        if (message.originZ !== 0) {
            writer.uint32(24).sint32(message.originZ);
        }
        if (message.volume !== 0) {
            writer.uint32(32).uint32(message.volume);
        }
        if (message.delayValue !== 0) {
            writer.uint32(45).float(message.delayValue);
        }
        if (message.sequenceNumber !== 0) {
            writer.uint32(48).int32(message.sequenceNumber);
        }
        if (message.entityIndex !== 0) {
            writer.uint32(56).int32(message.entityIndex);
        }
        if (message.channel !== 0) {
            writer.uint32(64).int32(message.channel);
        }
        if (message.pitch !== 0) {
            writer.uint32(72).int32(message.pitch);
        }
        if (message.flags !== 0) {
            writer.uint32(80).int32(message.flags);
        }
        if (message.soundNum !== 0) {
            writer.uint32(88).uint32(message.soundNum);
        }
        if (message.soundNumHandle !== 0) {
            writer.uint32(101).fixed32(message.soundNumHandle);
        }
        if (message.speakerEntity !== 0) {
            writer.uint32(104).int32(message.speakerEntity);
        }
        if (message.randomSeed !== 0) {
            writer.uint32(112).int32(message.randomSeed);
        }
        if (message.soundLevel !== 0) {
            writer.uint32(120).int32(message.soundLevel);
        }
        if (message.isSentence === true) {
            writer.uint32(128).bool(message.isSentence);
        }
        if (message.isAmbient === true) {
            writer.uint32(136).bool(message.isAmbient);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgSounds_sounddataT {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgSounds_sounddataT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.originX = reader.sint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.originY = reader.sint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.originZ = reader.sint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.volume = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }

                    message.delayValue = reader.float();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.sequenceNumber = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.entityIndex = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.channel = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.pitch = reader.int32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.flags = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }

                    message.soundNum = reader.uint32();
                    continue;
                case 12:
                    if (tag !== 101) {
                        break;
                    }

                    message.soundNumHandle = reader.fixed32();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }

                    message.speakerEntity = reader.int32();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }

                    message.randomSeed = reader.int32();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }

                    message.soundLevel = reader.int32();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }

                    message.isSentence = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }

                    message.isAmbient = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgSounds_sounddataT {
        return {
            originX: isSet(object.originX) ? globalThis.Number(object.originX) : 0,
            originY: isSet(object.originY) ? globalThis.Number(object.originY) : 0,
            originZ: isSet(object.originZ) ? globalThis.Number(object.originZ) : 0,
            volume: isSet(object.volume) ? globalThis.Number(object.volume) : 0,
            delayValue: isSet(object.delayValue) ? globalThis.Number(object.delayValue) : 0,
            sequenceNumber: isSet(object.sequenceNumber) ? globalThis.Number(object.sequenceNumber) : 0,
            entityIndex: isSet(object.entityIndex) ? globalThis.Number(object.entityIndex) : 0,
            channel: isSet(object.channel) ? globalThis.Number(object.channel) : 0,
            pitch: isSet(object.pitch) ? globalThis.Number(object.pitch) : 0,
            flags: isSet(object.flags) ? globalThis.Number(object.flags) : 0,
            soundNum: isSet(object.soundNum) ? globalThis.Number(object.soundNum) : 0,
            soundNumHandle: isSet(object.soundNumHandle) ? globalThis.Number(object.soundNumHandle) : 0,
            speakerEntity: isSet(object.speakerEntity) ? globalThis.Number(object.speakerEntity) : 0,
            randomSeed: isSet(object.randomSeed) ? globalThis.Number(object.randomSeed) : 0,
            soundLevel: isSet(object.soundLevel) ? globalThis.Number(object.soundLevel) : 0,
            isSentence: isSet(object.isSentence) ? globalThis.Boolean(object.isSentence) : false,
            isAmbient: isSet(object.isAmbient) ? globalThis.Boolean(object.isAmbient) : false,
        };
    },

    toJSON(message: CSVCMsgSounds_sounddataT): unknown {
        const obj: any = {};
        if (message.originX !== 0) {
            obj.originX = Math.round(message.originX);
        }
        if (message.originY !== 0) {
            obj.originY = Math.round(message.originY);
        }
        if (message.originZ !== 0) {
            obj.originZ = Math.round(message.originZ);
        }
        if (message.volume !== 0) {
            obj.volume = Math.round(message.volume);
        }
        if (message.delayValue !== 0) {
            obj.delayValue = message.delayValue;
        }
        if (message.sequenceNumber !== 0) {
            obj.sequenceNumber = Math.round(message.sequenceNumber);
        }
        if (message.entityIndex !== 0) {
            obj.entityIndex = Math.round(message.entityIndex);
        }
        if (message.channel !== 0) {
            obj.channel = Math.round(message.channel);
        }
        if (message.pitch !== 0) {
            obj.pitch = Math.round(message.pitch);
        }
        if (message.flags !== 0) {
            obj.flags = Math.round(message.flags);
        }
        if (message.soundNum !== 0) {
            obj.soundNum = Math.round(message.soundNum);
        }
        if (message.soundNumHandle !== 0) {
            obj.soundNumHandle = Math.round(message.soundNumHandle);
        }
        if (message.speakerEntity !== 0) {
            obj.speakerEntity = Math.round(message.speakerEntity);
        }
        if (message.randomSeed !== 0) {
            obj.randomSeed = Math.round(message.randomSeed);
        }
        if (message.soundLevel !== 0) {
            obj.soundLevel = Math.round(message.soundLevel);
        }
        if (message.isSentence === true) {
            obj.isSentence = message.isSentence;
        }
        if (message.isAmbient === true) {
            obj.isAmbient = message.isAmbient;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgSounds_sounddataT>, I>>(base?: I): CSVCMsgSounds_sounddataT {
        return CSVCMsgSounds_sounddataT.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgSounds_sounddataT>, I>>(object: I): CSVCMsgSounds_sounddataT {
        const message = createBaseCSVCMsgSounds_sounddataT();
        message.originX = object.originX ?? 0;
        message.originY = object.originY ?? 0;
        message.originZ = object.originZ ?? 0;
        message.volume = object.volume ?? 0;
        message.delayValue = object.delayValue ?? 0;
        message.sequenceNumber = object.sequenceNumber ?? 0;
        message.entityIndex = object.entityIndex ?? 0;
        message.channel = object.channel ?? 0;
        message.pitch = object.pitch ?? 0;
        message.flags = object.flags ?? 0;
        message.soundNum = object.soundNum ?? 0;
        message.soundNumHandle = object.soundNumHandle ?? 0;
        message.speakerEntity = object.speakerEntity ?? 0;
        message.randomSeed = object.randomSeed ?? 0;
        message.soundLevel = object.soundLevel ?? 0;
        message.isSentence = object.isSentence ?? false;
        message.isAmbient = object.isAmbient ?? false;
        return message;
    },
};

function createBaseCSVCMsgEntityMsg(): CSVCMsgEntityMsg {
    return { entIndex: 0, classId: 0, entData: new Uint8Array(0) };
}

export const CSVCMsgEntityMsg = {
    encode(message: CSVCMsgEntityMsg, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.entIndex !== 0) {
            writer.uint32(8).int32(message.entIndex);
        }
        if (message.classId !== 0) {
            writer.uint32(16).int32(message.classId);
        }
        if (message.entData.length !== 0) {
            writer.uint32(26).bytes(message.entData);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgEntityMsg {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgEntityMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.entIndex = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.classId = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.entData = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgEntityMsg {
        return {
            entIndex: isSet(object.entIndex) ? globalThis.Number(object.entIndex) : 0,
            classId: isSet(object.classId) ? globalThis.Number(object.classId) : 0,
            entData: isSet(object.entData) ? bytesFromBase64(object.entData) : new Uint8Array(0),
        };
    },

    toJSON(message: CSVCMsgEntityMsg): unknown {
        const obj: any = {};
        if (message.entIndex !== 0) {
            obj.entIndex = Math.round(message.entIndex);
        }
        if (message.classId !== 0) {
            obj.classId = Math.round(message.classId);
        }
        if (message.entData.length !== 0) {
            obj.entData = base64FromBytes(message.entData);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgEntityMsg>, I>>(base?: I): CSVCMsgEntityMsg {
        return CSVCMsgEntityMsg.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgEntityMsg>, I>>(object: I): CSVCMsgEntityMsg {
        const message = createBaseCSVCMsgEntityMsg();
        message.entIndex = object.entIndex ?? 0;
        message.classId = object.classId ?? 0;
        message.entData = object.entData ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgCmdKeyValues(): CSVCMsgCmdKeyValues {
    return { keyvalues: new Uint8Array(0) };
}

export const CSVCMsgCmdKeyValues = {
    encode(message: CSVCMsgCmdKeyValues, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.keyvalues.length !== 0) {
            writer.uint32(10).bytes(message.keyvalues);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgCmdKeyValues {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgCmdKeyValues();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.keyvalues = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgCmdKeyValues {
        return { keyvalues: isSet(object.keyvalues) ? bytesFromBase64(object.keyvalues) : new Uint8Array(0) };
    },

    toJSON(message: CSVCMsgCmdKeyValues): unknown {
        const obj: any = {};
        if (message.keyvalues.length !== 0) {
            obj.keyvalues = base64FromBytes(message.keyvalues);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgCmdKeyValues>, I>>(base?: I): CSVCMsgCmdKeyValues {
        return CSVCMsgCmdKeyValues.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgCmdKeyValues>, I>>(object: I): CSVCMsgCmdKeyValues {
        const message = createBaseCSVCMsgCmdKeyValues();
        message.keyvalues = object.keyvalues ?? new Uint8Array(0);
        return message;
    },
};

function createBaseCSVCMsgEncryptedData(): CSVCMsgEncryptedData {
    return { encrypted: new Uint8Array(0), keyType: 0 };
}

export const CSVCMsgEncryptedData = {
    encode(message: CSVCMsgEncryptedData, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.encrypted.length !== 0) {
            writer.uint32(10).bytes(message.encrypted);
        }
        if (message.keyType !== 0) {
            writer.uint32(16).int32(message.keyType);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgEncryptedData {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgEncryptedData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.encrypted = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.keyType = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgEncryptedData {
        return {
            encrypted: isSet(object.encrypted) ? bytesFromBase64(object.encrypted) : new Uint8Array(0),
            keyType: isSet(object.keyType) ? globalThis.Number(object.keyType) : 0,
        };
    },

    toJSON(message: CSVCMsgEncryptedData): unknown {
        const obj: any = {};
        if (message.encrypted.length !== 0) {
            obj.encrypted = base64FromBytes(message.encrypted);
        }
        if (message.keyType !== 0) {
            obj.keyType = Math.round(message.keyType);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgEncryptedData>, I>>(base?: I): CSVCMsgEncryptedData {
        return CSVCMsgEncryptedData.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgEncryptedData>, I>>(object: I): CSVCMsgEncryptedData {
        const message = createBaseCSVCMsgEncryptedData();
        message.encrypted = object.encrypted ?? new Uint8Array(0);
        message.keyType = object.keyType ?? 0;
        return message;
    },
};

function createBaseCSVCMsgHltvReplay(): CSVCMsgHltvReplay {
    return {
        delay: 0,
        primaryTarget: 0,
        replayStopAt: 0,
        replayStartAt: 0,
        replaySlowdownBegin: 0,
        replaySlowdownEnd: 0,
        replaySlowdownRate: 0,
        reason: 0,
    };
}

export const CSVCMsgHltvReplay = {
    encode(message: CSVCMsgHltvReplay, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.delay !== 0) {
            writer.uint32(8).int32(message.delay);
        }
        if (message.primaryTarget !== 0) {
            writer.uint32(16).int32(message.primaryTarget);
        }
        if (message.replayStopAt !== 0) {
            writer.uint32(24).int32(message.replayStopAt);
        }
        if (message.replayStartAt !== 0) {
            writer.uint32(32).int32(message.replayStartAt);
        }
        if (message.replaySlowdownBegin !== 0) {
            writer.uint32(40).int32(message.replaySlowdownBegin);
        }
        if (message.replaySlowdownEnd !== 0) {
            writer.uint32(48).int32(message.replaySlowdownEnd);
        }
        if (message.replaySlowdownRate !== 0) {
            writer.uint32(61).float(message.replaySlowdownRate);
        }
        if (message.reason !== 0) {
            writer.uint32(64).int32(message.reason);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgHltvReplay {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgHltvReplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.delay = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.primaryTarget = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.replayStopAt = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.replayStartAt = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.replaySlowdownBegin = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.replaySlowdownEnd = reader.int32();
                    continue;
                case 7:
                    if (tag !== 61) {
                        break;
                    }

                    message.replaySlowdownRate = reader.float();
                    continue;
                case 8:
                    if (tag !== 64) {
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

    fromJSON(object: any): CSVCMsgHltvReplay {
        return {
            delay: isSet(object.delay) ? globalThis.Number(object.delay) : 0,
            primaryTarget: isSet(object.primaryTarget) ? globalThis.Number(object.primaryTarget) : 0,
            replayStopAt: isSet(object.replayStopAt) ? globalThis.Number(object.replayStopAt) : 0,
            replayStartAt: isSet(object.replayStartAt) ? globalThis.Number(object.replayStartAt) : 0,
            replaySlowdownBegin: isSet(object.replaySlowdownBegin) ? globalThis.Number(object.replaySlowdownBegin) : 0,
            replaySlowdownEnd: isSet(object.replaySlowdownEnd) ? globalThis.Number(object.replaySlowdownEnd) : 0,
            replaySlowdownRate: isSet(object.replaySlowdownRate) ? globalThis.Number(object.replaySlowdownRate) : 0,
            reason: isSet(object.reason) ? globalThis.Number(object.reason) : 0,
        };
    },

    toJSON(message: CSVCMsgHltvReplay): unknown {
        const obj: any = {};
        if (message.delay !== 0) {
            obj.delay = Math.round(message.delay);
        }
        if (message.primaryTarget !== 0) {
            obj.primaryTarget = Math.round(message.primaryTarget);
        }
        if (message.replayStopAt !== 0) {
            obj.replayStopAt = Math.round(message.replayStopAt);
        }
        if (message.replayStartAt !== 0) {
            obj.replayStartAt = Math.round(message.replayStartAt);
        }
        if (message.replaySlowdownBegin !== 0) {
            obj.replaySlowdownBegin = Math.round(message.replaySlowdownBegin);
        }
        if (message.replaySlowdownEnd !== 0) {
            obj.replaySlowdownEnd = Math.round(message.replaySlowdownEnd);
        }
        if (message.replaySlowdownRate !== 0) {
            obj.replaySlowdownRate = message.replaySlowdownRate;
        }
        if (message.reason !== 0) {
            obj.reason = Math.round(message.reason);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgHltvReplay>, I>>(base?: I): CSVCMsgHltvReplay {
        return CSVCMsgHltvReplay.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgHltvReplay>, I>>(object: I): CSVCMsgHltvReplay {
        const message = createBaseCSVCMsgHltvReplay();
        message.delay = object.delay ?? 0;
        message.primaryTarget = object.primaryTarget ?? 0;
        message.replayStopAt = object.replayStopAt ?? 0;
        message.replayStartAt = object.replayStartAt ?? 0;
        message.replaySlowdownBegin = object.replaySlowdownBegin ?? 0;
        message.replaySlowdownEnd = object.replaySlowdownEnd ?? 0;
        message.replaySlowdownRate = object.replaySlowdownRate ?? 0;
        message.reason = object.reason ?? 0;
        return message;
    },
};

function createBaseCCLCMsgHltvReplay(): CCLCMsgHltvReplay {
    return { request: 0, slowdownLength: 0, slowdownRate: 0, primaryTargetEntIndex: 0, eventTime: 0 };
}

export const CCLCMsgHltvReplay = {
    encode(message: CCLCMsgHltvReplay, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.request !== 0) {
            writer.uint32(8).int32(message.request);
        }
        if (message.slowdownLength !== 0) {
            writer.uint32(21).float(message.slowdownLength);
        }
        if (message.slowdownRate !== 0) {
            writer.uint32(29).float(message.slowdownRate);
        }
        if (message.primaryTargetEntIndex !== 0) {
            writer.uint32(32).int32(message.primaryTargetEntIndex);
        }
        if (message.eventTime !== 0) {
            writer.uint32(45).float(message.eventTime);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgHltvReplay {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgHltvReplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.request = reader.int32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.slowdownLength = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.slowdownRate = reader.float();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.primaryTargetEntIndex = reader.int32();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }

                    message.eventTime = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgHltvReplay {
        return {
            request: isSet(object.request) ? globalThis.Number(object.request) : 0,
            slowdownLength: isSet(object.slowdownLength) ? globalThis.Number(object.slowdownLength) : 0,
            slowdownRate: isSet(object.slowdownRate) ? globalThis.Number(object.slowdownRate) : 0,
            primaryTargetEntIndex: isSet(object.primaryTargetEntIndex)
                ? globalThis.Number(object.primaryTargetEntIndex)
                : 0,
            eventTime: isSet(object.eventTime) ? globalThis.Number(object.eventTime) : 0,
        };
    },

    toJSON(message: CCLCMsgHltvReplay): unknown {
        const obj: any = {};
        if (message.request !== 0) {
            obj.request = Math.round(message.request);
        }
        if (message.slowdownLength !== 0) {
            obj.slowdownLength = message.slowdownLength;
        }
        if (message.slowdownRate !== 0) {
            obj.slowdownRate = message.slowdownRate;
        }
        if (message.primaryTargetEntIndex !== 0) {
            obj.primaryTargetEntIndex = Math.round(message.primaryTargetEntIndex);
        }
        if (message.eventTime !== 0) {
            obj.eventTime = message.eventTime;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgHltvReplay>, I>>(base?: I): CCLCMsgHltvReplay {
        return CCLCMsgHltvReplay.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgHltvReplay>, I>>(object: I): CCLCMsgHltvReplay {
        const message = createBaseCCLCMsgHltvReplay();
        message.request = object.request ?? 0;
        message.slowdownLength = object.slowdownLength ?? 0;
        message.slowdownRate = object.slowdownRate ?? 0;
        message.primaryTargetEntIndex = object.primaryTargetEntIndex ?? 0;
        message.eventTime = object.eventTime ?? 0;
        return message;
    },
};

function createBaseCSVCMsgBroadcastCommand(): CSVCMsgBroadcastCommand {
    return { cmd: '' };
}

export const CSVCMsgBroadcastCommand = {
    encode(message: CSVCMsgBroadcastCommand, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.cmd !== '') {
            writer.uint32(10).string(message.cmd);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgBroadcastCommand {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgBroadcastCommand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.cmd = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgBroadcastCommand {
        return { cmd: isSet(object.cmd) ? globalThis.String(object.cmd) : '' };
    },

    toJSON(message: CSVCMsgBroadcastCommand): unknown {
        const obj: any = {};
        if (message.cmd !== '') {
            obj.cmd = message.cmd;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgBroadcastCommand>, I>>(base?: I): CSVCMsgBroadcastCommand {
        return CSVCMsgBroadcastCommand.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgBroadcastCommand>, I>>(object: I): CSVCMsgBroadcastCommand {
        const message = createBaseCSVCMsgBroadcastCommand();
        message.cmd = object.cmd ?? '';
        return message;
    },
};

function createBaseCCLCMsgHltvFixupOperatorTick(): CCLCMsgHltvFixupOperatorTick {
    return {
        tick: 0,
        propsData: new Uint8Array(0),
        origin: undefined,
        eyeAngles: undefined,
        observerMode: 0,
        cameramanScoreboard: false,
        observerTarget: 0,
        viewOffset: undefined,
    };
}

export const CCLCMsgHltvFixupOperatorTick = {
    encode(message: CCLCMsgHltvFixupOperatorTick, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.tick !== 0) {
            writer.uint32(8).int32(message.tick);
        }
        if (message.propsData.length !== 0) {
            writer.uint32(18).bytes(message.propsData);
        }
        if (message.origin !== undefined) {
            CMsgVector.encode(message.origin, writer.uint32(26).fork()).ldelim();
        }
        if (message.eyeAngles !== undefined) {
            CMsgQAngle.encode(message.eyeAngles, writer.uint32(34).fork()).ldelim();
        }
        if (message.observerMode !== 0) {
            writer.uint32(40).int32(message.observerMode);
        }
        if (message.cameramanScoreboard === true) {
            writer.uint32(48).bool(message.cameramanScoreboard);
        }
        if (message.observerTarget !== 0) {
            writer.uint32(56).int32(message.observerTarget);
        }
        if (message.viewOffset !== undefined) {
            CMsgVector.encode(message.viewOffset, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CCLCMsgHltvFixupOperatorTick {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCCLCMsgHltvFixupOperatorTick();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.tick = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.propsData = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.origin = CMsgVector.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.eyeAngles = CMsgQAngle.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.observerMode = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.cameramanScoreboard = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.observerTarget = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.viewOffset = CMsgVector.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CCLCMsgHltvFixupOperatorTick {
        return {
            tick: isSet(object.tick) ? globalThis.Number(object.tick) : 0,
            propsData: isSet(object.propsData) ? bytesFromBase64(object.propsData) : new Uint8Array(0),
            origin: isSet(object.origin) ? CMsgVector.fromJSON(object.origin) : undefined,
            eyeAngles: isSet(object.eyeAngles) ? CMsgQAngle.fromJSON(object.eyeAngles) : undefined,
            observerMode: isSet(object.observerMode) ? globalThis.Number(object.observerMode) : 0,
            cameramanScoreboard: isSet(object.cameramanScoreboard)
                ? globalThis.Boolean(object.cameramanScoreboard)
                : false,
            observerTarget: isSet(object.observerTarget) ? globalThis.Number(object.observerTarget) : 0,
            viewOffset: isSet(object.viewOffset) ? CMsgVector.fromJSON(object.viewOffset) : undefined,
        };
    },

    toJSON(message: CCLCMsgHltvFixupOperatorTick): unknown {
        const obj: any = {};
        if (message.tick !== 0) {
            obj.tick = Math.round(message.tick);
        }
        if (message.propsData.length !== 0) {
            obj.propsData = base64FromBytes(message.propsData);
        }
        if (message.origin !== undefined) {
            obj.origin = CMsgVector.toJSON(message.origin);
        }
        if (message.eyeAngles !== undefined) {
            obj.eyeAngles = CMsgQAngle.toJSON(message.eyeAngles);
        }
        if (message.observerMode !== 0) {
            obj.observerMode = Math.round(message.observerMode);
        }
        if (message.cameramanScoreboard === true) {
            obj.cameramanScoreboard = message.cameramanScoreboard;
        }
        if (message.observerTarget !== 0) {
            obj.observerTarget = Math.round(message.observerTarget);
        }
        if (message.viewOffset !== undefined) {
            obj.viewOffset = CMsgVector.toJSON(message.viewOffset);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CCLCMsgHltvFixupOperatorTick>, I>>(base?: I): CCLCMsgHltvFixupOperatorTick {
        return CCLCMsgHltvFixupOperatorTick.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CCLCMsgHltvFixupOperatorTick>, I>>(
        object: I,
    ): CCLCMsgHltvFixupOperatorTick {
        const message = createBaseCCLCMsgHltvFixupOperatorTick();
        message.tick = object.tick ?? 0;
        message.propsData = object.propsData ?? new Uint8Array(0);
        message.origin = (object.origin !== undefined && object.origin !== null)
            ? CMsgVector.fromPartial(object.origin)
            : undefined;
        message.eyeAngles = (object.eyeAngles !== undefined && object.eyeAngles !== null)
            ? CMsgQAngle.fromPartial(object.eyeAngles)
            : undefined;
        message.observerMode = object.observerMode ?? 0;
        message.cameramanScoreboard = object.cameramanScoreboard ?? false;
        message.observerTarget = object.observerTarget ?? 0;
        message.viewOffset = (object.viewOffset !== undefined && object.viewOffset !== null)
            ? CMsgVector.fromPartial(object.viewOffset)
            : undefined;
        return message;
    },
};

function createBaseCSVCMsgHltvFixupOperatorStatus(): CSVCMsgHltvFixupOperatorStatus {
    return { mode: 0, overrideOperatorName: '' };
}

export const CSVCMsgHltvFixupOperatorStatus = {
    encode(message: CSVCMsgHltvFixupOperatorStatus, writer: pb.Writer = pb.Writer.create()): pb.Writer {
        if (message.mode !== 0) {
            writer.uint32(8).uint32(message.mode);
        }
        if (message.overrideOperatorName !== '') {
            writer.uint32(18).string(message.overrideOperatorName);
        }
        return writer;
    },

    decode(input: pb.Reader | Uint8Array, length?: number): CSVCMsgHltvFixupOperatorStatus {
        const reader = input instanceof pb.Reader ? input : pb.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCSVCMsgHltvFixupOperatorStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.mode = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.overrideOperatorName = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CSVCMsgHltvFixupOperatorStatus {
        return {
            mode: isSet(object.mode) ? globalThis.Number(object.mode) : 0,
            overrideOperatorName: isSet(object.overrideOperatorName)
                ? globalThis.String(object.overrideOperatorName)
                : '',
        };
    },

    toJSON(message: CSVCMsgHltvFixupOperatorStatus): unknown {
        const obj: any = {};
        if (message.mode !== 0) {
            obj.mode = Math.round(message.mode);
        }
        if (message.overrideOperatorName !== '') {
            obj.overrideOperatorName = message.overrideOperatorName;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<CSVCMsgHltvFixupOperatorStatus>, I>>(base?: I): CSVCMsgHltvFixupOperatorStatus {
        return CSVCMsgHltvFixupOperatorStatus.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<CSVCMsgHltvFixupOperatorStatus>, I>>(
        object: I,
    ): CSVCMsgHltvFixupOperatorStatus {
        const message = createBaseCSVCMsgHltvFixupOperatorStatus();
        message.mode = object.mode ?? 0;
        message.overrideOperatorName = object.overrideOperatorName ?? '';
        return message;
    },
};

function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
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
