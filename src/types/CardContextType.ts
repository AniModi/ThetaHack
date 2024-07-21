import { Dispatch, SetStateAction } from "react";
import { CardType } from "./CardType";

export type CardContextType = {
    cardList: CardType[][];
    setCardList: Dispatch<SetStateAction<CardType[][]>>
}