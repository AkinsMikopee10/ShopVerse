/**
 * Global error handler.
 *
 * Handles all application errors in one place.
 */
export const errorHandler = (error, req, res, next) => {
  void next;

  const statusCode = error.statusCode || 500;

  const message = error.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
  });
};
