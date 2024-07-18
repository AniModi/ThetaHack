import { Container, Sprite } from "@pixi/react";
import { DungeonAssets } from "../../assets";
import { useGame } from "../../hooks/useGame";
import { TILE_SIZE, MOVEMENT_SPEED } from "../../data/game_constants";
import { useEffect, useState } from "react";
import { Position } from "../../types/Position";

const { Wizard } = DungeonAssets;

export default function Player() {
  const {  map, initialPosition, setPosition } = useGame();
  const [playerPosition, setPlayerPosition] = useState<Position>({
    x: map!.entry.x,
    y: map!.entry.y,
  });


  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if(e.key === "ArrowUp") {
        setPosition((prev) => ({...prev, y: prev.y + MOVEMENT_SPEED}));
        setPlayerPosition((prev) => ({...prev, y: prev.y - MOVEMENT_SPEED / TILE_SIZE}));
      }
      if(e.key === "ArrowDown") {
        setPosition((prev) => ({...prev, y: prev.y - MOVEMENT_SPEED}));
        setPlayerPosition((prev) => ({...prev, y: prev.y + MOVEMENT_SPEED / TILE_SIZE}));
      }
      if(e.key === "ArrowLeft") {
        setPosition((prev) => ({...prev, x: prev.x + MOVEMENT_SPEED}));
        setPlayerPosition((prev) => ({...prev, x: prev.x - MOVEMENT_SPEED / TILE_SIZE}));
      }
      if(e.key === "ArrowRight") {
        setPosition((prev) => ({...prev, x: prev.x - MOVEMENT_SPEED}));
        setPlayerPosition((prev) => ({...prev, x: prev.x + MOVEMENT_SPEED / TILE_SIZE}));
      }
    })
  }, [map, setPosition]);
  

  return (
    <Container position={initialPosition}>
      <Sprite
        texture={Wizard}
        x={playerPosition.x * TILE_SIZE}
        y={playerPosition.y * TILE_SIZE}
        height={TILE_SIZE}
        width={TILE_SIZE}
      />
    </Container>
  );
}
