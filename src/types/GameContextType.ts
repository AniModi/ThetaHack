import { Dispatch } from "react";
import { MapType } from "./MapType";
import { Position } from "./Position";
import { Entity } from "./Entity";

export type GameContextType = {
  map: MapType;
  generateMap: () => void;
  initialPosition: Position;
  setPosition: Dispatch<React.SetStateAction<Position>>;
  setMap: (
    tiles: string[][],
    entities: Entity[],
    entry: Position,
    exit: Position
  ) => void;
  playerPosition: Position;
  handleBattleEnd: () => void;
  handleBattleLose: () => void;
};
