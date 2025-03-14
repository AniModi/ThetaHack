import { playerParameters } from "../../data/playerParameters";
import Cover from "../Cover/Cover";

const pattern = [[]];
export default function HallAction() {
    if (playerParameters.isNearCharacter === "") {
        return;
    }
    return (
        <div className="w-fit h-fit mt-auto">
            <Cover pattern={pattern}>
                <div className="bg-peach px-4 py-2">
                    <p>
                        <span className="font-bold mr-0.5">Press K</span>
                        to interact
                    </p>
                </div>
            </Cover>
        </div>
    );
}