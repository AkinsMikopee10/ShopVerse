import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required."],
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required."],
    },

    rating: {
      type: Number,
      required: [true, "Rating is required."],
      min: [1, "Rating must be at least 1."],
      max: [5, "Rating cannot exceed 5."],
    },

    comment: {
      type: String,
      required: [true, "Review comment is required."],
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "reviews",
  }
);

reviewSchema.index({ product: 1 });
reviewSchema.index({ user: 1 });

reviewSchema.index({ product: 1, user: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
