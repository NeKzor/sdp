import { SourceDemoBuffer } from '../buffer.ts';

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
    dataKeys: Record<string, string | number | boolean>;
    constructor(descriptor: GameEventDescriptor) {
        this.descriptor = descriptor;
        this.dataKeys = {};
    }
    get(keyName: string) {
        return this.dataKeys[keyName];
    }
    set(keyName: string, defaultValue: string | number | boolean) {
        return (this.dataKeys[keyName] = defaultValue);
    }
}

export class GameEventManager {
    gameEvents: GameEventDescriptor[];
    constructor(gameEvents: GameEventDescriptor[]) {
        this.gameEvents = gameEvents;
    }
    deserializeEvent(buf: SourceDemoBuffer) {
        const eventId = buf.readBits(9);

        const descriptor = this.gameEvents.find(
            (descriptor) => descriptor.eventId === eventId,
        );
        if (!descriptor) {
            throw new Error(`Unknown event id ${eventId}!`);
        }

        const event = new GameEvent(descriptor);

        for (const [keyName, type] of Object.entries(descriptor.keys ?? {})) {
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
    serializeEvent(event: GameEvent, buf: SourceDemoBuffer) {
        buf.writeBits(event.descriptor.eventId!, 9);

        for (const [keyName, type] of Object.entries(event.descriptor.keys!)) {
            switch (type) {
                case 0:
                    break;
                case 1:
                    buf.writeASCIIString(event.get(keyName) as string);
                    break;
                case 2:
                    buf.writeFloat32(event.get(keyName) as number);
                    break;
                case 3:
                    buf.writeInt32(event.get(keyName) as number);
                    break;
                case 4:
                    buf.writeInt16(event.get(keyName) as number);
                    break;
                case 5:
                    buf.writeInt8(event.get(keyName) as number);
                    break;
                case 6:
                    buf.writeBoolean(event.get(keyName) as boolean);
                    break;
                default:
                    throw new Error(`Unknown type ${type} for key ${keyName}!`);
            }
        }

        return event;
    }
}
