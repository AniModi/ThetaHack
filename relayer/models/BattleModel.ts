import { Schema, model, Document } from "mongoose";

interface Battle extends Document {
  dungeonID: string;
  player_health: number;
  enemy_health: number;
}

const battleSchema = new Schema<Battle>({
  dungeonID: { type: String, required: true, unique: true },
  player_health: { type: Number, required: true },
  enemy_health: { type: Number, required: true }
});

const BattleModel = model<Battle>("Battle", battleSchema);

export default BattleModel;
