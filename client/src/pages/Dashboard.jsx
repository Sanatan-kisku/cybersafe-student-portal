import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useQuiz from "../hooks/useQuiz";

import PasswordChecker from "../components/games/PasswordChecker";
import LinkChecker from "../components/games/LinkChecker";

export default function Dashboard() {
  const { user } = useAuth();
  const { quizResult } = useQuiz();

  return (
    <div className="container mx-auto py-10 px-4">

      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, {user?.name} 👋
        </h1>

        <p className="mt-2 text-gray-600">
          Continue your Cyber Safety learning journey.
        </p>
      </div>

      {/* Quiz Status */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">
          📝 Quiz Status
        </h2>

        <p>
          <strong>Score:</strong>{" "}
          {quizResult.score}/{quizResult.total}
        </p>

        <p>
          <strong>Percentage:</strong>{" "}
          {quizResult.percentage}%
        </p>

        <p className="mt-2 text-lg font-semibold">
          {quizResult.passed ? (
            <span className="text-green-600">
              ✅ Passed
            </span>
          ) : (
            <span className="text-red-600">
              ❌ Not Passed Yet
            </span>
          )}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <Link
          to="/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white text-center p-5 rounded-lg font-semibold transition"
        >
          📝 Take Cyber Safety Quiz
        </Link>

        {quizResult.passed ? (
          <Link
            to="/certificate"
            className="bg-green-600 hover:bg-green-700 text-white text-center p-5 rounded-lg font-semibold transition"
          >
            🎓 Download Certificate
          </Link>
        ) : (
          <div className="bg-gray-200 text-gray-700 text-center p-5 rounded-lg font-semibold">
            🔒 Pass the Quiz to Unlock Certificate
          </div>
        )}

      </div>

      {/* Cyber Games */}
      <div className="space-y-8">
        <PasswordChecker />
        <LinkChecker />
      </div>

    </div>
  );
}