import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Settings } from "../../assets";
import {
  useConnect,
  useConnectionStatus,
  useAddress,
  metamaskWallet,
} from "@thirdweb-dev/react";
import Button from "../../components/Button/Button";

export default function Home() {
  const navigate = useNavigate();
  const address = useAddress();
  const connect = useConnect();
  const connection = useConnectionStatus();
  const [connectText, setConnectText] = useState<string>("Connect Wallet");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (address) {
      setConnectText("Connected");
    } else {
      setConnectText("Connect Wallet");
    }
  }, [address]);

  useEffect(() => {
    const titleText = "Chronicles of Theta";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setTitle(titleText.substring(0, currentIndex + 1));
      currentIndex += 1;

      if (currentIndex === titleText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  async function handleConnect() {
    if (connection !== "connected") await connect(metamaskWallet());
    else if (connection === "connected") setConnectText("Connected");
  }

  function handlePlay() {
    navigate("/create-player");
  }

  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full h-full relative">
      <h1 className="text-white text-6xl mb-5">{title}</h1>
      <Button text={connectText} handleClick={handleConnect}>
        <Settings className="fill-peach h-10 w-16" />
      </Button>
      {address && (
        <>
          <Button text="Play" handleClick={handlePlay}>
            <Play className="fill-peach h-10 w-16" />
          </Button>
          <p className="text-white absolute bottom-0 right-0 mr-3 text-lg">
            Connected address: {address}
          </p>
        </>
      )}
    </div>
  );
}
