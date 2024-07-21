import { Container, Sprite, Text } from "@pixi/react";
import { TextMetrics } from "pixi.js";
import { Cards } from "../../assets";
import { TextStyle } from "pixi.js";

const { CardFrame, WizardCard, CardHealth, CardDamage } = Cards;

export default function Card() {
  const health = 10;
  const textMetrics = TextMetrics.measureText(
    "10",
    new TextStyle({ fill: "#0f0000", fontSize: 14 })
  );
  const x = 30 - textMetrics.width;
  const x2 = 120 - textMetrics.width;

  const name = "Wizard";

  const wizardTextMetrics = TextMetrics.measureText(
    name,
    new TextStyle({ fill: "white", fontSize: 14 })
  );

  return (
    <Container>
      <Sprite texture={WizardCard} width={150} height={225} />
      <Sprite texture={CardFrame} width={150} height={225} />
      <Text
        text={health.toString()}
        style={new TextStyle({ fill: "#0f0000", fontSize: 14 })}
        y={170}
        x={x}
      />
      <Sprite texture={CardHealth} width={15} height={15} x={32} y={172} />
      <Text
        text={health.toString()}
        style={new TextStyle({ fill: "#0f0000", fontSize: 14 })}
        y={170}
        x={x2}
      />
      <Sprite texture={CardDamage} width={15} height={15} x={122} y={172} />
      <Text
        text={name}
        style={new TextStyle({ fill: "white", fontSize: 14 })}
        y={210 - wizardTextMetrics.height / 2}
        x={75 - wizardTextMetrics.width / 2}
      />
    </Container>
  );
}
