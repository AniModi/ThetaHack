import { Position } from "../types/Position";
import axiosInstance from "./axiosInstance";

export async function openChest(dungeonID: string, chest_position: Position) {
  try {
    const response = await axiosInstance.post("/chest/open", {
      dungeonID,
      chest_position,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
