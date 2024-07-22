import { Sprite } from "@pixi/react";
import { BattleAssets } from "../../assets";

export default function BattleBackground() {
  return <Sprite texture={BattleAssets.BattleBackgroundImage} width={window.innerWidth} height={window.innerHeight}></Sprite>;
}
