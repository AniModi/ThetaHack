import { createContext, ReactNode, useState } from "react";
import { CardContextType } from "../types/CardContextType";
import { CardType } from "../types/CardType";
import { EvilCards } from "../data/card_game";

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export function CardContextProvider({ children }: { children: ReactNode }) {
  const [cardList, setCardList] = useState<CardType[][]>([[], EvilCards]);

  const value = {
    cardList,
    setCardList,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}
