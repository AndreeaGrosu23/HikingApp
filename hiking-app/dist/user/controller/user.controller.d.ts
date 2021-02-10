import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: User): Observable<User>;
    findAll(): Observable<User[]>;
    findOne(params: any): Observable<User>;
    deleteOne(id: number): Observable<any>;
    updateOne(id: number, user: User): Observable<any>;
}
