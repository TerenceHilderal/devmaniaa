"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, maxlength: 30 },
    avatar: { type: String, required: false },
    latent: { type: Boolean, default: 0 },
    friends: { type: [String], required: false },
    isAdmin: { type: Boolean, default: 0 },
});
var User = mongoose_1.default.model('user', userSchema);
module.exports = User;
