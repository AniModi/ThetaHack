import AttackButton from "../AttackButton/AttackButton";
import Cover from "../Cover/Cover";

type BattleActionsProps = {
  onClick: (id: number) => void;
  attacks: string[];
};

export default function BattleActions({
  onClick,
  attacks,
}: BattleActionsProps) {
  return (
    <div className="w-full bottom-0 p-3 flex gap-10">
      <div className="w-1/2">
        <Cover>
          <div className="bg-peach h-full w-full p-5  grid grid-cols-2 gap-3 pb-10">
            {attacks.map((attack, idx) => {
              return (
                <AttackButton
                  text={attack}
                  onHover={() => {}}
                  onClick={() => {
                    onClick(idx);
                  }}
                ></AttackButton>
              );
            })}
          </div>
        </Cover>
      </div>
      <div className="w-1/2">
        <Cover pattern={[[]]}>
          <div className="flex flex-col items-center w-full justify-center px-4 py-2">
            <h1 className="text-center text-2xl font-bold">Attack 1</h1>
            <div className="p-4 grid grid-cols-2 text-lg w-full pl-10">
              <p className="mb-1">
                <strong>Damage:</strong> 10-15
              </p>
              <p className="mb-1">
                <strong>Critical Rate:</strong> 10%
              </p>
            </div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              ipsam consequatur quod iste veniam. Odio quaerat itaque autem
              pariatur officia.
            </div>
          </div>
        </Cover>
      </div>
    </div>
  );
}
