/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useAuth from "../lib/useAuth";
import { SpinnerDotted } from "spinners-react";

const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SpinnerDotted size={90} thickness={138} speed={200} color="#008EDE" />
      </div>
    );
  }

  if (user && !isLoading) {
    return children;
  } else {
    navigate("/login");
  }
};

export default PrivateRoute;
