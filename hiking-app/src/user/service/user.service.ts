import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user.model';
import { Model } from 'mongoose';
import { throwError } from 'rxjs';
import { AuthService } from 'src/auth/auth/services/auth.service';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('users') private readonly userModel: Model<User>,
        private authService: AuthService) {}

    async create(user: User): Promise<any> {
        const passwordHash = await this.authService.hashPassword(user.password);
        const newUser = new this.userModel({
            name: user.name,
            username: user.username,
            email: user.email.toLowerCase(),
            password: passwordHash,
            role: user.role
        });
        const userDb = await newUser.save();
        const result = {
            id: userDb.id,
            name: userDb.name,
            username: userDb.username,
            email: userDb.email,
            role: userDb.role
        };
        return result;
    }
        
    async findAll() {
        const users = await this.userModel.find().exec();
        return users.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role
        }));
    }

    async findOne(id:number) {
        let userDb;
        let result;
        try {
            userDb = await this.userModel.findById({_id:id}).exec();
            result = {
                id: userDb.id,
                name: userDb.name,
                username: userDb.username,
                email: userDb.email,
                role: userDb.role
            };            
        } catch (error) {
            throw new NotFoundException('Could not find user');
        }
        if (!userDb) {
            throw new NotFoundException('Could not find user');
        }
        return result;
    }

    async deleteOne(id:number): Promise<any> {
        let result;
        try {
            result = await this.userModel.deleteOne({ _id: id }).exec();
        } catch (error) {
            throw new NotFoundException('Could not find user');
        }
        if (result.n === 0) {
            throw new NotFoundException('Could not find user');
        }
    }

    async updateOne(id:string, user:User): Promise<any> {
        delete user.email;
        delete user.password;
        const userDb = await this.userModel.findByIdAndUpdate(id, user);
        const result = {
            id: userDb.id,
            name: userDb.name,
            username: userDb.username,
            email: userDb.email,
            role: userDb.role
        };
        return result;
    }

    async login(user: User): Promise<string> {
        const userValidated = await this.validateUser(user.email, user.password);
        delete user.password;
        if(userValidated) {
            return await this.authService.generateJWT(user);
        } else {
            return "Wrong credentials";
        }
    }

    async validateUser(email: string, password: string): Promise<boolean> {
        const user = await this.findByMail(email);
        const match = await this.authService.comparePasswords(password, user.password);
        if(match) {
            return true;
        } else {
            throwError;
        }       
    }

    async findByMail(email: string): Promise<User> {
        return await this.userModel.findOne({email});
    }

    async updateRoleOfUser(id: string, user: User): Promise<User> {
        delete user.email;
        delete user.password;
        return await this.userModel.findByIdAndUpdate(id, user);
    }
}
