import { Request, Response } from "express";
import { attackData } from "../data/attacks";
import DungeonModel from "../models/Dungeon";
import BattleModel from "../models/BattleModel";
import getDamage from "../helpers/getDamage";

export async function getAttacks(req: Request, res: Response) {
  try {
    res.json(attackData);
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

export async function startBattle(req: Request, res: Response) {
  try {
    const { dungeonID, enemy_position } = req.body;

    const dungeon = await DungeonModel.findOne({ unique_id: dungeonID });

    if (!dungeon) {
      return res.status(404).json({ message: "Dungeon not found" });
    }

    const enemy = dungeon.enemy_locations.find(
      (enemy) => enemy.x === enemy_position.x && enemy.y === enemy_position.y
    );
    if (!enemy) {
      return res.status(404).json({ message: "Enemy not found" });
    }

    const oldBattle = await BattleModel.findOne({ dungeonID });
    if (oldBattle) {
      return res.status(200).json({
        message: "Battle already started",
        player_health: oldBattle.player_health,
        enemy_health: oldBattle.enemy_health,
        enemy_position: oldBattle.enemy_position,
      });
    }

    const player_health = 100;
    const enemy_health = 100;

    const newBattle = new BattleModel({
      dungeonID,
      player_health,
      enemy_health,
      enemy_position,
    });

    await newBattle.save();

    return res
      .status(200)
      .json({ message: "Battle started", player_health, enemy_health });
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

export async function attackEnemy(req: Request, res: Response) {
  try {
    const { dungeonID, attack } = req.body;

    const dungeon = await DungeonModel.findOne({ unique_id: dungeonID });

    if (!dungeon) {
      return res.status(404).json({ message: "Dungeon not found" });
    }

    const battle = await BattleModel.findOne({ dungeonID });

    if (!battle) {
      return res.status(404).json({ message: "Battle not found" });
    }

    const damage = getDamage(attack);
    battle.enemy_health -= damage;

    let enemyAttack = "";
    if (battle.enemy_health > 0) {
      enemyAttack = Object.keys(attackData)[0];
      Object.keys(attackData).forEach((attack) => {
        if (Math.random() < 0.5) {
          enemyAttack = attack;
        }
      });
      await battle.save();
    } else {
      // remove enemy from dungeon
      dungeon.enemy_locations = dungeon.enemy_locations.filter(
        (enemy) =>
          enemy.x !== battle.enemy_position.x &&
          enemy.y !== battle.enemy_position.y
      );

      await dungeon.save();

      // remove battle
      await battle.deleteOne({ dungeonID });
    }

    return res
      .status(200)
      .json({ message: "Attack successful", damage, enemyAttack });
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

export async function attackPlayer(req: Request, res: Response) {
  try {
    const { dungeonID, attack } = req.body;

    const dungeon = await DungeonModel.findOne({ unique_id: dungeonID });

    if (!dungeon) {
      return res.status(404).json({ message: "Dungeon not found" });
    }

    const battle = await BattleModel.findOne({ dungeonID });

    if (!battle) {
      return res.status(404).json({ message: "Battle not found" });
    }

    const damage = getDamage(attack);
    battle.player_health -= damage;

    if (battle.player_health <= 0) {
      // remove battle
      await battle.deleteOne({ dungeonID });
      await dungeon.deleteOne({ unique_id: dungeonID });
      return res.status(200).json({ message: "You died", damage });
    }

    await battle.save();

    return res.status(200).json({ message: "Attack successful", damage });
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
