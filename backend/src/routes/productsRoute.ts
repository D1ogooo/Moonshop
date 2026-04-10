import express from "express";
import {
 HandleCreateProduct,
} from "../controllers/product";

const productRoutes = express.Router();

productRoutes.post(
    "/create",
    HandleCreateProduct,
);

export { productRoutes }