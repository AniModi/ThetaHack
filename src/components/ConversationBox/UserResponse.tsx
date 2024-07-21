export default function UserResponse({
  responses,
  selectedOption,
  setSelectedOption
}: {
  responses: string[];
  selectedOption: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex-grow border-l-2 border-black p-3">
      <h3 className="underline font-semibold">How would you respond?</h3>
      <ul className="list-disc pl-2 mt-1">
        {responses.map((response, idx) => {
          return (
            <li
              className={`leading-4 cursor-pointer ${
                idx === selectedOption ? "font-bold" : ""
              }`}
              key={response}
              onClick={() => setSelectedOption(idx)}
            >
              {response}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
