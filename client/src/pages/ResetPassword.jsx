import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService";

export default function ResetPassword() {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await resetPassword(
        token,
        password
      );

      setMessage(data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

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

        <h1 className="text-3xl font-bold mb-6 text-center">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          className="border rounded-lg p-3 w-full mb-4"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : "Reset Password"}
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