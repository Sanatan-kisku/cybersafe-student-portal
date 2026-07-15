import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Become Cyber Smart?
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          Join CyberSafe Student Portal and improve your cybersecurity
          awareness through engaging lessons, games, and quizzes.
        </p>

        <Link
          to="/register"
          className="inline-block mt-8 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition"
        >
          Create Free Account
        </Link>

      </div>

    </section>
  );
}