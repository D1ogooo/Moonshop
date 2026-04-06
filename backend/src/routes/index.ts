import express from "express";

const router = express.Router();

import { authRoutes } from "./AuthRoutes";

// Routes - Auth
router.use("/payment", authRoutes)


export { router };