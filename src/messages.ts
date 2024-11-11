// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { SourceBuffer } from './buffer.ts';
import { CmdInfo } from './types/CmdInfo.ts';
import type { SendTable, ServerClassInfo } from './types/DataTables.ts';
import type { NetMessage } from './types/NetMessages.ts';
import type { StringTable as StringTableType } from './types/StringTables.ts';
import type { UserCmd as UserCmdType } from './types/UserCmd.ts';

export interface IMessage {
    type: number;
    tick: number;
    slot: number;

    write(buf: SourceBuffer): void;
}

export type Message =
    | typeof SignOn
    | typeof Packet
    | typeof SyncTick
    | typeof ConsoleCmd
    | typeof UserCmd
    | typeof DataTable
    | typeof Stop
    | typeof CustomData
    | typeof StringTable;

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
    tick!: number;
    slot!: number;
    cmdInfo!: CmdInfo[];
    inSequence!: number;
    outSequence!: number;
    data!: SourceBuffer;
    packets: NetMessage[] = [];

    protected constructor() {
    }

    write(buf: SourceBuffer): void {
        Packet.serialize(buf, this);
    }

    static create(packet: Omit<IPacket, 'type' | 'write'>): Packet {
        return Object.assign(new this(), packet);
    }
    static deserialize(buf: SourceBuffer): Packet {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();

        msg.cmdInfo = [];
        for (let mssc = 2; mssc > 0; --mssc) {
            const cmd = new CmdInfo();
            cmd.read(buf);
            msg.cmdInfo.push(cmd);
        }

        msg.inSequence = buf.readInt32LE();
        msg.outSequence = buf.readInt32LE();
        msg.data = buf.readBytes(buf.readInt32LE());
        return msg;
    }
    static serialize(buf: SourceBuffer, packet: IPacket): void {
        buf.writeInt32LE(packet.tick);
        buf.writeUint8(packet.slot);
        packet.cmdInfo.forEach((cmd) => cmd.write(buf));
        buf.writeInt32LE(packet.inSequence);
        buf.writeInt32LE(packet.outSequence);
        buf.writeInt32LE(packet.data.buffer.byteLength);
        buf.writeBuffer(packet.data);
    }

    static matches(msg: IMessage): msg is Packet {
        return msg.type === Packet.TYPE;
    }
    and(predicate: (msg: Packet) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
    inner(
        predicate: (frame: NetMessage[]) => boolean | undefined,
    ): boolean | undefined {
        return this.packets && predicate(this.packets);
    }
    innerUnsafe(
        predicate: (frame: NetMessage[]) => boolean | undefined,
    ): boolean | undefined {
        return predicate(this.packets!);
    }
}
export interface ISignOn extends IPacket {}
export class SignOn extends Packet {
    static override TYPE = 0x01;

    override type = SignOn.TYPE;

    static override create(signOn: ISignOn): SignOn {
        return Object.assign(new this(), signOn);
    }
    static override serialize(buf: SourceBuffer, signOn: ISignOn): void {
        Packet.serialize(buf, signOn);
    }
    static override matches(msg: IMessage): msg is SignOn {
        return msg.type === SignOn.TYPE;
    }
    override and(predicate: (msg: SignOn) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
}
export interface ISyncTick extends IMessage {}
export class SyncTick implements ISyncTick {
    static TYPE = 0x03;

    type = SyncTick.TYPE;
    tick!: number;
    slot!: number;

    protected constructor() {
    }

    write(buf: SourceBuffer): void {
        SyncTick.serialize(buf, this);
    }

    static create(syncTick: Omit<ISyncTick, 'type' | 'write'>): SyncTick {
        return Object.assign(new this(), syncTick);
    }
    static deserialize(buf: SourceBuffer): SyncTick {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();
        return msg;
    }
    static serialize(buf: SourceBuffer, syncTick: ISyncTick) {
        buf.writeInt32LE(syncTick.tick);
        buf.writeUint8(syncTick.slot);
    }

