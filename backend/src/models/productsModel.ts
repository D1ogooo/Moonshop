import mongoose from 'mongoose';

const ProductsRegisterSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const ProductsRegister = mongoose.model('ProductsRegister', ProductsRegisterSchema);
export { ProductsRegister };