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
exports.HikesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let HikesService = class HikesService {
    constructor(hikeModel) {
        this.hikeModel = hikeModel;
    }
    async insertHike(title, description, difficulty, distance, elevation_gain, trail_type, image) {
        const newHike = new this.hikeModel({
            title: title,
            description: description,
            difficulty: difficulty,
            distance: distance,
            elevation_gain: elevation_gain,
            trail_type: trail_type,
            image: image,
        });
        const result = await newHike.save();
        return result.id;
    }
    async getHikes() {
        const hikes = await this.hikeModel.find().exec();
        return hikes.map((hk) => ({
            id: hk.id,
            title: hk.title,
            description: hk.description,
            difficulty: hk.difficulty,
            distance: hk.distance,
            elevation_gain: hk.elevation_gain,
            trail_type: hk.trail_type,
            image: hk.image,
        }));
    }
    async getSingleHike(hikeId) {
        const hike = await this.findHike(hikeId);
        return {
            id: hike.id,
            title: hike.title,
            description: hike.description,
            difficulty: hike.difficulty,
            distance: hike.distance,
            elevation_gain: hike.elevation_gain,
            trail_type: hike.trail_type,
            image: hike.image,
        };
    }
    async updateHike(hikeId, title, description, difficulty, distance, elevation_gain, trail_type, image) {
        const updatedHike = await this.findHike(hikeId);
        if (title) {
            updatedHike.title = title;
        }
        if (description) {
            updatedHike.description = description;
        }
        if (difficulty) {
            updatedHike.difficulty = difficulty;
        }
        if (distance) {
            updatedHike.distance = distance;
        }
        if (elevation_gain) {
            updatedHike.elevation_gain = elevation_gain;
        }
        if (trail_type) {
            updatedHike.trail_type = trail_type;
        }
        if (image) {
            updatedHike.image = image;
        }
        updatedHike.save();
    }
    async deleteHike(hikeId) {
        let result;
        try {
            result = await this.hikeModel.deleteOne({ _id: hikeId }).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find hike');
        }
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find hike');
        }
    }
    async findHike(id) {
        let hike;
        try {
            hike = await this.hikeModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find hike');
        }
        if (!hike) {
            throw new common_1.NotFoundException('Could not find hike');
        }
        return hike;
    }
};
HikesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('hikes')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HikesService);
exports.HikesService = HikesService;
//# sourceMappingURL=hikes.service.js.map