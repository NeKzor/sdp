/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from '../buffer.ts';
import { SourceDemo } from '../demo.ts';

export class StringTable {
    name?: string;
    entries?: StringTableEntry[];
    classes?: StringTableClass[];
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        this.name = buf.readASCIIString();
        this.entries = [];
        this.classes = [];

        const EntryType = StringTableEntryTypes[this.name];

        let entries = buf.readInt16();
        while (entries--) {
            const entryName = buf.readASCIIString();
            const entry = new StringTableEntry(entryName);

            if (buf.readBoolean()) {
                entry.read(buf, EntryType, demo);
            }

            this.entries.push(entry);
        }

        if (buf.readBoolean()) {
            let entries = buf.readInt16();
            while (entries--) {
                const entryName = buf.readASCIIString();
                const entry = new StringTableClass(entryName);

                if (buf.readBoolean()) {
                    entry.read(buf);
                }

                this.classes.push(entry);
            }
        }
    }
}

export class StringTableEntry {
    name: string;
    data?: StringTableEntries | Uint8Array;
    constructor(name: string) {
        this.name = name;
    }
    read(buf: SourceDemoBuffer, type: StringTableEntryType | undefined, demo: SourceDemo) {
        const length = buf.readInt16();
        if (type) {
            this.data = new type();
            this.data.read(buf.readBitStream(length * 8), demo);
        } else {
            this.data = buf.readArrayBuffer(length);
        }
    }
}

export class StringTableClass {
    name: string;
    data?: string;
    constructor(name: string) {
        this.name = name;
    }
    read(buf: SourceDemoBuffer) {
        const length = buf.readInt16();
        this.data = buf.readASCIIString(length);
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
    read(buf: SourceDemoBuffer, demo: SourceDemo) {
        if (demo.isNewEngine()) {
            this.version = buf.readInt32();
            this.xuid = buf.readInt32();
        }
        this.name = buf.readASCIIString(32);
        this.userId = buf.readInt32();
        this.guid = buf.readASCIIString(32);
        this.friendsId = buf.readInt32();
        this.friendsName = buf.readASCIIString(32);
        this.fakePlayer = buf.readBoolean();
        this.isHltv = buf.readBoolean();
        this.customFiles = [
            buf.readInt32(),
            buf.readInt32(),
            buf.readInt32(),
            buf.readInt32(),
        ];
        this.filesDownloaded = buf.readInt32();
    }
}

export type StringTableEntries = PlayerInfo;
export type StringTableEntryType = typeof PlayerInfo;

export const StringTableEntryTypes: Record<string, StringTableEntryType> = {
    userinfo: PlayerInfo,
};
