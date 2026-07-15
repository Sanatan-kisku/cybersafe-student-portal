import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";


export default function ProtectedRoute() {

  const {
    loading,
    isAuthenticated
  } = useAuth();



  if (loading) {

    return (
      <div className="flex justify-center items-center h-screen">
        Checking authentication...
      </div>
    );

  }



  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }



  return <Outlet />;

}