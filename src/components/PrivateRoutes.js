import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const authLogin = localStorage.getItem("auth");

  return authLogin ? <Outlet /> : <Navigate to="/login" />;

};

export default PrivateRoutes;