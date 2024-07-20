import { Entity } from "../types/Entity";
import { Room } from "../types/Room";
import { TileType } from "../types/TileType";

export class DungeonGenerator {
  private width: number;
  private height: number;
  private minRoomSize: number;
  private maxRoomSize: number;
  private maxRooms: number;
  private enemyChance: number;
  private npcChance: number;
  private chestChance: number;
  private tiles: TileType[][];
  private rooms: Room[];
  private entities: Entity[];

  constructor(
    width: number,
    height: number,
    minRoomSize: number,
    maxRoomSize: number,
    maxRooms: number,
    enemyChance = 0.5,
    npcChance = 0.05,
    chestChance = 0.3
  ) {
    this.width = width;
    this.height = height;
    this.minRoomSize = minRoomSize;
    this.maxRoomSize = maxRoomSize;
    this.maxRooms = maxRooms;
    this.enemyChance = enemyChance;
    this.npcChance = npcChance;
    this.chestChance = chestChance;
    this.tiles = [];
    this.rooms = [];
    this.entities = [];
  }

  generate(): {
    tiles: TileType[][];
    entities: Entity[];
    entry: { x: number; y: number };
    exit: { x: number; y: number };
  } {
    this.initializeTiles();
    this.generateRooms();
    const [entranceX, entranceY, exitX, exitY] = this.placeEntranceAndExit();
    this.placeChests();
    this.placeEntities();
    return {
      tiles: this.tiles,
      entities: this.entities,
      entry: { x: entranceX, y: entranceY },
      exit: { x: exitX, y: exitY },
    };
  }

  private initializeTiles(): void {
    this.tiles = Array(this.height)
      .fill(null)
      .map(() => Array(this.width).fill("wall"));
  }

  private generateRooms(): void {
    for (let i = 0; i < this.maxRooms; i++) {
      const roomWidth =
        Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) +
        this.minRoomSize;
      const roomHeight =
        Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) +
        this.minRoomSize;
      const x = Math.floor(Math.random() * (this.width - roomWidth - 1)) + 1;
      const y = Math.floor(Math.random() * (this.height - roomHeight - 1)) + 1;

      const newRoom: Room = { x, y, width: roomWidth, height: roomHeight };

      if (this.rooms.every((room) => !this.intersect(newRoom, room))) {
        this.createRoom(newRoom);
        if (this.rooms.length > 0) {
          this.connectRooms(newRoom, this.rooms[this.rooms.length - 1]);
        }
        this.rooms.push(newRoom);
      }
    }
  }

  private createRoom(room: Room): void {
    for (let y = room.y; y < room.y + room.height; y++) {
      for (let x = room.x; x < room.x + room.width; x++) {
        this.tiles[y][x] = "floor";
      }
    }
  }

  private connectRooms(room1: Room, room2: Room): void {
    const [x1, y1] = this.getRoomCenter(room1);
    const [x2, y2] = this.getRoomCenter(room2);

    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
      this.tiles[y1][x] = "floor";
    }
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      this.tiles[y][x2] = "floor";
    }
  }

  private getRoomCenter(room: Room): [number, number] {
    return [
      room.x + Math.floor(room.width / 2),
      room.y + Math.floor(room.height / 2),
    ];
  }

  private intersect(room1: Room, room2: Room): boolean {
    return (
      room1.x < room2.x + room2.width &&
      room1.x + room1.width > room2.x &&
      room1.y < room2.y + room2.height &&
      room1.y + room1.height > room2.y
    );
  }

  private placeEntranceAndExit(): number[] {
    const entranceRoom = this.rooms[0];
    const exitRoom = this.rooms[this.rooms.length - 1];

    const [entranceX, entranceY] = this.getRoomCenter(entranceRoom);
    const [exitX, exitY] = this.getRoomCenter(exitRoom);

    this.tiles[entranceY][entranceX] = "entrance";
    this.tiles[exitY][exitX] = "exit";

    return [entranceX, entranceY, exitX, exitY];
  }

  private placeChests(): void {
    this.rooms.forEach((room) => {
      if (Math.random() < this.chestChance) {
        const [x, y] = this.getRandomPositionInRoom(room);
        this.tiles[y][x] = "chest";
      }
    });
  }

  private placeEntities(): void {
    this.rooms.forEach((room, index) => {
      if (index === 0 || index === this.rooms.length - 1) return;

      while (Math.random() < this.enemyChance) {
        const [x, y] = this.getRandomPositionInRoom(room);
        this.entities.push({ type: "enemy", x, y });
        this.tiles[y][x] = "enemy";
      }

      while (Math.random() < this.npcChance) {
        const [x, y] = this.getRandomPositionInRoom(room);
        this.entities.push({ type: "npc", x, y });
        this.tiles[y][x] = "npc";
      }
    });
  }

  private getRandomPositionInRoom(room: Room): [number, number] {
    const x = room.x + Math.floor(Math.random() * (room.width - 2)) + 1;
    const y = room.y + Math.floor(Math.random() * (room.height - 2)) + 1;
    return [x, y];
  }
}
