import productService from "../services/product.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class ProductController {
  getProducts = asyncHandler(async (req, res) => {
    const products = await productService.getProducts(req.validatedQuery);

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully.",
      data: products,
    });
  });

  getProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await productService.getProductById(id);

    res.status(200).json({
      success: true,
      message: "Product retrieved successfully.",
      data: product,
    });
  });

  getProductBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    const product = await productService.getProductBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Product retrieved successfully.",
      data: product,
    });
  });

  createProduct = asyncHandler(async (req, res) => {
    const product = await productService.createProduct(req.body);

    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: product,
    });
  });

  updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await productService.updateProduct(id, req.body);

    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: product,
    });
  });

  deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await productService.deleteProduct(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      data: product,
    });
  });
}

export default new ProductController();
