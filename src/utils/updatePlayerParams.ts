import { playerParameters } from "../data/playerParameters";
import { Entity } from "../types/Entity";
import { Position } from "../types/Position";

export default function updatePlayerParams(
  playerPosition: Position,
  entities: Entity[]
) {
  playerParameters.isNearCharacter = "";
  entities.forEach((entity) => {
    if (
      Math.abs(entity.x - playerPosition.x) < 3 &&
      Math.abs(entity.y - playerPosition.y) < 3
    ) {
      playerParameters.isNearCharacter = entity.type;
      return;
    }
  });
}
