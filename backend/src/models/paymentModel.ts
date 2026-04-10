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
    cellphone: String,
  },
  frequency: {
    type: String,
    enum: ["ONE_TIME", "MULTIPLE_PAYMENTS", "SUBSCRIPTION"],
    default: "ONE_TIME",
    required: true,
  },
  methods: {
    type: String,
    enum: ["PIX", "CARD"],
    default: "PIX",
    required: true,
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