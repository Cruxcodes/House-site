import React from "react";
import { createPortal } from "react-dom";
import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
function ProtectedRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <h3>Loading</h3>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default ProtectedRoute;
