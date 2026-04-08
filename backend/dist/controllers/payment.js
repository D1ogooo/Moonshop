"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleCreatePayment = HandleCreatePayment;
exports.HandleShowPayment = HandleShowPayment;
exports.HandleShowSpecificPayment = HandleShowSpecificPayment;
const axios_1 = __importDefault(require("axios"));
const HttpException_1 = require("../errors/HttpException");
const paymentService_1 = require("../services/paymentService");
const paymentModel_1 = require("../models/paymentModel");
async function HandleCreatePayment(req, res) {
    try {
        const service = new paymentService_1.PaymentService(req.body, { axios: axios_1.default, Payment: paymentModel_1.Payment });
        const payment = await service.createPayment();
        return res
            .status(201)
            .json(payment);
    }
    catch (error) {
        if (error instanceof HttpException_1.HttpException) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Erro interno no servidor" });
    }
}
async function HandleShowPayment(req, res) {
    try {
        const service = new paymentService_1.PaymentService(req.body, {});
        const payment = await service.showPayment();
        return res
            .status(201)
            .json(payment);
    }
    catch (error) {
        if (error instanceof HttpException_1.HttpException) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Erro interno no servidor" });
    }
}
async function HandleShowSpecificPayment(req, res) {
    try {
        const service = new paymentService_1.PaymentService(req.body, {});
        const payment = await service.showPayment();
        return res
            .status(201)
            .json(payment);
    }
    catch (error) {
        if (error instanceof HttpException_1.HttpException) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        return res.status(500).json({ message: "Erro interno no servidor" });
    }
}
