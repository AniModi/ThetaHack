import { Router } from "express";
import { deleteDungeon, generateDungeon } from "../controllers/dungeonController";

const dungeonRouter = Router();

dungeonRouter.get("/", generateDungeon);
dungeonRouter.delete("/:id", deleteDungeon)

export default dungeonRouter;
