import express from "express";
import {
 HandleCreateProduct,
 HandleReadProduct,
 HandleUpdateProduct,
 HandleDeleteProduct
} from "../controllers/product";

const productRoutes = express.Router();

productRoutes.post(
    "/create",
    HandleCreateProduct,
);

// productRoutes.post(
//     "/read",
//     HandleReadProduct,
// );

// productRoutes.post(
//     "/update/:id",
//     HandleReadProduct,
// );

// productRoutes.post(
//     "/delete",
//     HandleDeleteProduct,
// );

export { productRoutes }