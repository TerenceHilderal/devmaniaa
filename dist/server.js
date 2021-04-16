"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
require('dotenv').config();
var PORT = process.env.PORT || 7000;
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.static('frontend/build'));
app.get('/api', function (req, res) {
    res.send({ msg: 'Hello Master972' });
});
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../frontend/build', 'index.html'));
});
app.listen(7000, function () {
    console.log("Server running on port " + PORT);
});
