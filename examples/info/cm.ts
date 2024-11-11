import { SourceDemoParser } from '../../src/mod.ts';
import { ScoreboardTempUpdate, SvcUserMessage } from '../../src/types/mod.ts';

const file = Deno.args.at(0);
if (!file) {
    console.error('[-] Demo path argument not specified!');
    Deno.exit(1);
}

// TODO: remove any but this works for now
//       https://github.com/denoland/deno/issues/21450
const formatter = new (Intl as any).DurationFormat('en', {
    style: 'digital',
    fractionalDigits: 2,
    hoursDisplay: 'auto',
    minutesDisplay: 'auto',
});

const demo = SourceDemoParser.default()
    .setOptions({ packets: true })
    .parse(Deno.readFileSync(file));

for (const { userMessage } of demo.findPackets(SvcUserMessage)) {
    if (userMessage instanceof ScoreboardTempUpdate) {
        const ms = userMessage.timeScore! * 10;

        const time = formatter.format({
            hours: Math.trunc(ms / 3_600_000) % 24,
            minutes: Math.trunc(ms / 60_000) % 60,
            seconds: Math.trunc(ms / 1_000) % 60,
            milliseconds: Math.trunc(ms) % 1_000,
        });

        console.log('[+] Time:', time, 'Portals:', userMessage.portalScore);
    }
}
