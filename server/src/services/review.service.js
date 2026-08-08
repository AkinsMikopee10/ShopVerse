import AppError from "../errors/AppError.js";
import {
  createReview,
  findReviewByProductAndUser,
  findReviewsByProduct,
} from "../repositories/review.repository.js";

class ReviewService {
  getProductReviews = async (productId) => {
    return findReviewsByProduct(productId);
  };

  addReview = async ({ productId, userId, rating, comment }) => {
    const existingReview = await findReviewByProductAndUser(productId, userId);

    if (existingReview) {
      throw new AppError("You have already reviewed this product.", 409);
    }

    return createReview({
      product: productId,
      user: userId,
      rating,
      comment,
    });
  };
}

export default new ReviewService();
