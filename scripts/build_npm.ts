/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { build, emptyDir } from 'https://deno.land/x/dnt@0.37.0/mod.ts';
import { copy } from 'https://deno.land/std@0.191.0/fs/copy.ts';

const version = Deno.args[0];
if (!version) {
    console.error('You must pass a package version as the first argument');
    Deno.exit(1);
}

const outDir = './npm';

await emptyDir(outDir);

await copy('./demos/public', 'npm/esm/demos/public', { overwrite: true });
await copy('./demos/public', 'npm/script/demos/public', { overwrite: true });

await build({
    entryPoints: ['./src/mod.ts'],
    outDir,
    shims: {
        deno: true,
    },
    package: {
        name: '@nekz/sdp',
        version,
        description: 'Source Engine demo parser.',
        keywords: ['Source Engine'],
        homepage: 'https://sdp.nekz.me',
        bugs: {
            url: 'https://github.com/NeKzor/sdp/issues',
        },
        license: 'MIT',
        author: 'NeKz',
        repository: {
            type: 'git',
            url: 'git+https://github.com/NeKzor/sdp.git',
        },
    },
    postBuild() {
        Deno.copyFileSync('LICENSE', 'npm/LICENSE');
        Deno.copyFileSync('README.md', 'npm/README.md');
    },
});

await Deno.writeTextFile(
    'npm/.npmignore',
    'esm/demos/public/\nscript/demos/public/\n',
    { append: true },
);
