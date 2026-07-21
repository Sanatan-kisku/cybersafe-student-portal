import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import useQuiz from "../hooks/useQuiz";
import { submitQuiz } from "../services/quizService";

export default function Quiz() {
  const navigate = useNavigate();

  const { setQuizResult } = useQuiz();

  // Restore quiz state from sessionStorage
  const [savedState] = useState(() => {
    return JSON.parse(
      sessionStorage.getItem("quizState") || "{}"
    );
  });

  const [current, setCurrent] = useState(savedState.current ?? 0);
  const [score, setScore] = useState(savedState.score ?? 0);
  const [finished, setFinished] = useState(savedState.finished ?? false);

  const [result, setResult] = useState(
    savedState.result ?? {
      score: 0,
      total: 0,
      percentage: 0,
      passed: false,
    }
  );

  // Save state whenever it changes
  useEffect(() => {
    sessionStorage.setItem(
      "quizState",
      JSON.stringify({
        current,
        score,
        finished,
        result,
      })
    );
  }, [current, score, finished, result]);

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

      setResult(result);
      sessionStorage.setItem(
        "quizState",
        JSON.stringify({
          current: questions.length - 1,
          score: newScore,
          finished: true,
          result,
        })
      );
      setScore(newScore);
      setFinished(true);
    }
  };

  const handleRetake = () => {
    sessionStorage.removeItem("quizState");

    setCurrent(0);
    setScore(0);
    setFinished(false);

    const emptyResult = {
      score: 0,
      total: 0,
      percentage: 0,
      passed: false,
    };

    setResult(emptyResult);
    setQuizResult(emptyResult);
  };

  if (finished) {
    return (
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Quiz Completed!
        </h2>

        <p className="text-xl mb-2">
          <strong>Score:</strong> {result.score} / {result.total}
        </p>

        <p className="text-lg mb-4">
          <strong>Percentage:</strong> {result.percentage}%
        </p>

        <p
          className={`text-lg font-semibold mb-6 ${result.passed
            ? "text-green-600"
            : "text-red-600"
            }`}
        >
          {result.passed
            ? "✅ Congratulations! You passed the quiz."
            : "❌ You did not pass. Try again!"}
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={handleRetake}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            🔄 Retake Quiz
          </button>

          {result.passed && (
            <button
              onClick={() => navigate("/certificate")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
            >
              🏆 Download Certificate
            </button>
          )}

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
          >
            📊 Go to Dashboard
          </button>

        </div>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">

      <h2 className="text-xl font-semibold mb-2">
        Question {current + 1} of {questions.length}
      </h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{
            width: `${((current + 1) / questions.length) * 100
              }%`,
          }}
        />
      </div>

      <h3 className="text-2xl font-semibold mb-6">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full border border-gray-300 rounded-lg p-3 text-left hover:bg-blue-100 hover:border-blue-500 transition"
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}