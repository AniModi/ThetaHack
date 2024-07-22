import { AttackData } from "../types/AttackData";
import { Position } from "../types/Position";
import axiosInstance from "./axiosInstance";

export async function getAttacks() {
  try {
    const response = await axiosInstance.get("/battle/attacks");

    const AttackData: Record<string, AttackData> = response.data;
    return AttackData;
  } catch (error) {
    console.log(error);
  }
}

export async function startBattle(dungeonID: string, enemy_position: Position) {
  try {
    const response = await axiosInstance.post(`/battle/`, {
      dungeonID,
      enemy_position,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function attackEnemy(dungeonID: string, attack: string) {
  try {
    const response = await axiosInstance.post(`/battle/attack/enemy`, {
      dungeonID,
      attack,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function attackPlayer(dungeonID: string, attack: string) {
  try {
    const response = await axiosInstance.post(`/battle/attack/player`, {
      dungeonID,
      attack,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
