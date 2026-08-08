import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import categoryRoutes from "./routes/category.routes.js";
import reviewRoutes from "./routes/review.routes.js";

const app = express();

/**
 * Global Middleware
 */
app.use(cors());
app.use(express.json());

/**
 * Health Check
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ShopVerse API is running successfully!",
  });
});

/**
 * API Routes
 */
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1", reviewRoutes);

/**
 * Global Error Handler
 * Must always be registered after routes.
 */
app.use(errorHandler);

export default app;
