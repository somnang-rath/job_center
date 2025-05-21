import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AboutUs = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="absolute top-12">
      <div>AboutUs</div>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default AboutUs;
