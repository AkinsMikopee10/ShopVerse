/**
 * Represents an operational (expected) application error.
 *
 * Examples:
 * - Invalid login credentials
 * - Duplicate email
 * - User not found
 * - Forbidden action
 */
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);

    this.name = "AppError";
    this.statusCode = statusCode;

    /**
     * Distinguishes operational errors from unexpected
     * programming or system errors.
     */
    this.isOperational = true;

    // Maintain the correct stack trace.
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
