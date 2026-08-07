import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { validateQuery } from "../middleware/validateQuery.middleware.js";
import { productListQuerySchema } from "../validators/product.validator.js";

const router = Router();

router.get("/", validateQuery(productListQuerySchema), productController.getProducts);

router.get("/slug/:slug", productController.getProductBySlug);

router.get("/:id", productController.getProductById);

router.post("/", productController.createProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

export default router;
