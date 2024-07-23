import { Schema, model, Document } from "mongoose";
import { Position } from "../types/Position";
import { Room } from "../types/Room";

interface Dungeon extends Document {
  unique_id: string;
  enemy_locations: Position[];
  chest_locations: Position[];
  chest_states: ("locked" | "unlocked" | "opened")[];
  rooms: Room[];
}

const positionSchema = new Schema<Position>(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { _id: false }
);

const roomSchema = new Schema<Room>(
  {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  { _id: false }
);

const dungeonSchema = new Schema<Dungeon>({
  unique_id: { type: String, required: true, unique: true },
  enemy_locations: { type: [positionSchema], default: [] },
  chest_locations: { type: [positionSchema], default: [] },
  chest_states: {
    type: [{ type: String, enum: ["locked", "unlocked", "opened"] }],
    default: [],
  },
  rooms: { type: [roomSchema], default: [] },
});

const DungeonModel = model<Dungeon>("Dungeon", dungeonSchema);

export default DungeonModel;
