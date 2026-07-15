import { useState } from "react";
import questions from "../data/questions";
import useQuiz from "../hooks/useQuiz";
import { submitQuiz } from "../services/quizService";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const { setQuizResult } = useQuiz();

  const handleAnswer = async (option) => {
    const isCorrect = option === questions[current].answer;
    const newScore = isCorrect ? score + 1 : score;

    if (current + 1 < questions.length) {
      setScore(newScore);
      setCurrent((prev) => prev + 1);
    } else {
      const percentage = Math.round(
        (newScore / questions.length) * 100
      );

      const passed = percentage >= 70;

      const result = {
        score: newScore,
        total: questions.length,
        percentage,
        passed,
      };

      try {

        await submitQuiz(result);

        setQuizResult(result);

      } catch (error) {

        console.error(error);

      }

      setScore(newScore);
      setFinished(true);
    }
  };

  const handleRetake = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);

    setQuizResult({
      score: 0,
      total: 0,
      percentage: 0,
      passed: false,
    });
  };

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded-lg p-6 text-center">

        <h1 className="text-3xl font-bold">
          Quiz Completed 🎉
        </h1>

        <p className="mt-4 text-xl">
          Score: {score} / {questions.length}
        </p>

        <p className="mt-2 text-lg">
          Percentage: {percentage}%
        </p>

        <p className="mt-4 font-semibold">
          {percentage >= 70
            ? "✅ Congratulations! You Passed."
            : "❌ You did not pass. Try again."}
        </p>

        <button
          onClick={handleRetake}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Retake Quiz
        </button>

      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded-lg p-6">

      <h2 className="text-xl font-semibold">
        Question {current + 1} of {questions.length}
      </h2>

      <h3 className="text-2xl mt-4 mb-6">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full border rounded-lg p-3 hover:bg-blue-100 transition"
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}