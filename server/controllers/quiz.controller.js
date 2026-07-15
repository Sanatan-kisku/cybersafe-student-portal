import asyncHandler from "express-async-handler";
import User from "../models/User.js";

export const submitQuiz = asyncHandler(async (req, res) => {
  const { score, total, percentage, passed } = req.body;

  if (
    score === undefined ||
    total === undefined ||
    percentage === undefined ||
    passed === undefined
  ) {
    res.status(400);
    throw new Error("Please provide all quiz details.");
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found.");
  }

  user.quiz = {
    score,
    total,
    percentage,
    passed,
    completedAt: new Date(),
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: "Quiz result saved successfully.",
    quiz: user.quiz,
  });
});

export const getQuizResult = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("quiz");

  if (!user) {
    res.status(404);
    throw new Error("User not found.");
  }

  res.status(200).json({
    success: true,
    quiz: user.quiz,
  });
});