type AttackButton = {
  text: string;
  onHover: () => void;
  onClick: () => void;
};

export default function AttackButton({ text, onHover, onClick }: AttackButton) {
  return (
    <div className="w-full h-full relative" onMouseEnter={onHover} onClick={onClick}>
      <button className="h-full w-full font-semibold text-xl px-2 py-1 relative z-10 border border-black bg-peach">
        {text}
      </button>
      <div className="absolute top-1 left-0 bg-gray rounded border border-black w-full h-full"></div>
    </div>
  );
}
