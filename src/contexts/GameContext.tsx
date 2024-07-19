import { createContext, ReactNode, useCallback, useState } from "react";
import { GameContextType } from "../types/GameContextType";
import { MapType } from "../types/MapType";
import { DungeonGenerator } from "../utils/mapGenerator";
import { Position } from "../types/Position";
import { TILE_SIZE } from "../data/game_constants";

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [map, setMap] = useState<MapType>();
  const [initialPosition, setPosition] = useState<Position>({ x: 0, y: 0 });

  const generateMap = useCallback(function generateMap() {
    const map = new DungeonGenerator(50, 50, 5, 7, 15).generate();
    const entry = map.entry;
    setMap(map);
    const offsetX =
      -entry.x * TILE_SIZE + window.innerWidth / 2 - TILE_SIZE / 2;
    const offsetY =
      -entry.y * TILE_SIZE + window.innerHeight / 2 - TILE_SIZE / 2;
    setPosition({ x: offsetX, y: offsetY });
  }, []);

  const value = { map, generateMap, initialPosition, setPosition };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
