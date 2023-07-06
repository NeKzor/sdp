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
    save(demo: SourceDemo, bufferSize: number) {
        if (!this.options.header || !this.options.header) {
            throw new Error('Cannot save demo without parsed header and messages.');
        }

        if (demo.messages?.length) {
            if (this.options.stringTables) demo.writeStringTables();
            if (this.options.dataTables) demo.writeDataTables();
            if (this.options.packets) demo.writePackets();
            if (this.options.userCmds) demo.writeUserCmds();
        }

        const padding = 4 - (bufferSize % 4);
        const extended = new Uint8Array(bufferSize + padding);
        const buf = new SourceDemoBuffer(extended.buffer);

        demo.writeHeader(buf);
        demo.writeMessages(buf);

        const result = new Uint8Array(bufferSize);
        result.set(extended.slice(0, bufferSize), 0);
        return result;
    }
}
