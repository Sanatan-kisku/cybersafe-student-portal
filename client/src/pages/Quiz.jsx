import { useState } from "react";
import questions from "../data/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold">Quiz Completed 🎉</h1>

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
            className="w-full border rounded-lg p-3 hover:bg-blue-100"
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}