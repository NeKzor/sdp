// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceDemoBuffer } from './buffer.ts';
import type { SourceDemo } from './demo.ts';
import { CmdInfo } from './types/CmdInfo.ts';
import type { SendTable, ServerClassInfo } from './types/DataTables.ts';
import { NetMessage } from './types/NetMessages.ts';
import type { StringTable as StringTableType } from './types/StringTables.ts';
import type { UserCmd as UserCmdType } from './types/UserCmd.ts';

export class Message {
    type: number;
    tick?: number;
    slot?: number;
    constructor(type: number) {
        this.type = type;
    }
    static default(type: number): Message {
        return new this(type);
    }
    getType(): number | undefined {
        return this.type;
    }
    getName(): string {
        return this.constructor.name;
    }
    getTick(): number | undefined {
        return this.tick;
    }
    getSlot(): number | undefined {
        return this.slot;
    }
    setTick(tick: number): this {
        this.tick = tick;
        return this;
    }
    setSlot(slot: number): this {
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
    restData?: SourceDemoBuffer;
    constructor(type: number) {
        super(type);
    }
    findPacket<T extends NetMessage>(
        type: (new (type: number) => T) | ((packet: NetMessage) => boolean),
    ): T | undefined {
        const byType = type instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as unknown as (packet: NetMessage) => boolean)(packet);

        return (this.packets ?? []).find(byType) as T | undefined;
    }
    findPackets<T extends NetMessage>(type: (new (type: number) => T) | ((packet: NetMessage) => boolean)): T[] {
        const byType = type instanceof NetMessage
            ? (packet: NetMessage) => packet instanceof type
            : (packet: NetMessage) => (type as unknown as (packet: NetMessage) => boolean)(packet);

        return (this.packets ?? []).filter(byType) as T[];
    }
    override read(buf: SourceDemoBuffer, demo: SourceDemo): Packet {
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
    override write(buf: SourceDemoBuffer): Packet {
        this.cmdInfo!.forEach((cmd) => cmd.write(buf));
        buf.writeInt32(this.inSequence!);
        buf.writeInt32(this.outSequence!);
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
    *[Symbol.iterator](): Generator<NetMessage> {
        for (const packet of this.packets ?? []) {
            yield packet;
        }
    }
}
export class SignOn extends Packet {}
export class SyncTick extends Message {
    override read(): SyncTick {
        return this;
    }
    override write(): SyncTick {
        return this;
    }
}
export class ConsoleCmd extends Message {
    command?: string;
    override read(buf: SourceDemoBuffer): ConsoleCmd {
        this.command = buf.readASCIIString(buf.readInt32());
        return this;
    }
    override write(buf: SourceDemoBuffer): ConsoleCmd {
        buf.writeInt32(this.command!.length + 1);
        buf.writeASCIIString(this.command!, this.command!.length + 1);
        return this;
    }
}
export class UserCmd extends Message {
    cmd?: number;
    data?: SourceDemoBuffer;
    userCmd?: UserCmdType;
    restData?: SourceDemoBuffer;
    override read(buf: SourceDemoBuffer): UserCmd {
        this.cmd = buf.readInt32();
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    override write(buf: SourceDemoBuffer): UserCmd {
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
        restData?: SourceDemoBuffer;
    };
    override read(buf: SourceDemoBuffer): DataTable {
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    override write(buf: SourceDemoBuffer): DataTable {
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
}
export class Stop extends Message {
    restData?: SourceDemoBuffer;
    override read(buf: SourceDemoBuffer): Stop {
        this.restData = buf.readBitStream(buf.bitsLeft);
        return this;
    }
    override write(buf: SourceDemoBuffer): Stop {
        buf.writeBitStream(this.restData!, this.restData!.bitsLeft);
        return this;
    }
}
export class CustomData extends Message {
    unk?: number;
    data?: SourceDemoBuffer;
    override read(buf: SourceDemoBuffer): CustomData {
        this.unk = buf.readInt32();
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    override write(buf: SourceDemoBuffer): CustomData {
        buf.writeInt32(this.unk!);
        buf.writeInt32(this.data!.length / 8);
        buf.writeBitStream(this.data!, this.data!.length);
        return this;
    }
}
export class StringTable extends Message {
    data?: SourceDemoBuffer;
    stringTables?: StringTableType[];
    restData?: SourceDemoBuffer;
    override read(buf: SourceDemoBuffer): StringTable {
        this.data = buf.readBitStream(buf.readInt32() * 8);
        return this;
    }
    override write(buf: SourceDemoBuffer): StringTable {
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
