// Copyright (c) 2024, NeKz
// SPDX-License-Identifier: MIT

import type { StringTableEntry } from '../types/StringTables.ts';

export enum SteamIdUniverse {
    Individual = 0,
    Public = 1,
    Beta = 2,
    Internal = 3,
    Dev = 4,
    Rc = 5,
}

export enum SteamIdType {
    Invalid = 0,
    Individual = 1,
    Multiseat = 2,
    GameServer = 3,
    AnonGameServer = 4,
    Pending = 5,
    ContentServer = 6,
    Clan = 7,
    Chat = 8,
    P2PSuperSeeder = 9,
    AnonUser = 10,
}

export enum SteamIdInstance {
    All = 0,
    Desktop = 1,
    Console = 2,
    Web = 4,
}

export class SteamId {
    universe: bigint = BigInt(SteamIdUniverse.Public);
    type: bigint = BigInt(SteamIdType.Individual);
    instance: bigint = BigInt(SteamIdInstance.Desktop);
    account = 0n;
    isValid = false;

    constructor(props?: { account: bigint; universe: bigint; isValid: boolean }) {
        Object.assign(this, props);
    }

    static from(steamId: string): SteamId {
        const groups = steamId.match(/^STEAM\_([0-9]+)\:([0-9]+)\:([0-9]+)$/);
        if (groups) {
            const [x, y, z] = groups.slice(1).map((value) => BigInt(value));

            return new this({
                account: (z! << 1n) | y!,
                universe: x!,
                isValid: true,
            });
        }

        return new this();
    }

    toSteamId64(): bigint | null {
        return this.isValid
            ? (this.universe << 56n) | (this.type << 52n) | (this.instance << 32n) | this.account
            : null;
    }
}

export enum SteamIdResult {
    Ok,
    NoPlayerInfoGuid,
    InvalidSteamId,
}

export type PlayerSteamDataResult =
    | [null, SteamIdResult.NoPlayerInfoGuid]
    | [guid: string, SteamIdResult.InvalidSteamId]
    | [{ playerName: string | null; steamId: string | null }, SteamIdResult.Ok];

export const getPlayerSteamData = (playerInfo: StringTableEntry): PlayerSteamDataResult => {
    const guid = playerInfo.data?.guid;
    if (guid === undefined) {
        return [null, SteamIdResult.NoPlayerInfoGuid];
    }

    const steamId = SteamId.from(guid).toSteamId64();
    if (steamId === null) {
        return [guid, SteamIdResult.InvalidSteamId];
    }

    const playerName = playerInfo.data?.name;

    return [
        {
            playerName: playerName ? decodeURIComponent(escape(playerName)) : null,
            steamId: steamId?.toString() ?? null,
        },
        SteamIdResult.Ok,
    ];
};
