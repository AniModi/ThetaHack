import { Container, Sprite, Text } from "@pixi/react";
import { TextMetrics } from "pixi.js";
import { Cards } from "../../assets";
import { TextStyle } from "pixi.js";
import {Texture} from "@pixi/core"
import { Position } from "../../types/Position";

const { CardHealth, CardDamage } = Cards;


type CardProps = {
  frame: Texture;
  image: Texture;
  name: string;
  health: string;
  damage: string;
  position: Position
  onClick: () => void;
}

const style = new TextStyle({ fill: "#0f0000", fontSize: 12 });

export default function Card({damage, health, image, name, frame, position, onClick}: CardProps) {
  const textMetrics = TextMetrics.measureText(
    health,
    style
  );
  const x = 30 - textMetrics.width;
  const x2 = 120 - textMetrics.width;


  const wizardTextMetrics = TextMetrics.measureText(
    name,
    style
  );

  return (
    <Container position={position} interactive onclick={onClick} cursor="pointer">
      <Sprite texture={image} width={150} height={225} />
      <Sprite texture={frame} width={150} height={225} />
      <Text
        text={health}
        style={style}
        y={173}
        x={x}
      />
      <Sprite texture={CardHealth} width={15} height={15} x={32} y={173} />
      <Text
        text={damage}
        style={style}
        y={173}
        x={x2}
      />
      <Sprite texture={CardDamage} width={15} height={15} x={122} y={173} />
      <Text
        text={name}
        style={style}
        y={210 - wizardTextMetrics.height / 2}
        x={75 - wizardTextMetrics.width / 2}
      />
    </Container>
  );
}
