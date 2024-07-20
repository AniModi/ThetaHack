import { useNavigate } from "react-router-dom";
import { Play, Settings } from "../../assets";
import Button from "../../components/Button/Button";

export default function Home() {
  const navigate = useNavigate();

  function handleConnect() {

  }

  function handlePlay() {
    navigate("/create-player");
  }

  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full h-full">
      <Button text="Connect Wallet" handleClick={handleConnect}>
        <Settings className="fill-peach h-10 w-16" />
      </Button>
      <Button text="Play" handleClick={handlePlay}>
        <Play className="fill-peach h-10 w-16" />
      </Button>
    </div>
  );
}
