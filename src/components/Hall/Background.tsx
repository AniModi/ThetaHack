import { Container, Sprite } from "@pixi/react";
import { Fragment } from "react/jsx-runtime";
import { TILE_SIZE } from "../../data/game_constants";
import { HallAssets } from "../../assets";
import { useGame } from "../../hooks/useGame";

const { Grass, Flower, Tree, WaterTile, Purple, Stone, Brick } = HallAssets;

export default function Background() {
  const { map } = useGame();

  const { tiles: village_background } = map!;

  return (
    <Container anchor={0.5}>
      {village_background
        .map((row, y) => {
          return row.map((tile, x) => {
            let texture;

            switch (tile) {
              case "stone":
                texture = Stone;
                break;
              case "brick":
                texture = Brick;
                break;
              case "floor":
                texture = Grass;
                break;
              case "wall":
                texture = Tree;
                break;
              case "flower":
                texture = Flower;
                break;
              case "water":
                texture = WaterTile;
                break;
              case "purple":
                texture = Purple;
                break;
              default:
                texture = Grass;
                break;
            }

            return (
              <Fragment key={`${x}-${y}`}>
                <Sprite
                  texture={Grass}
                  x={x * TILE_SIZE}
                  y={y * TILE_SIZE}
                  width={TILE_SIZE}
                  height={TILE_SIZE}
                  anchor={0.5}
                />
                <Sprite
                  texture={texture}
                  x={x * TILE_SIZE}
                  y={y * TILE_SIZE}
                  width={TILE_SIZE}
                  height={TILE_SIZE}
                  anchor={0.5}
                  onpointerdown={() => {
                    console.log(x, y);
                  }}
                  interactive={true}
                />
              </Fragment>
            );
          });
        })
        .filter(Boolean)}
    </Container>
  );
}
