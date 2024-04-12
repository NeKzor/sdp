/*
 * Copyright (c) 2024, NeKz
 *
 * SPDX-License-Identifier: MIT
 *
 * This example finds the Steam ID of the players.
 */

import { Messages, SourceDemoParser, StringTables } from '../src/mod.ts';

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
    universe = BigInt(SteamIdUniverse.Public);
    type = BigInt(SteamIdType.Individual);
    instance = BigInt(SteamIdInstance.Desktop);
    account = 0n;
    isValid = false;

    constructor(props?: { account: bigint; universe: bigint; isValid: boolean }) {
        Object.assign(this, props);
    }

    static from(steamId: string) {
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

    toSteamId64() {
        return this.isValid
            ? (this.universe << 56n) | (this.type << 52n) | (this.instance << 32n) | this.account
            : null;
    }
}

const file = Deno.args.at(0);
if (!file) {
    console.error('[-] Demo path argument not specified.');
    Deno.exit(1);
}

const buffer = Deno.readFileSync(file);
const parser = SourceDemoParser.default();

const demo = parser
    .setOptions({ stringTables: true })
    .parse(buffer);

const extractSteamData = (playerInfo?: StringTables.StringTableEntry): [string | null, string | null] => {
    if (!playerInfo) {
        return [null, null];
    }

    const guid = playerInfo.data?.guid;
    if (guid === undefined) {
        console.error(`Found undefined player info GUID`);
        return [null, null];
    }

    const steamId = SteamId.from(guid).toSteamId64();
    if (steamId === null) {
        console.error(`Found invalid SteamID: ${guid}`);
    }

    const playerName = playerInfo.data?.name;

    return [
        playerName ? decodeURIComponent(escape(playerName)) : null,
        steamId?.toString() ?? null,
    ];
};

const message = demo.findMessage(Messages.StringTable);
const isHost = demo.serverName!.startsWith('localhost');

for (const stringTable of message?.stringTables ?? []) {
    const entries = stringTable.entries ?? [];
    const playerInfos = entries.filter((entry) => entry.data instanceof StringTables.PlayerInfo);

    if (!playerInfos.length) {
        continue;
    }

    const host = playerInfos.at(isHost ? 0 : 1);
    const partner = playerInfos.at(isHost ? 1 : 0);

    const [playerName, steamId] = extractSteamData(host);
    const [partnerPlayerName, partnerSteamId] = extractSteamData(partner);

    console.log({
        playerName,
        steamId,
        steamUrl: steamId ? `https://steamcommunity.com/profiles/${steamId}` : null,
        partnerPlayerName,
        partnerSteamId,
        partnerSteamUrl: partnerSteamId ? `https://steamcommunity.com/profiles/${partnerSteamId}` : null,
    });

    break;
}
