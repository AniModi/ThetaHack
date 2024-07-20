import { Container, Sprite } from "@pixi/react";
import { Buildings, Characters } from "../../assets";
import { Position } from "../../types/Position";
import { TILE_SIZE } from "../../data/game_constants";

type BuildingProps = {
  character: keyof typeof Characters;
  building: keyof typeof Buildings;
  position: Position;
  height: number;
  width: number;
};

export default function Building({
  character,
  building,
  position,
  height,
  width,
}: BuildingProps) {
  return (
    <Container key={building}>
      <Sprite
        x={position.x * TILE_SIZE}
        y={position.y * TILE_SIZE}
        texture={Buildings[building]}
        height={height}
        width={width}
      ></Sprite>
      <Sprite
        x={(position.x * TILE_SIZE) + width}
        y={position.y * TILE_SIZE + TILE_SIZE}
        texture={Characters[character]}
        height={TILE_SIZE}
        width={TILE_SIZE}
      ></Sprite>
    </Container>
  );
}
