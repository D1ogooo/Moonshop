"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = conn;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
async function conn() {
    try {
        await mongoose_1.default.connect('mongodb://127.0.0.1:27017/moonshopdb');
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Database connection error:", error);
    }
}
