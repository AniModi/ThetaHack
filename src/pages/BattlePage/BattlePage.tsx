import BattleBackground from "../../components/BattleBackground/BattleBackground";
import Card from "../../components/Card/Card";
import Stage from "../../components/Stage/Stage";
import { EvilCards, WizardCards } from "../../data/card_game";
import { CARD_HEIGHT, CARD_WIDTH } from "../../data/game_constants";

export default function BattlePage() {
  return (
    <div className="relative h-full w-full">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <BattleBackground></BattleBackground>
        <Card
          {...WizardCards[0]}
          position={{ x: 100, y: window.innerHeight / 2 - CARD_HEIGHT / 2 }}
          onClick={() => {}}
        ></Card>
        <Card
          {...EvilCards[0]}
          position={{ x: window.innerWidth - 100 - CARD_WIDTH, y: window.innerHeight / 2 - CARD_HEIGHT / 2 }}
          onClick={() => {}}
        ></Card>
      </Stage>
    </div>
  );
}
