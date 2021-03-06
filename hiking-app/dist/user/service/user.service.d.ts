import { User } from '../models/user.model';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth/services/auth.service';
export declare class UserService {
    private readonly userModel;
    private authService;
    constructor(userModel: Model<User>, authService: AuthService);
    create(user: User): Promise<any>;
    findAll(): Promise<{
        id: number;
        name: string;
        username: string;
        email: string;
        role: import("../models/user.model").UserRole;
    }[]>;
    findOne(id: number): Promise<any>;
    deleteOne(id: number): Promise<any>;
    updateOne(id: string, user: User): Promise<any>;
    login(user: User): Promise<string>;
    validateUser(email: string, password: string): Promise<boolean>;
    findByMail(email: string): Promise<User>;
    updateRoleOfUser(id: string, user: User): Promise<User>;
}
