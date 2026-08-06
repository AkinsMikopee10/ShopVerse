import { z } from "zod";

/**
 * Registration validation schema.
 */

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name cannot exceed 50 characters."),

  email: z.email("Please provide a valid email address.").trim().toLowerCase(),

  password: z.string().min(8, "Password must be at least 8 characters.").max(100),
});

/**
 * Login validation schema.
 */

export const loginSchema = z.object({
  email: z.email("Please provide a valid email address.").trim().toLowerCase(),

  password: z.string().min(1, "Password is required."),
});
