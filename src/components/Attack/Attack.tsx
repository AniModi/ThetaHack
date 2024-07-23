import { AnimatedSprite, useTick } from "@pixi/react";
import { Attacks } from "../../assets";
import { Position } from "../../types/Position";
import { Dispatch, SetStateAction } from "react";
import { TILE_SIZE } from "../../data/game_constants";

type Attack = {
  attackSprite: keyof typeof Attacks | undefined;
  enemyAttack: keyof typeof Attacks | undefined;
  attackSpritePosition: Position;
  enemyAttackSpritePosition: Position;
  setEnemyAttackSpritePosition: Dispatch<SetStateAction<Position>>;
  setAttackComplete: Dispatch<SetStateAction<boolean>>;
  setEnemyAttack: Dispatch<SetStateAction<keyof typeof Attacks | undefined>>;
  setEnemyAttackComplete: Dispatch<SetStateAction<boolean>>;
  playerPosition: Position;
  enemyPosition: Position;
  setAttackSpritePosition: Dispatch<SetStateAction<Position>>;
  setAttackSprite: Dispatch<SetStateAction<keyof typeof Attacks | undefined>>;
};

export default function Attack({
  attackSprite,
  enemyAttack,
  attackSpritePosition,
  enemyAttackSpritePosition,
  setEnemyAttackSpritePosition,
  setAttackComplete,
  setEnemyAttack,
  setEnemyAttackComplete,
  playerPosition,
  enemyPosition,
  setAttackSpritePosition,
  setAttackSprite,
}: Attack) {
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

  return (
    <>
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
    </>
  );
}
