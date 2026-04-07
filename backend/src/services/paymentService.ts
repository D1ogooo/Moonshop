import type { AxiosInstance } from "axios";
import type { CreatePaymentRequestType, InjectType } from "../@types/type";

export class PaymentService {
  amount: number;
  description: string;
  document: string | undefined;
  email: string;
  name: string;
  axios: AxiosInstance;

  constructor(body: CreatePaymentRequestType, inject: InjectType) {
    this.amount = body.amount;
    this.description = body.description
    this.document = body.customer.document
    this.email = body.customer.email
    this.name = body.customer.name
    this.axios = inject.axios
  }

  async createPayment(){
   try {
    const res = await this.axios.post(`${process.env.ABACATEPAY_BASE_URL}/customer/create`, {
     amount: this.amount,
     description: this.description,
     document: this.document,
     email: this.email,
     name: this.name
    })
    return res.data
   } catch (error) {
    return error
   }
  }

  async showPayment() {
   
  }
}
