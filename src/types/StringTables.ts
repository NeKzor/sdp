// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { SourceBuffer } from '../buffer.ts';

export class StringTable {
    name?: string;
    entries?: StringTableEntry[];
    classes?: StringTableClass[];
    read(buf: SourceBuffer) {
        this.name = buf.readCString();
        this.entries = [];
        this.classes = [];

        const EntryType = StringTableEntryTypes[this.name];

        let entries = buf.readInt16LE();
        while (entries--) {
            const entryName = buf.readCString();
            const entry = new StringTableEntry(entryName);

            if (buf.readBoolean()) {
                entry.read(buf, EntryType);
            }

            this.entries.push(entry);
        }

        if (buf.readBoolean()) {
            let entries = buf.readInt16LE();
            while (entries--) {
                const entryName = buf.readCString();
                const entry = new StringTableClass(entryName);

                if (buf.readBoolean()) {
                    entry.read(buf);
                }

                this.classes.push(entry);
            }
        }
    }
    write(buf: SourceBuffer) {
        buf.writeCString(this.name!);

        buf.writeInt16LE(this.entries!.length!);
        this.entries!.forEach((entry) => {
            buf.writeCString(entry.name!);

            buf.writeBoolean(entry.dataBuffer !== undefined);
            if (entry.dataBuffer !== undefined) {
                entry.write(buf);
            }
        });

        buf.writeBoolean(this.classes!.length !== 0);
        if (this.classes!.length !== 0) {
            buf.writeInt16LE(this.classes!.length!);
            this.classes!.forEach((entry) => {
                buf.writeCString(entry.name!);

                buf.writeBoolean(entry.data !== undefined);
                if (entry.data !== undefined) {
                    entry.write(buf);
                }
            });
        }
    }
}

export class StringTableEntry {
    name: string;
    length?: number;
    dataBuffer?: SourceBuffer;
    data?: StringTableEntries;
    constructor(name: string) {
        this.name = name;
    }
    read(buf: SourceBuffer, type: StringTableEntryType | undefined) {
        this.length = buf.readInt16LE();
        this.dataBuffer = buf.readBuffer(this.length);

        if (type) {
            this.data = new type();
            this.data.read(this.dataBuffer);
        }
    }
    write(buf: SourceBuffer) {
        buf.writeInt16LE(this.length!);

        if (this.data) {
            const data = SourceBuffer.allocate(this.length!);
            this.data!.write(data);
            this.dataBuffer = data.reset();
        }

        buf.writeBuffer(this.dataBuffer!);
    }
}

export class StringTableClass {
    name: string;
    data?: string;
    constructor(name: string) {
        this.name = name;
    }
    read(buf: SourceBuffer) {
        const length = buf.readInt16LE();
        this.data = buf.readStringBuffer(length);
    }
    write(buf: SourceBuffer) {
        buf.writeInt16LE(this.data!.length!);
        buf.writeCString(this.data!);
    }
}

// player_info_s
export class PlayerInfo {
    version?: number;
    xuid?: number;
    name?: string;
    userId?: number;
    guid?: string;
    friendsId?: number;
    friendsName?: string;
    fakePlayer?: boolean;
    isHltv?: boolean;
    customFiles?: [number, number, number, number];
    filesDownloaded?: number;
    read(buf: SourceBuffer) {
        this.version = buf.readInt32LE();
        this.xuid = buf.readInt32LE();
        this.name = buf.readStringBuffer(32);
        this.userId = buf.readInt32LE();
        this.guid = buf.readStringBuffer(32);
        this.friendsId = buf.readInt32LE();
        this.friendsName = buf.readStringBuffer(32);
        this.fakePlayer = buf.readBoolean();
        this.isHltv = buf.readBoolean();
        this.customFiles = [
            buf.readInt32LE(),
            buf.readInt32LE(),
            buf.readInt32LE(),
            buf.readInt32LE(),
        ];
        this.filesDownloaded = buf.readInt32LE();
    }
    write(buf: SourceBuffer) {
        buf.writeInt32LE(this.version!);
        buf.writeInt32LE(this.xuid!);
        buf.writeStringBuffer(this.name!, 32);
        buf.writeInt32LE(this.userId!);
        buf.writeStringBuffer(this.guid!, 32);
        buf.writeInt32LE(this.friendsId!);
        buf.writeStringBuffer(this.friendsName!, 32);
        buf.writeBoolean(this.fakePlayer!);
        buf.writeBoolean(this.isHltv!);
        buf.writeInt32LE(this.customFiles!.at(0)!),
            buf.writeInt32LE(this.customFiles!.at(1)!),
            buf.writeInt32LE(this.customFiles!.at(2)!),
            buf.writeInt32LE(this.customFiles!.at(3)!),
            buf.writeInt32LE(this.filesDownloaded!);
    }
}

export type StringTableEntries = PlayerInfo;
export type StringTableEntryType = typeof PlayerInfo;

export const StringTableEntryTypes: Record<string, StringTableEntryType> = {
    userinfo: PlayerInfo,
};
