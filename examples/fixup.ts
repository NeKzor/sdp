/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 *
 * This fixes old Portal 2 demos to make them playable again.
 * Research based on: https://github.com/p2sr/demofixup
 */

import { basename, dirname, join } from 'https://deno.land/std@0.140.0/path/posix.ts';
import { Messages, NetMessages, SourceDemoParser } from '../src/mod.ts';

const file = Deno.args.at(0);
if (!file) {
    console.error('Demo path argument not specified.');
    Deno.exit(1);
}

const buffer = Deno.readFileSync(file);
const parser = SourceDemoParser.default();

let demo = parser
    .setOptions({ messages: false })
    .parse(buffer);

if (demo.gameDirectory !== 'portal2') {
    console.error('Demo is not from Portal 2.');
    Deno.exit(1);
}

demo = parser
    .setOptions({ messages: true, packets: false, dataTables: true })
    .parse(Deno.readFileSync(file));

const dt = demo.findMessage<Messages.DataTable>(Messages.DataTable)?.dataTable;
if (!dt) {
    console.error('Could not find DataTable!');
    Deno.exit(1);
}

const pointSurvey = dt.tables.findIndex((table) => table.netTableName === 'DT_PointSurvey');
if (!pointSurvey) {
    console.log('Demo does not need a fixup.');
    Deno.exit(1);
}

const svc = dt.serverClasses.find((table) => table.dataTableName === 'DT_PointSurvey');
if (!svc) {
    console.log('Failed to find DT_PointSurvey.');
    Deno.exit(1);
}

svc.className = 'CPointCamera';
svc.dataTableName = 'DT_PointCamera';

dt.tables.splice(pointSurvey, 1);
dt.serverClasses.splice(pointSurvey, 1);

// TODO
// const packets = demo.findPackets<NetMessages.SvcTempEntities>(NetMessages.SvcTempEntities);
// for (const packet of packets) {
// }

const saved = parser.save(demo, buffer.byteLength);

const filename = basename(file);
const fixed = join(
    dirname(file),
    filename.toLowerCase().endsWith('.dem') ? `${filename.slice(0, -4)}_fixed.dem` : `${filename}_fixed.dem`,
);

Deno.writeFileSync(fixed, saved);
