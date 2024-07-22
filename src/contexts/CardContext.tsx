import { createContext, ReactNode, useCallback, useState } from "react";
import { CardContextType } from "../types/CardContextType";
import { CardType } from "../types/CardType";
import { EvilCards } from "../data/card_game";
import { useNavigate } from "react-router-dom";
import { AttackData } from "../types/AttackData";

export const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardContextProvider({ children }: { children: ReactNode }) {
  const [cardList, setCardList] = useState<CardType[][]>([[], EvilCards]);
  const [playerCard, setPlayerCard] = useState<CardType | undefined>();
  const [enemyCard, setEnemyCard] = useState<CardType | undefined>();
  const navigate = useNavigate();

  const startBattle = useCallback(() => {
    navigate("/play/card/battle");
  }, [navigate]);

  const updateEnemyHealth = useCallback((attack: AttackData) => {
    const [min, max] = attack.Damage.split("-").map(Number);
    const criticalRate = parseInt(attack["Critical Rate"].split("%")[0], 10) / 100;

    let damage = Math.random() * (max - min) + min;

    if (Math.random() < criticalRate) {
      damage *= 2;
    }

    damage = Math.round(damage);

    setEnemyCard((prev) => {
      if (!prev) return prev;

      const updatedHealth = Math.max(0, parseInt(prev.health, 10) - damage).toString();
      return { ...prev, health: updatedHealth };
    });
  }, []);

  const updatePlayerHealth = useCallback((attack: AttackData) => {
    const [min, max] = attack.Damage.split("-").map(Number);
    const criticalRate = parseInt(attack["Critical Rate"].split("%")[0], 10) / 100;

    let damage = Math.random() * (max - min) + min;

    if (Math.random() < criticalRate) {
      damage *= 2;
    }

    damage = Math.round(damage);

    setPlayerCard((prev) => {
      if (!prev) return prev;

      const updatedHealth = Math.max(0, parseInt(prev.health, 10) - damage).toString();
      return { ...prev, health: updatedHealth };
    });
  }, []);

  const value = {
    cardList,
    setCardList,
    playerCard,
    setPlayerCard,
    enemyCard,
    setEnemyCard,
    startBattle,
    updateEnemyHealth,
    updatePlayerHealth,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}
