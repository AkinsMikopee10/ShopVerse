import * as authService from "../services/auth.service.js";

/**
 * Handle user registration.
 */
export const register = async (req, res) => {
  try {
    await authService.register();

    return res.status(501).json({
      success: false,
      message: "User registration is not implemented yet.",
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Handle user login.
 */
export const login = async (req, res) => {
  try {
    await authService.login();

    return res.status(501).json({
      success: false,
      message: "User login is not implemented yet.",
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: error.message,
    });
  }
};
