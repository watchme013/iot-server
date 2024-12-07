"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const rateLimiter_1 = __importDefault(require("@/config/rateLimiter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(rateLimiter_1.default);
app.get("/", (req, res) => {
    res.send("Jabal");
});
exports.default = app;
