import { NetMessages, SourceDemoParser } from '../src/mod.ts';

const file = Deno.args.at(0);

if (!file) {
    console.error('[-] Demo path argument not specified!');
    Deno.exit(1);
}

const demo = SourceDemoParser.default()
    .setOptions({ packets: true})
    .parse(Deno.readFileSync(file));

const userMessages = demo
    .findPackets(NetMessages.SvcUserMessage);

const unique = new Set();

for (const { userMessage, msgDataLength } of userMessages) {
    const name = userMessage!.getName();
    if (unique.has(name)) {
        continue;
    }

    unique.add(name);
    console.log(userMessage, ' size in bytes =', msgDataLength! / 8, '\n');
}

console.log(`[+] Dumped ${unique.size} unique user messages types`);
