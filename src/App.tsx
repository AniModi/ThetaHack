import Map from "./components/Map/Map";
import { useEffect } from "react";
import Stage from "./components/Stage/Stage";
import { useGame } from "./hooks/useGame";
import Player from "./components/Player/Player";
import { handleUserInput } from "./utils/userInputs";

export default function App() {
  const { map, generateMap } = useGame();
  useEffect(() => {
    generateMap();
    return handleUserInput();
  }, [generateMap]);

  if (!map) {
    return;
  }

  return (
    <div className="relative h-full w-full">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Map></Map>
        <Player></Player>
      </Stage>
    </div>
  );
}
