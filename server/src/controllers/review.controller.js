import reviewService from "../services/review.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class ReviewController {
  getProductReviews = asyncHandler(async (req, res) => {
    const { productId } = req.params;

    const reviews = await reviewService.getProductReviews(productId);

    res.status(200).json({
      success: true,
      message: "Reviews retrieved successfully.",
      data: reviews,
    });
  });

  createReview = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const userId = req.user.userId;

    const review = await reviewService.addReview({
      productId,
      userId,
      ...req.body,
    });

    res.status(201).json({
      success: true,
      message: "Review created successfully.",
      data: review,
    });
  });
}

export default new ReviewController();
