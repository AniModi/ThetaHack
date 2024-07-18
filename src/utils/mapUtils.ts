import { DungeonAssets } from "../assets";

const {
  Wall,
  Floor,
  Door,
  Chest,
  Zombie,
  Wizard: NPC,
  DoorOpen,
} = DungeonAssets;
export function isIsolatedWall(x: number, y: number, dungeonMap: string[][]) {
  return (
    (x > 0 && dungeonMap[y][x - 1] === "floor") ||
    (x < dungeonMap[0].length - 1 && dungeonMap[y][x + 1] === "floor") ||
    (y > 0 && dungeonMap[y - 1][x] === "floor") ||
    (y < dungeonMap.length - 1 && dungeonMap[y + 1][x] === "floor") ||
    (x > 0 && y > 0 && dungeonMap[y - 1][x - 1] === "floor") ||
    (x < dungeonMap[0].length - 1 &&
      y > 0 &&
      dungeonMap[y - 1][x + 1] === "floor") ||
    (x > 0 &&
      y < dungeonMap.length - 1 &&
      dungeonMap[y + 1][x - 1] === "floor") ||
    (x < dungeonMap[0].length - 1 &&
      y < dungeonMap.length - 1 &&
      dungeonMap[y + 1][x + 1] === "floor")
  );
}

export function getTexture(tile: string) {
  let texture;
  switch (tile) {
    case "wall":
      texture = Wall;
      break;
    case "floor":
      texture = Floor;
      break;
    case "entrance":
      texture = DoorOpen;
      break;
    case "exit":
      texture = Door;
      break;
    case "chest":
      texture = Chest;
      break;
    case "enemy":
      texture = Zombie;
      break;
    case "npc":
      texture = NPC;
      break;
    default:
      texture = Floor;
  }
  return texture;
}
