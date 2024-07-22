import { AnimatedSprite, Sprite, useTick } from "@pixi/react";
import BattleActions from "../../components/BattleActions/BattleActions";
import BattleBackground from "../../components/BattleBackground/BattleBackground";
import Stage from "../../components/Stage/Stage";
import { TILE_SIZE } from "../../data/game_constants";
import { Attacks, Characters } from "../../assets";
import { useEffect, useState } from "react";
import { Position } from "../../types/Position";
import { attackEnemy, attackPlayer } from "../../service/battleServices";
import { playerParameters } from "../../data/playerParameters";

const { Wizard } = Characters;
const playerPosition = { x: 100, y: window.innerHeight / 2 - TILE_SIZE / 2 };
const enemyPosition = {
  x: window.innerWidth - 100 - TILE_SIZE,
  y: window.innerHeight / 2 - TILE_SIZE / 2,
};

const attacks: (keyof typeof Attacks)[] = Object.keys(
  Attacks
) as (keyof typeof Attacks)[];

const attackPosition = {
  x: playerPosition.x + TILE_SIZE + 10,
  y: playerPosition.y,
};

const enemyAttackPosition = {
  x: enemyPosition.x - TILE_SIZE - 10,
  y: enemyPosition.y + TILE_SIZE / 2,
};

let attack: string;

export default function BattlePage() {
  const [attackSpritePosition, setAttackSpritePosition] =
    useState<Position>(attackPosition);

  const [playerHealth, setPlayerHealth] = useState<number>(100);
  const [enemyHealth, setEnemyHealth] = useState<number>(100);

  const [attackComplete, setAttackComplete] = useState<boolean>(false);
  const [enemyAttackSpritePosition, setEnemyAttackSpritePosition] =
    useState<Position>(enemyAttackPosition);

  const [enemyAttack, setEnemyAttack] = useState<keyof typeof Attacks>();
  const [enemyAttackComplete, setEnemyAttackComplete] =
    useState<boolean>(false);

  useEffect(() => {
    if (attackComplete) {
      setAttackComplete(false);
      attackEnemy(playerParameters.dungeonID, attack).then(
        (damage: {
          damage: number;
          enemyAttack: keyof typeof Attacks | "";
        }) => {
          setEnemyHealth((prev) => prev - damage.damage);
          if (damage.enemyAttack !== "") {
            setEnemyAttack(damage.enemyAttack);
            setEnemyAttackSpritePosition(enemyAttackPosition);
          }
        }
      );
    }
    if (enemyAttackComplete) {
      setEnemyAttackComplete(false);
      setAttackSpritePosition(attackPosition);
      attackPlayer(playerParameters.dungeonID, attack).then(
        (damage: { damage: number }) => {
          setPlayerHealth((prev) => prev - damage.damage);
        }
      );
    }
  }, [attackComplete, enemyAttackComplete]);

  useTick(() => {
    if (enemyAttack)
      setEnemyAttackSpritePosition((prev) => {
        if (prev.x > playerPosition.x + TILE_SIZE) {
          return { ...prev, x: prev.x - 5 };
        } else {
          setEnemyAttack(undefined);
          setEnemyAttackComplete(true);
        }
        return prev;
      });
    if (attackSprite)
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
        <Sprite
          texture={Wizard}
          position={playerPosition}
          height={TILE_SIZE}
          width={TILE_SIZE}
          anchor={0.5}
          key={JSON.stringify(playerPosition)}
        />
        <Sprite
          texture={Wizard}
          position={enemyPosition}
          height={TILE_SIZE}
          width={TILE_SIZE}
          anchor={0.5}
          key={JSON.stringify(enemyPosition)}
          scale={{ x: -3, y: 3 }}
        />
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
        <div className="flex justify-between p-3">
          <div className="text-2xl text-white">
            Player Health: {playerHealth}
          </div>
          <div className="text-2xl text-white">Enemy Health: {enemyHealth}</div>
        </div>
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
