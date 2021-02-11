"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
const auth_service_1 = require("../../auth/auth/services/auth.service");
let UserService = class UserService {
    constructor(userModel, authService) {
        this.userModel = userModel;
        this.authService = authService;
    }
    async create(user) {
        const passwordHash = await this.authService.hashPassword(user.password);
        const newUser = new this.userModel({
            name: user.name,
            username: user.username,
            email: user.email.toLowerCase(),
            password: passwordHash
        });
        const userDb = await newUser.save();
        const result = {
            id: userDb.id,
            name: userDb.name,
            username: userDb.username,
            email: userDb.email
        };
        return result;
    }
    async findAll() {
        const users = await this.userModel.find().exec();
        return users.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }));
    }
    async findOne(id) {
        let userDb;
        let result;
        try {
            userDb = await this.userModel.findById({ _id: id }).exec();
            result = {
                id: userDb.id,
                name: userDb.name,
                username: userDb.username,
                email: userDb.email
            };
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find user');
        }
        if (!userDb) {
            throw new common_1.NotFoundException('Could not find user');
        }
        return result;
    }
    async deleteOne(id) {
        let result;
        try {
            result = await this.userModel.deleteOne({ _id: id }).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find hike');
        }
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find hike');
        }
    }
    async updateOne(id, user) {
        delete user.email;
        delete user.password;
        const userDb = await this.userModel.findByIdAndUpdate({ _id: id }, user);
        const result = {
            id: userDb.id,
            name: userDb.name,
            username: userDb.username,
            email: userDb.email
        };
        return result;
    }
    async login(user) {
        const userValidated = await this.validateUser(user.email, user.password);
        delete user.password;
        if (userValidated) {
            return await this.authService.generateJWT(user);
        }
        else {
            return "Wrong credentials";
        }
    }
    async validateUser(email, password) {
        const user = await this.findByMail(email);
        const match = await this.authService.comparePasswords(password, user.password);
        if (match) {
            return true;
        }
        else {
            rxjs_1.throwError;
        }
    }
    async findByMail(email) {
        return await this.userModel.findOne({ email });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('users')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map