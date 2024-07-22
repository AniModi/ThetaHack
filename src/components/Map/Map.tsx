import { Container, Sprite } from "@pixi/react";
import { getTexture, isIsolatedWall } from "../../utils/mapUtils";
import { DungeonAssets } from "../../assets";
import { useGame } from "../../hooks/useGame";
import { Fragment } from "react/jsx-runtime";
import { TILE_SIZE } from "../../data/game_constants";
const { Floor } = DungeonAssets;

export default function Map() {
  const { map, initialPosition } = useGame();
  const { tiles: dungeonMap } = map!;

  return (
    <Container position={initialPosition} anchor={0.5}>
      {dungeonMap
        .map((row, y) => {
          return row.map((tile, x) => {
            if (tile === "wall" && !isIsolatedWall(x, y, dungeonMap)) {
              return null;
            }

            const isWall = tile === "wall";

            const texture = getTexture(tile);

            return (
              <Fragment key={`${x}-${y}`}>
                {!isWall && (
                  <Sprite
                    texture={Floor}
                    x={x * TILE_SIZE}
                    y={y * TILE_SIZE}
                    width={TILE_SIZE}
                    height={TILE_SIZE}
                    anchor={0.5}
                  />
                )}
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
