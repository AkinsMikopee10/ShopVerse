import productRepository from "../repositories/product.repository.js";
import AppError from "../errors/AppError.js";
import categoryRepository from "../repositories/category.repository.js";

class ProductService {
  ensureProductExists(product) {
    if (!product || !product.isActive) {
      throw new AppError("Product not found.", 404);
    }

    return product;
  }

  getSortValue(sort) {
    const sortMap = {
      "price-asc": "price",
      "price-desc": "-price",
      newest: "-createdAt",
      oldest: "createdAt",
    };

    return sortMap[sort] ?? "-createdAt";
  }

  async getProducts(options = {}) {
    const { category, sort, ...productOptions } = options;

    const resolvedSort = this.getSortValue(sort);

    if (!category) {
      return productRepository.findAll({
        ...productOptions,
        sort: resolvedSort,
      });
    }

    const categoryRecord = await categoryRepository.findBySlug(category);

    if (!categoryRecord || !categoryRecord.isActive) {
      return {
        products: [],
        pagination: {
          page: Number(productOptions.page ?? 1),
          limit: Number(productOptions.limit ?? 10),
          total: 0,
          totalPages: 0,
        },
      };
    }

    return productRepository.findAll({
      ...productOptions,
      category: categoryRecord._id,
      sort: resolvedSort,
    });
  }

  async getProductById(id) {
    const product = await productRepository.findById(id);

    return this.ensureProductExists(product);
  }

  async getProductBySlug(slug) {
    const product = await productRepository.findBySlug(slug);

    return this.ensureProductExists(product);
  }

  async createProduct(productData) {
    const existingProduct = await productRepository.findOne(
      { slug: productData.slug },
      { populate: false }
    );

    if (existingProduct) {
      throw new AppError("A product with this slug already exists.", 409);
    }

    return productRepository.create(productData);
  }

  async updateProduct(id, updates) {
    const product = await this.getProductById(id);

    if (updates.slug && updates.slug !== product.slug) {
      const existingProduct = await productRepository.findOne(
        {
          slug: updates.slug,
          _id: { $ne: id },
        },
        {
          populate: false,
        }
      );

      if (existingProduct) {
        throw new AppError("A product with this slug already exists.", 409);
      }
    }

    return productRepository.update(id, updates);
  }

  async deleteProduct(id) {
    await this.getProductById(id);

    return productRepository.softDelete(id);
  }
}

export default new ProductService();
