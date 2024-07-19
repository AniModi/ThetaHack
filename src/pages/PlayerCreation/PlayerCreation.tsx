import { useNavigate } from "react-router-dom";
import { Elf, Knight, Wizard } from "../../assets";
import Cover from "../../components/Cover/Cover";
import ImageCard from "../../components/ImageCard/ImageCard";

const cards = [
  {
    name: "Wizard",
    image: Wizard,
  },
  {
    name: "Knight",
    image: Knight,
  },
  {
    name: "Elf",
    image: Elf,
  },
];

export default function PlayerCreation() {
  const navigate = useNavigate();

  function handleCardClick(name: string) {
    navigate(`${name}`);
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-96 min-h-96 h-2/3">
        <Cover>
          <div className="w-full h-full p-3">
            <h1 className="text-center text-3xl font-semibold">
              Choose a player
            </h1>
            <div className="flex gap-10 flex-wrap justify-center mt-5">
              {cards.map((card) => {
                return (
                  <div
                    className="hover:scale-105 cursor-pointer w-32 h-32"
                    key={card.name}
                    onClick={() => {
                      handleCardClick(card.name);
                    }}
                  >
                    <ImageCard src={card.image} />
                    <h2 className="text-xl font-semibold text-center mt-2">
                      {card.name}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
        </Cover>
      </div>
    </div>
  );
}
