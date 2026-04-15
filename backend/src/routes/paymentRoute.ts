import express from "express";
import {
 HandleCreatePayment,
//  HandleShowPayment,
} from "../controllers/payment";

const paymentRoutes = express.Router();

paymentRoutes.post(
	"/create",
	HandleCreatePayment,
);

// paymentRoutes.post(
// 	"/show/:id",
// 	HandleShowPayment,
// );

export { paymentRoutes }