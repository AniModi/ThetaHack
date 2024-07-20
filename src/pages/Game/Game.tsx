import { useEffect } from "react";
import Player from "../../components/Player/Player";
import Stage from "../../components/Stage/Stage";
import { useGame } from "../../hooks/useGame";
import { handleUserInput } from "../../utils/userInputs";
import Village from "../../components/Village/Village";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import PlayerAction from "../../components/PlayerAction/PlayerAction";
import {
  houseCoordinate,
  ruinCoordinate,
  towerCoordinate,
  village_background,
} from "../../data/village_map";
import updatePlayerParams from "../../utils/updatePlayerParams";

export default function Game() {
  const { map, setMap, playerPosition } = useGame();

  useEffect(() => {
    setMap(
      village_background,
      [
        { type: "Wizard", x: towerCoordinate.x + 1, y: towerCoordinate.y },
        { type: "Elf", x: ruinCoordinate.x + 1, y: ruinCoordinate.y },
        { type: "Knight", x: houseCoordinate.x + 1, y: houseCoordinate.y },
      ],
      { x: 25, y: 25 },
      { x: 0, y: 0 }
    );
    return handleUserInput();
  }, [setMap]);

  if (!map) {
    return;
  }

  updatePlayerParams(playerPosition, map?.entities);

  return (
    <div className="relative h-full w-full">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Village></Village>
        <Player></Player>
      </Stage>
      <div className="absolute bottom-0 w-full z-10 p-3 flex justify-between">
        <PlayerCard></PlayerCard>
        <PlayerAction></PlayerAction>
      </div>
    </div>
  );
}
