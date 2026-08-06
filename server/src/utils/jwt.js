import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

/**
 * Generate a signed JWT access token.
 *
 * @param {Object} payload - Data to embed in the token.
 * @returns {string}
 */

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

/**
 * Verify a JWT access token.
 *
 * @param {string} token
 * @returns {Object}
 */

export const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
