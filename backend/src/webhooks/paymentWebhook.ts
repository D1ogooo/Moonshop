import { Request, Response } from 'express'

async function paymentWebhook(req: Request, res: Response) {
 const { event } = req.body;

 switch (event) {
  case "billing.created":
    console.log("Pagamento criado:", req.body.data);
    break;
  case "billing.paid":
    console.log("Pagamento pago:",  req.body.data);
    break;
  default:
    console.log("Evento não tratado:", event);
  }
  return res.status(200).send("OK");
}

export { paymentWebhook }