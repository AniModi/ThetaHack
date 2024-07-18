import { Texture } from "@pixi/core";
import Wall from "./dungeon/wall.png";
import Floor from "./dungeon/floor.png";
import Chest from "./dungeon/chest.png";
import Door from "./dungeon/door.png";
import Zombie from "./zombie.png";
import Wizard from "./wizard.png";
import DoorOpen from "./dungeon/doors_open.png";

const DungeonAssets = {
  Wall: Texture.from(Wall),
  Floor: Texture.from(Floor),
  Chest: Texture.from(Chest),
  Door: Texture.from(Door),
  Zombie: Texture.from(Zombie),
  Wizard: Texture.from(Wizard),
  DoorOpen: Texture.from(DoorOpen),
};

export { DungeonAssets };
