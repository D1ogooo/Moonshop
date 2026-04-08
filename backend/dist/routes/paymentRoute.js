"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const payment_1 = require("../controllers/payment");
const paymentRoutes = express_1.default.Router();
exports.paymentRoutes = paymentRoutes;
paymentRoutes.post("/create", payment_1.HandleCreatePayment);
