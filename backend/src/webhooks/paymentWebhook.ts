import { Request, Response } from 'express'
import { Payment } from '../models/paymentModel';

async function paymentWebhook(req: Request, res: Response) {
 const { event, data } = req.body;

 switch (event) {
  case "billing.created":
    await Payment.findOneAndUpdate(
      { externalId: data.externalId },
      { event: "billing.created", status: "created", updatedAt: new Date()}
    );
    break;
  case "billing.paid":
    await Payment.findOneAndUpdate(
      { externalId: data.externalId }, 
      { event: "billing.paid", status: "paid", updatedAt: new Date()}
    );
    break;
  case "billing.failed":
    await Payment.findOneAndUpdate(
      { externalId: data.externalId }, 
      { event: "billing.failed", status: "failed", updatedAt: new Date()}
    );
    break;
  default:
    console.log("Evento não tratado:", event);
  }
  return res.status(200).send("OK");
}

export { paymentWebhook }