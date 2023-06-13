/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import * as esbuild from "https://deno.land/x/esbuild@v0.17.19/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.1/mod.ts";

// Esbuild is fast! go > rust? I guess it's WASM...

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./src/mod.ts"],
  outfile: "./dist/sdp-esbuild.esm.js",
  format: "esm",
  bundle: true,
  minify: true,
});

esbuild.stop();
