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
var postsRoutes = require('./components/posts/posts.routes');
var PORT = process.env.PORT || 7000;
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(express.static('frontend/build'));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); //l'origine qui a le droit d'accéder à notre api = tout le monde
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization,*'); //on autorise certains headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // on autorise certaines méthod
    next();
});
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../frontend/build', 'index.html'));
});
app.use('/api/users/', usersRoutes);
app.use('/api/posts/', postsRoutes);
app.listen(7000, function () {
    console.log("Server running on port " + PORT);
});
