import { SourceDemoParser } from '../../src/mod.ts';
import { isSarMessage, readSarMessages, SarDataType } from '../../src/utils/mod.ts';
import { format } from 'jsr:@std/fmt/duration';

const file = Deno.args.at(0);
if (!file) {
    console.error('[-] Demo path argument not specified.');
    Deno.exit(1);
}

const demo = SourceDemoParser.default()
    .parse(Deno.readFileSync(file));

const messages = readSarMessages(demo);

const speedrun = messages.find(isSarMessage(SarDataType.SpeedrunTime));
if (!speedrun) {
    console.log('[-] No speedrun time found.');
    Deno.exit(1);
}

console.log('[+] Found speedrun time', speedrun.splits);

const totalTicks = speedrun.splits
    .reduce((ticks, split) => ticks + split.segs.reduce((ticks, seg) => ticks + seg.ticks, 0), 0);

const totalSeconds = totalTicks * demo.getIntervalPerTick();

const totalSecondsFormatted = format(Math.trunc(totalSeconds * 1_000), {
    style: 'digital',
    ignoreZero: true,
});

console.log({ totalTicks, totalSeconds, totalSecondsFormatted });
