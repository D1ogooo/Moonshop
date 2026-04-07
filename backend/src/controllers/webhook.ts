import type { Request, Response } from "express";
import { HttpException } from "../errors/HttpException";
import { WebHookService } from '../services/webhookService'

export async function HandleShowWebHook(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const service = new WebHookService();
		const payment = await service.createPayment(
		 req.body,
	     axios
	    );
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