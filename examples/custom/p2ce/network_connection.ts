export const protobufPackage = '';

export enum ENetworkDisconnectionReason {
    NETWORK_DISCONNECT_INVALID = 0,
    NETWORK_DISCONNECT_SHUTDOWN = 1,
    NETWORK_DISCONNECT_DISCONNECT_BY_USER = 2,
    NETWORK_DISCONNECT_DISCONNECT_BY_SERVER = 3,
    NETWORK_DISCONNECT_LOST = 4,
    NETWORK_DISCONNECT_OVERFLOW = 5,
    NETWORK_DISCONNECT_STEAM_BANNED = 6,
    NETWORK_DISCONNECT_STEAM_INUSE = 7,
    NETWORK_DISCONNECT_STEAM_TICKET = 8,
    NETWORK_DISCONNECT_STEAM_LOGON = 9,
    NETWORK_DISCONNECT_STEAM_AUTHCANCELLED = 10,
    NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED = 11,
    NETWORK_DISCONNECT_STEAM_AUTHINVALID = 12,
    NETWORK_DISCONNECT_STEAM_VACBANSTATE = 13,
    NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE = 14,
    NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT = 15,
    NETWORK_DISCONNECT_STEAM_DROPPED = 16,
    NETWORK_DISCONNECT_STEAM_OWNERSHIP = 17,
    NETWORK_DISCONNECT_SERVERINFO_OVERFLOW = 18,
    NETWORK_DISCONNECT_TICKMSG_OVERFLOW = 19,
    NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW = 20,
    NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW = 21,
    NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW = 22,
    NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW = 23,
    NETWORK_DISCONNECT_SNAPSHOTOVERFLOW = 24,
    NETWORK_DISCONNECT_SNAPSHOTERROR = 25,
    NETWORK_DISCONNECT_RELIABLEOVERFLOW = 26,
    NETWORK_DISCONNECT_BADDELTATICK = 27,
    NETWORK_DISCONNECT_NOMORESPLITS = 28,
    NETWORK_DISCONNECT_TIMEDOUT = 29,
    NETWORK_DISCONNECT_DISCONNECTED = 30,
    NETWORK_DISCONNECT_LEAVINGSPLIT = 31,
    NETWORK_DISCONNECT_DIFFERENTCLASSTABLES = 32,
    NETWORK_DISCONNECT_BADRELAYPASSWORD = 33,
    NETWORK_DISCONNECT_BADSPECTATORPASSWORD = 34,
    NETWORK_DISCONNECT_HLTVRESTRICTED = 35,
    NETWORK_DISCONNECT_NOSPECTATORS = 36,
    NETWORK_DISCONNECT_HLTVUNAVAILABLE = 37,
    NETWORK_DISCONNECT_HLTVSTOP = 38,
    NETWORK_DISCONNECT_KICKED = 39,
    NETWORK_DISCONNECT_BANADDED = 40,
    NETWORK_DISCONNECT_KICKBANADDED = 41,
    NETWORK_DISCONNECT_HLTVDIRECT = 42,
    NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA = 43,
    NETWORK_DISCONNECT_PURESERVER_MISMATCH = 44,
    NETWORK_DISCONNECT_USERCMD = 45,
    NETWORK_DISCONNECT_REJECTED_BY_GAME = 46,
    NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR = 47,
    NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR = 48,
    NETWORK_DISCONNECT_BAD_SERVER_PASSWORD = 49,
    NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION = 50,
    NETWORK_DISCONNECT_CONNECTION_FAILURE = 51,
    NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS = 52,
    NETWORK_DISCONNECT_RECONNECTION = 53,
    NETWORK_DISCONNECT_CONNECTION_CLOSING = 54,
    NETWORK_DISCONNECT_NO_GOTV_RELAYS_AVAILABLE = 55,
    NETWORK_DISCONNECT_SESSION_MIGRATED = 56,
    NETWORK_DISCONNECT_VERYLARGETRANSFEROVERFLOW = 57,
    NETWORK_DISCONNECT_SENDNETOVERFLOW = 58,
    NETWORK_DISCONNECT_PLAYER_REMOVED_FROM_HOST_SESSION = 59,
    NETWORK_DISCONNECT_SERVER_DOS = 61,
    NETWORK_DISCONNECT_SNS_LOCAL_MANYRELAYS = 62,
    NETWORK_DISCONNECT_SNS_LOCAL_HOSTEDSERVERPRIMARYRELAY = 63,
    NETWORK_DISCONNECT_SNS_LOCAL_NETWORKCONFIG = 64,
    NETWORK_DISCONNECT_SNS_LOCAL_OTHER = 65,
    NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUTCONNECTING = 66,
    NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUT = 67,
    NETWORK_DISCONNECT_SNS_REMOTE_BADCRYPT = 68,
    NETWORK_DISCONNECT_SNS_REMOTE_BADCERT = 69,
    NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_TIMEOUT = 70,
    NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_OTHER = 71,
    NETWORK_DISCONNECT_SNS_CONNECTION_TIMEOUT = 72,
    NETWORK_DISCONNECT_SNS_CONNECTION_LOST = 73,
    NETWORK_DISCONNECT_SNS_INTERNALERROR = 74,
    NETWORK_DISCONNECT_SNS_UNUSUAL = 75,
    UNRECOGNIZED = -1,
}

