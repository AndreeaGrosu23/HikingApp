import * as mongoose from "mongoose";
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface User extends mongoose.Document {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;
}
