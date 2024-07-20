import { MapType } from "../../types/MapType";
import { Position } from "../../types/Position";
import detectWallCollision from "../physics/detectWallCollision";

export function playerPositionHandler(
  playerPosition: Position,
  map: MapType,
  delta: Position
): Position {
  const change = detectWallCollision(playerPosition, map, delta);

  return change;
}
