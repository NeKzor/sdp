/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

export class QAngle {
  pitch: number;
  yaw: number;
  roll: number;
  constructor(pitch: number, yaw: number, roll: number) {
    this.pitch = pitch;
    this.yaw = yaw;
    this.roll = roll;
  }
  *[Symbol.iterator]() {
    yield this.pitch;
    yield this.yaw;
    yield this.roll;
  }
}
