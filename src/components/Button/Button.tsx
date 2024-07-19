type Button = {
  children: JSX.Element;
  text: string;
};

export default function Button({ children, text }: Button) {
  return (
    <button className="bg-red border-4 border-peach px-5 py-4 flex gap-1 items-center">
      {children}
      <span className="font-extrabold text-peach text-3xl">{text}</span>
    </button>
  );
}
