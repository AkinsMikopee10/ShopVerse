import User from "../models/User.js";

/**
 * Find a user by their email address.
 *
 * @param {string} email
 * @returns {Promise<Object|null>}
 */

export const findByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Find a user by their ID.
 *
 * @param {string} id
 * @returns {Promise<Object|null>}
 */

export const findById = async (id) => {
  return User.findById(id);
};

/**
 * Create a new user.
 *
 * @param {Object} userData
 * @returns {Promise<Object>}
 */

export const createUser = async (userData) => {
  return User.create(userData);
};

/**
 * Update a user by ID.
 *
 * @param {string} id
 * @param {Object} updates
 * @returns {Promise<Object|null>}
 */

export const updateUser = async (id, updates) => {
  return User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

/**
 * Delete a user by ID.
 *
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};
