import { Router } from "express";
import { openChest } from "../controllers/chestController";

const chestRoutes = Router();


chestRoutes.post("/open", openChest);


export default chestRoutes;
