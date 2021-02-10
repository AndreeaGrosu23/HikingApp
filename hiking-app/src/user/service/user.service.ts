import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user.model';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
    constructor(@InjectModel('users') private readonly userModel: Model<User>) {}

    create(user: User): Observable<User> {
        const newUser = new this.userModel({
            name: user.name,
            username: user.username
        });
        return from(newUser.save());
    }

    findAll(): Observable<User[]> {
        return from(this.userModel.find().exec());
    }

    findOne(id:number): Observable<User> {
        return from(this.userModel.findById({_id:id}).exec());
    }

    deleteOne(id:number): Observable<any> {
        return from(this.userModel.deleteOne({ _id: id }).exec());
    }

    updateOne(id:number, user:User): Observable<any> {
        return from(this.userModel.findByIdAndUpdate({_id: id}, user));
    }
}
