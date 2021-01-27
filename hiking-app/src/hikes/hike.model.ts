import * as mongoose from 'mongoose';

export const HikeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  distance: { type: Number, required: true },
  elevation_gain: { type: Number, required: true },
  trail_type: { type: String, required: true },
  image: { type: String, required: true },
});

export interface Hike extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  distance: number;
  elevation_gain: number;
  trail_type: string;
  image: string;
}
