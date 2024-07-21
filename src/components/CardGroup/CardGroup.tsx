import { Container, Sprite } from "@pixi/react";
import { Texture } from "@pixi/core";

type CardGroupProps = {
  texture: Texture;
  containerWidth: number;
  y: number;
};

export default function CardGroup({ texture, containerWidth, y }: CardGroupProps) {
  const cardWidth = 150;
  const cardHeight = 225;
  const cardSpacing = 50;
  const totalCardsWidth = 3 * cardWidth + 2 * cardSpacing;
  const startX = (containerWidth - totalCardsWidth) / 2;

  return (
    <Container position={{ x: 0, y: 0 }}>
      <Sprite
        texture={texture}
        width={cardWidth}
        height={cardHeight}
        position={{ x: startX, y }}
      />
      <Sprite
        texture={texture}
        width={cardWidth}
        height={cardHeight}
        position={{ x: startX + cardWidth + cardSpacing, y }}
      />
      <Sprite
        texture={texture}
        width={cardWidth}
        height={cardHeight}
        position={{ x: startX + 2 * (cardWidth + cardSpacing), y }}
      />
    </Container>
  );
}