import { useEffect, useState } from "react";
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
import { openChest } from "../../service/chestService";
import ChestContent from "../../components/ChestContent/ChestContent";

export default function Dungeon() {
  const { map, removeChest } = useGame();
  const navigate = useNavigate();
  const [chestRewards, setChestRewards] = useState<string[]>();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k") {
        if (playerParameters.isNearCharacter === "enemy") {
          startBattle(
            playerParameters.dungeonID,
            playerParameters.characterPosition
          ).then((res) => {
            navigate("/play/dungeon/battle");
            playerParameters.player_health = res?.player_health || 100;
            playerParameters.enemy_health = res?.enemy_health || 100;
          });
        } else if (playerParameters.isNearCharacter === "chest") {
          openChest(
            playerParameters.dungeonID,
            playerParameters.characterPosition
          ).then((res) => {
            playerParameters.isNearCharacter = "";
            if (res.chest_rewards) {
              setChestRewards(res.chest_rewards);
              removeChest(playerParameters.characterPosition)
            } else {
              alert(res.message);
            }
          });
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, removeChest]);

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
      {chestRewards && (
        <ChestContent
          handleClose={setChestRewards}
          content={chestRewards!}
        ></ChestContent>
      )}
    </div>
  );
}
