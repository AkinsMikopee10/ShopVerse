import express from "express";
import categoryController from "../controllers/category.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { createCategorySchema, updateCategorySchema } from "../validators/category.validator.js";

const router = express.Router();

router.get("/", categoryController.getCategories);
router.get("/slug/:slug", categoryController.getCategoryBySlug);
router.get("/:id", categoryController.getCategoryById);
router.post("/", validate(createCategorySchema), categoryController.createCategory);

router.patch("/:id", validate(updateCategorySchema), categoryController.updateCategory);

router.delete("/:id", categoryController.deleteCategory);

export default router;
