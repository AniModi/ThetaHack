import { Request, Response } from "express";
import { DungeonGenerator } from "../helpers/MagGenerator";
import { randomUUID } from "crypto";
import DungeonModel from "../models/Dungeon";

export async function generateDungeon(req: Request, res: Response) {
  try {
    const dungeon = new DungeonGenerator(50, 50, 5, 7, 15).generate();

    const dungeonID = randomUUID();

    const { chestPositions, entities, rooms } = dungeon;

    const enemy_locations = entities
      .filter((entity) => entity.type === "enemy")
      .map((enemy) => ({ x: enemy.x, y: enemy.y }));
    const chest_locations = chestPositions.map((chest) => ({
      x: chest.x,
      y: chest.y,
    }));
    const chest_states = chestPositions.map(() => "locked");

    const newDungeon = new DungeonModel({
      unique_id: dungeonID,
      enemy_locations,
      chest_locations,
      chest_states,
      rooms,
    });

    await newDungeon.save();

    return res
      .status(200)
      .json({ message: "Map generated", dungeonID, dungeon });
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

export async function deleteDungeon(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const dungeon = await DungeonModel.findOne({ unique_id: id });

    if (!dungeon) {
      return res.status(404).json({ message: "Dungeon not found" });
    }
    await dungeon.deleteOne();

    return res.status(200).json({ message: "Dungeon deleted" });
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
