"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var postSchema = new Schema({
    body: { type: String, maxlength: 200 },
    attachment: { type: String, required: false },
    likes: { type: Number, required: false, default: 0 },
    dislikes: { type: Number, required: false, default: 0 },
    createdAt: { type: Date },
    comments: [{ body: String, createdAt: Date, likes: Number, disklikes: Number }]
});
var Post = mongoose_1.default.model('post', postSchema);
module.exports = Post;
