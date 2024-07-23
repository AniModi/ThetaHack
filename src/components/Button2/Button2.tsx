type Button2 = {
  text: string;
  onClick: () => void;
  className? : string;
};

export default function Button2({ text, onClick, className }: Button2) {
  return (
    <div className="w-fit h-fit relative">
      <button
        onClick={onClick}
        className={`font-semibold text-xl px-2 py-1 relative z-10 border border-black bg-peach ${className}`}
      >
        {text}
      </button>
      <div className="absolute top-1 left-0 bg-gray rounded border border-black w-full h-full"></div>
    </div>
  );
}
