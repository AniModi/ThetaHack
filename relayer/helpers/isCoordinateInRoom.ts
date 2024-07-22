import { Position } from "../types/Position";
import { Room } from "../types/Room";

export function isPositionInRoom(position: Position, room: Room): boolean {
    return (
      position.x >= room.x &&
      position.x < room.x + room.width &&
      position.y >= room.y &&
      position.y < room.y + room.height
    );
  }