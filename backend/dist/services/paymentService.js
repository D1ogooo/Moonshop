"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    constructor(body, inject) {
        this.amount = body.amount;
        this.description = body.description;
        this.document = body.customer.document;
        this.email = body.customer.email;
        this.name = body.customer.name;
        this.axios = inject.axios;
        this.Payment = inject.Payment;
    }
    async createPayment() {
        try {
            const res = await this.axios?.post("/payment/create", {
                amount: this.amount,
                description: this.description,
                customer: {
                    name: this.name,
                    email: this.email,
                    document: this.document,
                },
            });
            await this.Payment?.create({
                data: {
                    amount: this.amount,
                    description: this.description,
                    status: "pending",
                    externalId: res?.data.id,
                },
            });
            return res?.data;
        }
        catch (error) {
            throw error;
        }
    }
    async showPayment() {
    }
    async showSpecificPayment() {
    }
}
exports.PaymentService = PaymentService;
