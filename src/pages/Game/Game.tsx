import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Player from "../../components/Player/Player";
import Stage from "../../components/Stage/Stage";
import { useGame } from "../../hooks/useGame";
import Village from "../../components/Village/Village";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import PlayerAction from "../../components/PlayerAction/PlayerAction";
import {
  houseCoordinate,
  ruinCoordinate,
  towerCoordinate,
  thetaCoordinate,
  village_background,
} from "../../data/village_map";
import updatePlayerParams from "../../utils/updatePlayerParams";
import { useApp } from "@pixi/react";
import ConversationBox from "../../components/ConversationBox/ConversationBox";
import { playerParameters } from "../../data/playerParameters";

export default function Game() {
  const navigate = useNavigate();
  const { map, setMap, playerPosition } = useGame();
  const [isTalking, setIsTalking] = useState(false);
  const app = useApp();

  function handleConversationEnd() {
    setIsTalking(false);
    app.ticker.start();
  }

  useEffect(() => {
    setMap(
      village_background,
      [
        { type: "Wizard", x: towerCoordinate.x + 1, y: towerCoordinate.y },
        { type: "Elf", x: ruinCoordinate.x + 1, y: ruinCoordinate.y },
        { type: "Knight", x: houseCoordinate.x + 1, y: houseCoordinate.y },
        { type: "Theta", x: thetaCoordinate.x - 1, y: thetaCoordinate.y },
      ],
      { x: 25, y: 25 },
      { x: 0, y: 0 }
    );

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k") {
        if (playerParameters.isNearCharacter !== "") {
          if (playerParameters.isNearCharacter === "Theta") {
            navigate("/theta");
          } else {
            app.ticker.stop();
            setIsTalking(true);
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setMap, app, navigate]);

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
      <div className="absolute bottom-0 w-full z-10 p-3 flex gap-10">
        <PlayerCard></PlayerCard>
        <div className="flex items-end justify-end ml-auto flex-grow">
          {isTalking ? (
            <ConversationBox
              handleConversationEnd={handleConversationEnd}
            ></ConversationBox>
          ) : (
            <PlayerAction></PlayerAction>
          )}
        </div>
      </div>
    </div>
  );
}
