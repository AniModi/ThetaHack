import { Request, Response } from "express";
import DungeonModel from "../models/Dungeon";
import { isPositionInRoom } from "../helpers/isCoordinateInRoom";

export async function openChest(req: Request, res: Response) {
  try {
    const { dungeonID, chest_position } = req.body;

    const dungeon = await DungeonModel.findOne({ unique_id: dungeonID });

    if (!dungeon) {
      return res.status(404).json({ message: "Dungeon not found" });
    }

    const chest = dungeon.chest_locations.find(
      (chest) => chest.x === chest_position.x && chest.y === chest_position.y
    );

    if (!chest) {
      return res.status(404).json({ message: "Chest not found" });
    }

    const chestRoom = dungeon.rooms.filter((room) => {
      return isPositionInRoom(chest_position, room);
    })[0];

    if (chestRoom === undefined) {
      return res.status(404).json({ message: "Chest not found" });
    }

    const enemies = dungeon.enemy_locations.filter((enemy) => {
      return isPositionInRoom(enemy, chestRoom);
    });

    if (enemies.length > 0) {
      return res.status(404).json({ message: "Defeat all enemies before opening chest", enemies });
    }

    return res.status(200).json({ message: "Chest opened" });
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
