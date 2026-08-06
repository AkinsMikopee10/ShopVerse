import Product from "../models/product.model.js";

const PRODUCT_POPULATE = "category";

class ProductRepository {
  buildQuery({ category, search }) {
    const query = {
      isActive: true,
    };

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$text = {
        $search: search,
      };
    }

    return query;
  }

  calculateSkip(page, limit) {
    return (page - 1) * limit;
  }

  async findAll(options = {}) {
    const { page = 1, limit = 10, sort = "-createdAt" } = options;

    const query = this.buildQuery(options);

    const skip = this.calculateSkip(page, limit);

    const products = await Product.find(query)
      .populate(PRODUCT_POPULATE)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(query);

    return {
      products,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id) {
    return Product.findById(id).populate(PRODUCT_POPULATE);
  }

  async findBySlug(slug) {
    return Product.findOne({
      slug,
      isActive: true,
    }).populate(PRODUCT_POPULATE);
  }

  async create(productData) {
    return Product.create(productData);
  }

  async update(id, updates) {
    return Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
  }

  async softDelete(id) {
    return Product.findByIdAndUpdate(
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

export default new ProductRepository();
