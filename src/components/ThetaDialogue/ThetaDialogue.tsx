import { useState, useEffect } from 'react';
import { Wizard } from "../../assets";
import Cover from "../Cover/Cover";
import ImageCard from "../ImageCard/ImageCard";
import UserResponse from "./UserResponse";
import Button2 from "../Button2/Button2";
import useCount from '../../hooks/useCount';
import { nodeDialogue } from '../../data/nodeDialogue';

type ConversationBoxProps = {
    handleConversationEnd: () => void;
};

export default function ThetaDialogue({
    handleConversationEnd,
}: ConversationBoxProps) {
    const { count, increment, setCount } = useCount(0);
    const [dialogue, setDialogue] = useState(
        [
            /* AI generated dialogue */
        ]
    );
    const [isNodeDialogue, setNodeDialogue] = useState(false);
    const [option, setOption] = useState("linux");

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Enter") {
                actionOnEnter();
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        handleConversationEnd,
        increment,
        count,
    ]);

    const actionOnEnter = () => {
        if (dialogue.length === count + 1) {
            setNodeDialogue(true);
            setCount(0);
        } else if (isNodeDialogue && nodeDialogue[option].length === count + 1) {
            handleConversationEnd();
        }
        else {
            increment(dialogue.length);
        }
    }

    return (
        <div className="w-full h-full">
            <Cover pattern={[[]]}>
                <div className="bg-peach flex justify-center h-full">
                    <div className="flex items-center h-full px-4">
                        <div className="w-20">
                            <ImageCard src={Wizard}></ImageCard>
                        </div>
                    </div>
                    <div className="flex-grow border-l-2 border-black p-3">
                        <h3 className="underline font-semibold">
                            A wise wizard
                        </h3>
                        <p className="leading-4">{isNodeDialogue ?
                            (<>
                                {nodeDialogue[option][count].text}<br /><br />
                                <pre className='whitespace-pre-wrap'>
                                    <code>{nodeDialogue[option][count].code}</code>
                                </pre>
                            </>)
                            : dialogue[count]["gandalf"]}</p>
                        {
                            isNodeDialogue && count === 0 &&
                            <>
                                <Button2 text='Linux' onClick={() => { setOption("linux"); actionOnEnter() }}></Button2>
                                <Button2 text='Mac' onClick={() => { setOption("mac"); actionOnEnter() }}></Button2>
                            </>
                        }
                        {!isNodeDialogue && dialogue[count]["user"] && (
                            <UserResponse
                                response={dialogue[count]["user"]}
                            />
                        )}
                    </div>
                    <div className="mt-auto text-nowrap p-3">
                        <Button2
                            text="⏎"
                            onClick={() => actionOnEnter()}
                        ></Button2>
                    </div>
                </div>
            </Cover>
        </div>
    );
}