import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Settings } from "../../assets";
import { useConnect, useConnectionStatus, useAddress, metamaskWallet } from "@thirdweb-dev/react";
import Button from "../../components/Button/Button";

export default function Home() {
  const navigate = useNavigate();
  const address = useAddress();
  const connect = useConnect();
  const connection = useConnectionStatus();
  const [connectText, setConnectText] = useState<string>("Connect Wallet");

  useEffect(() => {
    if (address) {
      setConnectText("Connected");
    } else {
      setConnectText("Connect Wallet");
    }
  }, [address]);

  async function handleConnect() {
    if (connection != "connected")
      await connect(metamaskWallet());
    else if (connection == "connected")
      setConnectText("Connected");
  }

  function handlePlay() {
    navigate("/create-player");
  }

  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full h-full">
      <Button text={connectText} handleClick={handleConnect}>
        <Settings className="fill-peach h-10 w-16" />
      </Button>
      <Button text="Play" handleClick={handlePlay}>
        <Play className="fill-peach h-10 w-16" />
      </Button>
      {address && <p className="text-white">Connected address: {address}</p>} {/* Change the design */}
    </div>
  );
}