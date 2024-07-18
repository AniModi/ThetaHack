import { Dispatch } from "react";
import { MapType } from "./MapType";
import { Position } from "./Position";

export type GameContextType = {
  map: MapType | undefined;
  generateMap: () => void;
  initialPosition: Position
  setPosition: Dispatch<React.SetStateAction<Position>>
};
