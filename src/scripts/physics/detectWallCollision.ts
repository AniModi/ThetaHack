import { MapType } from "../../types/MapType";
import { Position } from "../../types/Position";

export default function detectWallCollision(
  playerPosition: Position,
  map: MapType,
  delta: Position
): Position {
  const { x, y } = playerPosition;
  const { x: dx, y: dy } = delta;
  const change: Position = { x: 0, y: 0 };
  const { tiles } = map;
  let newPositionX = 0;
  let newPositionY = 0;

  if (dx > 0) {
    newPositionX = Math.ceil(x + dx);
  } else {
    newPositionX = Math.floor(x + dx);
  }
  if (tiles[Math.round(y)][newPositionX] === "floor") {
    change.x = dx;
  }
  if (dy > 0) {
    newPositionY = Math.ceil(y + dy);
  } else {
    newPositionY = Math.floor(y + dy);
  }
  if (tiles[newPositionY][Math.round(x)] === "floor") {
    change.y = dy;
  }
  return change;
}
