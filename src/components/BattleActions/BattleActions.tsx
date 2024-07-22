import { useState } from "react";
import AttackButton from "../AttackButton/AttackButton";
import Cover from "../Cover/Cover";

type BattleActionsProps = {
  onClick: (id: number) => void;
  attacks: string[];
};

const attackData: Record<string, { Damage: string; "Critical Rate": string; Description: string }> = {
  Fireball: {
    Damage: "10-15",
    "Critical Rate": "10%",
    Description: "A fiery projectile that engulfs the target in flames upon impact.",
  },
  Ice: {
    Damage: "8-12",
    "Critical Rate": "15%",
    Description: "A freezing blast that chills the target, slowing their movements.",
  },
  Poison: {
    Damage: "8-12",
    "Critical Rate": "15%",
    Description: "A toxic attack that poisons the target over time.",
  },
  Lightning: {
    Damage: "12-18",
    "Critical Rate": "12%",
    Description: "A swift strike that electrocutes the target with a bolt of lightning.",
  },
};

export default function BattleActions({ onClick, attacks }: BattleActionsProps) {
  const [hoveredAttack, setHoveredAttack] = useState<number>(0);

  const currentAttackData = attackData[attacks[hoveredAttack]];

  return (
    <div className="w-full bottom-0 p-3 flex gap-10">
      <div className="w-1/2">
        <Cover>
          <div className="bg-peach h-full w-full p-5 grid grid-cols-2 gap-3 pb-10">
            {attacks.map((attack, idx) => (
              <AttackButton
                key={attack}
                text={attack}
                onHover={() => setHoveredAttack(idx)}
                onClick={() => onClick(idx)}
              />
            ))}
          </div>
        </Cover>
      </div>
      <div className="w-1/2">
        <Cover pattern={[[]]}>
          <div className="flex flex-col items-center w-full justify-center px-4 py-2">
            <h1 className="text-center text-2xl font-bold">{attacks[hoveredAttack]}</h1>
            <div className="p-4 grid grid-cols-2 text-lg w-full pl-10">
              <p className="mb-1">
                <strong>Damage:</strong> {currentAttackData.Damage}
              </p>
              <p className="mb-1">
                <strong>Critical Rate:</strong> {currentAttackData["Critical Rate"]}
              </p>
            </div>
            <div>
              {currentAttackData.Description}
            </div>
          </div>
        </Cover>
      </div>
    </div>
  );
}
