import { CardImages, Cards } from "../assets";
import { CardType } from "../types/CardType";

const { WizardCard, NinjaCard, CardFrame, DemonCard, CardFrameEnemy } = Cards;

export const PLAYER_CARDS: CardType[] = [
  {
    damage: "99",
    health: "99",
    image: NinjaCard,
    name: "Ninja",
    frame: CardFrame,
  },
  {
    damage: "99",
    health: "99",
    image: WizardCard,
    name: "Wizard",
    frame: CardFrame,
  },
  {
    damage: "99",
    health: "99",
    image: DemonCard,
    name: "Demon",
    frame: CardFrame,
  },
];

export const ENEMY_CARDS: CardType[] = [
  {
    damage: "99",
    health: "99",
    image: NinjaCard,
    name: "Ninja",
    frame: CardFrame,
  },
  {
    damage: "99",
    health: "99",
    image: WizardCard,
    name: "Wizard",
    frame: CardFrame,
  },
  {
    damage: "99",
    health: "99",
    image: DemonCard,
    name: "Demon",
    frame: CardFrame,
  },
];

export const WizardCards = [
  {
    name: "Archmage Alara",
    image: CardImages.WIZARDS.ArchmageAlara,
    faction: "Wizard",
    health: "90",
    damage: "80",
    abilities: ["Elemental Manipulation", "Arcane Wisdom"],
    frame: CardFrame,
    description:
      "Master of elemental magic, manipulating fire and ice at will.",
  },
  {
    name: "Chronomancer Cyrus",
    image: CardImages.WIZARDS.ChronomancerCyrus,
    faction: "Wizard",
    health: "85",
    damage: "75",
    abilities: ["Time Control", "Rewind Events"],
    frame: CardFrame,
    description:
      "Controls time itself, able to rewind events or accelerate allies.",
  },
  {
    name: "Illusionist Thane",
    image: CardImages.WIZARDS.IllusionistThane,
    faction: "Wizard",
    health: "70",
    damage: "60",
    abilities: ["Illusion Creation", "Confusion"],
    frame: CardFrame,
    description:
      "Specializes in trickery and illusions, confusing enemies in battle.",
  },
  {
    name: "Necromancer Varek",
    image: CardImages.WIZARDS.Necromancer_Varek,
    faction: "Wizard",
    health: "80",
    damage: "90",
    abilities: ["Summon Undead", "Life Drain"],
    frame: CardFrame,
    description:
      "Commands undead minions and drains life force from opponents.",
  },
];

export const KnightCards = [
  {
    name: "Lady Seraphina",
    image: CardImages.KNIGHTS.LadySeraphina,
    faction: "Knight",
    health: "85",
    damage: "80",
    abilities: ["Master Archer", "Forest Defender"],
    frame: CardFrame,
    description: "Agile and deadly with a bow, defender of the forest realms.",
  },
  {
    name: "Paladin Elara",
    image: CardImages.KNIGHTS.PaladinElara,
    faction: "Knight",
    health: "95",
    damage: "70",
    abilities: ["Healing", "Divine Smite"],
    frame: CardFrame,
    description:
      "Radiant warrior, capable of healing and smiting foes with divine power.",
  },
  {
    name: "Sir Galahad",
    image: CardImages.KNIGHTS.SirGalahad,
    faction: "Knight",
    health: "90",
    damage: "85",
    abilities: ["Sword Mastery", "Shield Block"],
    frame: CardFrame,
    description:
      "Noble and skilled with the sword, sworn protector of the realm.",
  },
  {
    name: "Squire Thalia",
    image: CardImages.KNIGHTS.SquireThalia,
    faction: "Knight",
    health: "70",
    damage: "60",
    abilities: ["Quick Learner", "Bravery"],
    frame: CardFrame,
    description:
      "Young and eager, learning the ways of knighthood with bravery.",
  },
];

export const ElfCards = [
  {
    name: "High Druid Elowen",
    image: CardImages.ELVES.HighDruidElowen,
    faction: "Elf",
    health: "80",
    damage: "85",
    abilities: ["Nature's Wrath", "Forest Spirits"],
    frame: CardFrame,
    description:
      "Leader of the forest elves, harnessing nature’s wrath against enemies.",
  },
  {
    name: "Ranger Talon",
    image: CardImages.ELVES.RangerTalon,
    faction: "Elf",
    health: "75",
    damage: "80",
    abilities: ["Tracking", "Ambush"],
    frame: CardFrame,
    description:
      "Huntsman of unparalleled skill, adept at tracking and ambushing foes.",
  },
  {
    name: "Moon Priestess Elysia",
    image: CardImages.ELVES.MoonPriestessElysia,
    faction: "Elf",
    health: "85",
    damage: "70",
    abilities: ["Lunar Magic", "Healing"],
    frame: CardFrame,
    description: "Channels moonlight for healing and empowering lunar magic.",
  },
  {
    name: "Wind Whisperer Thalor",
    image: CardImages.ELVES.WindWhispererThalor,
    faction: "Elf",
    health: "70",
    damage: "75",
    abilities: ["Wind Control", "Storm Disruption"],
    frame: CardFrame,
    description: "Controls winds and storms, disrupting enemy formations.",
  },
];

export const EvilCards = [
  {
    name: "Dark Sorcerer Malakai",
    image: CardImages.EVIL.DarkSorcererMalakai,
    faction: "Evil",
    health: "85",
    damage: "90",
    abilities: ["Dark Magic", "Mind Corruption"],
    frame: CardFrameEnemy,
    description:
      "Delving into forbidden magic, corrupting minds and summoning demons.",
  },
  {
    name: "Shadow Assassin Kael",
    image: CardImages.EVIL.ShadowAssassinKael,
    faction: "Evil",
    health: "75",
    damage: "85",
    abilities: ["Stealth", "Poison"],
    frame: CardFrameEnemy,
    description:
      "Master of stealth and poisons, strikes fear into the hearts of enemies.",
  },
  {
    name: "Deathlord Drakus",
    image: CardImages.EVIL.DeathlordDrakus,
    faction: "Evil",
    health: "90",
    damage: "85",
    abilities: ["Undead Command", "Decay"],
    frame: CardFrameEnemy,
    description: "Commands armies of undead, spreading decay and terror.",
  },
  {
    name: "Blood Witch Sylva",
    image: CardImages.EVIL.BloodWitchSylva,
    faction: "Evil",
    health: "80",
    damage: "90",
    abilities: ["Blood Magic", "Life Drain"],
    frame: CardFrameEnemy,
    description:
      "Practitioner of ancient blood magic, harnessing life force for deadly spells.",
  },
  {
    name: "Chaos Cultist Vermina",
    image: CardImages.EVIL.ChaosCultistVermina,
    faction: "Evil",
    health: "70",
    damage: "80",
    abilities: ["Ritual Magic", "Fervor"],
    frame: CardFrameEnemy,
    description:
      "A fervent cultist, harnessing ritualistic magic for chaotic powers.",
  },
];
