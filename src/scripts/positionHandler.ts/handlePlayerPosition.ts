import { playerParameters } from "../../data/playerParameters";
import { MapType } from "../../types/MapType";
import { Position } from "../../types/Position";
import detectWallCollision from "../physics/detectWallCollision";

export function playerPositionHandler(
  playerPosition: Position,
  map: MapType,
  delta: Position
): Position {
  const change = detectWallCollision(playerPosition, map, delta);

  const playerTile = {
    x: Math.round(playerPosition.x + change.x),
    y: Math.round(playerPosition.y + change.y),
  };

  const { tiles } = map;
  playerParameters.isNearEnemy = false;
  playerParameters.isNearChest = false;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (tiles[playerTile.y + i]) {
        const tile = tiles[playerTile.y + i][playerTile.x + j];

        if (tile === "enemy") {
          playerParameters.isNearEnemy = true;
        }

        if (tile === "chest") {
          playerParameters.isNearChest = true;
        }
      }
    }
  }

  return change;
}
