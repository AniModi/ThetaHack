import { Schema, model, Document } from "mongoose";

interface Reward extends Document {
  address: string;
  rewards: string[];
  dungeonID: string;
}

const rewardSchema = new Schema<Reward>({
  address: { type: String, required: true },
  rewards: { type: [String], required: true },
  dungeonID: { type: String, required: true },
});

const RewardModel = model<Reward>("Reward", rewardSchema);

export default RewardModel;
