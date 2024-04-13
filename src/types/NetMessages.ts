// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SoundInfo } from './SoundInfo.ts';
import { type GameEvent, GameEventDescriptor, GameEventManager } from './GameEventManager.ts';
import { SourceBuffer } from '../buffer.ts';
import type { Vector } from './Vector.ts';
import { type UserMessage, UserMessages } from './UserMessages.ts';

export class NetMessage {
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
}

export class NetNop extends NetMessage {
    override read() {}
    override write() {}
}
export class NetDisconnect extends NetMessage {
    text?: string;
    override read(buf: SourceBuffer): void {
        this.text = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.text!);
    }
}
export class NetFile extends NetMessage {
    transferId?: number;
    fileName?: string;
    fileRequested?: boolean;
    unk?: boolean;
    override read(buf: SourceBuffer): void {
        this.transferId = buf.readInt32LE();
        this.fileName = buf.readCString();
        this.fileRequested = buf.readBoolean();
        this.unk = buf.readBoolean();
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt32LE(this.transferId!);
        buf.writeCString(this.fileName!);
        buf.writeBoolean(this.fileRequested!);
        buf.writeBoolean(this.unk!);
    }
}
export class NetSplitScreenUser extends NetMessage {
    unk?: boolean;
    override read(buf: SourceBuffer): void {
        this.unk = buf.readBoolean();
    }
    override write(buf: SourceBuffer): void {
        buf.writeBoolean(this.unk!);
    }
}
export class NetTick extends NetMessage {
    tick?: number;
    hostFrameTime?: number;
    hostFrameTimeStdDeviation?: number;
    override read(buf: SourceBuffer): void {
        const NET_TICK_SCALEUP = 100_000;
        this.tick = buf.readInt32LE();
        this.hostFrameTime = buf.readInt16LE() / NET_TICK_SCALEUP;
        this.hostFrameTimeStdDeviation = buf.readInt16LE() / NET_TICK_SCALEUP;
    }
    override write(buf: SourceBuffer): void {
        const NET_TICK_SCALEUP = 100_000;
        buf.writeInt32LE(this.tick!);

        const [hostFrameTime, hostFrameTimeStdDeviation] = new Float32Array([
            this.hostFrameTime! * NET_TICK_SCALEUP,
            this.hostFrameTimeStdDeviation! * NET_TICK_SCALEUP,
        ]);

        buf.writeInt16LE(hostFrameTime!);
        buf.writeInt16LE(hostFrameTimeStdDeviation!);
    }
}
export class NetStringCmd extends NetMessage {
    command?: string;
    override read(buf: SourceBuffer): void {
        this.command = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.command!);
    }
}
export class NetSetConVar extends NetMessage {
    convars?: { name: string; value: string }[];
    override read(buf: SourceBuffer): void {
        this.convars = [];
        let length = buf.readInt8();
        while (length--) {
            this.convars.push({
                name: buf.readCString(),
                value: buf.readCString(),
            });
        }
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt8(this.convars!.length);
        this.convars!.forEach(({ name, value }) => {
            buf.writeCString(name);
            buf.writeCString(value);
        });
    }
}
export class NetSignonState extends NetMessage {
    signonState?: number;
    spawnCount?: number;
    numServerPlayers?: number;
    playersNetworkIdsCount?: number;
    playersNetworkIds?: Uint8Array;
    mapNameLength?: number;
    mapName?: string;
    override read(buf: SourceBuffer): void {
        this.signonState = buf.readInt8();
        this.spawnCount = buf.readInt32LE();
        this.numServerPlayers = buf.readInt32LE();
        this.playersNetworkIdsCount = buf.readInt32LE();
        if (this.playersNetworkIdsCount > 0) {
            this.playersNetworkIds = buf.readArray(this.playersNetworkIdsCount);
        }
        this.mapNameLength = buf.readInt32LE();
        if (this.mapNameLength > 0) {
            this.mapName = buf.readStringBuffer(this.mapNameLength);
        }
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt8(this.signonState!);
        buf.writeInt32LE(this.spawnCount!);
        buf.writeInt32LE(this.numServerPlayers!);
        buf.writeInt32LE(this.playersNetworkIdsCount!);
        if (this.playersNetworkIdsCount! > 0) {
            buf.writeArray(this.playersNetworkIds!);
        }
        buf.writeInt32LE(this.mapNameLength!);
        if (this.mapNameLength! > 0) {
            buf.writeStringBuffer(this.mapName!, this.mapNameLength!);
        }
    }
}
export class SvcServerInfo extends NetMessage {
    protocol?: number;
    serverCount?: number;
    isHltv?: boolean;
    isDedicated?: boolean;
    clientCrc?: number;
    maxClasses?: number;
    mapCrc?: number;
    playerSlot?: number;
    maxClients?: number;
    unk?: number;
    tickInterval?: number;
    cOs?: string;
    gameDir?: string;
    mapName?: string;
    skyName?: string;
    hostName?: string;
    override read(buf: SourceBuffer): void {
        this.protocol = buf.readInt16LE();
        this.serverCount = buf.readInt32LE();
        this.isHltv = buf.readBoolean();
        this.isDedicated = buf.readBoolean();
        this.clientCrc = buf.readInt32LE();
        this.maxClasses = buf.readInt16LE();
        this.mapCrc = buf.readInt32LE();
        this.playerSlot = buf.readInt8();
        this.maxClients = buf.readInt8();
        this.unk = buf.readInt32LE();
        this.tickInterval = buf.readFloat32LE();
        this.cOs = String.fromCharCode(buf.readInt8());
        this.gameDir = buf.readCString();
        this.mapName = buf.readCString();
        this.skyName = buf.readCString();
        this.hostName = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt16LE(this.protocol!);
        buf.writeInt32LE(this.serverCount!);
        buf.writeBoolean(this.isHltv!);
        buf.writeBoolean(this.isDedicated!);
        buf.writeInt32LE(this.clientCrc!);
        buf.writeInt16LE(this.maxClasses!);
        buf.writeInt32LE(this.mapCrc!);
        buf.writeInt8(this.playerSlot!);
        buf.writeInt8(this.maxClients!);
        buf.writeInt32LE(this.unk!);
        buf.writeFloat32LE(this.tickInterval!);
        buf.writeInt8(this.cOs!.charCodeAt(0));
        buf.writeCString(this.gameDir!);
        buf.writeCString(this.mapName!);
        buf.writeCString(this.skyName!);
        buf.writeCString(this.hostName!);
    }
}
export class SvcSendTable extends NetMessage {
    needsDecoder?: boolean;
    propsLength?: number;
    props?: number;
    override read(buf: SourceBuffer): void {
        this.needsDecoder = buf.readBoolean();
        this.propsLength = buf.readInt16LE();
        this.props = buf.readBitsLE(this.propsLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBoolean(this.needsDecoder!);
        buf.writeInt16LE(this.propsLength!);
        buf.writeBitsLE(this.props!, this.propsLength!);
    }
}
export class SvcClassInfo extends NetMessage {
    length?: number;
    createOnClient?: boolean;
    serverClasses?: {
        classId: number;
        className: string;
        dataTableName: string;
    }[];
    override read(buf: SourceBuffer): void {
        this.length = buf.readInt16LE();
        this.createOnClient = buf.readBoolean();
        if (!this.createOnClient) {
            this.serverClasses = [];
            let count = this.length;
            while (count--) {
                this.serverClasses.push({
                    classId: buf.readBitsLE(Math.log2(count) + 1),
                    className: buf.readCString(),
                    dataTableName: buf.readCString(),
                });
            }
        }
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt16LE(this.length!);
        buf.writeBoolean(this.createOnClient!);
        if (!this.createOnClient) {
            let count = this.length!;
            this.serverClasses!.forEach(({ classId, className, dataTableName }) => {
                --count;
                buf.writeBitsLE(classId, Math.log2(count) + 1);
                buf.writeCString(className);
                buf.writeCString(dataTableName);
            });
        }
    }
}
export class SvcSetPause extends NetMessage {
    paused?: boolean;
    override read(buf: SourceBuffer): void {
        this.paused = buf.readBoolean();
    }
    override write(buf: SourceBuffer): void {
        buf.writeBoolean(this.paused!);
    }
}
export class SvcCreateStringTable extends NetMessage {
    name?: string;
    maxEntries?: number;
    numEntries?: number;
    userDataFixedSize?: boolean;
    userDataSize?: number;
    userDataSizeBits?: number;
    flags?: number;
    stringDataLength?: number;
    stringData?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.name = buf.readCString();
        this.maxEntries = buf.readInt16LE();
        this.numEntries = buf.readBitsLE(Math.log2(this.maxEntries) + 1);
        this.stringDataLength = buf.readBitsLE(20);
        this.userDataFixedSize = buf.readBoolean();
        this.userDataSize = this.userDataFixedSize ? buf.readBitsLE(12) : 0;
        this.userDataSizeBits = this.userDataFixedSize ? buf.readBitsLE(4) : 0;
        this.flags = buf.readBitsLE(2);
        this.stringData = buf.readBuffer(this.stringDataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.name!);
        buf.writeInt16LE(this.maxEntries!);
        buf.writeBitsLE(this.numEntries!, Math.log2(this.maxEntries!) + 1);
        buf.writeBitsLE(this.stringDataLength!, 20);
        buf.writeBoolean(this.userDataFixedSize!);
        this.userDataFixedSize && buf.writeBitsLE(this.userDataSize!, 12);
        this.userDataFixedSize && buf.writeBitsLE(this.userDataSizeBits!, 4);
        buf.writeBitsLE(this.flags!, 2);
        buf.writeBuffer(this.stringData!);
    }
}
export class SvcUpdateStringTable extends NetMessage {
    tableId?: number;
    numChangedEntries?: number;
    stringDataLength?: number;
    stringData?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.tableId = buf.readBitsLE(5);
        this.numChangedEntries = buf.readBoolean() ? buf.readInt16LE() : 1;
        this.stringDataLength = buf.readBitsLE(20);
        this.stringData = buf.readBuffer(this.stringDataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBitsLE(this.tableId!, 5);
        buf.writeBoolean(this.numChangedEntries !== 1);
        this.numChangedEntries !== 1 && buf.writeInt16LE(this.numChangedEntries!);
        buf.writeBitsLE(this.stringDataLength!, 20);
        buf.writeBuffer(this.stringData!);
    }
}
export class SvcVoiceInit extends NetMessage {
    codec?: string;
    quality?: number;
    unk?: number;
    override read(buf: SourceBuffer): void {
        this.codec = buf.readCString();
        this.quality = buf.readInt8();
        if (this.quality === 255) this.unk = buf.readFloat32LE();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.codec!);
        buf.writeInt8(this.quality!);
        this.unk !== undefined && buf.writeFloat32LE(this.unk!);
    }
}
export class SvcVoiceData extends NetMessage {
    client?: number;
    proximity?: number;
    voiceDataLength?: number;
    voiceData?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.client = buf.readInt8();
        this.proximity = buf.readInt8();
        this.voiceDataLength = buf.readInt16LE();
        this.voiceData = buf.readBuffer(this.voiceDataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt8(this.client!);
        buf.writeInt8(this.proximity!);
        buf.writeInt16LE(this.voiceDataLength!);
        buf.writeBuffer(this.voiceData!);
    }
}
export class SvcPrint extends NetMessage {
    message?: string;
    override read(buf: SourceBuffer): void {
        this.message = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeCString(this.message!);
    }
}
export class SvcSounds extends NetMessage {
    reliableSound?: boolean;
    soundsLength?: number;
    soundsDataLength?: number;
    soundsData?: SourceBuffer;
    sounds?: SoundInfo[];
    override read(buf: SourceBuffer): void {
        this.reliableSound = buf.readBoolean();
        this.soundsLength = this.reliableSound ? 1 : buf.readBitsLE(8);

        this.soundsDataLength = this.reliableSound ? buf.readBitsLE(8) : buf.readBitsLE(16);
        this.soundsData = buf.readBuffer(this.soundsDataLength);
        this.sounds = [];
    }
    override write(buf: SourceBuffer): void {
        buf.writeBoolean(this.reliableSound!);
        !this.reliableSound && buf.writeBitsLE(this.soundsLength!, 8);
        buf.writeBitsLE(this.soundsDataLength!, this.reliableSound ? 8 : 16);
        buf.writeBuffer(this.soundsData!);
    }
}
export class SvcSetView extends NetMessage {
    entityIndex?: number;
    override read(buf: SourceBuffer): void {
        this.entityIndex = buf.readBitsLE(11);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBitsLE(this.entityIndex!, 11);
    }
}
export class SvcFixAngle extends NetMessage {
    relative?: boolean;
    angle?: [number, number, number];
    override read(buf: SourceBuffer): void {
        this.relative = buf.readBoolean();
        this.angle = [buf.readInt16LE(), buf.readInt16LE(), buf.readInt16LE()];
    }
    override write(buf: SourceBuffer): void {
        buf.writeBoolean(this.relative!);
        this.angle!.forEach((ang) => buf.writeInt16LE(ang));
    }
}
export class SvcCrosshairAngle extends NetMessage {
    angle?: [number, number, number];
    override read(buf: SourceBuffer): void {
        this.angle = [buf.readInt16LE(), buf.readInt16LE(), buf.readInt16LE()];
    }
    override write(buf: SourceBuffer): void {
        this.angle!.forEach((ang) => buf.writeInt16LE(ang));
    }
}
export class SvcBspDecal extends NetMessage {
    pos?: Vector;
    decalTextureIndex?: number;
    entityIndex?: number;
    modelIndex?: number;
    lowPriority?: boolean;
    override read(buf: SourceBuffer): void {
        this.pos = buf.readVectorCoord();
        this.decalTextureIndex = buf.readBitsLE(9);
        if (buf.readBoolean()) {
            this.entityIndex = buf.readBitsLE(11);
            this.modelIndex = buf.readBitsLE(11);
        }
        this.lowPriority = buf.readBoolean();
    }
    override write(buf: SourceBuffer): void {
        buf.writeVectorCoord(this.pos!);
        buf.writeBitsLE(this.decalTextureIndex!, 9);
        buf.writeBoolean(this.entityIndex !== undefined);
        if (this.entityIndex !== undefined) {
            buf.writeBitsLE(this.entityIndex!, 11);
            buf.writeBitsLE(this.modelIndex!, 11);
        }
        buf.writeBoolean(this.lowPriority!);
    }
}
export class SvcSplitScreen extends NetMessage {
    unk?: number;
    dataLength?: number;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.unk = buf.readBitsLE(1);
        this.dataLength = buf.readBitsLE(11);
        this.data = buf.readBuffer(this.dataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBitsLE(this.unk!, 1);
        buf.writeBitsLE(this.dataLength!, 11);
        buf.writeBuffer(this.data!);
    }
}
export class SvcUserMessage extends NetMessage {
    msgType?: number;
    msgDataLength?: number;
    msgData?: SourceBuffer;
    userMessage?: UserMessage;
    override read(buf: SourceBuffer): void {
        this.msgType = buf.readInt8();
        this.msgDataLength = buf.readBitsLE(12);
        this.msgData = buf.readBuffer(this.msgDataLength);

        const userMessageType = UserMessages.Portal2Engine[this.msgType];
        if (userMessageType) {
            this.userMessage = new userMessageType(this.msgType);
            this.userMessage.read(this.msgData);
        }
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt8(this.msgType!);

        if (this.userMessage) {
            const data = this.msgData!.clone();
            this.userMessage.write(data);
            this.msgData = data.reset();
        }

        buf.writeBitsLE(this.msgDataLength!, 12);
        buf.writeBuffer(this.msgData!);
    }
}
export class SvcEntityMessage extends NetMessage {
    entityIndex?: number;
    classId?: number;
    dataLength?: number;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.entityIndex = buf.readBitsLE(11);
        this.classId = buf.readBitsLE(9);
        this.dataLength = buf.readBitsLE(11);
        this.data = buf.readBuffer(this.dataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBitsLE(this.entityIndex!, 11);
        buf.writeBitsLE(this.classId!, 9);
        buf.writeBitsLE(this.dataLength!, 11);
        buf.writeBuffer(this.data!);
    }
}
export class SvcGameEvent extends NetMessage {
    static gameEventManager: GameEventManager;

