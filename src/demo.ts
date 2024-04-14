// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import {
    DataTable,
    DemoMessages,
    DemoMessagesTypes,
    type IMessage,
    type Message,
    Packet,
    SyncTick,
} from './messages.ts';
import { SendTable, ServerClassInfo } from './types/DataTables.ts';
import { NetMessage, NetMessages } from './types/NetMessages.ts';
import { StringTable } from './types/StringTables.ts';
import { UserCmd } from './types/UserCmd.ts';
import type { SourceBuffer } from './buffer.ts';
import type { SourceGame } from './speedrun/games/SourceGame.ts';
import { SourceGames } from './speedrun/games/mod.ts';

// deno-lint-ignore no-explicit-any
type MessageInstance<T extends { create(...args: any): any }> = T extends { create(...args: any): infer R } ? R : any;

export class SourceDemo {
    demoFileStamp: string = 'HL2DEMO';
    demoProtocol: number = 4;
    networkProtocol: number = 2001;
    serverName: string = '';
    clientName: string = '';
    mapName: string = '';
    gameDirectory: string = '';
    playbackTime: number = 0;
    playbackTicks: number = 0;
    playbackFrames: number = 0;
    signOnLength: number = 0;
    messages: IMessage[] = [];
    game?: SourceGame;

    static default(): SourceDemo {
        return new this();
    }
    replaceMessageAt(index: number, message: IMessage): SourceDemo {
        this.messages[index < 0 ? this.messages.length - index : index] = message;
        return this;
    }
    insertMessagesAt(index: number, ...messages: IMessage[]): SourceDemo {
        this.messages.splice(index, 0, ...messages);
        return this;
    }
    removeMessagesAt(index: number, count: number): SourceDemo {
        this.messages.splice(index, count);
        return this;
    }
    findMessage<T extends Message>(type: T | ((msg: IMessage) => boolean | undefined)): MessageInstance<T> | undefined {
        const isType = 'TYPE' in type;
        const typeValue = isType ? type.TYPE : null;
        const byType = isType ? (msg: IMessage) => msg.type === typeValue : type;
        return this.messages.find(byType) as MessageInstance<T> | undefined;
    }
    findMessages<T extends Message>(type: T | ((msg: IMessage) => boolean | undefined)): MessageInstance<T>[] {
        const isType = 'TYPE' in type;
        const typeValue = isType ? type.TYPE : null;
        const byType = isType ? (msg: IMessage) => msg.type !== typeValue : type;
        return this.messages.filter(byType) as MessageInstance<T>[];
    }
    findPacket<T extends NetMessage>(
        type: (new (type: number) => T) | ((packet: NetMessage) => boolean | undefined),
    ): T | undefined {
        const byType = type.prototype instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as unknown as (msg: NetMessage) => boolean | undefined)(packet);

