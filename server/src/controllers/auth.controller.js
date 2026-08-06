import * as authService from "../services/auth.service.js";

/**
 * Register a new user.
 */
export const register = async (req, res) => {
  try {
    const result = await authService.register(req.body);

    return res.status(201).json({
      success: true,
      data: result,
      message: "Account created successfully.",
    });
  } catch (error) {
    // Duplicate email error handling
    if (error.message === "An account with this email already exists.") {
      return res.status(409).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating the account.",
    });
  }
};

/**
 * User login.
 *
 * To be implemented in the next milestone.
 */
export const login = async (req, res) => {
  return res.status(501).json({
    success: false,
    message: "User login is not implemented yet.",
  });
};
