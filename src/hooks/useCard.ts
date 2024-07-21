import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

export function useCard() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useGame must be used within an CardContextProvider");
  }
  return context;
}
