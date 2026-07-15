import express from "express";
import { sendTestEmail } from "../controllers/auth.controller.js";
import {
  forgotPassword,
} from "../controllers/auth.controller.js";
import {
  resetPassword,
} from "../controllers/auth.controller.js";

import {
  register,
  login,
  getCurrentUser,
  logout,
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post(
  "/forgot-password",
  forgotPassword
);

router.post(
  "/reset-password/:token",
  resetPassword
);

router.post("/logout", logout);

router.get("/test-email", sendTestEmail);

router.get("/me", protect, getCurrentUser);

export default router;