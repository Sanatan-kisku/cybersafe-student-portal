import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useQuiz from "../hooks/useQuiz";

import PasswordChecker from "../components/games/PasswordChecker";
import LinkChecker from "../components/games/LinkChecker";

export default function Dashboard() {
  const { user } = useAuth();
  const { quizResult, loading } = useQuiz();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-2xl font-semibold text-blue-600">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">

      {/* Welcome Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, {user?.name} 👋
        </h1>

        <p className="text-gray-600 mt-2">
          {user?.email}
        </p>

        <p className="text-gray-500 mt-3">
          Continue your Cyber Safety learning journey and improve your online security skills.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="bg-blue-100 rounded-xl p-5 shadow">
          <h3 className="text-lg font-semibold text-blue-700">
            📚 Courses
          </h3>
          <p className="text-3xl font-bold mt-2">
            4
          </p>
        </div>

        <div className="bg-yellow-100 rounded-xl p-5 shadow">
          <h3 className="text-lg font-semibold text-yellow-700">
            🎮 Games
          </h3>
          <p className="text-3xl font-bold mt-2">
            2
          </p>
        </div>

        <div className="bg-green-100 rounded-xl p-5 shadow">
          <h3 className="text-lg font-semibold text-green-700">
            📝 Quiz
          </h3>

          <p className="text-xl font-bold mt-2">
            {quizResult.passed ? "Passed ✅" : "Not Passed ❌"}
          </p>
        </div>

      </div>

      {/* Quiz Status */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">

        <h2 className="text-2xl font-bold mb-4">
          📝 Quiz Progress
        </h2>

        <p className="mb-2">
          <strong>Score:</strong>{" "}
          {quizResult.score}/{quizResult.total}
        </p>

        <p className="mb-4">
          <strong>Percentage:</strong>{" "}
          {quizResult.percentage}%
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${quizResult.percentage}%`,
            }}
          />
        </div>

        <p className="text-lg font-semibold">
          {quizResult.passed ? (
            <span className="text-green-600">
              ✅ Congratulations! You have passed the quiz.
            </span>
          ) : (
            <span className="text-red-600">
              ❌ Complete the quiz with at least 70% to unlock your certificate.
            </span>
          )}
        </p>

      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <Link
          to="/quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white text-center p-5 rounded-xl font-semibold transition"
        >
          {quizResult.passed
            ? "🔄 Retake Cyber Safety Quiz"
            : "📝 Take Cyber Safety Quiz"}
        </Link>

        {quizResult.passed ? (
          <Link
            to="/certificate"
            className="bg-green-600 hover:bg-green-700 text-white text-center p-5 rounded-xl font-semibold transition"
          >
            🎓 Download Certificate
          </Link>
        ) : (
          <Link
            to="/quiz"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-center p-5 rounded-xl font-semibold transition"
          >
            🔒 Pass Quiz to Unlock Certificate
          </Link>
        )}

      </div>

      {/* Cyber Safety Games */}
      <div className="space-y-8">

        <PasswordChecker />

        <LinkChecker />

      </div>

    </div>
  );
}