import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const isAuthenticated = !!user;


  // Check logged-in user
  const checkAuth = async () => {
    try {
      const response = await api.get("/auth/me");

      setUser(response.data.user);

    } catch (error) {

      setUser(null);

    } finally {

      setLoading(false);

    }
  };


  // Run once when app starts
  useEffect(() => {

    checkAuth();

  }, []);

  const register = async (name, email, password) => {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      setUser(response.data.user);

      navigate("/dashboard");

      return {
        success: true,
      };

    } catch (error) {

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Registration failed",
      };

    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      setUser(response.data.user);

      navigate("/dashboard");

      return {
        success: true,
      };

    } catch (error) {

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login failed",
      };

    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");

      setUser(null);

      navigate("/login");

    } catch (error) {

      console.log(error);

    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    checkAuth,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}