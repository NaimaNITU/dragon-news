import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = use(AuthContext);
  const location = useLocation();
  //   console.log(location);

  if (loading) {
    return <span className="loading loading-dots loading-xl"></span>;
  }
  if (currentUser) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
