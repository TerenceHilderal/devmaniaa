"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, maxlength: 30 },
    description: { type: String, required: false, maxlength: 200 },
    posts: { type: [String], required: false },
    avatar: { type: String, required: false },
    friends: { type: [String], required: false },
    isAdmin: { type: Boolean, default: 0 },
});
userSchema.statics.hashPassword = function (password) {
    return bcrypt_1.default.hash(password, 12);
};
var User = mongoose_1.default.model('user', userSchema);
module.exports = User;
