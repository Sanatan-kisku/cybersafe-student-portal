import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

export default function Register() {

  const { register } = useAuth();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const result = await register(
        formData.name.trim(),
        formData.email.trim().toLowerCase(),
        formData.password
      );

      if (!result.success) {
        setError(result.message);
      }

    } catch (error) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });



  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h1 className="text-2xl font-bold mb-5">
          Create Account
        </h1>


        {error && (
          <p className="text-red-500 mb-3">
            {error}
          </p>
        )}


        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-3 w-full border rounded-lg p-3"
          required
        />


        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-3 w-full border rounded-lg p-3"
          required
        />


        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            minLength={8}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="button"
            className="absolute right-3 top-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="button"
            className="absolute right-3 top-3"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {formData.confirmPassword && (
          <p
            className={`mt-2 text-sm font-medium ${formData.password === formData.confirmPassword
              ? "text-green-600"
              : "text-red-600"
              }`}
          >
            {formData.password === formData.confirmPassword
              ? "✅ Passwords match"
              : "❌ Passwords do not match"}
          </p>
        )}




        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
          disabled={
            loading ||
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.password ||
            !formData.confirmPassword ||
            formData.password !== formData.confirmPassword
          }
        >
          {loading ? "Creating Account..." : "Register"}
        </button>


      </form>

    </div>

  );
}