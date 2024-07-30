import { Position } from "../types/Position";
import axiosInstance from "./axiosInstance";
import { ethers } from "ethers";

export async function openChest(dungeonID: string, chest_position: Position, address: string) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const signature = await signer.signMessage("Quest done");
    const status = await axiosInstance.post("/relay", {
      sender: address,
      signature
    });
    if (status.status !== 200 && status.data !== "Relayed") {
      return { message: "Unauthorized" };
    }
    const response = await axiosInstance.post("/chest/open", {
      dungeonID,
      chest_position,
      address
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
