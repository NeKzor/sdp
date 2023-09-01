/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SoundInfo } from './SoundInfo.ts';
import { GameEvent, GameEventDescriptor, GameEventManager } from './GameEventManager.ts';
import { SourceDemoBuffer } from '../buffer.ts';
import { SourceDemo } from '../demo.ts';
import { Vector } from './Vector.ts';
import { UserMessage, UserMessages } from './UserMessages.ts';

export class NetMessage {
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
}

export class NetNop extends NetMessage {
    read() {}
    write() {}
}
export class NetDisconnect extends NetMessage {
    text?: string;
    read(buf: SourceDemoBuffer) {
        this.text = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.text!);
    }
}
export class NetFile extends NetMessage {
    transferId?: number;
    fileName?: string;
    fileRequested?: boolean;
    unk?: boolean;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.transferId = buf.readInt32();
        this.fileName = buf.readASCIIString();
        this.fileRequested = buf.readBoolean();
        if (demo.demoProtocol === 4) {
            this.unk = buf.readBoolean();
        }
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        buf.writeInt32(this.transferId!);
        buf.writeASCIIString(this.fileName!);
        buf.writeBoolean(this.fileRequested!);
        if (demo.demoProtocol === 4) {
            buf.writeBoolean(this.unk!);
        }
    }
}
export class NetSplitScreenUser extends NetMessage {
    unk?: boolean;
    read(buf: SourceDemoBuffer) {
        this.unk = buf.readBoolean();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBoolean(this.unk!);
    }
}
export class NetTick extends NetMessage {
    tick?: number;
    hostFrameTime?: number;
    hostFrameTimeStdDeviation?: number;
    read(buf: SourceDemoBuffer) {
        const NET_TICK_SCALEUP = 100_000;
        this.tick = buf.readInt32();
        this.hostFrameTime = buf.readInt16() / NET_TICK_SCALEUP;
        this.hostFrameTimeStdDeviation = buf.readInt16() / NET_TICK_SCALEUP;
    }
    write(buf: SourceDemoBuffer) {
        const NET_TICK_SCALEUP = 100_000;
        buf.writeInt32(this.tick!);

        const [hostFrameTime, hostFrameTimeStdDeviation] = new Float32Array([
            this.hostFrameTime! * NET_TICK_SCALEUP,
            this.hostFrameTimeStdDeviation! * NET_TICK_SCALEUP,
        ]);

        buf.writeInt16(hostFrameTime!);
        buf.writeInt16(hostFrameTimeStdDeviation!);
    }
}
export class NetStringCmd extends NetMessage {
    command?: string;
    read(buf: SourceDemoBuffer) {
        this.command = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.command!);
    }
}
export class NetSetConVar extends NetMessage {
    convars?: { name: string; value: string }[];
    read(buf: SourceDemoBuffer) {
        this.convars = [];
        let length = buf.readInt8();
        while (length--) {
            this.convars.push({
                name: buf.readASCIIString(),
                value: buf.readASCIIString(),
            });
        }
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt8(this.convars!.length);
        this.convars!.forEach(({ name, value }) => {
            buf.writeASCIIString(name);
            buf.writeASCIIString(value);
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
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.signonState = buf.readInt8();
        this.spawnCount = buf.readInt32();
        if (demo.isNewEngine()) {
            this.numServerPlayers = buf.readInt32();
            this.playersNetworkIdsCount = buf.readInt32();
            if (this.playersNetworkIdsCount > 0) {
                this.playersNetworkIds = buf.readArrayBuffer(this.playersNetworkIdsCount);
            }
            this.mapNameLength = buf.readInt32();
            if (this.mapNameLength > 0) {
                this.mapName = buf.readASCIIString(this.mapNameLength);
            }
        }
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        buf.writeInt8(this.signonState!);
        buf.writeInt32(this.spawnCount!);
        if (demo.isNewEngine()) {
            buf.writeInt32(this.numServerPlayers!);
            buf.writeInt32(this.playersNetworkIdsCount!);
            if (this.playersNetworkIdsCount! > 0) {
                buf.writeArrayBuffer(this.playersNetworkIds!, this.playersNetworkIdsCount!);
            }
            buf.writeInt32(this.mapNameLength!);
            if (this.mapNameLength! > 0) {
                buf.writeASCIIString(this.mapName!, this.mapNameLength);
            }
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
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.protocol = buf.readInt16();
        this.serverCount = buf.readInt32();
        this.isHltv = buf.readBoolean();
        this.isDedicated = buf.readBoolean();
        this.clientCrc = buf.readInt32();
        this.maxClasses = buf.readInt16();
        this.mapCrc = buf.readInt32();
        this.playerSlot = buf.readInt8();
        this.maxClients = buf.readInt8();
        if (demo.isNewEngine()) {
            this.unk = buf.readInt32();
        } else if (demo.networkProtocol === 24) {
            this.unk = buf.readBits(96);
        }
        this.tickInterval = buf.readFloat32();
        this.cOs = String.fromCharCode(buf.readInt8());
        this.gameDir = buf.readASCIIString();
        this.mapName = buf.readASCIIString();
        this.skyName = buf.readASCIIString();
        this.hostName = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        buf.writeInt16(this.protocol!);
        buf.writeInt32(this.serverCount!);
        buf.writeBoolean(this.isHltv!);
        buf.writeBoolean(this.isDedicated!);
        buf.writeInt32(this.clientCrc!);
        buf.writeInt16(this.maxClasses!);
        buf.writeInt32(this.mapCrc!);
        buf.writeInt8(this.playerSlot!);
        buf.writeInt8(this.maxClients!);
        if (demo.isNewEngine()) {
            buf.writeInt32(this.unk!);
        } else if (demo.networkProtocol === 24) {
            buf.writeBits(this.unk!, 96);
        }
        buf.writeFloat32(this.tickInterval!);
        buf.writeInt8(this.cOs!.charCodeAt(0));
        buf.writeASCIIString(this.gameDir!);
        buf.writeASCIIString(this.mapName!);
        buf.writeASCIIString(this.skyName!);
        buf.writeASCIIString(this.hostName!);
    }
}
export class SvcSendTable extends NetMessage {
    needsDecoder?: boolean;
    propsLength?: number;
    props?: number;
    read(buf: SourceDemoBuffer) {
        this.needsDecoder = buf.readBoolean();
        this.propsLength = buf.readInt16();
        this.props = buf.readBits(this.propsLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBoolean(this.needsDecoder!);
        buf.writeInt16(this.propsLength!);
        buf.writeBits(this.props!, this.propsLength!);
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
    read(buf: SourceDemoBuffer) {
        this.length = buf.readInt16();
        this.createOnClient = buf.readBoolean();
        if (!this.createOnClient) {
            this.serverClasses = [];
            let count = this.length;
            while (count--) {
                this.serverClasses.push({
                    classId: buf.readBits(Math.log2(count) + 1),
                    className: buf.readASCIIString(),
                    dataTableName: buf.readASCIIString(),
                });
            }
        }
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt16(this.length!);
        buf.writeBoolean(this.createOnClient!);
        if (!this.createOnClient) {
            let count = this.length!;
            this.serverClasses!.forEach(({ classId, className, dataTableName }) => {
                --count;
                buf.writeBits(classId, Math.log2(count) + 1);
                buf.writeASCIIString(className);
                buf.writeASCIIString(dataTableName);
            });
        }
    }
}
export class SvcSetPause extends NetMessage {
    paused?: boolean;
    read(buf: SourceDemoBuffer) {
        this.paused = buf.readBoolean();
    }
    write(buf: SourceDemoBuffer) {
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
    stringData?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.name = buf.readASCIIString();
        this.maxEntries = buf.readInt16();
        this.numEntries = buf.readBits(Math.log2(this.maxEntries) + 1);
        this.stringDataLength = buf.readBits(20);
        this.userDataFixedSize = buf.readBoolean();
        this.userDataSize = this.userDataFixedSize ? buf.readBits(12) : 0;
        this.userDataSizeBits = this.userDataFixedSize ? buf.readBits(4) : 0;
        this.flags = buf.readBits(demo.isNewEngine() ? 2 : 1);
        this.stringData = buf.readBitStream(this.stringDataLength);
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        buf.writeASCIIString(this.name!);
        buf.writeInt16(this.maxEntries!);
        buf.writeBits(this.numEntries!, Math.log2(this.maxEntries!) + 1);
        buf.writeBits(this.stringDataLength!, 20);
        buf.writeBoolean(this.userDataFixedSize!);
        this.userDataFixedSize && buf.writeBits(this.userDataSize!, 12);
        this.userDataFixedSize && buf.writeBits(this.userDataSizeBits!, 4);
        buf.writeBits(this.flags!, demo.isNewEngine() ? 2 : 1);
        buf.writeBitStream(this.stringData!, this.stringDataLength!);
    }
}
export class SvcUpdateStringTable extends NetMessage {
    tableId?: number;
    numChangedEntries?: number;
    stringDataLength?: number;
    stringData?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.tableId = buf.readBits(5);
        this.numChangedEntries = buf.readBoolean() ? buf.readInt16() : 1;
        this.stringDataLength = buf.readBits(20);
        this.stringData = buf.readBitStream(this.stringDataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBits(this.tableId!, 5);
        buf.writeBoolean(this.numChangedEntries !== 1);
        this.numChangedEntries !== 1 && buf.writeInt16(this.numChangedEntries!);
        buf.writeBits(this.stringDataLength!, 20);
        buf.writeBitStream(this.stringData!, this.stringDataLength!);
    }
}
export class SvcVoiceInit extends NetMessage {
    codec?: string;
    quality?: number;
    unk?: number;
    read(buf: SourceDemoBuffer) {
        this.codec = buf.readASCIIString();
        this.quality = buf.readInt8();
        if (this.quality === 255) this.unk = buf.readFloat32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.codec!);
        buf.writeInt8(this.quality!);
        this.unk !== undefined && buf.writeFloat32(this.unk!);
    }
}
export class SvcVoiceData extends NetMessage {
    client?: number;
    proximity?: number;
    voiceDataLength?: number;
    voiceData?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.client = buf.readInt8();
        this.proximity = buf.readInt8();
        this.voiceDataLength = buf.readInt16();
        this.voiceData = buf.readBitStream(this.voiceDataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt8(this.client!);
        buf.writeInt8(this.proximity!);
        buf.writeInt16(this.voiceDataLength!);
        buf.writeBitStream(this.voiceData!, this.voiceDataLength!);
    }
}
export class SvcPrint extends NetMessage {
    message?: string;
    read(buf: SourceDemoBuffer) {
        this.message = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeASCIIString(this.message!);
    }
}
export class SvcSounds extends NetMessage {
    reliableSound?: boolean;
    soundsLength?: number;
    soundsDataLength?: number;
    soundsData?: SourceDemoBuffer;
    sounds?: SoundInfo[];
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.reliableSound = buf.readBoolean();
        this.soundsLength = this.reliableSound ? 1 : buf.readBits(8);

        this.soundsDataLength = this.reliableSound ? buf.readBits(8) : buf.readBits(16);
        this.soundsData = buf.readBitStream(this.soundsDataLength);
        this.sounds = [];

        if (demo.demoProtocol === 3) {
            let sounds = this.soundsLength;
            while (sounds--) {
                const sound = new SoundInfo();
                sound.read(this.soundsData);
                this.sounds.push(sound);
            }
        }
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        buf.writeBoolean(this.reliableSound!);
        !this.reliableSound && buf.writeBits(this.soundsLength!, 8);

        if (demo.demoProtocol === 3) {
            this.soundsData = new SourceDemoBuffer(new ArrayBuffer(this.soundsData!.length / 8));
            this.sounds!.forEach((sound) => sound.write(this.soundsData!));
            this.soundsData = new SourceDemoBuffer(this.soundsData.view);
        }

        buf.writeBits(this.soundsDataLength!, this.reliableSound ? 8 : 16);
        buf.writeBitStream(this.soundsData!, this.soundsDataLength!);
    }
}
export class SvcSetView extends NetMessage {
    entityIndex?: number;
    read(buf: SourceDemoBuffer) {
        this.entityIndex = buf.readBits(11);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBits(this.entityIndex!, 11);
    }
}
export class SvcFixAngle extends NetMessage {
    relative?: boolean;
    angle?: [number, number, number];
    read(buf: SourceDemoBuffer) {
        this.relative = buf.readBoolean();
        this.angle = [buf.readInt16(), buf.readInt16(), buf.readInt16()];
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBoolean(this.relative!);
        this.angle!.forEach((ang) => buf.writeInt16(ang));
    }
}
export class SvcCrosshairAngle extends NetMessage {
    angle?: [number, number, number];
    read(buf: SourceDemoBuffer) {
        this.angle = [buf.readInt16(), buf.readInt16(), buf.readInt16()];
    }
    write(buf: SourceDemoBuffer) {
        this.angle!.forEach((ang) => buf.writeInt16(ang));
    }
}
export class SvcBspDecal extends NetMessage {
    pos?: Vector;
    decalTextureIndex?: number;
    entityIndex?: number;
    modelIndex?: number;
    lowPriority?: boolean;
    read(buf: SourceDemoBuffer) {
        this.pos = buf.readVectorCoord();
        this.decalTextureIndex = buf.readBits(9);
        if (buf.readBoolean()) {
            this.entityIndex = buf.readBits(11);
            this.modelIndex = buf.readBits(11);
        }
        this.lowPriority = buf.readBoolean();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeVectorCoord(this.pos!);
        buf.writeBits(this.decalTextureIndex!, 9);
        buf.writeBoolean(this.entityIndex !== undefined);
        if (this.entityIndex !== undefined) {
            buf.writeBits(this.entityIndex!, 11);
            buf.writeBits(this.modelIndex!, 11);
        }
        buf.writeBoolean(this.lowPriority!);
    }
}
export class SvcSplitScreen extends NetMessage {
    unk?: number;
    dataLength?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.unk = buf.readBits(1);
        this.dataLength = buf.readBits(11);
        this.data = buf.readBitStream(this.dataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBits(this.unk!, 1);
        buf.writeBits(this.dataLength!, 11);
        buf.writeBitStream(this.data!, this.dataLength!);
    }
}
export class SvcUserMessage extends NetMessage {
    msgType?: number;
    msgDataLength?: number;
    msgData?: SourceDemoBuffer;
    userMessage?: UserMessage;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.msgType = buf.readInt8();
        this.msgDataLength = buf.readBits(demo.isNewEngine() ? 12 : 11);
        this.msgData = buf.readBitStream(this.msgDataLength);

        if (demo.gameDirectory === 'portal2') {
            const userMessageType = UserMessages.Portal2Engine[this.msgType];
            if (userMessageType) {
                this.userMessage = new userMessageType(this.msgType);
                this.userMessage.read(this.msgData, demo);
            }
        }
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        buf.writeInt8(this.msgType!);

        if (this.userMessage) {
            this.msgData = SourceDemoBuffer.from(this.msgData!);
            this.userMessage.write(this.msgData, demo);
            this.msgData.reset();
        }

        buf.writeBits(this.msgDataLength!, demo.isNewEngine() ? 12 : 11);
        buf.writeBitStream(this.msgData!, this.msgDataLength!);
    }
}
export class SvcEntityMessage extends NetMessage {
    entityIndex?: number;
    classId?: number;
    dataLength?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.entityIndex = buf.readBits(11);
        this.classId = buf.readBits(9);
        this.dataLength = buf.readBits(11);
        this.data = buf.readBitStream(this.dataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBits(this.entityIndex!, 11);
        buf.writeBits(this.classId!, 9);
        buf.writeBits(this.dataLength!, 11);
        buf.writeBitStream(this.data!, this.dataLength!);
    }
}
export class SvcGameEvent extends NetMessage {
    event?: GameEvent;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.data = buf.readBitStream(buf.readBits(11));

        if (demo.gameEventManager) {
            const data = SourceDemoBuffer.from(this.data);
            this.event = demo.gameEventManager.deserializeEvent(data);
        }
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        if (demo.gameEventManager) {
            this.data = SourceDemoBuffer.from(this.data!);
            demo.gameEventManager.serializeEvent(this.event!, this.data);
            this.data.reset();
        }

        buf.writeBits(this.data!.length!, 11);
        buf.writeBitStream(this.data!, this.data!.length);
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
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.maxEntries = buf.readBits(11);
        this.isDelta = buf.readBoolean();
        this.deltaFrom = this.isDelta ? buf.readInt32() : 0;
        this.baseLine = buf.readBoolean();
        this.updatedEntries = buf.readBits(11);
        this.dataLength = buf.readBits(20);
        this.updateBaseline = buf.readBoolean();
        this.data = buf.readBitStream(this.dataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBits(this.maxEntries!, 11);
        buf.writeBoolean(this.isDelta!);
        this.isDelta && buf.writeInt32(this.deltaFrom!);
        buf.writeBoolean(this.baseLine!);
        buf.writeBits(this.updatedEntries!, 11);
        buf.writeBits(this.dataLength!, 20);
        buf.writeBoolean(this.updateBaseline!);
        buf.writeBitStream(this.data!, this.dataLength!);
    }
}
export class SvcTempEntities extends NetMessage {
    numEntries?: number;
    dataLength?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.numEntries = buf.readInt8();
        this.dataLength = buf.readBits(17);
        this.data = buf.readBitStream(this.dataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt8(this.numEntries!);
        buf.writeBits(this.data!.length, 17);
        buf.writeBitStream(this.data!, this.dataLength!);
    }
}
export class SvcPrefetch extends NetMessage {
    soundIndex?: number;
    read(buf: SourceDemoBuffer) {
        this.soundIndex = buf.readBits(13);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBits(this.soundIndex!, 13);
    }
}
export class SvcMenu extends NetMessage {
    menuType?: number;
    dataLength?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.menuType = buf.readInt16();
        this.dataLength = buf.readInt32();
        this.data = buf.readBitStream(this.dataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt16(this.menuType!);
        buf.writeInt32(this.dataLength!);
        buf.writeBitStream(this.data!, this.dataLength!);
    }
}
export class SvcGameEventList extends NetMessage {
    events?: number;
    dataLength?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.events = buf.readBits(9);
        this.dataLength = buf.readBits(20);
        this.data = buf.readBitStream(this.dataLength);

        const gameEvents = [];
        let events = this.events;
        while (events--) {
            const descriptor = new GameEventDescriptor();
            descriptor.read(this.data);
            gameEvents.push(descriptor);
        }

        demo.gameEventManager = new GameEventManager(gameEvents);
    }
    write(buf: SourceDemoBuffer, demo: SourceDemo) {
        buf.writeBits(this.events!, 9);

        this.data = new SourceDemoBuffer(new ArrayBuffer(this.dataLength!));
        demo.gameEventManager!.gameEvents.forEach((descriptor) => descriptor.write(this.data!));
        this.data = new SourceDemoBuffer(this.data.view);

        buf.writeBits(this.dataLength!, 20);
        buf.writeBitStream(this.data!, this.dataLength!);
    }
}
export class SvcGetCvarValue extends NetMessage {
    cookie?: number;
    cvarName?: string;
    read(buf: SourceDemoBuffer) {
        this.cookie = buf.readInt32();
        this.cvarName = buf.readASCIIString();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.cookie!);
        buf.writeASCIIString(this.cvarName!);
    }
}
export class SvcCmdKeyValues extends NetMessage {
    buffer?: Uint8Array;
    read(buf: SourceDemoBuffer) {
        const length = buf.readInt32();
        this.buffer = buf.readArrayBuffer(length);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.buffer!.byteLength);
        buf.writeArrayBuffer(this.buffer!.buffer, this.buffer!.byteLength);
    }
}
export class SvcPaintMapData extends NetMessage {
    dataLength?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.dataLength = buf.readInt32();
        this.data = buf.readBitStream(this.dataLength);
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.data!.length);
        buf.writeBitStream(this.data!, this.dataLength!);
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
