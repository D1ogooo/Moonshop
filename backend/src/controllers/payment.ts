import type { Request, Response } from "express";
import axios, { AxiosInstance } from "axios";
import { CreatePaymentRequestType } from "../@types/type";
import { HttpException } from "../errors/HttpException";
import { PaymentService } from "../services/paymentService";
import { Payment } from "../models/paymentModel";

export async function HandleCreatePayment(
	req: Request<{}, {}, CreatePaymentRequestType>,
	res: Response,
): Promise<Response> {
	try {
		const service = new PaymentService(req.body, { axios, Payment });
		const payment = await service.createPayment();
		return res
			.status(201)
			.json(payment);
	} catch (error) {
		if (error instanceof HttpException) {
			return res.status(error.statusCode).json({ message: error.message });
		}
		return res.status(500).json({ message: "Erro interno no servidor" });
	}
}

export async function HandleShowPayment(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const service = new PaymentService();
		const payment = await service.showPayment();
		return res
			.status(201)
			.json(payment);
	} catch (error) {
		if (error instanceof HttpException) {
			return res.status(error.statusCode).json({ message: error.message });
		}
		return res.status(500).json({ message: "Erro interno no servidor" });
	}
}