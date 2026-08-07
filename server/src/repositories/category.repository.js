import Category from "../models/category.model.js";

class CategoryRepository {
  async findAll(options = {}) {
    const { sort = "name" } = options;

    return Category.find({
      isActive: true,
    }).sort(sort);
  }

  async findById(id) {
    return Category.findById(id);
  }

  async findOne(filter) {
    return Category.findOne(filter);
  }

  async findBySlug(slug) {
    return this.findOne({
      slug,
      isActive: true,
    });
  }

  async create(categoryData) {
    return Category.create(categoryData);
  }

  async update(id, updates) {
    return Category.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
  }

  async softDelete(id) {
    return Category.findByIdAndUpdate(
      id,
      {
        isActive: false,
      },
      {
        new: true,
      }
    );
  }
}

export default new CategoryRepository();
