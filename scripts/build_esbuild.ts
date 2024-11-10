// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import * as esbuild from 'npm:esbuild@0.24.0';
import { denoPlugins } from 'jsr:@luca/esbuild-deno-loader@0.11.0';

// Esbuild is fast! go > rust? I guess it's WASM...

await esbuild.build({
    plugins: [...denoPlugins()],
    entryPoints: ['./src/mod.ts'],
    outfile: './dist/sdp-esbuild.esm.js',
    format: 'esm',
    bundle: true,
    minify: true,
});

esbuild.stop();
