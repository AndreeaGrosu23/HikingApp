import { User } from '../models/user.model';
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
    }[]>;
    findOne(params: any): Promise<any>;
    deleteOne(id: number): Promise<any>;
    updateOne(id: number, user: User): Promise<any>;
}
