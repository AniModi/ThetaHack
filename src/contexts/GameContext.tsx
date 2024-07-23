import { createContext, ReactNode, useCallback, useState } from "react";
import { GameContextType } from "../types/GameContextType";
import { MapType } from "../types/MapType";
import { Position } from "../types/Position";
import { TILE_SIZE } from "../data/game_constants";
import { Entity } from "../types/Entity";
import usePlayer from "../hooks/usePlayer";
import { generateDungeon, deleteDungeon } from "../service/dungeonServices";
import { playerParameters } from "../data/playerParameters";
import { useNavigate } from "react-router-dom";

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [map, setMapState] = useState<MapType>({
    tiles: [],
    entities: [],
    entry: { x: 0, y: 0 },
    exit: { x: 0, y: 0 },
    chestPositions: [],
  });
  const [initialPosition, setPosition] = useState<Position>({ x: 0, y: 0 });
  const { playerPosition, setPlayerPosition } = usePlayer(map, setPosition);
  const navigate = useNavigate();

  const generateMap = useCallback(
    function generateMap() {
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
        setPlayerPosition({ x: entry.x, y: entry.y });
        playerParameters.dungeonID = dungeonID;
        navigate("/play/dungeon");
      }

      generate();

      return () => {
        deleteDungeon(_dungeonID);
      };
    },
    [setPlayerPosition, navigate]
  );

  const setMap = useCallback(
    function setMap(
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
      setPlayerPosition({ x: entry.x, y: entry.y });
    },
    [setPlayerPosition]
  );

  const handleBattleEnd = useCallback(() => {
    const enemy_pos = playerParameters.characterPosition;

    setMapState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        entities: prev.entities.filter(
          (entity) => entity.x !== enemy_pos.x || entity.y !== enemy_pos.y
        ),
        tiles: prev.tiles.map((row, y) => {
          return row.map((col, x) => {
            if (x === enemy_pos.x && y === enemy_pos.y) {
              return "floor";
            }
            return col;
          });
        }),
      };
    });
    playerParameters.characterPosition = { x: 0, y: 0 };
    playerParameters.isNearCharacter = "";
    navigate(-1);
  }, [navigate]);

  const handleBattleLose = useCallback(() => {
    alert("You lost");
    navigate("/play");
  }, [navigate]);

  const removeChest = useCallback((pos: Position) => {
    setMapState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        chestPositions: prev.chestPositions.filter(
          (chest) => chest.x !== pos.x || chest.y !== pos.y
        ),
        tiles: prev.tiles.map((row, y) => {
          return row.map((col, x) => {
            if (x === pos.x && y === pos.y) {
              return "floor";
            }
            return col;
          });
        }),
      };
    });
  }, []);

  const value = {
    map,
    generateMap,
    initialPosition,
    setPosition,
    setMap,
    playerPosition,
    handleBattleEnd,
    handleBattleLose,
    removeChest,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