    event?: GameEvent;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.data = buf.readBuffer(buf.readBitsLE(11));

        if (SvcGameEvent.gameEventManager) {
            const data = this.data.clone();
            this.event = SvcGameEvent.gameEventManager.deserializeEvent(data);
        }
    }
    override write(buf: SourceBuffer): void {
        if (SvcGameEvent.gameEventManager) {
            const data = this.data!.clone();
            SvcGameEvent.gameEventManager.serializeEvent(this.event!, data);
            this.data = data.reset();
        }

        buf.writeBitsLE(this.data!.buffer.byteLength!, 11);
        buf.writeBuffer(this.data!);
    }
}
export class SvcPacketEntities extends NetMessage {
    maxEntries?: number;
    isDelta?: boolean;
    deltaFrom?: number;
    baseLine?: boolean;
    updatedEntries?: number;
    updateBaseline?: boolean;
    dataLength?: number;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.maxEntries = buf.readBitsLE(11);
        this.isDelta = buf.readBoolean();
        this.deltaFrom = this.isDelta ? buf.readInt32LE() : 0;
        this.baseLine = buf.readBoolean();
        this.updatedEntries = buf.readBitsLE(11);
        this.dataLength = buf.readBitsLE(20);
        this.updateBaseline = buf.readBoolean();
        this.data = buf.readBuffer(this.dataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBitsLE(this.maxEntries!, 11);
        buf.writeBoolean(this.isDelta!);
        this.isDelta && buf.writeInt32LE(this.deltaFrom!);
        buf.writeBoolean(this.baseLine!);
        buf.writeBitsLE(this.updatedEntries!, 11);
        buf.writeBitsLE(this.dataLength!, 20);
        buf.writeBoolean(this.updateBaseline!);
        buf.writeBuffer(this.data!);
    }
}
export class SvcTempEntities extends NetMessage {
    numEntries?: number;
    dataLength?: number;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.numEntries = buf.readInt8();
        this.dataLength = buf.readBitsLE(17);
        this.data = buf.readBuffer(this.dataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt8(this.numEntries!);
        buf.writeBitsLE(this.data!.buffer.byteLength, 17);
        buf.writeBuffer(this.data!);
    }
}
export class SvcPrefetch extends NetMessage {
    soundIndex?: number;
    override read(buf: SourceBuffer): void {
        this.soundIndex = buf.readBitsLE(13);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBitsLE(this.soundIndex!, 13);
    }
}
export class SvcMenu extends NetMessage {
    menuType?: number;
    dataLength?: number;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.menuType = buf.readInt16LE();
        this.dataLength = buf.readInt32LE();
        this.data = buf.readBuffer(this.dataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt16LE(this.menuType!);
        buf.writeInt32LE(this.dataLength!);
        buf.writeBuffer(this.data!);
    }
}
export class SvcGameEventList extends NetMessage {
    events?: number;
    dataLength?: number;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.events = buf.readBitsLE(9);
        this.dataLength = buf.readBitsLE(20);
        this.data = buf.readBuffer(this.dataLength);

