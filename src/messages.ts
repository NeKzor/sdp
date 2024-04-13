// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { SourceBuffer } from './buffer.ts';
import { CmdInfo } from './types/CmdInfo.ts';
import { SendTable, ServerClassInfo } from './types/DataTables.ts';
import { NetMessage } from './types/NetMessages.ts';
import { StringTable as StringTableType } from './types/StringTables.ts';
import { UserCmd as UserCmdType } from './types/UserCmd.ts';

export interface IMessage {
    type: number;
    tick: number;
    slot: number;
}

export interface IPacket extends IMessage {
    cmdInfo: CmdInfo[];
    inSequence: number;
    outSequence: number;
    data: SourceBuffer;
    packets: NetMessage[];
}

export class Packet implements IPacket {
    static TYPE = 0x02;

    type = Packet.TYPE;
    tick: number;
    slot: number;
    cmdInfo: CmdInfo[];
    inSequence: number;
    outSequence: number;
    data: SourceBuffer;
    packets: NetMessage[] = [];

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();

        this.cmdInfo = [];
        for (let mssc = 2; mssc > 0; --mssc) {
            const cmd = new CmdInfo();
            cmd.read(buf);
            this.cmdInfo.push(cmd);
        }

        this.inSequence = buf.readInt32LE();
        this.outSequence = buf.readInt32LE();
        this.data = buf.readBuffer(buf.readInt32LE());
    }

    write(buf: SourceBuffer) {
        Packet.serialize(buf, this);
    }

    static create(packet: IPacket): Packet {
        return Object.assign(Object.create(this.prototype), packet);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, packet: IPacket) {
        buf.writeInt32LE(packet.tick);
        buf.writeUint8(packet.slot);
        packet.cmdInfo.forEach((cmd) => cmd.write(buf));
        buf.writeInt32LE(packet.inSequence);
        buf.writeInt32LE(packet.outSequence);
        buf.writeInt32LE(packet.data.buffer.byteLength);
        buf.writeBuffer(packet.data);
    }
}
// deno-lint-ignore no-empty-interface
export interface ISignOn extends IPacket {}
export class SignOn extends Packet {
    static TYPE = 0x01;

    type = SignOn.TYPE;

    static create(signOn: ISignOn): SignOn {
        return Object.assign(Object.create(this.prototype), signOn);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, signOn: ISignOn) {
        Packet.serialize(buf, signOn);
    }
}
// deno-lint-ignore no-empty-interface
export interface ISyncTick extends IMessage {}
export class SyncTick implements ISyncTick {
    static TYPE = 0x03;

    type = SyncTick.TYPE;
    tick: number;
    slot: number;

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();
    }

    write(buf: SourceBuffer) {
        SyncTick.serialize(buf, this);
    }

    static create(syncTick: ISyncTick): SyncTick {
        return Object.assign(Object.create(this.prototype), syncTick);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(_buf: SourceBuffer, _syncTick: ISyncTick) {
    }
}
export interface IConsoleCmd extends IMessage {
    command: string;
}
export class ConsoleCmd implements IConsoleCmd {
    static TYPE = 0x04;

    type = ConsoleCmd.TYPE;
    command: string;
    tick: number;
    slot: number;

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();
        this.command = buf.readStringBuffer(buf.readInt32LE());
    }

    write(buf: SourceBuffer) {
        ConsoleCmd.serialize(buf, this);
    }

    static create(cmd: IConsoleCmd): ConsoleCmd {
        return Object.assign(Object.create(this.prototype), cmd);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, cmd: IConsoleCmd) {
        buf.writeInt32LE(cmd.tick);
        buf.writeUint8(cmd.slot);
        buf.writeInt32LE(cmd.command.length + 1);
        buf.writeCString(cmd.command);
    }
}
export interface IUserCmd extends IMessage {
    cmd: number;
    data: SourceBuffer;
    userCmd?: UserCmdType;
}
export class UserCmd implements IUserCmd {
    static TYPE = 0x05;

