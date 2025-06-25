import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={pathname} />;
  }
  return children;
};

export default ProtectedRoute;
