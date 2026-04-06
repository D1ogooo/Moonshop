import { CreatePaymentRequestType } from "../@types/type";

export class PaymentService {
  amount: number;
  description: string;
  document: string | undefined;
  email: string;
  name: string;

  constructor(body: CreatePaymentRequestType, inject) {
    this.amount = body.amount;
    this.description = body.description
    this.document = body.customer.document
    this.email = body.customer.email
    this.name = body.customer.name
    this.axios = inject.axios;
  }

  async createPayment(){
    
   const res = axios.post(`/customer/create`)
  }
}
