import { createContext, ReactNode, useCallback, useState } from "react";
import { CardContextType } from "../types/CardContextType";
import { CardType } from "../types/CardType";
import { EvilCards } from "../data/card_game";
import { useNavigate } from "react-router-dom";

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export function CardContextProvider({ children }: { children: ReactNode }) {
  const [cardList, setCardList] = useState<CardType[][]>([[], EvilCards]);

  const [playerCard, setPlayerCard] = useState<CardType>();
  const [enemyCard, setEnemyCard] = useState<CardType>();
  const navigate = useNavigate();

  const startBattle = useCallback(() => {
    navigate("/play/card/battle")
  }, [navigate])



  const value = {
    cardList,
    setCardList,
    playerCard,
    setPlayerCard,
    enemyCard,
    setEnemyCard,
    startBattle
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}
