import { AnimatedSprite, useTick } from "@pixi/react";
import BattleActions from "../../components/BattleActions/BattleActions";
import BattleBackground from "../../components/BattleBackground/BattleBackground";
import Card from "../../components/Card/Card";
import Stage from "../../components/Stage/Stage";
import { EvilCards, WizardCards } from "../../data/card_game";
import { CARD_HEIGHT, CARD_WIDTH } from "../../data/game_constants";
import { Attacks } from "../../assets";
import { useState } from "react";
import { Position } from "../../types/Position";
import { useCard } from "../../hooks/useCard";

const playerPosition = { x: 100, y: window.innerHeight / 2 - CARD_HEIGHT / 2 };
const enemyPosition = {
  x: window.innerWidth - 100 - CARD_WIDTH,
  y: window.innerHeight / 2 - CARD_HEIGHT / 2,
};

const attacks: (keyof typeof Attacks)[] = Object.keys(
  Attacks
) as (keyof typeof Attacks)[];

const attackPosition = {
  x: playerPosition.x + CARD_WIDTH + 10,
  y: playerPosition.y + CARD_HEIGHT / 2,
};

export default function BattlePage() {

  const {playerCard, enemyCard} = useCard();

  const [attackSpritePosition, setAttackSpritePosition] =
    useState<Position>(attackPosition);

  useTick(() => {
    if (!attackSprite) return;
    setAttackSpritePosition((prev) => {
      if (prev.x < enemyPosition.x - 10) {
        return { ...prev, x: prev.x + 5 };
      } else {
        setAttackSprite(undefined);
      }
      return prev;
    });
  });

  const [attackSprite, setAttackSprite] = useState<keyof typeof Attacks>();

  return (
    <div className="relative h-full w-full">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <BattleBackground />
        <Card
          {...playerCard!}
          position={playerPosition}
          onClick={() => {}}
        />
        <Card {...enemyCard!} position={enemyPosition} onClick={() => {}} />
        {attackSprite && (
          <AnimatedSprite
            textures={Attacks[attackSprite]}
            isPlaying={true}
            loop={true}
            position={attackSpritePosition}
            animationSpeed={0.25}
            key={attackSprite}
          />
        )}
      </Stage>
      <div className="absolute w-full bottom-0">
        <BattleActions
          attacks={attacks}
          onClick={(i: number) => {
            setAttackSpritePosition(attackPosition);
            setAttackSprite(attacks[i]);
          }}
        />
      </div>
    </div>
  );
}
