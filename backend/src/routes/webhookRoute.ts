import express from "express";
import { paymentWebhook } from "../webhooks/paymentWebhook";

const webHookRoutes = express.Router();

webHookRoutes.get(
    "/payment/verify",
    paymentWebhook,
);

export { webHookRoutes }