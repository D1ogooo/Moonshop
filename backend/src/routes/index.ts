import express from "express";

const router = express.Router();

import { paymentRoutes } from "./paymentRoute";

// Routes - Auth
router.use("/payment", paymentRoutes)


export { router };