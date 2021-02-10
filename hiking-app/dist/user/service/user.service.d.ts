import { User } from '../models/user.model';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(user: User): Observable<User>;
    findAll(): Observable<User[]>;
    findOne(id: number): Observable<User>;
    deleteOne(id: number): Observable<any>;
    updateOne(id: number, user: User): Observable<any>;
}
