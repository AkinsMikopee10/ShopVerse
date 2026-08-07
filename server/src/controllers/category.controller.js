import categoryService from "../services/category.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class CategoryController {
  getCategories = asyncHandler(async (req, res) => {
    const categories = await categoryService.getCategories();

    res.status(200).json({
      success: true,
      message: "Categories retrieved successfully.",
      data: categories,
    });
  });

  getCategoryById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const category = await categoryService.getCategoryById(id);

    res.status(200).json({
      success: true,
      message: "Category retrieved successfully.",
      data: category,
    });
  });

  getCategoryBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    const category = await categoryService.getCategoryBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Category retrieved successfully.",
      data: category,
    });
  });

  createCategory = asyncHandler(async (req, res) => {
    const category = await categoryService.createCategory(req.body);

    res.status(201).json({
      success: true,
      message: "Category created successfully.",
      data: category,
    });
  });

  updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const category = await categoryService.updateCategory(id, req.body);

    res.status(200).json({
      success: true,
      message: "Category updated successfully.",
      data: category,
    });
  });

  deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const category = await categoryService.deleteCategory(id);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully.",
      data: category,
    });
  });
}

export default new CategoryController();
