import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
      trim: true,
      maxlength: [150, "Product name cannot exceed 150 characters."],
    },

    slug: {
      type: String,
      required: [true, "Product slug is required."],
      unique: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: [true, "Product description is required."],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Product price is required."],
      min: [0, "Price cannot be negative."],
      set: (value) => Number(value.toFixed(2)),
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Product category is required."],
    },

    images: {
      type: [String],
      default: [],
      validate: {
        validator(images) {
          return images.every((image) => image.trim().length > 0);
        },
        message: "Image URLs cannot be empty.",
      },
    },

    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock cannot be negative."],
    },

    brand: {
      type: String,
      trim: true,
      default: "",
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
      set: (value) => Number(value.toFixed(2)),
    },

    reviewCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "products",

    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Search
productSchema.index({
  name: "text",
  description: "text",
});

// Fast lookups
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ isFeatured: 1 });

const Product = mongoose.model("Product", productSchema);

export default Product;
