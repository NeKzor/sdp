/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from './buffer.ts';
import { SourceDemo } from './demo.ts';

export interface ParsingOptions {
    header: boolean;
    messages: boolean;
    stringTables: boolean;
    dataTables: boolean;
    packets: boolean;
    userCmds: boolean;
}

export const DefaultParsingOptions: ParsingOptions = {
    header: true,
    messages: true,
    stringTables: false,
    dataTables: false,
    packets: false,
    userCmds: false,
};

export class SourceDemoParser {
    options: ParsingOptions;

    constructor(options: ParsingOptions = DefaultParsingOptions) {
        this.options = options;
    }
    static default() {
        return new this(DefaultParsingOptions);
    }
    setOptions(options: Partial<ParsingOptions>) {
        this.options = {
            ...this.options,
            ...options,
        };
        return this;
    }
    parse(buffer: ArrayBuffer) {
        const extended = new Uint8Array(
            buffer.byteLength + 4 - (buffer.byteLength % 4),
        );
        extended.set(new Uint8Array(buffer), 0);

        const buf = new SourceDemoBuffer(extended.buffer);
        const demo = SourceDemo.default();

        if (this.options.header) demo.readHeader(buf);
        if (this.options.messages) demo.readMessages(buf);

        if (demo.messages?.length) {
            if (this.options.stringTables) demo.readStringTables();
            if (this.options.dataTables) demo.readDataTables();
            if (this.options.packets) demo.readPackets();
            if (this.options.userCmds) demo.readUserCmds();
        }

        return demo;
    }
}
