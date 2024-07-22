import { useEffect, useState } from "react";
import AttackButton from "../AttackButton/AttackButton";
import Cover from "../Cover/Cover";
import { AttackData } from "../../types/AttackData";
import { getAttacks } from "../../service/battleServices";

type BattleActionsProps = {
  onClick: (id: number, attack: AttackData) => void;
  attacks: string[];
};

export default function BattleActions({
  onClick,
  attacks,
}: BattleActionsProps) {
  const [hoveredAttack, setHoveredAttack] = useState<number>(0);
  const [attackData, setAttackData] = useState<Record<string, AttackData>>({});

  useEffect(() => {
    getAttacks().then((data) => setAttackData(data!));
  }, []);

  const currentAttackData = attackData[attacks[hoveredAttack]];
  if (!currentAttackData) return null;

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
                onClick={() => {
                  onClick(idx, attackData[attack]);
                }}
              />
            ))}
          </div>
        </Cover>
      </div>
      <div className="w-1/2">
        <Cover pattern={[[]]}>
          <div className="flex flex-col items-center w-full justify-center px-4 py-2">
            <h1 className="text-center text-2xl font-bold">
              {attacks[hoveredAttack]}
            </h1>
            <div className="p-4 grid grid-cols-2 text-lg w-full pl-10">
              <p className="mb-1">
                <strong>Damage:</strong> {currentAttackData.Damage}
              </p>
              <p className="mb-1">
                <strong>Critical Rate:</strong>{" "}
                {currentAttackData["Critical Rate"]}
              </p>
            </div>
            <div>{currentAttackData.Description}</div>
          </div>
        </Cover>
      </div>
    </div>
  );
}
