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
import Theta from "./village/theta.svg";
import WaterTile from "./village/water2.png";
import Purple from "./village/purple.png";

import Stone from "./hall/stone.png";
import Brick from "./hall/brick.png";
import Castle from "./hall/castle.png";
import Fort from "./hall/castle2.png";
import Shao from "./hall/castle3.png";
import Edge from "./hall/edge.png";
import AI from "./hall/ai.png";
import Video from "./hall/vid.png";
import ThetaNet from "./hall/network.png";

const VillageAssets = {
  Grass: Texture.from(Grass),
  Water: Water,
  WaterTile: Texture.from(WaterTile),
  Flower: Texture.from(Flower),
  Tree: Texture.from(Tree),
  Purple: Texture.from(Purple),
};

const HallAssets = {
  Grass: Texture.from(Grass),
  WaterTile: Texture.from(WaterTile),
  Flower: Texture.from(Flower),
  Tree: Texture.from(Tree),
  Purple: Texture.from(Purple),
  Stone: Texture.from(Stone),
  Brick: Texture.from(Brick),
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
  None: Texture.EMPTY,
};

const Buildings = {
  House: Texture.from(House),
  Tower: Texture.from(Tower),
  Ruin: Texture.from(Ruin),
  Theta: Texture.from(Theta),
  ThetaNet: Texture.from(ThetaNet),
  Castle: Texture.from(Castle),
  Fort: Texture.from(Fort),
  Shao: Texture.from(Shao),
  Edge: Texture.from(Edge),
  AI: Texture.from(AI),
  Video: Texture.from(Video),
};

export {
  DungeonAssets,
  Characters,
  VillageAssets,
  HallAssets,
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
import CardFrameEnemy from "./cards/enemy_card.png";
import CardHealth from "./cards/health.png";
import CardDamage from "./cards/damage.png";
import WizardCard from "./cards/image/wizard.png";
import NinjaCard from "./cards/image/ninja.png";
import DemonCard from "./cards/image/demon.png";

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
  CardFrameEnemy: Texture.from(CardFrameEnemy),
  NinjaCard: Texture.from(NinjaCard),
  DemonCard: Texture.from(DemonCard),
};

// card images
import ArchmageAlara from "./cards/image/wizard_faction/ArchmageAlara.jpg";
import ChronomancerCyrus from "./cards/image/wizard_faction/ChronomancerCyrus.jpg";
import IllusionistThane from "./cards/image/wizard_faction/IllusionistThane.jpg";
import Necromancer_Varek from "./cards/image/wizard_faction/Necromancer_Varek.jpg";
import LadySeraphina from "./cards/image/knight_faction/LadySeraphina.jpg";
import PaladinElara from "./cards/image/knight_faction/PaladinElara.jpg";
import SirGalahad from "./cards/image/knight_faction/SirGalahad.jpg";
import SquireThalia from "./cards/image/knight_faction/SquireThalia.jpg";
import HighDruidElowen from "./cards/image/elf_faction/HighDruidElowen.jpg";
import RangerTalon from "./cards/image/elf_faction/RangerTalon.jpg";
import MoonPriestessElysia from "./cards/image/elf_faction/MoonPriestessElysia.jpg";
import WindWhispererThalor from "./cards/image/elf_faction/WindWhispererThalor.jpg";
import DarkSorcererMalakai from "./cards/image/evil_faction/DarkSorcererMalakai.jpg";
import ShadowAssassinKael from "./cards/image/evil_faction/ShadowAssassinKael.jpg";
import DeathlordDrakus from "./cards/image/evil_faction/DeathlordDrakus.jpg";
import BloodWitchSylva from "./cards/image/evil_faction/BloodWitchSylva.jpg";
import ChaosCultistVermina from "./cards/image/evil_faction/ChaosCultistVermina.jpg";

const CardImages = {
  WIZARDS: {
    ArchmageAlara: Texture.from(ArchmageAlara),
    ChronomancerCyrus: Texture.from(ChronomancerCyrus),
    IllusionistThane: Texture.from(IllusionistThane),
    Necromancer_Varek: Texture.from(Necromancer_Varek),
  },
  KNIGHTS: {
    LadySeraphina: Texture.from(LadySeraphina),
    PaladinElara: Texture.from(PaladinElara),
    SirGalahad: Texture.from(SirGalahad),
    SquireThalia: Texture.from(SquireThalia),
  },
  ELVES: {
    HighDruidElowen: Texture.from(HighDruidElowen),
    RangerTalon: Texture.from(RangerTalon),
    MoonPriestessElysia: Texture.from(MoonPriestessElysia),
    WindWhispererThalor: Texture.from(WindWhispererThalor),
  },
  EVIL: {
    DarkSorcererMalakai: Texture.from(DarkSorcererMalakai),
    ShadowAssassinKael: Texture.from(ShadowAssassinKael),
    DeathlordDrakus: Texture.from(DeathlordDrakus),
    BloodWitchSylva: Texture.from(BloodWitchSylva),
    ChaosCultistVermina: Texture.from(ChaosCultistVermina),
  },
};

export { Cards, CardImages };

import BattleBackgroundImage from "./battle/background.png";

const BattleAssets = {
  BattleBackgroundImage: Texture.from(BattleBackgroundImage),
};

export { BattleAssets };

// Attacls
import FireballData from "./battle/attacks/fireball/spritesheet.json";
import FireballSheet from "./battle/attacks/fireball/spritesheet.png";
import lighteningData from "./battle/attacks/lightening/spritesheet.json";
import lighteningSheet from "./battle/attacks/lightening/spritesheet.png";
import PoisonData from "./battle/attacks/poison/spritesheet.json";
import PoisonSheet from "./battle/attacks/poison/spritesheet.png";
import IceData from "./battle/attacks/ice/spritesheet.json";
import IceSheet from "./battle/attacks/ice/spritesheet.png";



import { getTextureFromSpriteSheet } from "../utils/loadTexturesFromSpritesheet";
import { SpriteSheetData } from "../types/SpriteSheetData";

const Attacks = {
  Fireball: getTextureFromSpriteSheet({
    data: FireballData as SpriteSheetData,
    img: FireballSheet,
  }),
  Lightning: getTextureFromSpriteSheet({
    data: lighteningData as SpriteSheetData,
    img: lighteningSheet,
  }),
  Poison: getTextureFromSpriteSheet({
    data: PoisonData as SpriteSheetData,
    img: PoisonSheet,
  }),
  Ice: getTextureFromSpriteSheet({
    data: IceData as SpriteSheetData,
    img: IceSheet,
  }),
};

export { Attacks };
