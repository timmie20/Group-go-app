import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CreateEvent from "../Pages/CreateEvent";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user === null) {
  //     navigate("/signin"), { replace: true };
  //   }
  // }, [navigate, user]);

  return children;
};

export default ProtectedRoute;
