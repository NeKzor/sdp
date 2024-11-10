// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

import type { Vector } from '../../types/Vector.ts';

export interface SourceGameRule {
    map?: string | string[];
    offset: number;
    type: 'start' | 'end';
    match: ({
        pos,
        cmds,
    }: {
        pos: { current: Vector; previous: Vector };
        cmds: { current: string[]; previous: string[] };
    }) => boolean;
}

export interface SourceGame {
    directory: string;
    tickrate: number;
    rules: SourceGameRule[];
}
