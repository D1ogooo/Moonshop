import type { Request, Response } from "express";
import { CreateProductType } from "../@types/type";
import { ProductService } from "../services/productService";
import { ProductsRegister } from "../models/productsModel";
import { HttpException } from "../errors/HttpException";

export async function HandleCreateProduct(
	req: Request<{}, {}, CreateProductType>,
	res: Response,
): Promise<Response> {
	try {
		const service = new ProductService(req.body, { ProductsRegister });
		const product = await service.createProduct();
		return res
			.status(201)
			.json(product);
	} catch (error) {
		console.log(error)
		if (error instanceof HttpException) {
			return res.status(error.statusCode).json({ message: error.message });
		}
		return res.status(500).json({ message: "Erro interno no servidor" });
	}
}