import { Container } from "@pixi/react";
import { Buildings, Characters } from "../../assets";
import Background from "./Background";
import {
  houseCoordinate,
  ruinCoordinate,
  towerCoordinate,
  thetaCoordinate,
  edgeCoordinate,
  edgeCoordinate2,
  aiCoordinate,
  videoCoordinate
} from "../../data/hall_map";
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
      building: "Fort",
      character: "None",
      position: houseCoordinate,
      height: 300,
      width: 300,
    },
    {
      building: "Shao",
      character: "None",
      position: ruinCoordinate,
      height: 300,
      width: 300,
    },
    {
      building: "Castle",
      character: "None",
      position: towerCoordinate,
      height: 450,
      width: 450,
    },
    {
      building: "Edge",
      character: "None",
      position: edgeCoordinate,
      height: 60,
      width: 300,
    },
    {
      building: "Edge",
      character: "None",
      position: edgeCoordinate2,
      height: 60,
      width: 300,
    },
    {
      building: "AI",
      character: "None",
      position: aiCoordinate,
      height: 60,
      width: 60,
    },
    {
      building: "Video",
      character: "None",
      position: videoCoordinate,
      height: 60,
      width: 70,
    },
    {
      building: "ThetaNet",
      character: "None",
      position: thetaCoordinate,
      height: 80,
      width: 250,
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
