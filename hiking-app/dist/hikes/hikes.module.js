"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HikesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hikes_controller_1 = require("./hikes.controller");
const hikes_service_1 = require("./hikes.service");
const hike_model_1 = require("./hike.model");
let HikesModule = class HikesModule {
};
HikesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Hike', schema: hike_model_1.HikeSchema }])],
        controllers: [hikes_controller_1.HikesController],
        providers: [hikes_service_1.HikesService],
    })
], HikesModule);
exports.HikesModule = HikesModule;
//# sourceMappingURL=hikes.module.js.map