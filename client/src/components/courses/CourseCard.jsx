import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

export default function CourseCard({ course }) {

  const { isAuthenticated } = useAuth();

  const isLoggedIn = isAuthenticated;
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleStartLearning = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Header */}
      <div className="p-6">

        <div className="flex items-center gap-4">

          <div className="text-5xl">
            {course.icon}
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              {course.title}
            </h2>

            <div className="flex flex-wrap gap-2 mt-2">

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                📘 {course.level}
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                ⏱ {course.duration}
              </span>

              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                📚 {course.lessons} Lessons
              </span>

            </div>

          </div>

        </div>

        <p className="text-gray-600 mt-5">
          {course.description}
        </p>

        {/* Logged In Progress */}
        {isLoggedIn && (
          <div className="mt-6">

            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                Progress
              </span>

              <span>
                {course.progress}%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{
                  width: `${course.progress}%`,
                }}
              />

            </div>

          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">

          <button
            onClick={handleStartLearning}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            {isLoggedIn
              ? course.progress > 0
                ? "Continue Learning"
                : "Start Learning"
              : "Start Learning"}
          </button>

          {isLoggedIn && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg transition"
            >
              {expanded
                ? "Hide Details"
                : "View Details"}
            </button>
          )}

        </div>

      </div>

      {/* Expandable Section */}
      {expanded && (
        <div className="border-t bg-gray-50 p-6">

          <h3 className="text-xl font-bold mb-4">
            📖 Course Modules
          </h3>

          <ul className="space-y-2">

            {course.modules.map((module, index) => (
              <li
                key={index}
                className="flex items-center gap-2"
              >
                <span className="text-green-600">
                  ✔
                </span>

                {module}
              </li>
            ))}

          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">
            🎯 Skills You'll Learn
          </h3>

          <div className="flex flex-wrap gap-3">

            {course.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}