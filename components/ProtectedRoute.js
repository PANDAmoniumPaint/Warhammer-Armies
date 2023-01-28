import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../store/userAuthContext";

const ProtectedRoute = ({ children }) => {
  // Call useUserAuth from userAuthContext to set up user
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  // If it's not an authenticated user, navigate back to the root route
  if (!user) {
    return <Navigate to="/" />;
  }

  //If the user is authenticated, return children (content of the protected route)
  return children;
};

export default ProtectedRoute;