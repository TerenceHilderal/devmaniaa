"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
require('dotenv').config();
require('./database');
var usersRoutes = require('./components/users/users.routes.js');
var PORT = process.env.PORT || 7000;
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('frontend/build'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/api/users', usersRoutes);
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../frontend/build', 'index.html'));
});
app.listen(7000, function () {
    console.log("Server running on port " + PORT);
});
