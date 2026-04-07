import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  customer: {
    name: String,
    email: String,
    document: String,
  },
  status: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  externalId: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Payment = mongoose.model('Payment', PaymentSchema);
export { Payment };