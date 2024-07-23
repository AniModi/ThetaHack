import { Dispatch, SetStateAction, useEffect } from "react";
import { REWARDS } from "../../assets";
import { useApp } from "@pixi/react";
import Button2 from "../Button2/Button2";

type ChestContentProps = {
  handleClose: Dispatch<SetStateAction<string[] | undefined>>;
  content: string[];
};

export default function ChestContent({
  handleClose,
  content,
}: ChestContentProps) {
  const rewards = REWARDS.filter((reward) => content.includes(reward.name)); // Assuming REWARDS has { name: string, path: string } structure

  const app = useApp();

  useEffect(() => {
    app.ticker.stop();

    return () => {
      app.ticker.start();
    };
  }, [app]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-peach rounded-lg p-5 relative flex flex-col">
        <div className="ml-auto mb-3">
          <Button2
            onClick={() => handleClose(undefined)}
            text="Close"
            className="!p-1 text-base"
          ></Button2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xl">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-2 border border-black p-2"
            >
              <img src={reward.path} className="w-10 h-10" alt={reward.name} />
              <div className="text-black">{reward.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
