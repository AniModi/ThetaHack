import { Container, Sprite } from "@pixi/react";
import Stage from "../../components/Stage/Stage";
import { Cards } from "../../assets";
import CardGroup from "../../components/CardGroup/CardGroup";
import Card from "../../components/Card/Card";

const { EmptyCard, PlayBoard, EmptyCardEnemy, CardBack, CardBackEnemy } = Cards;

export default function CardGame() {
  const cardWidth = 150;
  const cardHeight = 225;

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Sprite
        texture={PlayBoard}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <Container>
        <Sprite
          texture={CardBackEnemy}
          width={cardWidth}
          height={cardHeight}
          x={50}
          y={100}
        />
        <CardGroup
          texture={EmptyCardEnemy}
          containerWidth={window.innerWidth}
          y={100}
        />
      </Container>
      <Container>
        <CardGroup
          texture={EmptyCard}
          containerWidth={window.innerWidth}
          y={400}
        />
        <Container x={window.innerWidth - cardWidth - 50} y={400}>
          <Sprite texture={CardBack} width={cardWidth} height={cardHeight} />
          <Card></Card>
        </Container>
      </Container>
    </Stage>
  );
}
