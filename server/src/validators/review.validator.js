import { z } from "zod";

export const createReviewSchema = z.object({
  rating: z.coerce
    .number()
    .int()
    .min(1, "Rating must be at least 1.")
    .max(5, "Rating cannot exceed 5."),

  comment: z.string().trim().min(1, "Review comment is required."),
});
