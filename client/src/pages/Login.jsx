import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function Login() {

  const { login } = useAuth();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    const result = await login(
      formData.email,
      formData.password
    );


    if (!result.success) {
      setError(result.message);
    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h1 className="text-2xl font-bold mb-5">
          Login
        </h1>


        {error && (
          <p className="text-red-500 mb-3">
            {error}
          </p>
        )}


        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />


        <div className="relative mb-3">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full pr-10 rounded"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 cursor-pointer"
          >
            {showPassword ? (
              <FaEyeSlash size={18} />
            ) : (
              <FaEye size={18} />
            )}
          </button>
        </div>

        <div className="text-right mb-4">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>


        <button
          type="submit"
          disabled={!formData.email || !formData.password}
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          Login
        </button>


      </form>

    </div>

  );
}