// Copyright (c) 2018-2024, NeKz
// SPDX-License-Identifier: MIT

export class Vector {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    length2D(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    *[Symbol.iterator](): Generator<number> {
        yield this.x;
        yield this.y;
        yield this.z;
    }
}
