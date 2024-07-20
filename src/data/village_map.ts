import { Position } from "../types/Position";

export const village_background: string[][] = [
  ...Array(8).fill(Array(50).fill("wall")),
  ...Array(5).fill([
    ...Array(12).fill("wall"),
    ...Array(26).fill("floor"),
    ...Array(12).fill("wall"),
  ]),
  ...Array(3).fill([
    ...Array(12).fill("wall"),
    ...Array(2).fill("floor"),
    ...Array(3).fill("flower"),
    ...Array(20).fill("floor"),
    ...Array(13).fill("wall"),
  ]),
  ...Array(2).fill([
    ...Array(13).fill("wall"),
    ...Array(24).fill("floor"),
    ...Array(13).fill("wall"),
  ]),
  ...Array(10).fill([
    ...Array(22).fill("wall"),
    ...Array(6).fill("floor"),
    ...Array(22).fill("wall"),
  ]),
  ...Array(8).fill(Array(50).fill("wall")),
];

export const houseCoordinate: Position = { x: 12, y: 8 };
export const towerCoordinate: Position = { x: 20, y: 8 };
export const ruinCoordinate: Position = { x: 30, y: 8 };
