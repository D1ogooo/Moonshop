"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentWebhook = paymentWebhook;
const paymentModel_1 = require("../models/paymentModel");
async function paymentWebhook(req, res) {
    const { event, data } = req.body;
    switch (event) {
        case "billing.created":
            await paymentModel_1.Payment.findOneAndUpdate({ externalId: data.externalId }, { event: "billing.created", status: "created", updatedAt: new Date() });
            break;
        case "billing.paid":
            await paymentModel_1.Payment.findOneAndUpdate({ externalId: data.externalId }, { event: "billing.paid", status: "paid", updatedAt: new Date() });
            break;
        case "billing.failed":
            await paymentModel_1.Payment.findOneAndUpdate({ externalId: data.externalId }, { event: "billing.failed", status: "failed", updatedAt: new Date() });
            break;
        default:
            console.log("Evento não tratado:", event);
    }
    return res.status(200).send("OK");
}
