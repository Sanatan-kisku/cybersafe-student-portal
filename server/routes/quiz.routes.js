import express from "express";

import {
  submitQuiz,
  getQuizResult,
} from "../controllers/quiz.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/submit", protect, submitQuiz);

router.get("/result", protect, getQuizResult);

export default router;