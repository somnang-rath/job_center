import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useContext(AuthContext);
  return accessToken ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
