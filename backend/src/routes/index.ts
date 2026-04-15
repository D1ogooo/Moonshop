import express from "express";

const router = express.Router();

import { paymentRoutes } from "./paymentRoute";
import { webHookRoutes } from "./webhookRoute";
import { productRoutes } from './productsRoute'

// Routes - Auth
router.use("/payment", paymentRoutes)

// Webhook - payment
router.use("/webhook", webHookRoutes)

router.use("/products", productRoutes)

export { router };