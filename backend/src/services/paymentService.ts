import type { ProductType, CreatePaymentRequestType, InjectType } from "../@types/type";

export class PaymentService {
  private id?: string;
  private amount?: number;
  private description?: string;
  private taxId?: string | undefined;
  private frequency?: "ONE_TIME" | "MULTIPLE_PAYMENTS" | "SUBSCRIPTION" | undefined;
  private email?: string;
  private name?: string;
  private axios: any;
  private Payment?: any;
  private methods?: any;
  private cellphone?: string; 
  private products?: ProductType[];
  private ProductsRegister?: any;

constructor(body: CreatePaymentRequestType, inject: InjectType<any>) {
  this.id = body.id;
  this.amount = body.amount;
  this.description = body.description;
  this.taxId = body.customer.taxId;
  this.frequency = body.frequency;
  this.methods = body.methods;
  this.axios = inject.axios;
  this.Payment = inject.Payment;

  this.name = body.customer.name;
  this.email = body.customer.email;
  this.cellphone = body.customer.cellphone;

  this.products = body.products;
  this.ProductsRegister = inject.ProductsRegister;
}

  async createPayment() {
    try {
      if (!this.methods || this.methods.length === 0) {
        throw new Error("Método de pagamento é obrigatório");
      }

      if (!this.frequency) {
        throw new Error("Frequency é obrigatório");
      }
      
// console.log(this.name, this.email, this.document, this.cellphone);
    
     const idProduct = await this.ProductsRegister.findOne(this.id)
     console.log({
      "produtos": this.products,
      "nome": this.name,
      "email": this.email,
      "documento": this.taxId,
      "celular": this.cellphone,
     })

     const res = await this.axios.post(
  `${process.env.ABACATEPAY_BASE_URL}/billing/create`,
  {
    amount: idProduct.amount,
    description: idProduct.description,

    methods: ["PIX"],
    frequency: "ONE_TIME",

    returnUrl: "https://seusite.com/retorno",
    completionUrl: "https://seusite.com/retorno",

    products: this.products,
// [
//       {
//         externalId: idProduct._id.toString(),
//         name: idProduct.description,
//         quantity: 1,
//         price: idProduct.amount,
//       },
//     ],
    customer: {
      "name": this.name,
      "email": this.email,
      "taxId": this.taxId,
      "cellphone": this.cellphone,
    },
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.ABACATEPAY_API_KEY}`,
    },
  }
);

      await this.Payment.create({
        amount: this.amount,
        description: this.description,
        status: "pending",
        externalId: res.data.data.id,
      });

      return res.data;
    } catch (err: any) {
      return err
      //  console.log(err.response?.data);
    }
  }

  // async showPayment() { 

  // }

  // async showSpecificPayment() { }
}
