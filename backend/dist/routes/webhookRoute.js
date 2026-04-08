"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webHookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const paymentWebhook_1 = require("../webhooks/paymentWebhook");
const webHookRoutes = express_1.default.Router();
exports.webHookRoutes = webHookRoutes;
webHookRoutes.post("/payment", paymentWebhook_1.paymentWebhook);
