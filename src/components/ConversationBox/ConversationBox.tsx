import { useEffect, useState } from "react";
import { Wizard, Elf } from "../../assets";
import Button2 from "../Button2/Button2";
import Cover from "../Cover/Cover";
import ImageCard from "../ImageCard/ImageCard";
import UserResponse from "./UserResponse";
import useCount from "../../hooks/useCount";
import { playerParameters } from "../../data/playerParameters";

type ConversationBoxProps = {
  handleConversationEnd: () => void;
  dialogue: []
};

export default function ConversationBox({
  handleConversationEnd,
  dialogue,
}: ConversationBoxProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const { count, decrement, increment, setCount } = useCount(0);
  const conversationSteps = dialogue

  const img = playerParameters.isNearCharacter === "Elf" ? Elf : Wizard;

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown") {
        increment(conversationSteps[currentStep].responses?.length - 1 || 0);
      }
      if (e.key === "ArrowUp") {
        decrement(0);
      }
      if (e.key === "Enter") {
        if (conversationSteps[currentStep].responses) {
          const nextStep =
            conversationSteps[currentStep].responses[count].nextStep;
          if (nextStep === -1) {
            handleConversationEnd();
          } else {
            setCurrentStep(nextStep);
            setCount(0);
          }
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    handleConversationEnd,
    increment,
    decrement,
    count,
    currentStep,
    setCount,
    conversationSteps
  ]);

  const currentStepData = conversationSteps[currentStep];

  return (
    <div className="w-full h-full">
      <Cover pattern={[[]]}>
        <div className="bg-peach flex justify-center h-full">
          <div className="flex items-center h-full px-4">
            <div className="w-20">
              <ImageCard src={img}></ImageCard>
            </div>
          </div>
          <div className="flex-grow border-l-2 border-black p-3">
            <h3 className="underline font-semibold">
              {currentStepData.speaker}
            </h3>
            <p className="leading-4">{currentStepData.text}</p>
            {currentStepData.responses && (
              <UserResponse
                responses={currentStepData.responses.map((r) => r.text)}
                selectedOption={count}
                setSelectedOption={setCount}
              />
            )}
          </div>
          <div className="mt-auto text-nowrap p-3">
            <Button2
              text="⏎"
              onClick={() => {
                const nextStep = currentStepData.responses
                  ? currentStepData.responses[count].nextStep
                  : -1;
                if (nextStep === -1) {
                  handleConversationEnd();
                } else {
                  setCurrentStep(nextStep);
                  setCount(0);
                }
              }}
            ></Button2>
          </div>
        </div>
      </Cover>
    </div>
  );
}
