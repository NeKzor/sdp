/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { DataTable, DemoMessages, Message, Packet, SyncTick } from './messages.ts';
import { SendTable, ServerClassInfo } from './types/DataTables.ts';
import { NetMessage, NetMessages } from './types/NetMessages.ts';
import { StringTable } from './types/StringTables.ts';
import { UserCmd } from './types/UserCmd.ts';
import { SourceDemoBuffer } from './buffer.ts';
import { GameEventManager } from './types/GameEventManager.ts';
import { SourceGame } from './speedrun/games/SourceGame.ts';
import { SourceGames } from './speedrun/games/mod.ts';

export class SourceDemo {
    demoFileStamp?: string;
    demoProtocol?: number;
    networkProtocol?: number;
    serverName?: string;
    clientName?: string;
    mapName?: string;
    gameDirectory?: string;
    playbackTime?: number;
    playbackTicks?: number;
    playbackFrames?: number;
    signOnLength?: number;
    messages?: Message[];
    game?: SourceGame;
    gameEventManager?: GameEventManager;
    static default() {
        return new this();
    }
    isNewEngine() {
        return this.demoProtocol === 4;
    }
    findMessage<T extends Message>(type: typeof Message | ((msg: Message) => boolean)) {
        const byType = type.prototype instanceof Message
            ? (msg: Message) => msg instanceof type
            : (msg: Message) => (type as (msg: Message) => boolean)(msg);
        return (this.messages ?? []).find(byType) as T | undefined;
    }
    findMessages<T extends Message>(type: typeof Message | ((msg: Message) => boolean)) {
        const byType = type.prototype instanceof Message
            ? (msg: Message) => msg instanceof type
            : (msg: Message) => (type as (msg: Message) => boolean)(msg);
        return (this.messages ?? []).filter(byType) as T[];
    }
    findPacket<T extends NetMessage>(type: typeof NetMessage | ((packet: NetMessage) => boolean)) {
        const byType = type.prototype instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as (msg: NetMessage) => boolean)(packet);

