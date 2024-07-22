import { playerParameters } from "../../data/playerParameters";
import Cover from "../Cover/Cover";

const pattern = [[]];


function getMessage() {
  if (playerParameters.isNearCharacter === "") {
    return;
  }
  if(playerParameters.isNearCharacter === "Theta") {
    return "to enter Theta hall";
  }

  if(playerParameters.isNearCharacter === "enemy") {
    return "to fight with enemy";
  }


  if(playerParameters.isNearCharacter === "chest") {
    return "to open chest";
  }


  return `to talk to ${playerParameters.isNearCharacter}`;
}

export default function PlayerAction() {
  if (playerParameters.isNearCharacter === "") {
    return;
  }

  return (
    <div className="w-fit h-fit mt-auto">
      <Cover pattern={pattern}>
        <div className="bg-peach px-4 py-2">
          <p>
            <span className="font-bold mr-0.5">Press K</span>
           {getMessage()}
          </p>
        </div>
      </Cover>
    </div>
  );
}
