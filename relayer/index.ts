import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dungeonRouter from "./routes/dungeonRoutes";
import battleRoutes from "./routes/battleRoutes";
import chestRoutes from "./routes/chestRoutes";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./contracts.ts";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

function connectToMongo() {
  const db_uri = process.env.DB_URI;
  mongoose
    .connect(db_uri!)
    .then(() => console.log("MongoDB Connected"))
    .catch((err: unknown) => console.log(err));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

connectToMongo();

app.use("/dungeon", dungeonRouter)
app.use("/battle", battleRoutes)
app.use("/chest", chestRoutes)
app.post("/relay", async (req, res) => {
  const { sender, signature } = req.body;
  console.log(sender, signature);
  const signer = ethers.verifyMessage("Quest done", signature);
  if (signer !== sender) {
    return res.status(401).send("Unauthorized");
  }
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, [, provider]);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet);
  await contract.updateReward(sender, 'Poison potion');

  res.send("Relayed");
});