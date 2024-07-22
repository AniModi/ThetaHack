import { AttackData } from "../types/AttackData";

export const attackData: Record<string, AttackData> = {
  Fireball: {
    Damage: "10-15",
    "Critical Rate": "10%",
    Description:
      "A fiery projectile that engulfs the target in flames upon impact.",
  },
  Ice: {
    Damage: "8-12",
    "Critical Rate": "15%",
    Description:
      "A freezing blast that chills the target, slowing their movements.",
  },
  Poison: {
    Damage: "8-12",
    "Critical Rate": "15%",
    Description: "A toxic attack that poisons the target over time.",
  },
  Lightning: {
    Damage: "12-18",
    "Critical Rate": "12%",
    Description:
      "A swift strike that electrocutes the target with a bolt of lightning.",
  },
};
