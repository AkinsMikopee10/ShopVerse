import User from "../models/User.js";

/**
 * Find a user by email.
 *
 * Password is excluded by default.
 */

export const findByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Find a user by email including the password hash.
 *
 * Used only during authentication.
 */

export const findByEmailWithPassword = async (email) => {
  return User.findOne({ email }).select("+password");
};

/**
 * Find a user by ID.
 */

export const findById = async (id) => {
  return User.findById(id);
};

/**
 * Retrieve a user's profile.
 *
 * Password remains excluded because the
 * User model uses `select: false`.
 */
export const findProfileById = async (id) => {
  return User.findById(id);
};

/**
 * Create a new user.
 */

export const createUser = async (userData) => {
  return User.create(userData);
};

/**
 * Update a user.
 */

export const updateUser = async (id, updates) => {
  return User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

/**
 * Delete a user.
 */
export const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};
