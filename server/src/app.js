import express from "express";
import cors from "cors";

const app = express();

/**
 * Global Middleware
 */
app.use(cors());
app.use(express.json());

/**
 * Health Check
 */
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ShopVerse API is running successfully!",
  });
});

/**
 * Global Error Handler
 * Must always be registered after routes.
 */
// app.use(errorHandler);

export default app;
