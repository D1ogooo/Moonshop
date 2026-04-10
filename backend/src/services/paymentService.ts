import type { ProductType, CreatePaymentRequestType, InjectType } from "../@types/type";

export class PaymentService {
  private amount?: number;
  private description?: string;
  private document?: string | undefined;
  private frequency?: "ONE_TIME" | "MULTIPLE_PAYMENTS" | "SUBSCRIPTION" | undefined;
  private email?: string;
  private name?: string;
  private axios: any;
  private Payment?: any;
  private methods?: any;
  private cellphone?: string; 
  private products?: ProductType[];

constructor(body: CreatePaymentRequestType, inject: InjectType<any>) {
  this.amount = body.amount;
  this.description = body.description;
  this.document = body.customer.document;
  this.frequency = body.frequency;
  this.methods = body.methods;
  this.axios = inject.axios;
  this.Payment = inject.Payment;

  this.name = body.customer.name;
  this.email = body.customer.email;
  this.cellphone = body.customer.cellphone;

  this.products = body.products;
}

  async createPayment() {
    try {
      if (!this.methods || this.methods.length === 0) {
        throw new Error("Método de pagamento é obrigatório");
      }

      if (!this.frequency) {
        throw new Error("Frequency é obrigatório");
      }
console.log(this.name, this.email, this.document, this.cellphone);
      const res = await this.axios.post(
        `${process.env.ABACATEPAY_BASE_URL}/billing/create`,
        {
          amount: this.amount,
          description: this.description,
          methods: this.methods, 
          frequency: this.frequency,

          returnUrl: "https://seusite.com/retorno",
          completionUrl: "https://seusite.com/retorno",

          products: this.products,

          customer: {
            name: this.name,
            email: this.email,
            taxId: this.document, //cpf ou cnpj (document)
            cellphone: this.cellphone, //opcional
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
      console.log(err.response?.data);
    }
  }

  async showPayment() { }

  async showSpecificPayment() { }
}
