import Pattern from "../Pattern/Pattern";
const pattern = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];

type CoverProps = {
    children: JSX.Element
}

export default function Cover({ children }: CoverProps) {
  return (
    <div className="w-full h-full relative">
      <div className="bg-peach h-full w-full border-2 border-black relative z-10">
        <div className="absolute w-full pointer-events-none bottom-0 flex justify-between">
          <Pattern pattern={pattern}></Pattern>
          <div className="-scale-x-100">
            <Pattern pattern={pattern}></Pattern>
          </div>
        </div>
        {children}
      </div>
      <div className="bg-gray h-full w-full border-2 border-black p-0.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 box-content"></div>
    </div>
  );
}
