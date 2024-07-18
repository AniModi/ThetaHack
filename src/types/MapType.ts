import { Entity } from "./Entity";
import { Position } from "./Position";
import { TileType } from "./TileType";

export type MapType = {
  tiles: TileType[][];
  entities: Entity[];
  entry: Position;
  exit: Position;
};
