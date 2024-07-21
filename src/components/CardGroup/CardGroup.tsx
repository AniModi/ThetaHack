import { Container, Sprite } from "@pixi/react";
import { Texture } from "@pixi/core";
import { CARD_HEIGHT, CARD_WIDTH } from "../../data/game_constants";
import { CardType } from "../../types/CardType";
import Card from "../Card/Card";

type CardGroupProps = {
  texture: Texture;
  containerWidth: number;
  y: number;
  cards: CardType[];
};

export default function CardGroup({
  texture,
  containerWidth,
  y,
  cards,
}: CardGroupProps) {
  const cardSpacing = 50;
  const totalCardsWidth = 3 * CARD_WIDTH + 2 * cardSpacing;
  const startX = (containerWidth - totalCardsWidth) / 2;

  const filledCards = [
    ...cards.slice(0, 3),
    ...Array(Math.max(0, 3 - cards.length)).fill({ name: "", image: null }),
  ];

  return (
    <Container position={{ x: 0, y: 0 }}>
      {filledCards.map((card, idx) => {
        if (card.image) {
          return (
            <Card
              {...card}
              onClick={() => {}}
              key={idx}
              position={{ x: startX + idx * (CARD_WIDTH + cardSpacing), y }}
            ></Card>
          );
        }
        return (
          <Sprite
            texture={texture}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            position={{ x: startX + idx * (CARD_WIDTH + cardSpacing), y }}
            key={idx}
          />
        );
      })}
    </Container>
  );
}
