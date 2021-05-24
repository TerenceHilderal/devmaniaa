"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var postSchema = new Schema({
    content: { type: String, maxlength: 200, required: true },
    attachment: { type: String, required: false },
    likes: { type: Number, required: false, default: 0 },
    dislikes: { type: Number, required: false, default: 0 },
    postedBy: {
        type: String,
    },
    comments: [
        {
            postedBy: {
                type: String,
            },
            content: String,
            likes: Number,
            disklikes: Number,
        },
        { timestamps: true },
    ],
}, { timestamps: true });
var Post = mongoose_1.default.model('post', postSchema);
module.exports = Post;
