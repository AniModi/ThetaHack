import { attackData } from "../data/attacks";

export default function getDamage(attack: string) {
  const [min, max] = attackData[attack].Damage.split("-").map(Number);
  const criticalRate =
    parseInt(attackData[attack]["Critical Rate"].split("%")[0], 10) / 100;

  let damage = Math.random() * (max - min) + min;

  if (Math.random() < criticalRate) {
    damage *= 2;
  }
  damage = Math.round(damage);

  return damage;
}
