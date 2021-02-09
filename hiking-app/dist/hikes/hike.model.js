"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HikeSchema = void 0;
const mongoose = require("mongoose");
exports.HikeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, required: true },
    distance: { type: Number, required: true },
    elevation_gain: { type: Number, required: true },
    trail_type: { type: String, required: true },
    image: { type: String, required: true },
});
//# sourceMappingURL=hike.model.js.map