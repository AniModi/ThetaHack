import { createContext, ReactNode, useCallback, useState } from "react";
import { GameContextType } from "../types/GameContextType";
import { MapType } from "../types/MapType";
import { Position } from "../types/Position";
import { TILE_SIZE } from "../data/game_constants";
import { Entity } from "../types/Entity";
import usePlayer from "../hooks/usePlayer";
import { generateDungeon, deleteDungeon } from "../service/dungeonServices";
import { playerParameters } from "../data/playerParameters";

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [map, setMapState] = useState<MapType>();
  const [initialPosition, setPosition] = useState<Position>({ x: 0, y: 0 });
  const { playerPosition } = usePlayer(map, setPosition);

  const generateMap = useCallback(function generateMap() {
    let _dungeonID = "";
    async function generate() {
      const { dungeon, dungeonID } = (await generateDungeon())!;
      _dungeonID = dungeonID;
      const entry = dungeon.entry;
      setMapState(dungeon);
      const offsetX =
        -entry.x * TILE_SIZE + window.innerWidth / 2 - TILE_SIZE / 2;
      const offsetY =
        -entry.y * TILE_SIZE + window.innerHeight / 2 - TILE_SIZE / 2;
      setPosition({ x: offsetX, y: offsetY });
      playerParameters.dungeonID = dungeonID;
    }

    generate();

    return () => {
      deleteDungeon(_dungeonID);
    };
  }, []);

  const setMap = useCallback(function setMap(
    tiles: string[][],
    entities: Entity[],
    entry: Position,
    exit: Position,
    chestPositions: Position[] = []
  ) {
    setMapState({ tiles, entities, entry, exit, chestPositions });
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

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
