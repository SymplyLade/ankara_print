import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;
  const navigate = useNavigate();

  const [level, setLevel] = useState("");

  const handleLevelSelect = (lvl) => {
    if (!isLoggedIn) return;
    setLevel(lvl);
  };

  const handleStartLearning = () => {
    if (!isLoggedIn || !level) return;
    navigate("/chatbot", { state: { level } });
  };

  const handleChatWithTutor = () => {
    if (!isLoggedIn || !level) return;
    navigate("/book-tutor", { state: { level } });
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Ankara Learning Dashboard</h1>
      <p>Select your level and what you want to do.</p>

      {/* 🔐 Show warning if not logged in */}
      {!isLoggedIn && (
        <div className="locked-message">
          🔒 Please <Link to="/login">Login</Link> or{" "}
          <Link to="/signup">Signup</Link> to use learning features.
        </div>
      )}

      <div className="level-section">
        <h2>Select Your Level</h2>
        <div className="level-buttons">
          {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
            <button
              key={lvl}
              disabled={!isLoggedIn}
              className={`level-btn ${level === lvl ? "selected" : ""}`}
              onClick={() => handleLevelSelect(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>
        {level && <p className="selected-level">✅ Selected: {level}</p>}
      </div>

      <div className="action-section">
        <h2>What do you want to do?</h2>
        <button
          disabled={!isLoggedIn || !level}
          className="action-btn"
          onClick={handleStartLearning}
        >
          Start Learning
        </button>
        <button
          disabled={!isLoggedIn || !level}
          className="action-btn"
          onClick={handleChatWithTutor}
        >
          Chat with Tutor
        </button>
        <button
          className="action-btn"
          onClick={() => navigate("/")}
        >
          Explore Website
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
