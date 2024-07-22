import { Router } from "express";
import { attackEnemy, attackPlayer, getAttacks, startBattle } from "../controllers/battleController";

const battleRoutes = Router();


battleRoutes.get("/attacks", getAttacks);
battleRoutes.post("/", startBattle);
battleRoutes.post("/attack/enemy", attackEnemy)
battleRoutes.post("/attack/player", attackPlayer)

export default battleRoutes;
