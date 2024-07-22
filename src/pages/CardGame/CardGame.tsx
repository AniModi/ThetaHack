import { Container, Sprite } from "@pixi/react";
import Stage from "../../components/Stage/Stage";
import { Cards } from "../../assets";
import CardGroup from "../../components/CardGroup/CardGroup";
import Card from "../../components/Card/Card";
import { CARD_HEIGHT, CARD_WIDTH } from "../../data/game_constants";
import { useCard } from "../../hooks/useCard";
import { useState } from "react";
import {WizardCards} from "../../data/card_game";

const {
  EmptyCard,
  PlayBoard,
  EmptyCardEnemy,
  CardBack,
  CardBackEnemy,
} = Cards;


const PLAYER_CARDS = WizardCards.slice(0, 3)

export default function CardGame() {
  const { setCardList, cardList } = useCard();
  const [curCard, setCurCard] = useState(0);

  const addCard = () => {
    setCardList((prev) => {
      const list = [[...prev[0]], [...prev[1]]];
      if (list[0].length < 3) {
        list[0].push(PLAYER_CARDS[curCard]);
      }
      return list;
    });
    setCurCard((prev) => prev + 1);
  };

  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Sprite
          texture={PlayBoard}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <Container>
          <Sprite
            texture={CardBackEnemy}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            x={50}
            y={100}
          />
          <CardGroup
            texture={EmptyCardEnemy}
            containerWidth={window.innerWidth}
            cards={cardList[1]}
            y={100}
            type= "enemy"
          />
        </Container>
        <Container>
          <CardGroup
            texture={EmptyCard}
            containerWidth={window.innerWidth}
            cards={cardList[0]}
            y={400}
            type= "player"
          />
          <Container x={window.innerWidth - CARD_WIDTH - 50} y={400}>
            <Sprite
              texture={CardBack}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
            />
            {PLAYER_CARDS[curCard] && (
              <Card
                {...PLAYER_CARDS[curCard]}
                position={{ x: 0, y: 0 }}
                onClick={addCard}
              ></Card>
            )}
          </Container>
        </Container>
      </Stage>
    </div>
  );
}
