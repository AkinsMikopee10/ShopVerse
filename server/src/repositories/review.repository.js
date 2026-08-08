import Review from "../models/review.model.js";

export async function findReviewsByProduct(productId) {
  return Review.find({ product: productId })
    .populate("user", "name avatar")
    .sort({ createdAt: -1 });
}

export async function findReviewByProductAndUser(productId, userId) {
  return Review.findOne({
    product: productId,
    user: userId,
  });
}

export async function createReview(reviewData) {
  return Review.create(reviewData);
}
