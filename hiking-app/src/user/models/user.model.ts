import * as mongoose from "mongoose";

export enum UserRole {
    ADMIN= "admin",
    USER= "user"
}

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: UserRole, required: true, default: UserRole.USER}
});
export interface User extends mongoose.Document {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;
}