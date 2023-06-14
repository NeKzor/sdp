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
}

export class NetNop extends NetMessage {
    read() {}
}
export class NetDisconnect extends NetMessage {
    text?: string;
    read(buf: SourceDemoBuffer) {
        this.text = buf.readASCIIString();
    }
}
export class NetFile extends NetMessage {
    transferId?: number;
    fileName?: string;
    fileRequested?: boolean;
    read(buf: SourceDemoBuffer) {
        this.transferId = buf.readInt32();
        this.fileName = buf.readASCIIString();
        this.fileRequested = buf.readBoolean();
    }
}
export class NetSplitScreenUser extends NetMessage {
    unk?: boolean;
    read(buf: SourceDemoBuffer) {
        this.unk = buf.readBoolean();
    }
}
export class NetTick extends NetMessage {
    tick?: number;
    hostFrameTime?: number;
    hostFrameTimeStdDeviation?: number;
    read(buf: SourceDemoBuffer) {
        const NET_TICK_SCALEUP = 100000;
        this.tick = buf.readInt32();
        this.hostFrameTime = buf.readInt16() / NET_TICK_SCALEUP;
        this.hostFrameTimeStdDeviation = buf.readInt16() / NET_TICK_SCALEUP;
    }
}
export class NetStringCmd extends NetMessage {
    command?: string;
    read(buf: SourceDemoBuffer) {
        this.command = buf.readASCIIString();
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
}
export class NetSignonState extends NetMessage {
    signonState?: number;
    spawnCount?: number;
    numServerPlayers?: number;
    playersNetworkIds?: Uint8Array;
    mapName?: string;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.signonState = buf.readInt8();
        this.spawnCount = buf.readInt32();
        if (demo.isNewEngine()) {
            this.numServerPlayers = buf.readInt32();
            let length = buf.readInt32();
            if (length > 0) {
                this.playersNetworkIds = buf.readArrayBuffer(length);
            }
            length = buf.readInt32();
            if (length > 0) {
                this.mapName = buf.readASCIIString(length);
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
}
export class SvcSendTable extends NetMessage {
    needsDecoder?: boolean;
    props?: number;
    read(buf: SourceDemoBuffer) {
        this.needsDecoder = buf.readBoolean();
        const length = buf.readInt16();
        this.props = buf.readBits(length);
    }
}
export class SvcClassInfo extends NetMessage {
    createOnClient?: boolean;
    serverClasses?: {
        classId: number;
        className: string;
        dataTableName: string;
    }[];
    read(buf: SourceDemoBuffer) {
        let length = buf.readInt16();
        this.createOnClient = buf.readBoolean();
        if (!this.createOnClient) {
            this.serverClasses = [];
            while (length--) {
                this.serverClasses.push({
                    classId: buf.readBits(Math.log2(length) + 1),
                    className: buf.readASCIIString(),
                    dataTableName: buf.readASCIIString(),
                });
            }
        }
    }
}
export class SvcSetPause extends NetMessage {
    paused?: boolean;
    read(buf: SourceDemoBuffer) {
        this.paused = buf.readBoolean();
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
    stringData?: number;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.name = buf.readASCIIString();
        this.maxEntries = buf.readInt16();
        this.numEntries = buf.readBits(Math.log2(this.maxEntries) + 1);
        const length = buf.readBits(20);
        this.userDataFixedSize = buf.readBoolean();
        this.userDataSize = this.userDataFixedSize ? buf.readBits(12) : 0;
        this.userDataSizeBits = this.userDataFixedSize ? buf.readBits(4) : 0;
        this.flags = buf.readBits(demo.isNewEngine() ? 2 : 1);
        this.stringData = buf.readBits(length);
    }
}
export class SvcUpdateStringTable extends NetMessage {
    tableId?: number;
    numChangedEntries?: number;
    stringData?: number;
    read(buf: SourceDemoBuffer) {
        this.tableId = buf.readBits(5);
        this.numChangedEntries = buf.readBoolean() ? buf.readInt16() : 1;
        const length = buf.readBits(20);
        this.stringData = buf.readBits(length);
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
}
export class SvcVoiceData extends NetMessage {
    client?: number;
    proximity?: number;
    voiceData?: number;
    read(buf: SourceDemoBuffer) {
        this.client = buf.readInt8();
        this.proximity = buf.readInt8();
        const length = buf.readInt16();
        this.voiceData = buf.readBits(length);
    }
}
export class SvcPrint extends NetMessage {
    message?: string;
    read(buf: SourceDemoBuffer) {
        this.message = buf.readASCIIString();
    }
}
export class SvcSounds extends NetMessage {
    reliableSound?: boolean;
    sounds?: SoundInfo[];
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.reliableSound = buf.readBoolean();
        let sounds = this.reliableSound ? 1 : buf.readBits(8);
        const length = this.reliableSound ? buf.readBits(8) : buf.readBits(16);
        const data = buf.readBitStream(length);

        if (demo.demoProtocol === 3) {
            this.sounds = [];
            while (sounds--) {
                const sound = new SoundInfo();
                sound.read(data);
                this.sounds.push(sound);
            }
        }
    }
}
export class SvcSetView extends NetMessage {
    entityIndex?: number;
    read(buf: SourceDemoBuffer) {
        this.entityIndex = buf.readBits(11);
    }
}
export class SvcFixAngle extends NetMessage {
    relative?: boolean;
    angle?: [number, number, number];
    read(buf: SourceDemoBuffer) {
        this.relative = buf.readBoolean();
        this.angle = [buf.readInt16(), buf.readInt16(), buf.readInt16()];
    }
}
export class SvcCrosshairAngle extends NetMessage {
    angle?: [number, number, number];
    read(buf: SourceDemoBuffer) {
        this.angle = [buf.readInt16(), buf.readInt16(), buf.readInt16()];
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
}
export class SvcSplitScreen extends NetMessage {
    unk?: number;
    data?: number;
    read(buf: SourceDemoBuffer) {
        this.unk = buf.readBits(1);
        const length = buf.readBits(11);
        this.data = buf.readBits(length);
    }
}
export class SvcUserMessage extends NetMessage {
    msgType?: number;
    msgData?: number;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.msgType = buf.readInt8();
        const length = buf.readBits(demo.isNewEngine() ? 12 : 11);
        this.msgData = buf.readBits(length);
    }
}
export class SvcEntityMessage extends NetMessage {
    entityIndex?: number;
    classId?: number;
    read(buf: SourceDemoBuffer) {
        this.entityIndex = buf.readBits(11);
        this.classId = buf.readBits(9);
        const length = buf.readBits(11);
        buf.readBits(length);
    }
}
export class SvcGameEvent extends NetMessage {
    event?: GameEvent;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        const length = buf.readBits(11);
        const data = buf.readBitStream(length);

        if (demo.gameEventManager) {
            this.event = demo.gameEventManager.deserializeEvent(data);
        } else {
            this.data = data;
        }
    }
}
export class SvcPacketEntities extends NetMessage {
    maxEntries?: number;
    isDelta?: boolean;
    deltaFrom?: number;
    baseLine?: boolean;
    updatedEntries?: number;
    updateBaseline?: boolean;
    data?: number;
    read(buf: SourceDemoBuffer) {
        this.maxEntries = buf.readBits(11);
        this.isDelta = buf.readBoolean();
        this.deltaFrom = this.isDelta ? buf.readInt32() : 0;
        this.baseLine = buf.readBoolean();
        this.updatedEntries = buf.readBits(11);
        const length = buf.readBits(20);
        this.updateBaseline = buf.readBoolean();
        this.data = buf.readBits(length);
    }
}
export class SvcTempEntities extends NetMessage {
    numEntries?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.numEntries = buf.readInt8();
        const length = buf.readBits(17);
        this.data = buf.readBitStream(length);
    }
}
export class SvcPrefetch extends NetMessage {
    soundIndex?: number;
    read(buf: SourceDemoBuffer) {
        this.soundIndex = buf.readBits(13);
    }
}
export class SvcMenu extends NetMessage {
    menuType?: number;
    data?: number;
    read(buf: SourceDemoBuffer) {
        this.menuType = buf.readInt16();
        const length = buf.readInt32();
        this.data = buf.readBits(length);
    }
}
export class SvcGameEventList extends NetMessage {
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        let events = buf.readBits(9);
        const length = buf.readBits(20);
        const data = buf.readBitStream(length);

        const gameEvents = [];
        while (events--) {
            const descriptor = new GameEventDescriptor();
            descriptor.read(data);
            gameEvents.push(descriptor);
        }

        demo.gameEventManager = new GameEventManager(gameEvents);
    }
}
export class SvcGetCvarValue extends NetMessage {
    cookie?: number;
    cvarName?: string;
    read(buf: SourceDemoBuffer) {
        this.cookie = buf.readInt32();
        this.cvarName = buf.readASCIIString();
    }
}
export class SvcCmdKeyValues extends NetMessage {
    buffer?: Uint8Array;
    read(buf: SourceDemoBuffer) {
        const length = buf.readInt32();
        this.buffer = buf.readArrayBuffer(length);
    }
}
export class SvcPaintMapData extends NetMessage {
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        const length = buf.readInt32();
        this.data = buf.readBitStream(length);
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
