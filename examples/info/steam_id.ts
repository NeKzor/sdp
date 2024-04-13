import { Messages, SourceDemo, SourceDemoParser } from '../../src/mod.ts';
import { PlayerInfo, StringTableEntry } from '../../src/types/mod.ts';
import { getPlayerSteamData, SteamIdResult } from '../../src/utils/steam.ts';

const file = Deno.args.at(0);
if (!file) {
    console.error('[-] Demo path argument not specified.');
    Deno.exit(1);
}

const buffer = Deno.readFileSync(file);
const parser = SourceDemoParser.default();

const buf = parser
    .prepare(buffer);

const demo = SourceDemo.default();

try {
    demo.readHeader(buf).readMessages(buf);
} catch {
}

demo.readStringTables();

const message = demo.findMessage(Messages.StringTable);
const isHost = demo.serverName.startsWith('localhost');

const printResult = (entry: StringTableEntry) => {
    const [steamData, result] = getPlayerSteamData(entry);

    switch (result) {
        case SteamIdResult.Ok: {
            console.log('[+] Found Steam profile', {
                ...steamData,
                steamUrl: steamData ? `https://steamcommunity.com/profiles/${steamData.steamId}` : null,
            });
            break;
        }
        case SteamIdResult.NoPlayerInfoGuid: {
            console.log('[-] Found missing player info guid');
            break;
        }
        case SteamIdResult.InvalidSteamId: {
            console.log('[-] Invalid Steam ID:', steamData);
            break;
        }
    }
};

for (const stringTable of message?.stringTables ?? []) {
    const entries = stringTable.entries ?? [];
    const playerInfos = entries.filter((entry) => entry.data instanceof PlayerInfo);

    if (!playerInfos.length) {
        continue;
    }

    const host = playerInfos.at(isHost ? 0 : 1);
    const partner = playerInfos.at(isHost ? 1 : 0);

    host && printResult(host);
    partner && printResult(partner);

    Deno.exit(0);
}

console.log('[-] Unable to parse player info.');
Deno.exit(1);