    type = UserCmd.TYPE;
    cmd: number;
    data: SourceBuffer;
    userCmd?: UserCmdType | undefined;
    tick: number;
    slot: number;

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();
        this.cmd = buf.readInt32LE();
        this.data = buf.readBuffer(buf.readInt32LE());
    }

    write(buf: SourceBuffer) {
        UserCmd.serialize(buf, this);
    }

    static create(userCmd: IUserCmd): UserCmd {
        return Object.assign(Object.create(this.prototype), userCmd);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, userCmd: IUserCmd) {
        buf.writeInt32LE(userCmd.tick);
        buf.writeUint8(userCmd.slot);
        buf.writeInt32LE(userCmd.cmd);
        buf.writeInt32LE(userCmd.data.buffer.byteLength);
        buf.writeBuffer(userCmd.data);
    }
}
export interface IDataTable extends IMessage {
    data: SourceBuffer;
    dataTable?: {
        tables: SendTable[];
        serverClasses: ServerClassInfo[];
    };
}
export class DataTable implements IDataTable {
    static TYPE = 0x06;

    type = DataTable.TYPE;
    tick: number;
    slot: number;
    data: SourceBuffer;
    dataTable?: { tables: SendTable[]; serverClasses: ServerClassInfo[] } | undefined;

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();
        this.data = buf.readBuffer(buf.readInt32LE());
    }

    static create(dataTable: IDataTable): DataTable {
        return Object.assign(Object.create(this.prototype), dataTable);
    }
    write(buf: SourceBuffer) {
        DataTable.serialize(buf, this);
    }

    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, dataTable: IDataTable) {
        buf.writeInt32LE(dataTable.tick);
        buf.writeUint8(dataTable.slot);
        buf.writeInt32LE(dataTable.data.buffer.byteLength);
        buf.writeBuffer(dataTable.data);
    }
}
export interface IStop extends IMessage {
    restData: SourceBuffer;
}
export class Stop implements IStop {
    static TYPE = 0x07;

    type = Stop.TYPE;
    tick: number;
    slot: number;
    restData: SourceBuffer;

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();
        this.restData = buf.readBuffer(buf.bitsLeft / 8);
    }

    write(buf: SourceBuffer) {
        Stop.serialize(buf, this);
    }

    static create(stop: IStop): Stop {
        return Object.assign(Object.create(this.prototype), stop);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, stop: IStop) {
        buf.writeInt32LE(stop.tick);
        buf.writeUint8(stop.slot);
        buf.writeBuffer(stop.restData);
    }
}
export interface ICustomData extends IMessage {
    callbackIndex: number;
    data: SourceBuffer;
}
export class CustomData implements ICustomData {
    static TYPE = 0x08;

    type = CustomData.TYPE;
    tick: number;
    slot: number;
    callbackIndex: number;
    data: SourceBuffer;

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();
        this.callbackIndex = buf.readInt32LE();
        this.data = buf.readBuffer(buf.readInt32LE());
    }

    write(buf: SourceBuffer): void {
        CustomData.serialize(buf, this);
    }

    static create(customData: ICustomData): CustomData {
        return Object.assign(Object.create(this.prototype), customData);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, customData: ICustomData) {
        buf.writeInt32LE(customData.tick);
        buf.writeUint8(customData.slot);
        buf.writeInt32LE(customData.callbackIndex);
        buf.writeInt32LE(customData.data.buffer.byteLength);
        buf.writeBuffer(customData.data);
    }
}
export interface IStringTable extends IMessage {
    data: SourceBuffer;
    stringTables?: StringTableType[];
}
export class StringTable implements IStringTable {
    static TYPE = 0x09;

    type = StringTable.TYPE;
    tick: number;
    slot: number;
    data: SourceBuffer;
    stringTables?: StringTableType[] | undefined;

    constructor(buf: SourceBuffer) {
        this.tick = buf.readInt32LE();
        this.slot = buf.readUint8();
        this.data = buf.readBuffer(buf.readInt32LE());
    }

    write(buf: SourceBuffer) {
        StringTable.serialize(buf, this);
    }

    static create(stringTable: IStringTable): StringTable {
        return Object.assign(Object.create(this.prototype), stringTable);
    }
    static deserialize(buf: SourceBuffer) {
        return new this(buf);
    }
    static serialize(buf: SourceBuffer, stringTable: IStringTable) {
        buf.writeInt32LE(stringTable.tick);
        buf.writeUint8(stringTable.slot);
        buf.writeInt32LE(stringTable.data.buffer.byteLength);
        buf.writeBuffer(stringTable.data);
    }
}

export const DemoMessages = {
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

export const DemoMessagesTypes = [
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
] as const;

export type Message = SignOn | Packet | SyncTick | ConsoleCmd | UserCmd | DataTable | Stop | CustomData | StringTable;
