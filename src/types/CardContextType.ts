import { Dispatch, SetStateAction } from "react";
import { CardType } from "./CardType";
import { AttackData } from "./AttackData";

export type CardContextType = {
    cardList: CardType[][];
    setCardList: Dispatch<SetStateAction<CardType[][]>>
    playerCard: CardType | undefined;
    setPlayerCard: Dispatch<SetStateAction<CardType | undefined>>;
    enemyCard: CardType | undefined;
    setEnemyCard: Dispatch<SetStateAction<CardType | undefined>>;
    startBattle: () => void;
    updateEnemyHealth: (attack: string) => void
    updatePlayerHealth: (attack: AttackData) => void
}