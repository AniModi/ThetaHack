import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Elf, Knight, Wizard } from "../../assets";
import Cover from "../../components/Cover/Cover";
import ImageCard from "../../components/ImageCard/ImageCard";
import Button2 from "../../components/Button2/Button2";
import { useContract, useContractWrite } from "@thirdweb-dev/react"
import { AVATAR_ADDRESS, AVATAR_ABI } from "../../utils/constants";

const playerImage: Record<string, string> = {
  Elf: Elf,
  Knight: Knight,
  Wizard: Wizard,
};

const playerStats: Record<string, { [key: string]: number }> = {
  Elf: {
    health: 100,
    mana: 80,
    agility: 20,
    stamina: 50,
    intelligence: 30,
  },
  Knight: {
    health: 150,
    mana: 50,
    strength: 30,
    defense: 40,
    stamina: 60,
  },
  Wizard: {
    health: 80,
    mana: 120,
    combat: 20,
    agility: 25,
    wisdom: 35,
  },
};

export default function PlayerDetailPage() {
  const { player } = useParams();
  const navigate = useNavigate();
  const { contract } = useContract(AVATAR_ADDRESS, AVATAR_ABI);
  const { mutateAsync } = useContractWrite(contract, "setAvatar");
  const [action, setAction] = useState("Choose");
  const [txHash, setTxHash] = useState("");

  // Render nothing if player type is unknown
  if (!player || !playerImage[player]) {
    return null;
  }

  // Navigation functions
  function goBack() {
    navigate(-1);
  }

  async function handleAction() {
    if (action === "Choose")
      await choose();
    else if (action === "Play")
      navigate("/play");
  }

  async function choose() {
    console.log("Choose", player);
    const tx = await mutateAsync({
      args: [player],
    })
    setTxHash(tx?.receipt?.transactionHash);
    setAction("Play");
  }

  const stats = playerStats[player];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-96 min-h-96 h-2/3">
        <Cover>
          <div className="w-full h-full p-3 flex-col">
            <h1 className="text-center text-2xl font-semibold mb-2">
              {player}
            </h1>
            <div className="flex gap-3">
              <div className="w-1/3">
                <ImageCard src={playerImage[player]}></ImageCard>
              </div>
              <div className="w-2/3 pl-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                sequi? Facere voluptas sed asperiores nesciunt eius!
              </div>
            </div>
            <div className="flex-grow mt-3">
              <h1 className="text-center text-xl font-semibold mb-2">Stats</h1>
              <div className="flex flex-wrap gap-3">
                {Object.keys(stats).map((statName) => (
                  <div key={statName} className="flex-1 text-center">
                    <div className="font-semibold">{statName}</div>
                    <div>{stats[statName]}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <Button2 onClick={handleAction} text={action} />
                <Button2 onClick={goBack} text="Go Back" />
              </div>
              {txHash &&
                <div className="flex flex-col justify-center items-center mt-20">
                  <h1 className="text-center text-xl font-semibold mb-2">Your avatar has been minted!</h1>
                  <Button2 onClick={() => null} text="View tx" />
                </div>
              }
            </div>
          </div>
        </Cover>
      </div>
    </div>
  );
}
