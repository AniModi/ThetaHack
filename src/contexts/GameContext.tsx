import { createContext, ReactNode, useCallback, useState } from "react";
import { GameContextType } from "../types/GameContextType";
import { MapType } from "../types/MapType";
import { DungeonGenerator } from "../utils/mapGenerator";
import { Position } from "../types/Position";
import { TILE_SIZE } from "../data/game_constants";
import { Entity } from "../types/Entity";
import usePlayer from "../hooks/usePlayer";
import { CardContextProvider } from "./CardContext";

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [map, setMapState] = useState<MapType>();
  const [initialPosition, setPosition] = useState<Position>({ x: 0, y: 0 });
  const { playerPosition } = usePlayer(map, setPosition);

  const generateMap = useCallback(function generateMap() {
    const map = new DungeonGenerator(50, 50, 5, 7, 15).generate();
    const entry = map.entry;
    setMapState(map);
    const offsetX =
      -entry.x * TILE_SIZE + window.innerWidth / 2 - TILE_SIZE / 2;
    const offsetY =
      -entry.y * TILE_SIZE + window.innerHeight / 2 - TILE_SIZE / 2;
    setPosition({ x: offsetX, y: offsetY });
  }, []);

  const setMap = useCallback(function setMap(
    tiles: string[][],
    entities: Entity[],
    entry: Position,
    exit: Position
  ) {
    setMapState({ tiles, entities, entry, exit });
    const offsetX =
      -entry.x * TILE_SIZE + window.innerWidth / 2 - TILE_SIZE / 2;
    const offsetY =
      -entry.y * TILE_SIZE + window.innerHeight / 2 - TILE_SIZE / 2;
    setPosition({ x: offsetX, y: offsetY });
  },
  []);

  const value = {
    map,
    generateMap,
    initialPosition,
    setPosition,
    setMap,
    playerPosition,
  };

  return (
    <GameContext.Provider value={value}>
      <CardContextProvider>{children}</CardContextProvider>
    </GameContext.Provider>
  );
}
