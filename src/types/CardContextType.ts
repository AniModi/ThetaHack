import { Dispatch, SetStateAction } from "react";
import { CardType } from "./CardType";

export type CardContextType = {
    cardList: CardType[][];
    setCardList: Dispatch<SetStateAction<CardType[][]>>
    playerCard: CardType | undefined;
    setPlayerCard: Dispatch<SetStateAction<CardType | undefined>>;
    enemyCard: CardType | undefined;
    setEnemyCard: Dispatch<SetStateAction<CardType | undefined>>;
    startBattle: () => void;
}