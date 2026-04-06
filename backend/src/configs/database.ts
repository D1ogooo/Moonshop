import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function conn() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/moonshopdb');

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

export { conn };