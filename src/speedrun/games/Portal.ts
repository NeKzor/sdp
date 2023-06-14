/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceGame } from './SourceGame.ts';

export default {
    directory: 'portal',
    tickrate: 1 / 0.015,
    rules: [
        {
            map: 'testchmb_a_00',
            offset: 1,
            type: 'start',
            match: ({ pos }) => {
                if (pos !== undefined) {
                    const startPos = { x: -544, y: -368.75, z: 160 };
                    return (
                        pos.current.x === startPos.x &&
                        pos.current.y === startPos.y &&
                        pos.current.z === startPos.z
                    );
                }
                return false;
            },
        },
        {
            map: 'escape_02',
            offset: 1,
            type: 'end',
            match: ({ cmds }) => {
                if (cmds !== undefined) {
                    return cmds.current.includes('startneurotoxins 99999');
                }
                return false;
            },
        },
    ],
} satisfies SourceGame;
