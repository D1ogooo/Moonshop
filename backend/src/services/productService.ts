import { CreateProductType } from "../@types/type";

export class ProductService {
  constructor(
    private productData: CreateProductType,
    private models: { ProductsRegister: any }, 
    private errors: { HttpException: any },
  ) {}

  async createProduct() {
    const { image, name, amount, description } = this.productData;

    if (!name || !amount || !description) {
      throw new this.errors.HttpException(
        400,
        "Campos obrigatórios: name, amount, description"
      );
    }

    const newProduct = {
      image,
      name,
      amount,
      description,
    };

    return this.models.ProductsRegister.create(newProduct);
  }
}