import bcrypt from "bcrypt";
import { findByEmail, createUser } from "../repositories/user.repository.js";
import { generateAccessToken } from "../utils/jwt.js";

/**
 * Register a new user.
 *
 * @param {Object} userData
 * @returns {Promise<Object>}
 */

export const register = async (userData) => {
  const { name, email, password } = userData;

  // Check if the email is already registered
  const existingUser = await findByEmail(email);

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  // Hash the password before saving.
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user in the database.
  const user = await createUser({
    name,
    email,
    password: hashedPassword,
  });

  // Generate an access token for the new user.
  const token = generateAccessToken({
    userId: user._id,
    role: user.role,
  });

  // Return a safe response.
  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      isVerified: user.isVerified,
    },
    token,
  };
};
