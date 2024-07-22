import { AnimatedSprite, useTick } from "@pixi/react";
import BattleActions from "../../components/BattleActions/BattleActions";
import BattleBackground from "../../components/BattleBackground/BattleBackground";
import Card from "../../components/Card/Card";
import Stage from "../../components/Stage/Stage";
import { CARD_HEIGHT, CARD_WIDTH } from "../../data/game_constants";
import { Attacks } from "../../assets";
import { useEffect, useState } from "react";
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

const enemyAttackPosition = {
  x: enemyPosition.x - CARD_WIDTH - 10,
  y: enemyPosition.y + CARD_HEIGHT / 2,
};

let attack: string;

export default function BattlePage() {
  const { playerCard, enemyCard, updateEnemyHealth, updatePlayerHealth } = useCard();

  const [attackSpritePosition, setAttackSpritePosition] =
    useState<Position>(attackPosition);

  const [attackComplete, setAttackComplete] = useState<boolean>(false);
  const [enemyAttackSpritePosition, setEnemyAttackSpritePosition] =
    useState<Position>(enemyAttackPosition);

  const [enemyAttack, setEnemyAttack] = useState<keyof typeof Attacks>();
  const [enemyAttackComplete, setEnemyAttackComplete] = useState<boolean>(false);


  useEffect(() => {
    if (attackComplete) {
      updateEnemyHealth(attack);
      setAttackComplete(false);
      setEnemyAttackSpritePosition(enemyAttackPosition);
      setEnemyAttack("Fireball");
    }
    if (enemyAttackComplete) {
      updatePlayerHealth({Damage: "10-11", "Critical Rate": "10%", Description: "A fiery projectile that engulfs the target in flames upon impact."});
      setEnemyAttackComplete(false);
      setAttackSpritePosition(attackPosition);
    }
  }, [attackComplete, updateEnemyHealth, enemyAttackComplete, updatePlayerHealth]);

  useTick(() => {
    if (enemyAttack)
    setEnemyAttackSpritePosition((prev) => {
      if (prev.x > playerPosition.x + CARD_WIDTH) {
        return { ...prev, x: prev.x - 5 };
      } else {
        setEnemyAttack(undefined);
        setEnemyAttackComplete(true);
      }
      return prev;
    });
    if(!attackSprite)return
    setAttackSpritePosition((prev) => {
      if (prev.x < enemyPosition.x - 10) {
        return { ...prev, x: prev.x + 5 };
      } else {
        setAttackComplete(true);
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
        <Card {...playerCard!} position={playerPosition} onClick={() => {}} />
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
        {enemyAttack && (
          <AnimatedSprite
            textures={Attacks[enemyAttack]}
            isPlaying={true}
            loop={true}
            position={enemyAttackSpritePosition}
            animationSpeed={0.25}
            key={enemyAttack}
            scale={-1}
          />
        )}
      </Stage>
      <div className="absolute w-full bottom-0">
        <BattleActions
          attacks={attacks}
          onClick={(i: number) => {
            setAttackSpritePosition(attackPosition);
            setAttackSprite(attacks[i]);
            attack = attacks[i];
          }}
        />
      </div>
    </div>
  );
}
