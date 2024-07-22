import { playerParameters } from "../data/playerParameters";
import { Entity } from "../types/Entity";
import { Position } from "../types/Position";

export default function updatePlayerParams(
  playerPosition: Position,
  entities: Entity[]
) {
  playerParameters.isNearCharacter = "";
  playerParameters.characterPosition = {
    x: 0,
    y: 0,
  };
  entities.forEach((entity) => {
    if (
      Math.abs(entity.x - playerPosition.x) < 2 &&
      Math.abs(entity.y - playerPosition.y) < 2
    ) {
      playerParameters.isNearCharacter = entity.type;
      playerParameters.characterPosition = {
        x: entity.x,
        y: entity.y,
      };
      return;
    }
  });
}
