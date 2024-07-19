import Pattern from "../Pattern/Pattern";

type ImageCardProps = {
  src: string;
};


export default function ImageCard({src}: ImageCardProps) {
  return (
    <div className="relative w-full aspect-square">
      <div className="h-full w-full bg-peach relative z-10 border-2 border-black flex items-center justify-center rounded-br-md">
        <div className="absolute top-0 left-0">
          <Pattern
            pattern={[
              [0, 1],
              [1, 0],
            ]}
          ></Pattern>
        </div>
        <img src={src} className="h-full"></img>
      </div>
      <div className="absolute w-full h-full p-0.5 box-content top-0 left-0 bg-gray border-2 border-black rounded-br"></div>
    </div>
  );
}
