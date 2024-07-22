import { Entity } from "../types/Entity";
import { Position } from "../types/Position";
import { TileType } from "../types/TileType";
import axiosInstance from "./axiosInstance";

export async function generateDungeon() {
  try {
    const response = await axiosInstance.get("/dungeon");
    const {
      dungeon,
      dungeonID,
    }: {
      dungeon: {
        tiles: TileType[][];
        entities: Entity[];
        entry: Position;
        exit: Position;
        chestPositions: Position[];
      };
      dungeonID: string;
    } = response.data;
    return { dungeon, dungeonID };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteDungeon(dungeonID: string) {
  try {
    const response = await axiosInstance.delete(`/dungeon/${dungeonID}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
