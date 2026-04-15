export interface CreatePaymentResponseType {
  id: string;
  status?: string;
  amount?: number;
  pixQrCode?: string;
  paymentUrl?: string;
}

export interface CreateProductType {
  id?: string;
  image?: string;
  name: string;
  amount: number;
  description: string;
  details?: string;
}

export interface ProductType {
  externalId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CreatePaymentRequestType {
  id?: string;
  amount: number; // em centavos (ex: 10000 = R$100)
  description: string;
  methods?: "PIX" | "CARD" | undefined;
  frequency?: "ONE_TIME" | "MULTIPLE_PAYMENTS" | "SUBSCRIPTION" | undefined;
  externalId?: string;
  quantity: number;
  products?: ProductType[];

  customer: {
    name: string;
    email: string;
    cellphone?: string;
    taxId?: string;
  };
}

export interface BillingPaidDataType {
  id: string;
  externalId?: string;
  amount: number;
  paidAmount: number;
  status: "PAID" | "PENDING" | "FAILED";
  customer: {
    id: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type BillingPaidWebhook = AbacateWebhookType<BillingPaidDataType>;

export type AbacateEventsType =
  | "billing.created"
  | "billing.paid"
  | "billing.failed"
  | "billing.refunded"
  | "subscription.created"
  | "subscription.canceled";

export interface AbacateWebhookType<T = any> {
  event: AbacateEventsType;
  devMode: boolean;
  data: T;
}

interface PaymentType {
  amount: number;
  description: string;
  customer: {
    id: string;
    email: string;
    name: string;
  };
  updatedAt?: Date;
  createdAt: Date;
}

export type InjectType<Omit> = {
  id?: string;
  Payment?: any;
  axios?: any;
  ProductsRegister?: any;
};