import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
});

export interface User extends mongoose.Document {
    id?: number;
    name?: string;
    username?: string;
}