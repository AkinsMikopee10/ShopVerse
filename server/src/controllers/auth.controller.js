import * as authService from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";

/**
 * Register a new user.
 */
export const register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body);

  return res.status(201).json({
    success: true,
    message: "Account created successfully.",
    data: result,
  });
});

/**
 * Authenticate an existing user.
 */
export const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);

  return res.status(200).json({
    success: true,
    message: "Login successful.",
    data: result,
  });
});

/**
 * Get the currently authenticated user's profile.
 */
export const getCurrentUser = asyncHandler(async (req, res) => {
  const profile = await authService.getCurrentUser(req.user.userId);

  return res.status(200).json({
    success: true,
    data: profile,
  });
});