        const gameEvents = [];
        let events = this.events;
        while (events--) {
            const descriptor = new GameEventDescriptor();
            descriptor.read(this.data);
            gameEvents.push(descriptor);
        }

        SvcGameEvent.gameEventManager = new GameEventManager(gameEvents);
    }
    override write(buf: SourceBuffer): void {
        buf.writeBitsLE(this.events!, 9);

        const data = SourceBuffer.allocate(this.dataLength!);
        SvcGameEvent.gameEventManager!.gameEvents.forEach((descriptor) => descriptor.write(data));
        this.data = data.reset();

        buf.writeBitsLE(this.dataLength!, 20);
        buf.writeBuffer(this.data!);
    }
}
export class SvcGetCvarValue extends NetMessage {
    cookie?: number;
    cvarName?: string;
    override read(buf: SourceBuffer): void {
        this.cookie = buf.readInt32LE();
        this.cvarName = buf.readCString();
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt32LE(this.cookie!);
        buf.writeCString(this.cvarName!);
    }
}
export class SvcCmdKeyValues extends NetMessage {
    buffer?: Uint8Array;
    override read(buf: SourceBuffer): void {
        const length = buf.readInt32LE();
        this.buffer = buf.readArray(length);
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt32LE(this.buffer!.byteLength);
        buf.writeArray(this.buffer!);
    }
}
export class SvcPaintMapData extends NetMessage {
    dataLength?: number;
    data?: SourceBuffer;
    override read(buf: SourceBuffer): void {
        this.dataLength = buf.readInt32LE();
        this.data = buf.readBuffer(this.dataLength);
    }
    override write(buf: SourceBuffer): void {
        buf.writeInt32LE(this.data!.buffer.byteLength);
        buf.writeBuffer(this.data!);
    }
}

