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
exports.HikesController = void 0;
const common_1 = require("@nestjs/common");
const hikes_service_1 = require("./hikes.service");
let HikesController = class HikesController {
    constructor(hikesService) {
        this.hikesService = hikesService;
    }
    async addHike(hikeTitle, hikeDescription, hikeDifficulty, hikeDistance, hikeElevationGain, hikeTrailType, hikeImage) {
        const generatedId = await this.hikesService.insertHike(hikeTitle, hikeDescription, hikeDifficulty, hikeDistance, hikeElevationGain, hikeTrailType, hikeImage);
        return { id: generatedId };
    }
    async getAllHikes() {
        const hikes = await this.hikesService.getHikes();
        return hikes;
    }
    getHike(hikeId) {
        return this.hikesService.getSingleHike(hikeId);
    }
    async updateHike(hikeId, title, description, difficulty, distance, elevation_gain, trail_type, image) {
        await this.hikesService.updateHike(hikeId, title, description, difficulty, distance, elevation_gain, trail_type, image);
        return null;
    }
    async deleteHike(hikeId) {
        await this.hikesService.deleteHike(hikeId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('title')),
    __param(1, common_1.Body('description')),
    __param(2, common_1.Body('difficulty')),
    __param(3, common_1.Body('distance')),
    __param(4, common_1.Body('elevation_gain')),
    __param(5, common_1.Body('trail_type')),
    __param(6, common_1.Body('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], HikesController.prototype, "addHike", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HikesController.prototype, "getAllHikes", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HikesController.prototype, "getHike", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('title')),
    __param(2, common_1.Body('description')),
    __param(3, common_1.Body('difficulty')),
    __param(4, common_1.Body('distance')),
    __param(5, common_1.Body('elevation_gain')),
    __param(6, common_1.Body('trail_type')),
    __param(7, common_1.Body('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], HikesController.prototype, "updateHike", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HikesController.prototype, "deleteHike", null);
HikesController = __decorate([
    common_1.Controller('hikes'),
    __metadata("design:paramtypes", [hikes_service_1.HikesService])
], HikesController);
exports.HikesController = HikesController;
//# sourceMappingURL=hikes.controller.js.map