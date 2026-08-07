import categoryRepository from "../repositories/category.repository.js";
import AppError from "../errors/AppError.js";

class CategoryService {
  ensureCategoryExists(category) {
    if (!category || !category.isActive) {
      throw new AppError("Category not found.", 404);
    }

    return category;
  }

  async getCategories(options = {}) {
    return categoryRepository.findAll(options);
  }

  async getCategoryById(id) {
    const category = await categoryRepository.findById(id);

    return this.ensureCategoryExists(category);
  }

  async getCategoryBySlug(slug) {
    const category = await categoryRepository.findBySlug(slug);

    return this.ensureCategoryExists(category);
  }

  async createCategory(categoryData) {
    const existingCategory = await categoryRepository.findOne({
      $or: [{ name: categoryData.name }, { slug: categoryData.slug }],
    });

    if (existingCategory) {
      throw new AppError("A category with this name or slug already exists.", 409);
    }

    return categoryRepository.create(categoryData);
  }

  async updateCategory(id, updates) {
    const category = await this.getCategoryById(id);

    if (updates.name || updates.slug) {
      const duplicateFilter = {
        _id: { $ne: id },
        $or: [],
      };

      if (updates.name) {
        duplicateFilter.$or.push({ name: updates.name });
      }

      if (updates.slug) {
        duplicateFilter.$or.push({ slug: updates.slug });
      }

      const existingCategory = await categoryRepository.findOne(duplicateFilter);

      if (existingCategory) {
        throw new AppError("A category with this name or slug already exists.", 409);
      }
    }

    return categoryRepository.update(category._id, updates);
  }

  async deleteCategory(id) {
    await this.getCategoryById(id);

    return categoryRepository.softDelete(id);
  }
}

export default new CategoryService();
