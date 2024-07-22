import { MapType } from "../../types/MapType";
import { Position } from "../../types/Position";

export default function detectWallCollision(
  playerPosition: Position,
  map: MapType,
  delta: Position
): Position {
  const passageAllowed = ["floor", "purple", "stone"];
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
  if (passageAllowed.includes(tiles[Math.round(y)][newPositionX])) {
    change.x = dx;
  }
  if (dy > 0) {
    newPositionY = Math.ceil(y + dy);
  } else {
    newPositionY = Math.floor(y + dy);
  }
  if (passageAllowed.includes(tiles[newPositionY][Math.round(x)])) {
    change.y = dy;
  }
  return change;
}
