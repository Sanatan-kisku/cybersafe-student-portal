import { useNavigate } from "react-router-dom";
import courses from "../data/courseData";
import CourseCard from "../components/courses/CourseCard";
import useAuth from "../hooks/useAuth";

export default function Courses() {

  const navigate = useNavigate();

  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  const isLoggedIn = isAuthenticated;

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Page Header */}
      <div className="text-center mb-12">

        <h1 className="text-4xl font-bold text-blue-700">
          📚 Cyber Safety Courses
        </h1>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Learn essential cybersecurity skills through interactive courses
          designed for students. Build safe online habits, protect your
          personal information, and become a responsible digital citizen.
        </p>

      </div>

      {/* Login Notice */}
      {!isLoggedIn && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10 text-center">

          <h2 className="text-2xl font-semibold text-blue-700">
            🔒 Login Required to Start Learning
          </h2>

          <p className="mt-3 text-gray-700">
            You can explore all available courses below.
            Login or create an account to unlock lessons,
            track your learning progress, complete quizzes,
            and earn your Cyber Safety Certificate.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Login Now
          </button>

        </div>
      )}

      {/* Course List */}
      <div className="grid gap-8">

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </div>
  );
}