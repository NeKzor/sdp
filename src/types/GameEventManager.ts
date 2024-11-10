import type { SourceDemoBuffer } from '../buffer.ts';

export class GameEventDescriptor {
    eventId?: number;
    name?: string;
    keys?: Map<string, number>;
    read(buf: SourceDemoBuffer) {
        this.eventId = buf.readBits(9);
        this.name = buf.readASCIIString();
        this.keys = new Map();

        let type = buf.readBits(3);
        while (type !== 0) {
            this.keys.set(buf.readASCIIString(), type);
            type = buf.readBits(3);
        }
    }
    write(buf: SourceDemoBuffer) {
        buf.writeBits(this.eventId!, 9);
        buf.writeASCIIString(this.name!);

        this.keys!.forEach((type, key) => {
            buf.writeBits(type, 3);
            buf.writeASCIIString(key);
        });

        buf.writeBits(0, 3);
    }
}

export class GameEvent {
    descriptor: GameEventDescriptor;
    dataKeys: Map<string, string | number | boolean>;
    constructor(descriptor: GameEventDescriptor) {
        this.descriptor = descriptor;
        this.dataKeys = new Map();
    }
    get<T extends ReturnType<GameEvent['dataKeys']['get']>>(keyName: string): T {
        return this.dataKeys.get(keyName) as T;
    }
    set<T extends Parameters<GameEvent['dataKeys']['set']>['1']>(keyName: string, defaultValue: T): T {
        this.dataKeys.set(keyName, defaultValue);
        return defaultValue;
    }
}

export class GameEventManager {
    gameEvents: GameEventDescriptor[];
    constructor(gameEvents: GameEventDescriptor[]) {
        this.gameEvents = gameEvents;
    }
    deserializeEvent(buf: SourceDemoBuffer): GameEvent {
        const eventId = buf.readBits(9);

        const descriptor = this.gameEvents.find(
            (descriptor) => descriptor.eventId === eventId,
        );
        if (!descriptor) {
            throw new Error(`Unknown event id ${eventId}!`);
        }

        const event = new GameEvent(descriptor);

        for (const [keyName, type] of descriptor.keys!.entries()) {
            switch (type) {
                case 0:
                    break;
                case 1:
                    event.set(keyName, buf.readASCIIString());
                    break;
                case 2:
                    event.set(keyName, buf.readFloat32());
                    break;
                case 3:
                    event.set(keyName, buf.readInt32());
                    break;
                case 4:
                    event.set(keyName, buf.readInt16());
                    break;
                case 5:
                    event.set(keyName, buf.readInt8());
                    break;
                case 6:
                    event.set(keyName, buf.readBoolean());
                    break;
                default:
                    throw new Error(`Unknown type ${type} for key ${keyName}!`);
            }
        }

        return event;
    }
    serializeEvent(event: GameEvent, buf: SourceDemoBuffer): GameEvent {
        buf.writeBits(event.descriptor.eventId!, 9);

        for (const [keyName, type] of event.descriptor.keys!.entries()) {
            switch (type) {
                case 0:
                    break;
                case 1:
                    buf.writeASCIIString(event.get(keyName));
                    break;
                case 2:
                    buf.writeFloat32(event.get(keyName));
                    break;
                case 3:
                    buf.writeInt32(event.get(keyName));
                    break;
                case 4:
                    buf.writeInt16(event.get(keyName));
                    break;
                case 5:
                    buf.writeInt8(event.get(keyName));
                    break;
                case 6:
                    buf.writeBoolean(event.get(keyName));
                    break;
                default:
                    throw new Error(`Unknown type ${type} for key ${keyName}!`);
            }
        }

        return event;
    }
}
