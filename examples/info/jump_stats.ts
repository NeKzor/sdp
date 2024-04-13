import { DemoMessages, SourceDemoParser } from '../../src/mod.ts';

const file = Deno.args.at(0);
if (!file) {
    console.error('demo path argument not specified!');
    Deno.exit(1);
}

const demo = SourceDemoParser.default()
    .setOptions({ userCmds: true })
    .parse(Deno.readFileSync(file));

const IN_JUMP = 1 << 1;

const registeredJumps = demo
    .findMessages(DemoMessages.UserCmd)
    .filter(({ userCmd }) => userCmd!.buttons! & IN_JUMP);

const actualJumpInputs = demo
    .findMessages(DemoMessages.ConsoleCmd)
    .filter(({ command }) => command.startsWith('+jump'));

let prevTick = 0;
let mouseJumps = 0;
let keyboardJumps = 0;

actualJumpInputs.forEach(({ tick, command }) => {
    const mouse = command.endsWith('112') || command.endsWith('113');
    if (tick !== prevTick) {
        console.log('-----------------');
    }
    console.log(
        `${tick} ${command.split(' ')[0]} (${mouse ? 'mouse' : 'keyboard'})`,
    );

    if (mouse) {
        ++mouseJumps;
    } else {
        ++keyboardJumps;
    }
    prevTick = tick;
});

console.log('---- results ----');
console.log('registered jumps:', registeredJumps.length);
console.log('actual jump inputs:', actualJumpInputs.length);
console.log(
    'jumps not registered:',
    actualJumpInputs.length - registeredJumps.length,
);
console.log('jumps with mouse:', mouseJumps);
console.log('jumps with keyboard:', keyboardJumps);
