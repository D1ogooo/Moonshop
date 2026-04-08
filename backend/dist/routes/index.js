"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const paymentRoute_1 = require("./paymentRoute");
const webhookRoute_1 = require("./webhookRoute");
// Routes - Auth
router.use("/payment", paymentRoute_1.paymentRoutes);
// Webhook - payment
router.use("/webhook", webhookRoute_1.webHookRoutes);
