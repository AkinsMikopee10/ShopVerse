import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema } from "../validators/auth.validator.js";

const router = Router();

/**
 * Authentication Routes
 */

router.post("/register", validate(registerSchema), authController.register);

router.post("/login", authController.login);

export default router;