    static matches(msg: IMessage): msg is SyncTick {
        return msg.type === SyncTick.TYPE;
    }
    and(predicate: (msg: SyncTick) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
}
export interface IConsoleCmd extends IMessage {
    command: string;
}
export class ConsoleCmd implements IConsoleCmd {
    static TYPE = 0x04;

    type = ConsoleCmd.TYPE;
    command!: string;
    tick!: number;
    slot!: number;

    protected constructor() {
    }

    write(buf: SourceBuffer): void {
        ConsoleCmd.serialize(buf, this);
    }

    static create(cmd: Omit<IConsoleCmd, 'type' | 'write'>): ConsoleCmd {
        return Object.assign(new this(), cmd);
    }
    static deserialize(buf: SourceBuffer): ConsoleCmd {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();
        msg.command = buf.readStringBuffer(buf.readInt32LE());
        return msg;
    }
    static serialize(buf: SourceBuffer, cmd: IConsoleCmd): void {
        buf.writeInt32LE(cmd.tick);
        buf.writeUint8(cmd.slot);
        buf.writeInt32LE(cmd.command.length + 1);
        buf.writeCString(cmd.command);
    }

    static matches(msg: IMessage): msg is ConsoleCmd {
        return msg.type === ConsoleCmd.TYPE;
    }
    and(predicate: (msg: ConsoleCmd) => boolean | undefined): boolean | undefined {
        return predicate(this);
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
    cmd!: number;
    data!: SourceBuffer;
    userCmd?: UserCmdType | undefined;
    tick!: number;
    slot!: number;

    protected constructor() {
    }

    write(buf: SourceBuffer): void {
        UserCmd.serialize(buf, this);
    }

    static create(userCmd: Omit<IUserCmd, 'type' | 'write'>): UserCmd {
        return Object.assign(new this(), userCmd);
    }
    static deserialize(buf: SourceBuffer): UserCmd {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();
        msg.cmd = buf.readInt32LE();
        msg.data = buf.readBytes(buf.readInt32LE());
        return msg;
    }
    static serialize(buf: SourceBuffer, userCmd: IUserCmd): void {
        buf.writeInt32LE(userCmd.tick);
        buf.writeUint8(userCmd.slot);
        buf.writeInt32LE(userCmd.cmd);
        buf.writeInt32LE(userCmd.data.buffer.byteLength);
        buf.writeBuffer(userCmd.data);
    }

    static matches(msg: IMessage): msg is UserCmd {
        return msg.type === UserCmd.TYPE;
    }
    and(predicate: (msg: UserCmd) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
    inner(
        predicate: (frame: UserCmdType) => boolean | undefined,
    ): boolean | undefined {
        return this.userCmd && predicate(this.userCmd);
    }
    innerUnsafe(
        predicate: (frame: UserCmdType) => boolean | undefined,
    ): boolean | undefined {
        return predicate(this.userCmd!);
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
    tick!: number;
    slot!: number;
    data!: SourceBuffer;
    dataTable?: { tables: SendTable[]; serverClasses: ServerClassInfo[] } | undefined;

    protected constructor() {
    }

    static create(dataTable: Omit<IDataTable, 'type' | 'write'>): DataTable {
        return Object.assign(new this(), dataTable);
    }
    write(buf: SourceBuffer): void {
        DataTable.serialize(buf, this);
    }

    static deserialize(buf: SourceBuffer): DataTable {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();
        msg.data = buf.readBytes(buf.readInt32LE());
        return msg;
    }
    static serialize(buf: SourceBuffer, dataTable: IDataTable): void {
        buf.writeInt32LE(dataTable.tick);
        buf.writeUint8(dataTable.slot);
        buf.writeInt32LE(dataTable.data.buffer.byteLength);
        buf.writeBuffer(dataTable.data);
    }

    static matches(msg: IMessage): msg is DataTable {
        return msg.type === DataTable.TYPE;
    }
    and(predicate: (msg: DataTable) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
    inner(
        predicate: (frame: { tables: SendTable[]; serverClasses: ServerClassInfo[] }) => boolean | undefined,
    ): boolean | undefined {
        return this.dataTable && predicate(this.dataTable);
    }
    innerUnsafe(
        predicate: (frame: { tables: SendTable[]; serverClasses: ServerClassInfo[] }) => boolean | undefined,
    ): boolean | undefined {
        return predicate(this.dataTable!);
    }
}
export interface IStop extends IMessage {
    restData: SourceBuffer;
}
export class Stop implements IStop {
    static TYPE = 0x07;

    type = Stop.TYPE;
    tick!: number;
    slot!: number;
    restData!: SourceBuffer;

    protected constructor() {
    }

    write(buf: SourceBuffer): void {
        Stop.serialize(buf, this);
    }

    static create(stop: Omit<IStop, 'type' | 'write'>): Stop {
        return Object.assign(new this(), stop);
    }
    static deserialize(buf: SourceBuffer): Stop {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();
        msg.restData = buf.readBits(buf.bitsLeft);
        return msg;
    }
    static serialize(buf: SourceBuffer, stop: IStop): void {
        buf.writeInt32LE(stop.tick);
        buf.writeUint8(stop.slot);
        buf.writeBuffer(stop.restData);
    }

    static matches(msg: IMessage): msg is Stop {
        return msg.type === Stop.TYPE;
    }
    and(predicate: (msg: Stop) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
}
export interface ICustomData extends IMessage {
    callbackIndex: number;
    data: SourceBuffer;
}
export class CustomData implements ICustomData {
    static TYPE = 0x08;

    type = CustomData.TYPE;
    tick!: number;
    slot!: number;
    callbackIndex!: number;
    data!: SourceBuffer;

    protected constructor() {
    }

    write(buf: SourceBuffer): void {
        CustomData.serialize(buf, this);
    }

    static create(customData: Omit<ICustomData, 'type' | 'write'>): CustomData {
        return Object.assign(new this(), customData);
    }
    static deserialize(buf: SourceBuffer): CustomData {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();
        msg.callbackIndex = buf.readInt32LE();
        msg.data = buf.readBytes(buf.readInt32LE());
        return msg;
    }
    static serialize(buf: SourceBuffer, customData: ICustomData): void {
        buf.writeInt32LE(customData.tick);
        buf.writeUint8(customData.slot);
        buf.writeInt32LE(customData.callbackIndex);
        buf.writeInt32LE(customData.data.buffer.byteLength);
        buf.writeBuffer(customData.data);
    }

    static matches(msg: IMessage): msg is CustomData {
        return msg.type === CustomData.TYPE;
    }
    and(predicate: (msg: CustomData) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
}
export interface IStringTable extends IMessage {
    data: SourceBuffer;
    stringTables?: StringTableType[];
}
export class StringTable implements IStringTable {
    static TYPE = 0x09;

    type = StringTable.TYPE;
    tick!: number;
    slot!: number;
    data!: SourceBuffer;
    stringTables?: StringTableType[] | undefined;

    protected constructor() {
    }

    write(buf: SourceBuffer): void {
        StringTable.serialize(buf, this);
    }

    static create(stringTable: Omit<IStringTable, 'type' | 'write'>): StringTable {
        return Object.assign(new this(), stringTable);
    }
    static deserialize(buf: SourceBuffer): StringTable {
        const msg = new this();
        msg.tick = buf.readInt32LE();
        msg.slot = buf.readUint8();
        msg.data = buf.readBytes(buf.readInt32LE());
        return msg;
    }
    static serialize(buf: SourceBuffer, stringTable: IStringTable): void {
        buf.writeInt32LE(stringTable.tick);
        buf.writeUint8(stringTable.slot);
        buf.writeInt32LE(stringTable.data.buffer.byteLength);
        buf.writeBuffer(stringTable.data);
    }

    static matches(msg: IMessage): msg is StringTable {
        return msg.type === StringTable.TYPE;
    }
    and(predicate: (msg: StringTable) => boolean | undefined): boolean | undefined {
        return predicate(this);
    }
    inner(
        predicate: (frame: StringTableType[]) => boolean | undefined,
    ): boolean | undefined {
        return this.stringTables && predicate(this.stringTables);
    }
    innerUnsafe(
        predicate: (frame: StringTableType[]) => boolean | undefined,
    ): boolean | undefined {
        return predicate(this.stringTables!);
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
