// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import { build, emptyDir } from 'jsr:@deno/dnt@0.41.3';
import { copy } from 'jsr:@std/fs@1.0.5';
import { parse } from 'jsr:@std/jsonc@1.0.1';

const { version } = parse(Deno.readTextFileSync('./deno.jsonc')) as { version: string };

const outDir = './npm';

await emptyDir(outDir);

// These files are used for unit tests.
await copy('./demos/public', 'npm/esm/demos/public', { overwrite: true });
await copy('./demos/public', 'npm/script/demos/public', { overwrite: true });

await build({
    entryPoints: [
        './src/mod.ts',
        {
            name: './speedrun',
            path: './src/speedrun/mod.ts',
        },
        {
            name: './types',
            path: './src/types/mod.ts',
        },
        {
            name: './utils',
            path: './src/utils/mod.ts',
        },
    ],
    testPattern: '**.ts',
    rootTestDir: './tests',
    outDir,
    shims: {
        deno: true,
    },
    compilerOptions: {
        lib: ['ESNext'],
    },
    package: {
        name: '@nekz/sdp',
        version,
        description: 'Simple Source Engine demo parser.',
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

// Remove unnecessary fields.

const npmPackage = JSON.parse(await Deno.readTextFile('./npm/package.json'));

delete npmPackage.scripts;
delete npmPackage.devDependencies;

await Deno.writeTextFile('./npm/package.json', JSON.stringify(npmPackage, null, 2));

// Ignore files which should not get published.

await Deno.writeTextFile(
    'npm/.npmignore',
    [
        // Deps, shims and tests are only used for unit testing.
        // There is no need to keep them in the package.
        'esm/deps/',
        'esm/tests/',
        'esm/_dnt.test_shims.d.ts',
        'esm/_dnt.test_shims.js',
        'script/deps/',
        'script/tests/',
        'script/_dnt.test_shims.d.ts',
        'script/_dnt.test_shims.js',
        // Also ignore the copied test data.
        'esm/demos/public/',
        'script/demos/public/',
    ].join('\n') + '\n',
    { append: true },
);
