import { Container, Sprite } from "@pixi/react";
import { Characters } from "../../assets";
import { useGame } from "../../hooks/useGame";
import { TILE_SIZE } from "../../data/game_constants";

const { Wizard } = Characters;

export default function Player() {
  const { initialPosition, playerPosition } = useGame();



  return (
    <Container position={initialPosition} anchor={0.5}>
      <Sprite
        texture={Wizard}
        x={playerPosition.x * TILE_SIZE}
        y={playerPosition.y * TILE_SIZE}
        height={TILE_SIZE}
        width={TILE_SIZE}
        anchor={0.5}
      />
    </Container>
  );
}
