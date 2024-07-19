/// <reference types="vite-plugin-svgr/client" />
import { Texture } from "@pixi/core";
import Wall from "./dungeon/wall.png";
import Floor from "./dungeon/floor.png";
import Chest from "./dungeon/chest.png";
import Door from "./dungeon/door.png";
import DoorOpen from "./dungeon/doors_open.png";
import Zombie from "./characters/zombie.png";
import Wizard from "./characters/wizard.png";
import Knight from "./characters/knight.png";
import Elf from "./characters/elf.png";

const DungeonAssets = {
  Wall: Texture.from(Wall),
  Floor: Texture.from(Floor),
  Chest: Texture.from(Chest),
  Door: Texture.from(Door),
  Zombie: Texture.from(Zombie),
  Wizard: Texture.from(Wizard),
  DoorOpen: Texture.from(DoorOpen),
};

export { DungeonAssets, Wizard, Knight, Elf };

// icons
import Play from "./icons/play.svg?react";
import Settings from "./icons/settings.svg?react";
import Exit from "./icons/exit.svg?react";

export { Play, Settings, Exit };
