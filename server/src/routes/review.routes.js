import { Router } from "express";
import reviewController from "../controllers/review.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { createReviewSchema } from "../validators/review.validator.js";

const router = Router();

router.get("/products/:productId/reviews", reviewController.getProductReviews);

router.post(
  "/products/:productId/reviews",
  authenticate,
  validate(createReviewSchema),
  reviewController.createReview
);

export default router;
