import { useEffect } from "react";
import { Wizard } from "../../assets";
import Button2 from "../Button2/Button2";
import Cover from "../Cover/Cover";
import ImageCard from "../ImageCard/ImageCard";

type ConversationBoxProps = {
  handleConversationEnd: () => void;
};

export default function ConversationBox({
  handleConversationEnd,
}: ConversationBoxProps) {
  useEffect(() => {
    function handleEnter(e: KeyboardEvent) {
      if (e.key === "Enter") {
        handleConversationEnd();
      }
    }

    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [handleConversationEnd]);

  return (
    <div className="w-fit h-full">
      <Cover pattern={[[]]}>
        <div className="bg-peach flex justify-center h-full">
          <div className="flex items-center h-full px-4">
            <div className="w-20">
              <ImageCard src={Wizard}></ImageCard>
            </div>
          </div>
          <div className="flex-grow border-l-2 border-black p-3">
            <h3 className="underline font-semibold">Gandalf</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsum
            distinctio eum atque! Omnis, error nulla. Possimus quam eligendi,
            aliquid quaerat obcaecati impedit, quisquam, repellat ut molestias
            minima suscipit enim.
          </div>
          <div className="mt-auto text-nowrap p-3">
            <Button2 text="⏎" onClick={() => {handleConversationEnd}}></Button2>
          </div>
        </div>
      </Cover>
    </div>
  );
}
