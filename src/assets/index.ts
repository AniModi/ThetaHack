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

import Grass from "./village/grass.png";
import House from "./village/house.png";
import Flower from "./village/flower.png";
import Tree from "./village/tree.png";
import Tower from "./village/tower.png";
import Ruin from "./village/ruin.png";

const VillageAssets = {
  Grass: Texture.from(Grass),
  Water: Water,

  Flower: Texture.from(Flower),
  Tree: Texture.from(Tree),
};

const DungeonAssets = {
  Wall: Texture.from(Wall),
  Floor: Texture.from(Floor),
  Chest: Texture.from(Chest),
  Door: Texture.from(Door),
  DoorOpen: Texture.from(DoorOpen),
};

const Characters = {
  Zombie: Texture.from(Zombie),
  Wizard: Texture.from(Wizard),
  Knight: Texture.from(Knight),
  Elf: Texture.from(Elf),
};

const Buildings = {
  House: Texture.from(House),
  Tower: Texture.from(Tower),
  Ruin: Texture.from(Ruin),
};

export {
  DungeonAssets,
  Characters,
  VillageAssets,
  Buildings,
  Wizard,
  Elf,
  Knight,
};

// icons
import Play from "./icons/play.svg?react";
import Settings from "./icons/settings.svg?react";
import Exit from "./icons/exit.svg?react";
import { Water } from "./village";

export { Play, Settings, Exit };

// cards
import PlayBoard from "./cards/playboard.png";
import EmptyCard from "./cards/empty_card.png";
import EmptyCardEnemy from "./cards/enemy_empty_card.png";
import CardBack from "./cards/card_back.png";
import CardBackEnemy from "./cards/enemy_card_back.png";
import CardFrame from "./cards/card.png";
import WizardCard from "./cards/wizard.png";
import CardHealth from "./cards/health.png";
import CardDamage from "./cards/damage.png";


const Cards = {
  PlayBoard: Texture.from(PlayBoard),
  EmptyCard: Texture.from(EmptyCard),
  EmptyCardEnemy: Texture.from(EmptyCardEnemy),
  CardBack: Texture.from(CardBack),
  CardBackEnemy: Texture.from(CardBackEnemy),
  CardFrame: Texture.from(CardFrame),
  WizardCard: Texture.from(WizardCard),
  CardHealth: Texture.from(CardHealth),
  CardDamage: Texture.from(CardDamage),
};

export { Cards };
