import { useEffect } from "react";
import Map from "../../components/Map/Map";
import Player from "../../components/Player/Player";
import Stage from "../../components/Stage/Stage";
import { useGame } from "../../hooks/useGame";
import { handleUserInput } from "../../utils/userInputs";

export default function Game() {
  const { map, generateMap } = useGame();
  useEffect(() => {
    generateMap();
    return handleUserInput();
  }, [generateMap]);


  if (!map) {
    return;
  }

  console.log(map);
  

  return (
    <div className="h-full w-full">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Map></Map>
        <Player></Player>
      </Stage>
    </div>
  );
}
