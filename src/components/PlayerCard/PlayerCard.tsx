import { Wizard } from "../../assets";
import Cover from "../Cover/Cover";
import ImageCard from "../ImageCard/ImageCard";

const pattern = [
  [1, 0],
  [0, 1],
];

const playerStats = [
  { stat: "Health", value: 100 },
  { stat: "Mana", value: 80 },
  { stat: "Agility", value: 20 },
  { stat: "Stamina", value: 50 },
  { stat: "Intelligence", value: 30 },
];

const playerName = "Gandalf";
export default function PlayerCard() {
  return (
    <div className="w-96">
      <Cover pattern={pattern}>
        <div className="bg-peach w-full h-full p-3 flex">
          <div className="w-16">
            <ImageCard src={Wizard}></ImageCard>
          </div>
          <div className="flex-grow">
            <div className="text-black px-3 grid grid-cols-2">
              <div className="col-span-2 text-lg font-bold mb-1">
                {playerName}
              </div>
              {playerStats.map((playerStat) => (
                <p key={playerStat.stat}>
                  {playerStat.stat}: {playerStat.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Cover>
    </div>
  );
}
