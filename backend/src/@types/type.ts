export interface CreatePaymentResponseType {
  id: string;
  status: string;
  amount: number;
  pixQrCode?: string;
  paymentUrl?: string;
}

export interface CreatePaymentRequestType {
  amount: number; // em centavos (ex: 10000 = R$100)
  description: string;
  customer: {
    name: string;
    email: string;
    document?: string;
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

