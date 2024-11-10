// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { bundle } from 'jsr:@deno/emit@0.46.0';

// This is about 9 times slower than esbuild without minification lol.
// However, both don't support npm specifiers but deno_emit will support them
// at some point. It might take a while...

const { code } = await bundle('./src/mod.ts', {
    compilerOptions: {
        inlineSourceMap: false,
        inlineSources: false,
    },
});

await Deno.writeTextFile('./dist/sdp.esm.js', code);
