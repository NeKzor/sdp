/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from './buffer.ts';
import { SourceDemo } from './demo.ts';
import { CmdInfo } from './types/CmdInfo.ts';
import { SendTable, ServerClassInfo } from './types/DataTables.ts';
import { NetMessage } from './types/NetMessages.ts';
import { StringTable as StringTableType } from './types/StringTables.ts';
import { UserCmd as UserCmdType } from './types/UserCmd.ts';

export class Message {
    type: number;
    tick?: number;
    slot?: number;
    constructor(type: number) {
        this.type = type;
    }
    static default(type: number) {
        return new this(type);
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.constructor.name;
    }
    getTick() {
        return this.tick;
    }
    getSlot() {
        return this.slot;
    }
    setTick(tick: number) {
        this.tick = tick;
        return this;
    }
    setSlot(slot: number) {
        this.slot = slot;
        return this;
    }
    read(_buf: SourceDemoBuffer, _demo: SourceDemo): Message {
        throw new Error(`read() for ${this.constructor.name} not implemented!`);
    }
    write(_buf: SourceDemoBuffer, _demo: SourceDemo): Message {
        throw new Error(`write() for ${this.constructor.name} not implemented!`);
    }
}

export class Packet extends Message {
    packets?: NetMessage[];
    cmdInfo?: CmdInfo[];
    inSequence?: number;
    outSequence?: number;
    data?: SourceDemoBuffer;
    constructor(type: number) {
        super(type);
    }
    findPacket<T extends NetMessage>(type: typeof NetMessage | ((packet: NetMessage) => boolean)) {
        const byType = type instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as (packet: NetMessage) => boolean)(packet);

        return (this.packets ?? []).find(byType) as T | undefined;
    }
    findPackets<T extends NetMessage>(type: typeof NetMessage | ((packet: NetMessage) => boolean)) {
        const byType = type instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as (packet: NetMessage) => boolean)(packet);

        return (this.packets ?? []).filter(byType) as T[];
    }
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        let mssc = demo.demoProtocol === 4 ? 2 : 1;

        this.cmdInfo = [];
        while (mssc--) {
            const cmd = new CmdInfo();
            cmd.read(buf);
            this.cmdInfo.push(cmd);
        }

        this.inSequence = buf.readInt32();
        this.outSequence = buf.readInt32();
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    write(buf: SourceDemoBuffer) {
        this.cmdInfo!.forEach((cmd) => cmd.write(buf));
        buf.writeInt32(this.inSequence!);
        buf.writeInt32(this.outSequence!);
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
    *[Symbol.iterator]() {
        for (const packet of this.packets ?? []) {
            yield packet;
        }
    }
}
export class SignOn extends Packet {}
export class SyncTick extends Message {
    read() {
        return this;
    }
    write() {
        return this;
    }
}
export class ConsoleCmd extends Message {
    command?: string;
    read(buf: SourceDemoBuffer) {
        this.command = buf.readASCIIString(buf.readInt32());
        return this;
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.command!.length + 1);
        buf.writeASCIIString(this.command!, this.command!.length + 1);
        return this;
    }
}
export class UserCmd extends Message {
    cmd?: number;
    data?: SourceDemoBuffer;
    userCmd?: UserCmdType;
    read(buf: SourceDemoBuffer) {
        this.cmd = buf.readInt32();
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.cmd!);
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
}
export class DataTable extends Message {
    data?: SourceDemoBuffer;
    dataTable?: {
        tables: SendTable[];
        serverClasses: ServerClassInfo[];
    };
    read(buf: SourceDemoBuffer) {
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
}
export class Stop extends Message {
    restData?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.restData = buf.readBitStream(buf.bitsLeft);
        return this;
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBitStream(this.restData!);
        return this;
    }
}
export class CustomData extends Message {
    unk?: number;
    data?: SourceDemoBuffer;
    read(buf: SourceDemoBuffer) {
        this.unk = buf.readInt32();
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.unk!);
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
}
export class StringTable extends Message {
    data?: SourceDemoBuffer;
    stringTables?: StringTableType[];
    read(buf: SourceDemoBuffer) {
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    write(buf: SourceDemoBuffer) {
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
}

export const DemoMessages = {
    NewEngine: [
        undefined,
        SignOn, // 1
        Packet, // 2
        SyncTick, // 3
        ConsoleCmd, // 4
        UserCmd, // 5
        DataTable, // 6
        Stop, // 7
        CustomData, // 8
        StringTable, // 9
    ],
    OldEngine: [
        undefined,
        SignOn, // 1
        Packet, // 2
        SyncTick, // 3
        ConsoleCmd, // 4
        UserCmd, // 5
        DataTable, // 6
        Stop, // 7
        StringTable, // 8
    ],
    Message,
    SignOn,
    Packet,
    SyncTick,
    ConsoleCmd,
    UserCmd,
    DataTable,
    Stop,
    CustomData,
    StringTable,
};
