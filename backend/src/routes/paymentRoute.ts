import express from "express";
import {
 HandleDeleteProduct,
} from "../controllers/payment";

const paymentRoutes = express.Router();

paymentRoutes.create(
	"/create",
	HandleCreatePayment,
);

export { paymentRoutes }