import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dungeonRouter from "./routes/dungeonRoutes";
import battleRoutes from "./routes/battleRoutes";
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