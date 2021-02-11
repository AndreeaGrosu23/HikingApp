import { User, UserRole } from '../models/user.model';
import { UserService } from '../service/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: User): Promise<any>;
    login(user: User): Promise<Object>;
    findAll(): Promise<{
        id: number;
        name: string;
        username: string;
        email: string;
        role: UserRole;
    }[]>;
    findOne(params: any): Promise<any>;
    deleteOne(id: number): Promise<any>;
    updateOne(id: string, user: User): Promise<any>;
    updateRoleOfUser(id: string, user: User): Promise<User>;
}
