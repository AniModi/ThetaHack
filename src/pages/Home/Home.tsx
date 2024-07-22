import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Settings } from "../../assets";
import {
  useConnect,
  useConnectionStatus,
  useAddress,
  useSwitchChain,
  metamaskWallet,
} from "@thirdweb-dev/react";
import { THETA_LOCAL, AVATAR_ABI, AVATAR_ADDRESS } from "../../utils/constants";
import Button from "../../components/Button/Button";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function Home() {
  const navigate = useNavigate();
  const address = useAddress();
  const connect = useConnect();
  const switchChain = useSwitchChain();
  const connection = useConnectionStatus();
  const [connectText, setConnectText] = useState<string>("Connect Wallet");
  const [title, setTitle] = useState<string>("");
  const { contract } = useContract(AVATAR_ADDRESS, AVATAR_ABI);
  const { data } = useContractRead(contract, "avatars", [address]);

  useEffect(() => {
    if (address) {
      setConnectText("Connected");
    } else {
      setConnectText("Connect Wallet");
    }
    switchChain(THETA_LOCAL.chainId);
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
    if (data)
      navigate("/play");
    else
      navigate("/create-player");
  }

  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full h-full relative">
      <h1 className="text-white text-8xl mb-16">{title}</h1>
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
