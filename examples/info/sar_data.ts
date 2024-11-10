import { SourceDemoParser } from '../../src/mod.ts';
import { readSarData, SarDataType } from '../../src/utils/mod.ts';

const file = Deno.args.at(0);
if (!file) {
    console.error('[-] Demo path argument not specified.');
    Deno.exit(1);
}

const demo = SourceDemoParser.default()
    .parse(Deno.readFileSync(file));

const { messages } = readSarData(demo);

const message = messages.find(({ type }) => type === SarDataType.SpeedrunTime);
if (!message) {
    console.log('[-] No speedrun time found.');
    Deno.exit(1);
}

console.log('[+] Found speedrun time', message.speedrunTime);