        for (const msg of this.messages ?? []) {
            if (msg instanceof Packet) {
                const packet = (msg.packets ?? []).find(byType) as T | undefined;
                if (packet) {
                    return packet;
                }
            }
        }
    }
    findPackets<T extends NetMessage>(type: typeof NetMessage | ((packet: NetMessage) => boolean)) {
        const isType = type.prototype instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as (msg: NetMessage) => boolean)(packet);

        const packets: T[] = [];
        for (const msg of this.messages ?? []) {
            if (msg instanceof Packet) {
                for (const packet of msg.packets ?? []) {
                    if (isType(packet)) {
                        packets.push(packet as T);
                    }
                }
            }
        }
        return packets;
    }
    readHeader(buf: SourceDemoBuffer) {
        this.demoFileStamp = buf.readASCIIString(8);
        if (this.demoFileStamp !== 'HL2DEMO') {
            throw new Error(`Invalid demo file stamp: ${this.demoFileStamp}`);
        }
        this.demoProtocol = buf.readInt32();
        this.networkProtocol = buf.readInt32();
        this.serverName = buf.readASCIIString(260);
        this.clientName = buf.readASCIIString(260);
        this.mapName = buf.readASCIIString(260);
        this.gameDirectory = buf.readASCIIString(260);
        this.playbackTime = buf.readFloat32();
        this.playbackTicks = buf.readInt32();
        this.playbackFrames = buf.readInt32();
        this.signOnLength = buf.readInt32();
        this.messages = [];
        return this;
    }
    readMessages(buf: SourceDemoBuffer) {
        if (!this.messages) {
            this.messages = [];
        }

        const readSlot = this.isNewEngine();
        const demoMessages = readSlot ? DemoMessages.NewEngine : DemoMessages.OldEngine;

        while (buf.bitsLeft > 8) {
            const type = buf.readInt8();
            const messageType = demoMessages[type];
            if (messageType) {
                const message = messageType.default(type).setTick(buf.readInt32());

                if (readSlot) {
                    message.setSlot(buf.readInt8());
                }

                this.messages.push(message.read(buf, this));
            } else {
                throw new Error(`Unknown demo message type: ${type}`);
            }
        }

        return this;
    }
    readUserCmds() {
        for (const message of this.messages ?? []) {
            if (message instanceof DemoMessages.UserCmd) {
                const cmd = new UserCmd();
                cmd.read(message.data!);
                message.userCmd = cmd;
            }
        }

        return this;
    }
    readStringTables() {
        for (const message of this.messages ?? []) {
            if (message instanceof DemoMessages.StringTable) {
                const stringTables = [];

                let tables = message.data?.readInt8() ?? 0;
                while (tables--) {
                    const table = new StringTable();
                    table.read(message.data!, this);
                    stringTables.push(table);
                }

                message.stringTables = stringTables;
            }
        }

        return this;
    }
    readDataTables() {
        for (const message of this.messages ?? []) {
            if (message instanceof DataTable) {
                const dataTable: {
                    tables: SendTable[];
                    serverClasses: ServerClassInfo[];
                } = {
                    tables: [],
                    serverClasses: [],
                };

                while (message.data?.readBoolean()) {
                    const dt = new SendTable();
                    dt.read(message.data, this);
                    dataTable.tables.push(dt);
                }

                let classes = message.data?.readInt16() ?? 0;
                while (classes--) {
                    const sc = new ServerClassInfo();
                    sc.read(message.data!);
                    dataTable.serverClasses.push(sc);
                }

                message.dataTable = dataTable;
            }
        }

        return this;
    }
    readPackets(netMessages?: (typeof NetMessage | undefined)[]) {
        netMessages = netMessages ??
            (this.isNewEngine() ? NetMessages.Portal2Engine : NetMessages.HalfLife2Engine);

        for (const message of this.messages ?? []) {
            if (message instanceof Packet) {
                const packets = [];
                while ((message.data?.bitsLeft ?? 0) > 6) {
                    const type = message.data?.readBits(6) ?? -1;

                    const NetMessage = netMessages.at(type);
                    if (NetMessage) {
                        const packet = new NetMessage(type);
                        packet.read(message.data!, this);
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
    detectGame(sourceGames = SourceGames) {
        this.game = sourceGames.find(
            (game) => game.directory === this.gameDirectory,
        );
        return this;
    }
    getIntervalPerTick() {
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
    getTickrate() {
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
    adjustTicks() {
        if (!this.messages?.length) {
            throw new Error('Cannot adjust ticks without parsed messages.');
        }

        let synced = false;
        let last = 0;
        for (const message of this.messages) {
            if (message instanceof SyncTick) {
                synced = true;
            }

            if (!synced) {
                message.tick = 0;
            } else if (message.tick! < 0) {
                message.tick = last;
            }
            last = message.tick!;
        }

        return this;
    }
    adjustRange(endTick = 0, startTick = 0) {
        if (!this.messages?.length) {
            throw new Error('Cannot adjust range without parsed messages.');
        }

        if (endTick < 1) {
            const packets = this.findMessages(Packet);
            const lastPacket = packets[packets.length - 1];
            if (!lastPacket) {
                throw new Error('Cannot adjust range without parsed packets.');
            }
            endTick = lastPacket.tick!;
        }

        const delta = endTick - startTick;
        if (delta < 0) {
            throw new Error('Start tick is greater than end tick.');
        }

        const ipt = this.getIntervalPerTick();
        this.playbackTicks = delta;
        this.playbackTime = ipt * delta;

        return this;
    }
    rebaseFrom(tick: number) {
        if (!this.messages?.length) {
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
            } else if (message.tick! < 0) {
                message.tick = last;
            } else {
                message.tick! -= tick;
            }

            last = message.tick!;
        }

        return this;
    }
    getSyncedTicks(demo: SourceDemo, viewTolerance = 1, splitScreenIndex = 0) {
        if (!this.messages?.length || !demo.messages?.length) {
            throw new Error('Cannot adjust ticks without parsed messages.');
        }

        const syncedTicks = [];
        for (const message of this.messages) {
            if (message instanceof Packet) {
                const view = message.cmdInfo?.at(splitScreenIndex)?.viewOrigin;
                const result = demo.messages.find((msg) => {
                    if (!(msg instanceof Packet)) {
                        return false;
                    }
                    const match = msg.cmdInfo?.at(splitScreenIndex)?.viewOrigin;
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
                        delta: Math.abs((message.tick ?? 0) - result.tick!),
                        x: message.cmdInfo?.at(splitScreenIndex)?.viewOrigin?.x,
                        y: message.cmdInfo?.at(splitScreenIndex)?.viewOrigin?.y,
                        z: message.cmdInfo?.at(splitScreenIndex)?.viewOrigin?.z,
                    });
                }
            }
        }

        return syncedTicks;
    }
}
