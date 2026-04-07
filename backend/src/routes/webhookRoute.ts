import express from "express";
import { paymentWebhook } from "../webhooks/paymentWebhook";

const webHookRoutes = express.Router();

webHookRoutes.post(
    "/payment",
    paymentWebhook,
);

export { webHookRoutes }