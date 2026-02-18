import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/BackButton.css";
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show back button on home page
   if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate("/")}
      className="back-btn"
    >
      ← Back to Home
    </button>
  );
};

export default BackButton;
