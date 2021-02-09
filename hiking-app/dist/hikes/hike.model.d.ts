import * as mongoose from 'mongoose';
export declare const HikeSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
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
