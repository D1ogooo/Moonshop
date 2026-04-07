import express from "express";

const router = express.Router();

import { paymentRoutes } from "./paymentRoute";
import { webHookRoutes } from "./webhookRoute";

// Routes - Auth
router.use("/payment", paymentRoutes)

// Webhook - payment
router.use("/webhook", webHookRoutes)

export { router };