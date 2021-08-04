import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({ auth, ...props }) => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  return isAuth ? <Redirect to="/dashboard" /> : <Route {...props} />;
};

export const ProtectedRoute = ({ auth, ...props }) => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  return isAuth ? <Route {...props} /> : <Redirect to="/" />;
};