export function eNetworkDisconnectionReasonFromJSON(object: any): ENetworkDisconnectionReason {
    switch (object) {
        case 0:
        case 'NETWORK_DISCONNECT_INVALID':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_INVALID;
        case 1:
        case 'NETWORK_DISCONNECT_SHUTDOWN':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SHUTDOWN;
        case 2:
        case 'NETWORK_DISCONNECT_DISCONNECT_BY_USER':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_DISCONNECT_BY_USER;
        case 3:
        case 'NETWORK_DISCONNECT_DISCONNECT_BY_SERVER':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_DISCONNECT_BY_SERVER;
        case 4:
        case 'NETWORK_DISCONNECT_LOST':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_LOST;
        case 5:
        case 'NETWORK_DISCONNECT_OVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_OVERFLOW;
        case 6:
        case 'NETWORK_DISCONNECT_STEAM_BANNED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_BANNED;
        case 7:
        case 'NETWORK_DISCONNECT_STEAM_INUSE':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_INUSE;
        case 8:
        case 'NETWORK_DISCONNECT_STEAM_TICKET':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_TICKET;
        case 9:
        case 'NETWORK_DISCONNECT_STEAM_LOGON':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_LOGON;
        case 10:
        case 'NETWORK_DISCONNECT_STEAM_AUTHCANCELLED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_AUTHCANCELLED;
        case 11:
        case 'NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED;
        case 12:
        case 'NETWORK_DISCONNECT_STEAM_AUTHINVALID':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_AUTHINVALID;
        case 13:
        case 'NETWORK_DISCONNECT_STEAM_VACBANSTATE':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_VACBANSTATE;
        case 14:
        case 'NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE;
        case 15:
        case 'NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT;
        case 16:
        case 'NETWORK_DISCONNECT_STEAM_DROPPED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_DROPPED;
        case 17:
        case 'NETWORK_DISCONNECT_STEAM_OWNERSHIP':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_OWNERSHIP;
        case 18:
        case 'NETWORK_DISCONNECT_SERVERINFO_OVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SERVERINFO_OVERFLOW;
        case 19:
        case 'NETWORK_DISCONNECT_TICKMSG_OVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_TICKMSG_OVERFLOW;
        case 20:
        case 'NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW;
        case 21:
        case 'NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW;
        case 22:
        case 'NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW;
        case 23:
        case 'NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW;
        case 24:
        case 'NETWORK_DISCONNECT_SNAPSHOTOVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNAPSHOTOVERFLOW;
        case 25:
        case 'NETWORK_DISCONNECT_SNAPSHOTERROR':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNAPSHOTERROR;
        case 26:
        case 'NETWORK_DISCONNECT_RELIABLEOVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_RELIABLEOVERFLOW;
        case 27:
        case 'NETWORK_DISCONNECT_BADDELTATICK':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_BADDELTATICK;
        case 28:
        case 'NETWORK_DISCONNECT_NOMORESPLITS':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_NOMORESPLITS;
        case 29:
        case 'NETWORK_DISCONNECT_TIMEDOUT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_TIMEDOUT;
        case 30:
        case 'NETWORK_DISCONNECT_DISCONNECTED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_DISCONNECTED;
        case 31:
        case 'NETWORK_DISCONNECT_LEAVINGSPLIT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_LEAVINGSPLIT;
        case 32:
        case 'NETWORK_DISCONNECT_DIFFERENTCLASSTABLES':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_DIFFERENTCLASSTABLES;
        case 33:
        case 'NETWORK_DISCONNECT_BADRELAYPASSWORD':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_BADRELAYPASSWORD;
        case 34:
        case 'NETWORK_DISCONNECT_BADSPECTATORPASSWORD':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_BADSPECTATORPASSWORD;
        case 35:
        case 'NETWORK_DISCONNECT_HLTVRESTRICTED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVRESTRICTED;
        case 36:
        case 'NETWORK_DISCONNECT_NOSPECTATORS':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_NOSPECTATORS;
        case 37:
        case 'NETWORK_DISCONNECT_HLTVUNAVAILABLE':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVUNAVAILABLE;
        case 38:
        case 'NETWORK_DISCONNECT_HLTVSTOP':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVSTOP;
        case 39:
        case 'NETWORK_DISCONNECT_KICKED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_KICKED;
        case 40:
        case 'NETWORK_DISCONNECT_BANADDED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_BANADDED;
        case 41:
        case 'NETWORK_DISCONNECT_KICKBANADDED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_KICKBANADDED;
        case 42:
        case 'NETWORK_DISCONNECT_HLTVDIRECT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVDIRECT;
        case 43:
        case 'NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA;
        case 44:
        case 'NETWORK_DISCONNECT_PURESERVER_MISMATCH':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_PURESERVER_MISMATCH;
        case 45:
        case 'NETWORK_DISCONNECT_USERCMD':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_USERCMD;
        case 46:
        case 'NETWORK_DISCONNECT_REJECTED_BY_GAME':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_REJECTED_BY_GAME;
        case 47:
        case 'NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR;
        case 48:
        case 'NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR;
        case 49:
        case 'NETWORK_DISCONNECT_BAD_SERVER_PASSWORD':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_BAD_SERVER_PASSWORD;
        case 50:
        case 'NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION;
        case 51:
        case 'NETWORK_DISCONNECT_CONNECTION_FAILURE':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_CONNECTION_FAILURE;
        case 52:
        case 'NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS;
        case 53:
        case 'NETWORK_DISCONNECT_RECONNECTION':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_RECONNECTION;
        case 54:
        case 'NETWORK_DISCONNECT_CONNECTION_CLOSING':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_CONNECTION_CLOSING;
        case 55:
        case 'NETWORK_DISCONNECT_NO_GOTV_RELAYS_AVAILABLE':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_NO_GOTV_RELAYS_AVAILABLE;
        case 56:
        case 'NETWORK_DISCONNECT_SESSION_MIGRATED':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SESSION_MIGRATED;
        case 57:
        case 'NETWORK_DISCONNECT_VERYLARGETRANSFEROVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_VERYLARGETRANSFEROVERFLOW;
        case 58:
        case 'NETWORK_DISCONNECT_SENDNETOVERFLOW':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SENDNETOVERFLOW;
        case 59:
        case 'NETWORK_DISCONNECT_PLAYER_REMOVED_FROM_HOST_SESSION':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_PLAYER_REMOVED_FROM_HOST_SESSION;
        case 61:
        case 'NETWORK_DISCONNECT_SERVER_DOS':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SERVER_DOS;
        case 62:
        case 'NETWORK_DISCONNECT_SNS_LOCAL_MANYRELAYS':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_MANYRELAYS;
        case 63:
        case 'NETWORK_DISCONNECT_SNS_LOCAL_HOSTEDSERVERPRIMARYRELAY':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_HOSTEDSERVERPRIMARYRELAY;
        case 64:
        case 'NETWORK_DISCONNECT_SNS_LOCAL_NETWORKCONFIG':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_NETWORKCONFIG;
        case 65:
        case 'NETWORK_DISCONNECT_SNS_LOCAL_OTHER':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_OTHER;
        case 66:
        case 'NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUTCONNECTING':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUTCONNECTING;
        case 67:
        case 'NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUT;
        case 68:
        case 'NETWORK_DISCONNECT_SNS_REMOTE_BADCRYPT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_BADCRYPT;
        case 69:
        case 'NETWORK_DISCONNECT_SNS_REMOTE_BADCERT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_BADCERT;
        case 70:
        case 'NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_TIMEOUT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_TIMEOUT;
        case 71:
        case 'NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_OTHER':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_OTHER;
        case 72:
        case 'NETWORK_DISCONNECT_SNS_CONNECTION_TIMEOUT':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CONNECTION_TIMEOUT;
        case 73:
        case 'NETWORK_DISCONNECT_SNS_CONNECTION_LOST':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CONNECTION_LOST;
        case 74:
        case 'NETWORK_DISCONNECT_SNS_INTERNALERROR':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_INTERNALERROR;
        case 75:
        case 'NETWORK_DISCONNECT_SNS_UNUSUAL':
            return ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_UNUSUAL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ENetworkDisconnectionReason.UNRECOGNIZED;
    }
}

