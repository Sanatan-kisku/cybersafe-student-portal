import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import About from "./pages/About";
import ProtectedRoute from "./routes/ProtectedRoute";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";


export default function App() {

  return (

    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/quiz"
            element={<Quiz />}
          />
          <Route
            path="/certificate"
            element={<Certificate />}
          />

        </Route>

        <Route path="/courses" element={<Courses />} />

        <Route path="/about" element={<About />} />

      </Route>

    </Routes>

  );
}