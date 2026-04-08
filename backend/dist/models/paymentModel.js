"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PaymentSchema = new mongoose_1.default.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    customer: {
        name: String,
        email: String,
        document: String,
    },
    status: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending",
    },
    externalId: {
        type: String,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Payment = mongoose_1.default.model('Payment', PaymentSchema);
exports.Payment = Payment;
