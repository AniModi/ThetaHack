import { Position } from "../types/Position";

export const hall_background: string[][] = [
    ...Array(2).fill(Array(50).fill("brick")),
    ...Array(11).fill([
        ...Array(5).fill("brick"),
        ...Array(42).fill("stone"),
        ...Array(3).fill("brick"),
    ]),
    ...Array(1).fill([
        ...Array(5).fill("brick"),
        ...Array(15).fill("stone"),
        ...Array(14).fill("floor"),
        ...Array(13).fill("stone"),
        ...Array(3).fill("brick"),
    ]),
    ...Array(5).fill([
        ...Array(5).fill("brick"),
        ...Array(42).fill("stone"),
        ...Array(3).fill("brick"),
    ]),
    ...Array(1).fill([
        ...Array(5).fill("brick"),
        ...Array(4).fill("stone"),
        ...Array(7).fill("floor"),
        ...Array(20).fill("stone"),
        ...Array(8).fill("floor"),
        ...Array(3).fill("stone"),
        ...Array(3).fill("brick"),
    ]),
    ...Array(16).fill([
        ...Array(5).fill("brick"),
        ...Array(42).fill("stone"),
        ...Array(3).fill("brick"),
    ]),
    ...Array(3).fill(Array(50).fill("brick")),
];

export const houseCoordinate: Position = { x: 9, y: 13 };
export const towerCoordinate: Position = { x: 21.5, y: 5.5 };
export const ruinCoordinate: Position = { x: 36.3, y: 13 };
export const thetaCoordinate: Position = { x: 23.8, y: 14 };
export const edgeCoordinate: Position = { x: 8.3, y: 20 };
export const aiCoordinate: Position = { x: 14.5, y: 20 };
export const edgeCoordinate2: Position = { x: 35.5, y: 20 };
export const videoCoordinate: Position = { x: 41.7, y: 20 };