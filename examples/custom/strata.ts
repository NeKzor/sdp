import { Messages, SourceDemo, SourceDemoBuffer, SourceDemoParser } from '../../src/mod.ts';
import { DataTable, Packet } from '../../src/messages.ts';
import { ServerClassInfo } from '../../src/types/DataTables.ts';
import * as nm from './p2ce/netmessages.ts';
import * as um from './p2ce/base_usermessages.ts';
import * as p2ceUm from './p2ce/p2ce_usermessages.ts';
//import { nETMessagesToJSON, sVCMessagesToJSON } from './p2ce/netmessages.ts';

export const p2ceNetMessages = {
    [nm.NETMessages.net_Tick]: nm.CNETMsgTick,
    [nm.NETMessages.net_StringCmd]: nm.CNETMsgStringCmd,
    [nm.NETMessages.net_SignonState]: nm.CNETMsgSignonState,
    [nm.NETMessages.net_SetConVar]: nm.CNETMsgSetConVar,
    [nm.NETMessages.net_NOP]: nm.CNETMsgNOP,
    [nm.NETMessages.net_Disconnect]: nm.CNETMsgDisconnect,
    [nm.NETMessages.net_File]: nm.CNETMsgFile,
    [nm.NETMessages.net_SplitScreenUser]: nm.CNETMsgSplitScreenUser,
    [nm.NETMessages.net_PlayerAvatarData]: nm.CNETMsgPlayerAvatarData,
    [nm.SVCMessages.svc_ServerInfo]: nm.CSVCMsgServerInfo,
    [nm.SVCMessages.svc_ClassInfo]: nm.CSVCMsgClassInfo,
    [nm.SVCMessages.svc_SendTable]: nm.CSVCMsgSendTable,
    [nm.SVCMessages.svc_Print]: nm.CSVCMsgPrint,
    [nm.SVCMessages.svc_SetPause]: nm.CSVCMsgSetPause,
    [nm.SVCMessages.svc_SetView]: nm.CSVCMsgSetView,
    [nm.SVCMessages.svc_CreateStringTable]: nm.CSVCMsgCreateStringTable,
    [nm.SVCMessages.svc_UpdateStringTable]: nm.CSVCMsgUpdateStringTable,
    [nm.SVCMessages.svc_VoiceInit]: nm.CSVCMsgVoiceInit,
    [nm.SVCMessages.svc_VoiceData]: nm.CSVCMsgVoiceData,
    [nm.SVCMessages.svc_FixAngle]: nm.CSVCMsgFixAngle,
    [nm.SVCMessages.svc_CrosshairAngle]: nm.CSVCMsgCrosshairAngle,
    [nm.SVCMessages.svc_Prefetch]: nm.CSVCMsgPrefetch,
    [nm.SVCMessages.svc_BSPDecal]: nm.CSVCMsgBSPDecal,
    [nm.SVCMessages.svc_SplitScreen]: nm.CSVCMsgSplitScreen,
    [nm.SVCMessages.svc_GetCvarValue]: nm.CSVCMsgGetCvarValue,
    [nm.SVCMessages.svc_UserMessage]: nm.CSVCMsgUserMessage,
    [nm.SVCMessages.svc_PaintmapData]: nm.CSVCMsgPaintmapData,
    [nm.SVCMessages.svc_GameEvent]: nm.CSVCMsgGameEvent,
    [nm.SVCMessages.svc_GameEventList]: nm.CSVCMsgGameEventList,
    [nm.SVCMessages.svc_TempEntities]: nm.CSVCMsgTempEntities,
    [nm.SVCMessages.svc_PacketEntities]: nm.CSVCMsgPacketEntities,
    [nm.SVCMessages.svc_Sounds]: nm.CSVCMsgSounds,
    [nm.SVCMessages.svc_EntityMessage]: nm.CSVCMsgEntityMsg,
    [nm.SVCMessages.svc_CmdKeyValues]: nm.CSVCMsgCmdKeyValues,
    [nm.SVCMessages.svc_EncryptedData]: nm.CSVCMsgEncryptedData,
    [nm.SVCMessages.svc_HltvReplay]: nm.CSVCMsgHltvReplay,
    [nm.SVCMessages.svc_Broadcast_Command]: nm.CSVCMsgBroadcastCommand,
    [nm.SVCMessages.svc_HltvFixupOperatorStatus]: nm.CSVCMsgHltvFixupOperatorStatus,
};

