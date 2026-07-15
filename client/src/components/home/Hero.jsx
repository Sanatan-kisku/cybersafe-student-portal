import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-700 to-indigo-700 text-white">

      <div className="container mx-auto px-6 py-24">

        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold leading-tight">
            CyberSafe Student Portal
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Learn cyber safety through interactive courses,
            games, quizzes, and earn certificates while
            protecting yourself online.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <Link
              to="/register"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>

            <Link
              to="/courses"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Explore Courses
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}