import type { CreatePaymentRequestType, InjectType } from "../@types/type";

export class PaymentService {
  private amount?: number;
  private description?: string;
  private document?: string | undefined;
  private frequency?: "ONE_TIME" | "MULTIPLE_PAYMENTS" | "SUBSCRIPTION" | undefined;
  private email?: string;
  private name?: string;
  private axios: any;
  private Payment?: any;
  // private methods?: "PIX" | "CARD" | undefined;
  private methods?: any;


  constructor(body: CreatePaymentRequestType, inject: InjectType<any>) {
    this.amount = body.amount;
    this.description = body.description
    this.document = body.customer.document
    this.frequency = body.frequency
    this.email = body.customer.email
    this.name = body.customer.name
    this.Payment = inject.Payment
    this.methods = body.methods
    this.axios = inject.axios
  }

  async createPayment() {
    try {
      if (!this.methods || this.methods.length === 0) {
        throw new Error("Método de pagamento é obrigatório");
      }

      if (!this.frequency) {
        throw new Error("Frequency é obrigatório");
      }

      const res = await this.axios.post(
        `${process.env.ABACATEPAY_BASE_URL}/billing/create`,
        {
          amount: this.amount,
          description: this.description,
          methods: ["PIX"], // garante que é string válida
          frequency: "ONE_TIME",

          returnUrl: "https://seusite.com/retorno",
          completionUrl: "https://seusite.com/retorno",

          products: [
            {
              externalId: "prod-1",
              name: this.description,
              quantity: 1,
              price: this.amount,
            },
          ],

          customer: {
            name: this.name,
            email: this.email,
            taxId: "11144477735", // 👈 aqui é o segredo
            cellphone: "27988888273",
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
