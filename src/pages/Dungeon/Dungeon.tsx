import { useEffect } from "react";
import Map from "../../components/Map/Map";
import Stage from "../../components/Stage/Stage";
import { useGame } from "../../hooks/useGame";
import Player from "../../components/Player/Player";
import "../../service/dungeonServices";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import PlayerAction from "../../components/PlayerAction/PlayerAction";
import { playerParameters } from "../../data/playerParameters";
import { useNavigate } from "react-router-dom";
import { startBattle } from "../../service/battleServices";

export default function Dungeon() {
  const { map, generateMap } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k") {
        if (playerParameters.isNearCharacter === "enemy") {
          startBattle(
            playerParameters.dungeonID,
            playerParameters.characterPosition
          ).then(() => {
            navigate("/play/dungeon/battle");
          });
        } else if (playerParameters.isNearCharacter === "chest") {
          //
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  useEffect(() => {
    generateMap();
  }, [generateMap]);

  if (!map) {
    return null;
  }

  return (
    <div className="relative h-full w-full">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Map />
        <Player></Player>
      </Stage>
      <div className="absolute bottom-0 w-full z-10 p-3 flex gap-10">
        <PlayerCard></PlayerCard>
        <div className="flex items-end justify-end ml-auto flex-grow">
          <PlayerAction></PlayerAction>
        </div>
      </div>
    </div>
  );
}