export function eNetworkDisconnectionReasonToJSON(object: ENetworkDisconnectionReason): string {
    switch (object) {
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_INVALID:
            return 'NETWORK_DISCONNECT_INVALID';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SHUTDOWN:
            return 'NETWORK_DISCONNECT_SHUTDOWN';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_DISCONNECT_BY_USER:
            return 'NETWORK_DISCONNECT_DISCONNECT_BY_USER';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_DISCONNECT_BY_SERVER:
            return 'NETWORK_DISCONNECT_DISCONNECT_BY_SERVER';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_LOST:
            return 'NETWORK_DISCONNECT_LOST';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_OVERFLOW:
            return 'NETWORK_DISCONNECT_OVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_BANNED:
            return 'NETWORK_DISCONNECT_STEAM_BANNED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_INUSE:
            return 'NETWORK_DISCONNECT_STEAM_INUSE';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_TICKET:
            return 'NETWORK_DISCONNECT_STEAM_TICKET';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_LOGON:
            return 'NETWORK_DISCONNECT_STEAM_LOGON';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_AUTHCANCELLED:
            return 'NETWORK_DISCONNECT_STEAM_AUTHCANCELLED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED:
            return 'NETWORK_DISCONNECT_STEAM_AUTHALREADYUSED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_AUTHINVALID:
            return 'NETWORK_DISCONNECT_STEAM_AUTHINVALID';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_VACBANSTATE:
            return 'NETWORK_DISCONNECT_STEAM_VACBANSTATE';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE:
            return 'NETWORK_DISCONNECT_STEAM_LOGGED_IN_ELSEWHERE';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT:
            return 'NETWORK_DISCONNECT_STEAM_VAC_CHECK_TIMEDOUT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_DROPPED:
            return 'NETWORK_DISCONNECT_STEAM_DROPPED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STEAM_OWNERSHIP:
            return 'NETWORK_DISCONNECT_STEAM_OWNERSHIP';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SERVERINFO_OVERFLOW:
            return 'NETWORK_DISCONNECT_SERVERINFO_OVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_TICKMSG_OVERFLOW:
            return 'NETWORK_DISCONNECT_TICKMSG_OVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW:
            return 'NETWORK_DISCONNECT_STRINGTABLEMSG_OVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW:
            return 'NETWORK_DISCONNECT_DELTAENTMSG_OVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW:
            return 'NETWORK_DISCONNECT_TEMPENTMSG_OVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW:
            return 'NETWORK_DISCONNECT_SOUNDSMSG_OVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNAPSHOTOVERFLOW:
            return 'NETWORK_DISCONNECT_SNAPSHOTOVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNAPSHOTERROR:
            return 'NETWORK_DISCONNECT_SNAPSHOTERROR';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_RELIABLEOVERFLOW:
            return 'NETWORK_DISCONNECT_RELIABLEOVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_BADDELTATICK:
            return 'NETWORK_DISCONNECT_BADDELTATICK';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_NOMORESPLITS:
            return 'NETWORK_DISCONNECT_NOMORESPLITS';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_TIMEDOUT:
            return 'NETWORK_DISCONNECT_TIMEDOUT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_DISCONNECTED:
            return 'NETWORK_DISCONNECT_DISCONNECTED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_LEAVINGSPLIT:
            return 'NETWORK_DISCONNECT_LEAVINGSPLIT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_DIFFERENTCLASSTABLES:
            return 'NETWORK_DISCONNECT_DIFFERENTCLASSTABLES';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_BADRELAYPASSWORD:
            return 'NETWORK_DISCONNECT_BADRELAYPASSWORD';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_BADSPECTATORPASSWORD:
            return 'NETWORK_DISCONNECT_BADSPECTATORPASSWORD';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVRESTRICTED:
            return 'NETWORK_DISCONNECT_HLTVRESTRICTED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_NOSPECTATORS:
            return 'NETWORK_DISCONNECT_NOSPECTATORS';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVUNAVAILABLE:
            return 'NETWORK_DISCONNECT_HLTVUNAVAILABLE';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVSTOP:
            return 'NETWORK_DISCONNECT_HLTVSTOP';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_KICKED:
            return 'NETWORK_DISCONNECT_KICKED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_BANADDED:
            return 'NETWORK_DISCONNECT_BANADDED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_KICKBANADDED:
            return 'NETWORK_DISCONNECT_KICKBANADDED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_HLTVDIRECT:
            return 'NETWORK_DISCONNECT_HLTVDIRECT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA:
            return 'NETWORK_DISCONNECT_PURESERVER_CLIENTEXTRA';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_PURESERVER_MISMATCH:
            return 'NETWORK_DISCONNECT_PURESERVER_MISMATCH';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_USERCMD:
            return 'NETWORK_DISCONNECT_USERCMD';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_REJECTED_BY_GAME:
            return 'NETWORK_DISCONNECT_REJECTED_BY_GAME';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR:
            return 'NETWORK_DISCONNECT_MESSAGE_PARSE_ERROR';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR:
            return 'NETWORK_DISCONNECT_INVALID_MESSAGE_ERROR';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_BAD_SERVER_PASSWORD:
            return 'NETWORK_DISCONNECT_BAD_SERVER_PASSWORD';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION:
            return 'NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_CONNECTION_FAILURE:
            return 'NETWORK_DISCONNECT_CONNECTION_FAILURE';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS:
            return 'NETWORK_DISCONNECT_NO_PEER_GROUP_HANDLERS';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_RECONNECTION:
            return 'NETWORK_DISCONNECT_RECONNECTION';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_CONNECTION_CLOSING:
            return 'NETWORK_DISCONNECT_CONNECTION_CLOSING';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_NO_GOTV_RELAYS_AVAILABLE:
            return 'NETWORK_DISCONNECT_NO_GOTV_RELAYS_AVAILABLE';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SESSION_MIGRATED:
            return 'NETWORK_DISCONNECT_SESSION_MIGRATED';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_VERYLARGETRANSFEROVERFLOW:
            return 'NETWORK_DISCONNECT_VERYLARGETRANSFEROVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SENDNETOVERFLOW:
            return 'NETWORK_DISCONNECT_SENDNETOVERFLOW';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_PLAYER_REMOVED_FROM_HOST_SESSION:
            return 'NETWORK_DISCONNECT_PLAYER_REMOVED_FROM_HOST_SESSION';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SERVER_DOS:
            return 'NETWORK_DISCONNECT_SERVER_DOS';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_MANYRELAYS:
            return 'NETWORK_DISCONNECT_SNS_LOCAL_MANYRELAYS';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_HOSTEDSERVERPRIMARYRELAY:
            return 'NETWORK_DISCONNECT_SNS_LOCAL_HOSTEDSERVERPRIMARYRELAY';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_NETWORKCONFIG:
            return 'NETWORK_DISCONNECT_SNS_LOCAL_NETWORKCONFIG';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_LOCAL_OTHER:
            return 'NETWORK_DISCONNECT_SNS_LOCAL_OTHER';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUTCONNECTING:
            return 'NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUTCONNECTING';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUT:
            return 'NETWORK_DISCONNECT_SNS_REMOTE_TIMEOUT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_BADCRYPT:
            return 'NETWORK_DISCONNECT_SNS_REMOTE_BADCRYPT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_REMOTE_BADCERT:
            return 'NETWORK_DISCONNECT_SNS_REMOTE_BADCERT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_TIMEOUT:
            return 'NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_TIMEOUT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_OTHER:
            return 'NETWORK_DISCONNECT_SNS_CLOSEDBYPEER_OTHER';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CONNECTION_TIMEOUT:
            return 'NETWORK_DISCONNECT_SNS_CONNECTION_TIMEOUT';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_CONNECTION_LOST:
            return 'NETWORK_DISCONNECT_SNS_CONNECTION_LOST';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_INTERNALERROR:
            return 'NETWORK_DISCONNECT_SNS_INTERNALERROR';
        case ENetworkDisconnectionReason.NETWORK_DISCONNECT_SNS_UNUSUAL:
            return 'NETWORK_DISCONNECT_SNS_UNUSUAL';
        case ENetworkDisconnectionReason.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
