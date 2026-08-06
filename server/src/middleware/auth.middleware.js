import jwt from "jsonwebtoken";

/**
 * Authenticate requests using a JWT access token.
 */
export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Ensure the Authorization header exists.
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Authentication required.",
    });
  }

  // Ensure the Authorization header uses the Bearer scheme.
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Authentication required.",
    });
  }

  // Extract the token from the Authorization header.
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the authenticated user payload
    // to the request for downstream use.
    req.user = decoded;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};
