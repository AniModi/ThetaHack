import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within an GameContextProvider");
  }
  return context;
}
