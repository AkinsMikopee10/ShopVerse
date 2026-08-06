import bcrypt from "bcrypt";
import AppError from "../errors/AppError.js";
import {
  findByEmail,
  findByEmailWithPassword,
  findById,
  createUser,
} from "../repositories/user.repository.js";
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
    throw new AppError("An account with this email already exists.", 409);
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

/**
 * Authenticate an existing user.
 *
 * @param {Object} credentials
 * @returns {Promise<Object>}
 */

export const login = async (credentials) => {
  const { email, password } = credentials;

  // Retrieve the user including the password hash.
  const user = await findByEmailWithPassword(email);

  // Do not reveal whether the email exists.
  if (!user) {
    throw new AppError("Invalid email or password.", 401);
  }

  // Compare the provided password with the stored hash.
  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    throw new AppError("Invalid email or password.", 401);
  }

  // Generate an access token for the authenticated user.
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

/**
 * Get the currently authenticated user's profile.
 *
 * @param {string} userId
 * @returns {Promise<Object>}
 */
export const getCurrentUser = async (userId) => {
  const user = await findById(userId);

  // The account may have been deleted after
  // the JWT was issued.
  if (!user) {
    throw new AppError("User not found.", 404);
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    isVerified: user.isVerified,
  };
};
