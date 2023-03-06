import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import Products from "../models/ProductModel.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.put("/", updateProduct);
productRouter.delete("/", deleteProduct);
export default productRouter;