        for (const msg of this.messages) {
            if (Packet.matches(msg)) {
                const packet = msg.packets.find(byType) as T | undefined;
                if (packet) {
                    return packet;
                }
            }
        }
    }
    findPackets<T extends NetMessage>(
        type: (new (type: number) => T) | ((packet: NetMessage) => boolean | undefined),
    ): T[] {
        const isType = type.prototype instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as unknown as (msg: NetMessage) => boolean | undefined)(packet);

        const packets: T[] = [];
        for (const msg of this.messages) {
            if (Packet.matches(msg)) {
                for (const packet of msg.packets) {
                    if (isType(packet)) {
                        packets.push(packet as T);
                    }
                }
            }
        }
        return packets;
    }
    readHeader(buf: SourceBuffer): SourceDemo {
        this.demoFileStamp = buf.readStringBuffer(8);
        if (this.demoFileStamp !== 'HL2DEMO') {
            throw new Error(`Invalid demo file stamp: ${this.demoFileStamp}`);
        }
        this.demoProtocol = buf.readInt32LE();
        this.networkProtocol = buf.readInt32LE();
        this.serverName = buf.readStringBuffer(260);
        this.clientName = buf.readStringBuffer(260);
        this.mapName = buf.readStringBuffer(260);
        this.gameDirectory = buf.readStringBuffer(260);
        this.playbackTime = buf.readFloat32LE();
        this.playbackTicks = buf.readInt32LE();
        this.playbackFrames = buf.readInt32LE();
        this.signOnLength = buf.readInt32LE();
        this.messages = [];
        return this;
    }
    writeHeader(buf: SourceBuffer): SourceDemo {
        buf.writeCString(this.demoFileStamp);
        buf.writeInt32LE(this.demoProtocol);
        buf.writeInt32LE(this.networkProtocol);
        buf.writeStringBuffer(this.serverName, 260);
        buf.writeStringBuffer(this.clientName, 260);
        buf.writeStringBuffer(this.mapName, 260);
        buf.writeStringBuffer(this.gameDirectory, 260);
        buf.writeFloat32LE(this.playbackTime);
        buf.writeInt32LE(this.playbackTicks);
        buf.writeInt32LE(this.playbackFrames);
        buf.writeInt32LE(this.signOnLength);
        return this;
    }
    readMessages(buf: SourceBuffer): SourceDemo {
        while (buf.bitsLeft > 8) {
            const type = buf.readInt8();

            const Message = DemoMessagesTypes[type];
            if (!Message) {
                throw new Error(`Unknown demo message type: ${type}`);
            }

            this.messages.push(Message.deserialize(buf));
        }

        return this;
    }
    writeMessages(buf: SourceBuffer) {
        this.messages.forEach((message) => message.write(buf.writeInt8(message.type)));
        return this;
    }
    readUserCmds(): SourceDemo {
        for (const message of this.messages) {
            if (DemoMessages.UserCmd.matches(message)) {
                const data = message.data.clone();
                const cmd = new UserCmd();
                cmd.read(data);
                message.userCmd = cmd;
            }
        }

        return this;
    }
    writeUserCmds(): SourceDemo {
        for (const message of this.messages) {
            if (DemoMessages.UserCmd.matches(message) && message.userCmd) {
                const data = message.data.clone();
                message.userCmd.write(data);
                message.data = data.reset();
            }
        }

        return this;
    }
    readStringTables(): SourceDemo {
        for (const message of this.messages) {
            if (DemoMessages.StringTable.matches(message)) {
                const stringTables = [];
                const data = message.data.clone();

                let tables = data.readInt8() ?? 0;

                while (tables--) {
                    const table = new StringTable();
                    table.read(data);
                    stringTables.push(table);
                }

                message.stringTables = stringTables;
            }
        }

        return this;
    }
    writeStringTables(): SourceDemo {
        for (const message of this.messages) {
            if (DemoMessages.StringTable.matches(message) && message.stringTables) {
                const data = message.data.clone();

                data.writeInt8(message.stringTables.length);

                message.stringTables.forEach((stringTable) => {
                    stringTable.write(data);
                });

                message.data = data.reset();
            }
        }

        return this;
    }
    readDataTables(): SourceDemo {
        for (const message of this.messages) {
            if (DataTable.matches(message)) {
                const dataTable: {
                    tables: SendTable[];
                    serverClasses: ServerClassInfo[];
                    restData: SourceBuffer | undefined;
                } = {
                    tables: [],
                    serverClasses: [],
                    restData: undefined,
                };

                const data = message.data.clone();

                while (data.readBoolean()) {
                    const dt = new SendTable();
                    dt.read(data);
                    dataTable.tables.push(dt);
                }

                let classes = data.readInt16LE() ?? 0;
                while (classes--) {
                    const sc = new ServerClassInfo();
                    sc.read(data);
                    dataTable.serverClasses.push(sc);
                }

                // TODO
                //dataTable.restData = data.readToEnd();

                message.dataTable = dataTable;
            }
        }

        return this;
    }
    writeDataTables(): SourceDemo {
        for (const message of this.messages) {
            if (DataTable.matches(message) && message.dataTable) {
                const data = message.data.clone();

                message.dataTable.tables.forEach((dt) => {
                    data.writeBoolean(true);
                    dt.write(data);
                });
                data.writeBoolean(false);

                data.writeInt16LE(message.dataTable.serverClasses.length);
                message.dataTable.serverClasses!.forEach((sc) => {
                    sc.write(data);
                });

                message.data = data.reset();
            }
        }

        return this;
    }
    readPackets(netMessages?: (typeof NetMessage | undefined)[]): SourceDemo {
        netMessages = NetMessages.Portal2Engine;

        for (const message of this.messages) {
            if (Packet.matches(message)) {
                const packets = [];
                const data = message.data.clone();

                while (data.bitsLeft > 6) {
                    const type = data.readBitsLE(6);

                    const NetMessage = netMessages.at(type);
                    if (NetMessage) {
                        const packet = new NetMessage(type);
                        packet.read(data);
                        packets.push(packet);
                    } else {
                        throw new Error(`Net message type ${type} unknown!`);
                    }
                }

                message.packets = packets;
            }
        }

        return this;
    }
    writePackets(): SourceDemo {
        for (const message of this.messages) {
            if (Packet.matches(message) && message.packets) {
                const data = message.data.clone();

                message.packets.forEach((packet) => {
                    data.writeBitsLE(packet.type, 6);
                    packet.write(data);
                });

                message.data = data.reset();
            }
        }

        return this;
    }
    detectGame(sourceGames = SourceGames): SourceDemo {
        this.game = sourceGames.find(
            (game) => game.directory === this.gameDirectory,
        );
        return this;
    }
    getIntervalPerTick(): number {
        if (this.playbackTicks === undefined || this.playbackTime === undefined) {
            throw new Error('Cannot find tickrate without parsing the header.');
        }
        if (this.playbackTicks === 0) {
            if (this.game !== undefined) {
                return 1 / this.game.tickrate;
            }
            throw new Error('Cannot find ipt of null tick demo.');
        }
        return this.playbackTime / this.playbackTicks;
    }
    getTickrate(): number {
        if (this.playbackTicks === undefined || this.playbackTime === undefined) {
            throw new Error('Cannot find tickrate without parsing the header.');
        }
        if (this.playbackTime === 0) {
            if (this.game !== undefined) {
                return this.game.tickrate;
            }
            throw new Error('Cannot find tickrate of null tick demo.');
        }
        return this.playbackTicks / this.playbackTime;
    }
    adjustTicks(): SourceDemo {
        if (!this.messages.length) {
            throw new Error('Cannot adjust ticks without parsed messages.');
        }

        let synced = false;
        let last = 0;
        for (const message of this.messages) {
            if (SyncTick.matches(message)) {
                synced = true;
            }

            if (!synced) {
                message.tick = 0;
            } else if (message.tick < 0) {
                message.tick = last;
            }
            last = message.tick;
        }

        return this;
    }
    adjustRange(endTick = 0, startTick = 0, tickrate: number | undefined = undefined): SourceDemo {
        if (!this.messages.length) {
            throw new Error('Cannot adjust range without parsed messages.');
        }

        if (endTick < 1) {
            const packets = this.findMessages(Packet);
            const lastPacket = packets[packets.length - 1];
            if (!lastPacket) {
                throw new Error('Cannot adjust range without parsed packets.');
            }
            endTick = lastPacket.tick;
        }

        const delta = endTick - startTick;
        if (delta < 0) {
            throw new Error('Start tick is greater than end tick.');
        }

        const ipt = tickrate === undefined ? this.getIntervalPerTick() : 1 / tickrate;
        this.playbackTicks = delta;
        this.playbackTime = ipt * delta;

        return this;
    }
    rebaseFrom(tick: number): SourceDemo {
        if (!this.messages.length) {
            throw new Error('Cannot adjust ticks without parsed messages.');
        }

        let synced = false;
        let last = 0;
        for (const message of this.messages) {
            if (message.tick === tick) {
                synced = true;
            }

            if (!synced) {
                message.tick = 0;
            } else if (message.tick < 0) {
                message.tick = last;
            } else {
                message.tick -= tick;
            }

            last = message.tick;
        }

        return this;
    }
    getSyncedTicks(demo: SourceDemo, viewTolerance = 1, splitScreenIndex = 0): {
        source: number | undefined;
        destination: number | undefined;
        delta: number;
        x: number | undefined;
        y: number | undefined;
        z: number | undefined;
    }[] {
        if (!this.messages.length || !demo.messages.length) {
            throw new Error('Cannot adjust ticks without parsed messages.');
        }

        const syncedTicks = [];
        for (const message of this.messages) {
            if (Packet.matches(message)) {
                const view = message.cmdInfo.at(splitScreenIndex)?.viewOrigin;
                const result = demo.messages.find((msg) => {
                    if (!Packet.matches(msg)) {
                        return false;
                    }
                    const match = msg.cmdInfo.at(splitScreenIndex)?.viewOrigin;
                    return (
                        Math.abs((match?.x ?? 0) - (view?.x ?? 0)) <= viewTolerance &&
                        Math.abs((match?.y ?? 0) - (view?.y ?? 0)) <= viewTolerance &&
                        Math.abs((match?.z ?? 0) - (view?.z ?? 0)) <= viewTolerance
                    );
                });
                if (result !== undefined) {
                    syncedTicks.push({
                        source: message.tick,
                        destination: result.tick,
                        delta: Math.abs(message.tick - result.tick),
                        x: message.cmdInfo.at(splitScreenIndex)?.viewOrigin?.x,
                        y: message.cmdInfo.at(splitScreenIndex)?.viewOrigin?.y,
                        z: message.cmdInfo.at(splitScreenIndex)?.viewOrigin?.z,
                    });
                }
            }
        }

        return syncedTicks;
    }
}
