import { Container } from "@pixi/react";
import { Buildings, Characters } from "../../assets";
import Background from "./Background";
import {
  houseCoordinate,
  ruinCoordinate,
  towerCoordinate,
  thetaCoordinate,
} from "../../data/village_map";
import { Position } from "../../types/Position";
import Building from "../Building/Building";
import { useGame } from "../../hooks/useGame";

const buildingPlayerMap: Array<{
  building: keyof typeof Buildings;
  character: keyof typeof Characters;
  position: Position;
  height: number;
  width: number;
}> = [
    {
      building: "House",
      character: "Knight",
      position: houseCoordinate,
      height: 96,
      width: 96,
    },
    {
      building: "Ruin",
      character: "Elf",
      position: ruinCoordinate,
      height: 96,
      width: 96,
    },
    {
      building: "Tower",
      character: "Wizard",
      position: towerCoordinate,
      height: 96,
      width: 72,
    },
    {
      building: "Theta",
      character: "None",
      position: thetaCoordinate,
      height: 75,
      width: 200,
      rotation: true,
    },
  ];

export default function Village() {
  const { initialPosition } = useGame();

  return (
    <Container position={initialPosition} anchor={0.5}>
      <Background></Background>
      {buildingPlayerMap.map((ele) => {
        return <Building {...ele} key={ele.character}></Building>;
      })}
    </Container>
  );
}