export const NetMessages = {
    Portal2Engine: [
        NetNop, // 0
        NetDisconnect, // 1
        NetFile, // 2
        NetSplitScreenUser, // 3
        NetTick, // 4
        NetStringCmd, // 5
        NetSetConVar, // 6
        NetSignonState, // 7
        SvcServerInfo, // 8
        SvcSendTable, // 9
        SvcClassInfo, // 10
        SvcSetPause, // 11
        SvcCreateStringTable, // 12
        SvcUpdateStringTable, // 13
        SvcVoiceInit, // 14
        SvcVoiceData, // 15
        SvcPrint, // 16
        SvcSounds, // 17
        SvcSetView, // 18
        SvcFixAngle, // 19
        SvcCrosshairAngle, // 20
        SvcBspDecal, // 21
        SvcSplitScreen, // 22
        SvcUserMessage, // 23
        SvcEntityMessage, // 24
        SvcGameEvent, // 25
        SvcPacketEntities, // 26
        SvcTempEntities, // 27
        SvcPrefetch, // 28
        SvcMenu, // 29
        SvcGameEventList, // 30
        SvcGetCvarValue, // 31
        SvcCmdKeyValues, // 32
        SvcPaintMapData, // 33
    ] as (typeof NetMessage | undefined)[],
    HalfLife2Engine: [
        NetNop, // 0
        NetDisconnect, // 1
        NetFile, // 2
        NetTick, // 3
        NetStringCmd, // 4
        NetSetConVar, // 5
        NetSignonState, // 6
        SvcPrint, // 7
        SvcServerInfo, // 8
        SvcSendTable, // 9
        SvcClassInfo, // 10
        SvcSetPause, // 11
        SvcCreateStringTable, // 12
        SvcUpdateStringTable, // 13
        SvcVoiceInit, // 14
        SvcVoiceData, // 15
        undefined,
        SvcSounds, // 17
        SvcSetView, // 18
        SvcFixAngle, // 19
        SvcCrosshairAngle, // 20
        SvcBspDecal, // 21
        undefined,
        SvcUserMessage, // 23
        SvcEntityMessage, // 24
        SvcGameEvent, // 25
        SvcPacketEntities, // 26
        SvcTempEntities, // 27
        SvcPrefetch, // 28
        SvcMenu, // 29
        SvcGameEventList, // 30
        SvcGetCvarValue, // 31
        SvcCmdKeyValues, // 32
    ] as (typeof NetMessage | undefined)[],
    NetMessage,
    NetNop,
    NetDisconnect,
    NetFile,
    NetSplitScreenUser,
    NetTick,
    NetStringCmd,
    NetSetConVar,
    NetSignonState,
    SvcServerInfo,
    SvcSendTable,
    SvcClassInfo,
    SvcSetPause,
    SvcCreateStringTable,
    SvcUpdateStringTable,
    SvcVoiceInit,
    SvcVoiceData,
    SvcPrint,
    SvcSounds,
    SvcSetView,
    SvcFixAngle,
    SvcCrosshairAngle,
    SvcBspDecal,
    SvcSplitScreen,
    SvcUserMessage,
    SvcEntityMessage,
    SvcGameEvent,
    SvcPacketEntities,
    SvcTempEntities,
    SvcPrefetch,
    SvcMenu,
    SvcGameEventList,
    SvcGetCvarValue,
    SvcCmdKeyValues,
    SvcPaintMapData,
};