export const p2ceUserMessages = {
    [um.EUserMessages.UM_VGUIMenu]: um.CUsrMsgVGUIMenu,
    [um.EUserMessages.UM_Geiger]: um.CUsrMsgGeiger,
    [um.EUserMessages.UM_Train]: um.CUsrMsgTrain,
    [um.EUserMessages.UM_HudText]: um.CUsrMsgHudText,
    [um.EUserMessages.UM_SayText]: um.CUsrMsgSayText,
    [um.EUserMessages.UM_SayText2]: um.CUsrMsgSayText2,
    [um.EUserMessages.UM_TextMsg]: um.CUsrMsgTextMsg,
    [um.EUserMessages.UM_HudMsg]: um.CUsrMsgHudMsg,
    [um.EUserMessages.UM_Shake]: um.CUsrMsgShake,
    [um.EUserMessages.UM_Fade]: um.CUsrMsgFade,
    [um.EUserMessages.UM_Rumble]: um.CUsrMsgRumble,
    [um.EUserMessages.UM_CloseCaption]: um.CUsrMsgCloseCaption,
    [um.EUserMessages.UM_CloseCaptionDirect]: um.CUsrMsgCloseCaptionDirect,
    [um.EUserMessages.UM_SendAudio]: um.CUsrMsgSendAudio,
    [um.EUserMessages.UM_RawAudio]: um.CUsrMsgRawAudio,
    [um.EUserMessages.UM_VoiceMask]: um.CUsrMsgVoiceMask,
    [um.EUserMessages.UM_Damage]: um.CUsrMsgDamage,
    [um.EUserMessages.UM_RadioText]: um.CUsrMsgRadioText,
    [um.EUserMessages.UM_HintText]: um.CUsrMsgHintText,
    [um.EUserMessages.UM_KeyHintText]: um.CUsrMsgKeyHintText,
    [um.EUserMessages.UM_WeaponSound]: um.CUsrMsgWeaponSound,
    [um.EUserMessages.UM_UpdateScreenHealthBar]: um.CUsrMsgUpdateScreenHealthBar,
    [um.EUserMessages.UM_EntityOutlineHighlight]: um.CUsrMsgEntityOutlineHighlight,
    [um.EUserMessages.UM_DesiredTimescale]: um.CUsrMsgDesiredTimescale,
    [um.EUserMessages.UM_CurrentTimescale]: um.CUsrMsgCurrentTimescale,
    [um.EUserMessages.UM_AchievementEvent]: um.CUsrMsgAchievementEvent,
    [um.EUserMessages.UM_PlayerStatsUpdate]: um.CUsrMsgPlayerStatsUpdate,
    [um.EUserMessages.UM_CallVoteFailed]: um.CUsrMsgCallVoteFailed,
    [um.EUserMessages.UM_VoteStart]: um.CUsrMsgVoteStart,
    [um.EUserMessages.UM_VotePass]: um.CUsrMsgVotePass,
    [um.EUserMessages.UM_VoteFailed]: um.CUsrMsgVoteFailed,
    [um.EUserMessages.UM_VoteSetup]: um.CUsrMsgVoteSetup,
    [um.EUserMessages.UM_SendLastKillerDamageToClient]: um.CUsrMsgSendLastKillerDamageToClient,
    [um.EUserMessages.UM_ItemPickup]: um.CUsrMsgItemPickup,
    [um.EUserMessages.UM_ShowMenu]: um.CUsrMsgShowMenu,
    [um.EUserMessages.UM_BarTime]: um.CUsrMsgBarTime,
    [um.EUserMessages.UM_AmmoDenied]: um.CUsrMsgAmmoDenied,
    [um.EUserMessages.UM_MarkAchievement]: um.CUsrMsgMarkAchievement,
    [um.EUserMessages.UM_GlowPropTurnOff]: um.CUsrMsgGlowPropTurnOff,
    [um.EUserMessages.UM_Tilt]: um.CUsrMsgTilt,
    [um.EUserMessages.UM_Battery]: um.CUsrMsgBattery,
    [um.EUserMessages.UM_CreditsMsg]: um.CUsrMsgCreditsMsg,
    [um.EUserMessages.UM_LogoTimeMsg]: um.CUsrMsgLogoTimeMsg,
    [um.EUserMessages.UM_UpdateJalopyRadar]: um.CUsrMsgUpdateJalopyRadar,
    [um.EUserMessages.UM_MessageText]: um.CUsrMsgMessageText,
    [um.EUserMessages.UM_StatsSkipState]: um.CUsrMsgStatsSkipState,
    [um.EUserMessages.UM_PanoramaEvent]: um.CUsrMsgPanoramaEvent,
    [um.EUserMessages.UM_ResetHud]: um.CUsrMsgResetHud,
    [um.EUserMessages.UM_RequestState]: um.CUsrMsgRequestState,
    [um.EUserMessages.UM_StopSpectatorMode]: um.CUsrMsgStopSpectatorMode,
    [p2ceUm.EP2CEUserMessages.UM_CreditsPortalMsg]: p2ceUm.CUsrMsgCreditsPortalMsg,
    [p2ceUm.EP2CEUserMessages.UM_ControlHelperAnimate]: p2ceUm.CUsrMsgControlHelperAnimate,
    [p2ceUm.EP2CEUserMessages.UM_HudPingIndicator]: p2ceUm.CUsrMsgHudPingIndicator,
    [p2ceUm.EP2CEUserMessages.UM_OpenRadialMenu]: p2ceUm.CUsrMsgOpenRadialMenu,
    [p2ceUm.EP2CEUserMessages.UM_AddLocator]: p2ceUm.CUsrMsgAddLocator,
    [p2ceUm.EP2CEUserMessages.UM_MPMapCompleted]: p2ceUm.CUsrMsgMPMapCompleted,
    [p2ceUm.EP2CEUserMessages.UM_MPMapIncomplete]: p2ceUm.CUsrMsgMPMapIncomplete,
    [p2ceUm.EP2CEUserMessages.UM_MPMapCompletedData]: p2ceUm.CUsrMsgMPMapCompletedData,
    [p2ceUm.EP2CEUserMessages.UM_MPTauntEarned]: p2ceUm.CUsrMsgMPTauntEarned,
    [p2ceUm.EP2CEUserMessages.UM_MPTauntUnlocked]: p2ceUm.CUsrMsgMPTauntUnlocked,
    [p2ceUm.EP2CEUserMessages.UM_MPTauntLocked]: p2ceUm.CUsrMsgMPTauntLocked,
    [p2ceUm.EP2CEUserMessages.UM_MPAllTauntsLocked]: p2ceUm.CUsrMsgMPAllTauntsLocked,
    [p2ceUm.EP2CEUserMessages.UM_PortalFX_Surface]: p2ceUm.CUsrMsgPortalFXSurface,
    [p2ceUm.EP2CEUserMessages.UM_PaintWorld]: p2ceUm.CUsrMsgPaintWorld,
    [p2ceUm.EP2CEUserMessages.UM_PaintEntity]: p2ceUm.CUsrMsgPaintEntity,
    [p2ceUm.EP2CEUserMessages.UM_ChangePaintColor]: p2ceUm.CUsrMsgChangePaintColor,
    [p2ceUm.EP2CEUserMessages.UM_RemoveAllPaint]: p2ceUm.CUsrMsgRemoveAllPaint,
    [p2ceUm.EP2CEUserMessages.UM_PaintAllSurfaces]: p2ceUm.CUsrMsgPaintAllSurfaces,
    [p2ceUm.EP2CEUserMessages.UM_RemovePaint]: p2ceUm.CUsrMsgRemovePaint,
    [p2ceUm.EP2CEUserMessages.UM_ApplyHitBoxDamageEffect]: p2ceUm.CUsrMsgApplyHitBoxDamageEffect,
    [p2ceUm.EP2CEUserMessages.UM_SetMixLayerTriggerFactor]: p2ceUm.CUsrMsgSetMixLayerTriggerFactor,
    [p2ceUm.EP2CEUserMessages.UM_TransitionFade]: p2ceUm.CUsrMsgTransitionFade,
    [p2ceUm.EP2CEUserMessages.UM_ScoreboardTempUpdate]: p2ceUm.CUsrMsgScoreboardTempUpdate,
    [p2ceUm.EP2CEUserMessages.UM_ChallengeModeCheatSession]: p2ceUm.CUsrMsgChallengeModeCheatSession,
    [p2ceUm.EP2CEUserMessages.UM_ChallengeModeCloseAllUI]: p2ceUm.CUsrMsgChallengeModeCloseAllUI,
    [p2ceUm.EP2CEUserMessages.UM_MPVSGameStart]: p2ceUm.CUsrMsgMPVSGameStart,
    [p2ceUm.EP2CEUserMessages.UM_MPVSGameOver]: p2ceUm.CUsrMsgMPVSGameOver,
    [p2ceUm.EP2CEUserMessages.UM_MPVSRoundEnd]: p2ceUm.CUsrMsgMPVSRoundEnd,
    [p2ceUm.EP2CEUserMessages.UM_PlaytestUpdate]: p2ceUm.CUsrMsgPlaytestUpdate,
};

