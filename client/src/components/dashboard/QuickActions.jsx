import { Link } from "react-router-dom";
import useQuiz from "../../hooks/useQuiz";

export default function QuickActions() {

  const { quizResult } = useQuiz();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        ⚡ Quick Actions
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <Link
          to="/quiz"
          className="bg-blue-600 text-white rounded-lg p-4 text-center"
        >
          📝 Take Quiz
        </Link>

        <Link
          to="/courses"
          className="bg-purple-600 text-white rounded-lg p-4 text-center"
        >
          📚 Courses
        </Link>

        <Link
          to="/about"
          className="bg-orange-600 text-white rounded-lg p-4 text-center"
        >
          ℹ About
        </Link>

        {quizResult.passed ? (
          <Link
            to="/certificate"
            className="bg-green-600 text-white rounded-lg p-4 text-center"
          >
            🎓 Certificate
          </Link>
        ) : (
          <button
            disabled
            className="bg-gray-300 rounded-lg p-4"
          >
            🔒 Certificate Locked
          </button>
        )}

      </div>

    </div>
  );
}