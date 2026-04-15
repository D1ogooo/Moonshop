import { CreateProductType } from "../@types/type";

export class ProductService {
  constructor(
    private productData: CreateProductType,
    private models: { ProductsRegister: any }, 
    private errors: { HttpException: any },
  ) {}

  async createProduct() {
    const { image, name, amount, description, details } = this.productData;

    if (!name || !amount || !description || !details) {
      throw new this.errors.HttpException(
        400,
        "Campos obrigatórios: name, amount, description"
      );
    }

const valueNumber = Math.round(Number(amount) * 100)

    const newProduct = {
      image,
      name,
      amount: valueNumber,
      description,
      details
    };

    return this.models.ProductsRegister.create(newProduct);
  }

  async readProduct() {
    return this.models.ProductsRegister.findAll();
  }

  async updateProduct() {}

  async deleteProduct() {}
}