export class StrataSourceDemo extends SourceDemo {
    override readPackets() {
        for (const message of this.messages ?? []) {
            if (message instanceof Packet) {
                const packets: any[] = [];
                const data = SourceDemoBuffer.from(message.data!);

                while (data.bitsLeft >= 16) {
                    const cmd = data.readVarInt32();
                    const size = data.readVarInt32();

                    const message = (p2ceNetMessages as any)[cmd];
                    const packet = message.decode(new Uint8Array(data.readArrayBuffer(size)));
                    packets.push(packet);

                    //console.log(nETMessagesToJSON(cmd)  ?? sVCMessagesToJSON(cmd));
                    if (cmd === nm.SVCMessages.svc_UserMessage) {
                        const userMessage = (p2ceUserMessages as any)[packet.msgType];
                        const umPacket = userMessage.decode(new Uint8Array(userMessage.msgData));
                        console.log(umPacket);
                    }
                }

                if (data.bitsLeft) {
                    message.restData = data.readBitStream(data.bitsLeft);
                }

                message.packets = packets;
            }
        }

        return this;
    }
    override readDataTables() {
        for (const message of this.messages ?? []) {
            if (message instanceof DataTable) {
                const dataTable: {
                    tables: any[];
                    serverClasses: ServerClassInfo[];
                    restData: SourceDemoBuffer | undefined;
                } = {
                    tables: [],
                    serverClasses: [],
                    restData: undefined,
                };

                const data = SourceDemoBuffer.from(message.data!);

                while (data.bitsLeft) {
                    const type = data.readVarInt32();
                    const size = data.readVarInt32();
                    const descriptor = p2ceNetMessages[type as keyof typeof p2ceNetMessages];
                    const msg = descriptor.decode(new Uint8Array(data.readArrayBuffer(size))) as nm.CSVCMsgSendTable;
                    dataTable.tables.push(msg);
                    if (msg.isEnd) {
                        break;
                    }
                }

                let classes = data.readInt16() ?? 0;
                while (classes--) {
                    const sc = new ServerClassInfo();
                    sc.read(data);
                    //console.log(dataTable.tables.find((table) => table.netTableName === sc.dataTableName));
                    dataTable.serverClasses.push(sc);
                }

                if (data.bitsLeft) {
                    dataTable.restData = data.readBitStream(data.bitsLeft);
                }

                message.dataTable = dataTable;
            }
        }

        return this;
    }
}

export class StrataSourceDemoParser extends SourceDemoParser {
    static override default() {
        return new this();
    }
    override parse(buffer: ArrayBuffer) {
        const buf = this.prepare(buffer);
        const demo = StrataSourceDemo.default();

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

const file = Deno.args.at(0);
if (!file) {
    console.error('demo path argument not specified!');
    Deno.exit(1);
}

const demo = StrataSourceDemoParser.default()
    .parse(Deno.readFileSync(file));

demo.readPackets();
//demo.readDataTables();
demo.readStringTables();

console.dir(
    demo.findMessage<Messages.StringTable>((packet) => packet.getName() === 'StringTable')
        ?.stringTables
        ?.find((x) => x.name === 'instancebaseline'),
);
