/*
 * Copyright (c) 2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { SourceDemoBuffer } from '../buffer.ts';
import { SourceDemo } from '../demo.ts';

export class UserMessage {
    type: number;
    constructor(type: number) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.constructor.name;
    }
    read(_buf: SourceDemoBuffer, _demo: SourceDemo) {
        throw new Error(`read() for ${this.constructor.name} not implemented!`);
    }
    write(_buf: SourceDemoBuffer, _demo: SourceDemo) {
        throw new Error(`write() for ${this.constructor.name} not implemented!`);
    }
    as<T extends UserMessage>() {
        return this as unknown as T;
    }
}

export class Geiger extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Train extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class HudText extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class SayText extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class SayText2 extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class TextMsg extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class HudMsg extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ResetHUD extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class GameTitle extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ItemPickup extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ShowMenu extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Shake extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Tilt extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Fade extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class VGUIMenu extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Rumble extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Battery extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Damage extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class VoiceMask extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class RequestState extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class CloseCaption extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class CloseCaptionDirect extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class HintText extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class KeyHintText extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class SquadMemberDied extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class AmmoDenied extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class CreditsMsg extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class LogoTimeMsg extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class AchievementEvent extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class UpdateJalopyRadar extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class CurrentTimescale extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class DesiredTimescale extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class CreditsPortalMsg extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class InventoryFlash extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class IndicatorFlash extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ControlHelperAnimate extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class TakePhoto extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class Flash extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class HudPingIndicator extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class OpenRadialMenu extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class AddLocator extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class MPMapCompleted extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class MPMapIncomplete extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class MPMapCompletedData extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class MPTauntEarned extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class MPTauntUnlocked extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class MPTauntLocked extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class MPAllTauntsLocked extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class PortalFX_Surface extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class PaintWorld extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class PaintEntity extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ChangePaintColor extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class PaintBombExplode extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class RemoveAllPaint extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class PaintAllSurfaces extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class RemovePaint extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class StartSurvey extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ApplyHitBoxDamageEffect extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class SetMixLayerTriggerFactor extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class TransitionFade extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ScoreboardTempUpdate extends UserMessage {
    portalScore?: number;
    timeScore?: number;
    read(buf: SourceDemoBuffer) {
        this.portalScore = buf.readUint32();
        this.timeScore = buf.readUint32();
    }
    write(buf: SourceDemoBuffer) {
        buf.writeUint32(this.portalScore!);
        buf.writeUint32(this.timeScore!);
    }
}
export class ChallengeModeCheatSession extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}
export class ChallengeModeCloseAllUI extends UserMessage {
    read(_buf: SourceDemoBuffer) {
    }
    write(_buf: SourceDemoBuffer) {
    }
}

export const UserMessages = {
    Portal2Engine: [
        Geiger, // 0
        Train, // 1
        HudText, // 2
        SayText, // 3
        SayText2, // 4
        TextMsg, // 5
        HudMsg, // 6
        ResetHUD, // 7
        GameTitle, // 8
        ItemPickup, // 9
        ShowMenu, // 10
        Shake, // 11
        Tilt, // 12
        Fade, // 13
        VGUIMenu, // 14
        Rumble, // 15
        Battery, // 16
        Damage, // 17
        VoiceMask, // 18
        RequestState, // 19
        CloseCaption, // 20
        CloseCaptionDirect, // 21
        HintText, // 22
        KeyHintText, // 23
        SquadMemberDied, // 24
        AmmoDenied, // 25
        CreditsMsg, // 26
        LogoTimeMsg, // 27
        AchievementEvent, // 28
        UpdateJalopyRadar, // 29
        CurrentTimescale, // 30
        DesiredTimescale, // 31
        CreditsPortalMsg, // 32
        InventoryFlash, // 33
        IndicatorFlash, // 34
        ControlHelperAnimate, // 35
        TakePhoto, // 36
        Flash, // 37
        HudPingIndicator, // 38
        OpenRadialMenu, // 39
        AddLocator, // 40
        MPMapCompleted, // 41
        MPMapIncomplete, // 42
        MPMapCompletedData, // 43
        MPTauntEarned, // 44
        MPTauntUnlocked, // 45
        MPTauntLocked, // 46
        MPAllTauntsLocked, // 47
        PortalFX_Surface, // 48
        PaintWorld, // 49
        PaintEntity, // 50
        ChangePaintColor, // 51
        PaintBombExplode, // 52
        RemoveAllPaint, // 53
        PaintAllSurfaces, // 54
        RemovePaint, // 55
        StartSurvey, // 56
        ApplyHitBoxDamageEffect, // 57
        SetMixLayerTriggerFactor, // 58
        TransitionFade, // 59
        ScoreboardTempUpdate, // 60
        ChallengeModeCheatSession, // 61
        ChallengeModeCloseAllUI, // 62
    ],
};
