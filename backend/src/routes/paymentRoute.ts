import express from "express";
import {
 HandleCreatePayment,
} from "../controllers/payment";

const paymentRoutes = express.Router();

paymentRoutes.post(
	"/create",
	HandleCreatePayment,
);

export { paymentRoutes }