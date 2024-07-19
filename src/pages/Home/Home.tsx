import { useNavigate } from "react-router-dom";
import { Play, Settings } from "../../assets";
import Button from "../../components/Button/Button";

export default function Home() {
  const navigate = useNavigate();

  function handlePlay() {
    navigate("/create-player");
  }


  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full h-full" onClick={handlePlay}>
      <Button text="Play">
        <Play className="fill-peach h-10 w-16" />
      </Button>
      <Button text="Options">
        <Settings className="fill-peach h-10 w-16" />
      </Button>
    </div>
  );
}
