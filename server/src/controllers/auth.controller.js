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
 * Authenticate an existing user.
 */
export const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: result,
    });
  } catch (error) {
    // Invalid email or password
    if (error.message === "Invalid email or password.") {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while logging in.",
    });
  }
};

/**
 * Get the currently authenticated user's profile.
 */
export const getCurrentUser = async (req, res) => {
  try {
    const profile = await authService.getCurrentUser(req.user.userId);

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    if (error.message === "User not found.") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while retrieving the user profile.",
    });
  }
};
