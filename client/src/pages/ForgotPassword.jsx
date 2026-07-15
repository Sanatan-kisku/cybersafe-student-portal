import { useState } from "react";
import { forgotPassword } from "../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await forgotPassword(email);

      setMessage(data.message);

    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg w-full p-3 mb-4"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <button
          className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

        {message && (
          <p className="mt-5 text-center">
            {message}
          </p>
        )}

      </form>
    </div>
  );
}