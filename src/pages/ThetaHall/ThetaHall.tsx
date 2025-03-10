import { useState, useEffect } from "react";
import Stage from "../../components/Stage/Stage";
import Player from "../../components/Player/Player";
import Hall from "../../components/Hall/Hall";
import { useGame } from "../../hooks/useGame";
import { useApp } from "@pixi/react";
import {
    houseCoordinate,
    ruinCoordinate,
    towerCoordinate,
    hall_background,
} from "../../data/hall_map";
import updatePlayerParams from "../../utils/updatePlayerParams";
import { playerParameters } from "../../data/playerParameters";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import HallAction from "../../components/HallAction/HallAction";
import ThetaDialogue from "../../components/ThetaDialogue/ThetaDialogue";
import { model } from '../../utils/model';
import { thetaPrompt } from '../../prompts/thetaPrompt';

export default function ThetaHall() {
    const { map, setMap, playerPosition } = useGame();
    const [isTalking, setIsTalking] = useState(false);
    const [dialogue, setDialogue] = useState(
        [
            /* AI generated dialogue */
        ]
    );
    const app = useApp();

    function handleConversationEnd() {
        setIsTalking(false);
        app.ticker.start();
    }

    useEffect(() => {
        async function generateDialogue() {
            const result = await model.generateContent(thetaPrompt)
            const response = await result.response;
            const text = response.text();
            setDialogue(JSON.parse(text.substring(7, text.length - 3)));
            console.log('prompt', JSON.parse(text.substring(7, text.length - 3)));
        }
        generateDialogue();
    }, []);

    useEffect(() => {
        setMap(
            hall_background,
            [
                { type: "Wizard", x: towerCoordinate.x + 3, y: towerCoordinate.y + 9 },
                { type: "Elf", x: ruinCoordinate.x + 2, y: ruinCoordinate.y + 8 },
                { type: "Knight", x: houseCoordinate.x + 2, y: houseCoordinate.y + 8 },
            ],
            { x: 25, y: 25 },
            { x: 0, y: 0 }
        );
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "k") {
                if (playerParameters.isNearCharacter !== "") {
                    app.ticker.stop();
                    setIsTalking(true);
                }
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [setMap, app]);

    if (!map) {
        return;
    }

    updatePlayerParams(playerPosition, map?.entities);

    return (

        <div className="relative h-full w-full">
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Hall />
                <Player />
            </Stage>
            <div className="absolute bottom-0 w-full z-10 p-3 flex gap-10">
                <PlayerCard></PlayerCard>
                <div className="flex items-end justify-end ml-auto flex-grow">
                    {(isTalking && dialogue) ? (
                        <ThetaDialogue handleConversationEnd={handleConversationEnd} dialogue={dialogue}/>
                    ) : (
                        <HallAction />
                    )}
                </div>
            </div>
        </div>
    )
}