import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MOVEMENT_SPEED, TILE_SIZE } from "../data/game_constants";
import { Position } from "../types/Position";
import { useTick } from "@pixi/react";
import { keyState } from "../utils/userInputs";
import { playerPositionHandler } from "../scripts/positionHandler.ts/handlePlayerPosition";
import { MapType } from "../types/MapType";
import updatePlayerParams from "../utils/updatePlayerParams";

export default function usePlayer(
  map: MapType | undefined,
  setPosition: Dispatch<SetStateAction<Position>>
) {
  const [playerPosition, setPlayerPosition] = useState<Position>({
    x: map?.entry.x || 0,
    y: map?.entry.y || 0,
  });

  useEffect(() => {
    if (!map) {
      return;
    }
    setPlayerPosition(() => {
      return {
        x: map.entry.x,
        y: map.entry.y,
      };
    });
  }, [map]);

  useTick((delta) => {
    if (!map) {
      return;
    }
    let dx = 0;
    let dy = 0;
    if (keyState["w"] || keyState["arrowup"])
      dy -= (MOVEMENT_SPEED * delta) / TILE_SIZE;
    if (keyState["s"] || keyState["arrowdown"])
      dy += (MOVEMENT_SPEED * delta) / TILE_SIZE;
    if (keyState["a"] || keyState["arrowleft"])
      dx -= (MOVEMENT_SPEED * delta) / TILE_SIZE;
    if (keyState["d"] || keyState["arrowright"])
      dx += (MOVEMENT_SPEED * delta) / TILE_SIZE;
    if (dx || dy) {
      const change = playerPositionHandler(playerPosition, map, {
        x: dx,
        y: dy,
      });

      dx = change.x;
      dy = change.y;
      
      updatePlayerParams(playerPosition, [... map.chestPositions.map((pos) => ({type: "chest", ...pos})), ...map.entities]);
      setPlayerPosition((prev) => {
        return {
          x: prev.x + dx,
          y: prev.y + dy,
        };
      });
      setPosition((prev) => {
        return {
          x: prev.x - dx * TILE_SIZE,
          y: prev.y - dy * TILE_SIZE,
        };
      });
    }
  });

  return { playerPosition, setPlayerPosition };
}
