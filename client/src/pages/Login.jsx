import { useState } from "react";
import useAuth from "../hooks/useAuth";


export default function Login() {

  const { login } = useAuth();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [error, setError] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

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


        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />


        <button
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>


      </form>

    </div>

  );
}