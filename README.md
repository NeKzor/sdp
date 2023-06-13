# sdp

Simple Source Engine demo parser.

## Features

- Supports for multiple engines
    - Portal 2
    - Half-Life 2
- Optional decoding of message data
    - [User command info]
    - [NET/SVC messages]
    - [Send tables]
    - [String tables]
    - [Game events]
- Speedrun timing
    - Rules for Portal, Portal 2 and mods
    - [SAR] timing

[User command info]: https://nekz.me/dem/classes/usercmdinfo.html
[NET/SVC messages]: https://nekz.me/dem/classes/netsvc.html
[Send tables]: https://nekz.me/dem/classes/sendtable.html
[String tables]: https://nekz.me/dem/classes/stringtable.html
[Game events]: https://nekz.me/dem/classes/gameevent.html
[SAR]: https://sar.portal2.sr

## Examples

### Header Only

```ts
import { SourceDemoParser } from 'sdp';

const demo = SourceDemoParser.default()
    .setOptions({ messages: false })
    .parse(Deno.readFileSync('demo.dem'));

console.log(demo);

/*
    SourceDemo {
    demoFileStamp: 'HL2DEMO',
    demoProtocol: 3,
    networkProtocol: 15,
    serverName: 'localhost:0',
    clientName: 'Can\'t Even',
    mapName: 'testchmb_a_00',
    gameDirectory: 'portal',
    playbackTime: 3.944999933242798,
    playbackTicks: 263,
    playbackFrames: 253,
    signOnLength: 80641,
    messages: [] }
*/
```

### Jump Stats

```ts
import { SourceDemoParser, DemoMessages } from 'sdp.js';

const demo = SourceDemoParser.default()
    .setOptions({ userCmds: true })
    .parse(Deno.readFileSync(file));

const IN_JUMP = 1 << 1;

const registeredJumps = demo
    .findMessages(DemoMessages.UserCmd)
    .filter(({ userCmd: { buttons } }) => {
        return buttons && (buttons & IN_JUMP);
    });

console.log('registered jumps:', registeredJumps.length);

/*
    registered jumps: 270
*/
```

### View Origin

[![showcase.gif](showcase.gif)](https://nekz.me/parser)

## Credits

[inolen/bit-buffer] for `BitStream` and `BitView`. I ported it to TypeScript because Deno cannot bundle npm specifiers
and any other bundler is not good enough. Also this port significantly improves typings which means less errors etc.

[inolen/bit-buffer]: https://github.com/inolen/bit-buffer

## License

[MIT License](./LICENSE)
