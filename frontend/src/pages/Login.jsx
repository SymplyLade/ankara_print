import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("Please fill in all fields");
      return;
    }

    // ✅ Simulate login success
    localStorage.setItem("token", "fake-user-token");
    setMessage("Login successful 🎉");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMessage("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <div className="auth-footer">
        <Link to="/forgot-password">Forgot password?</Link>

        {/* 👇 Updated text */}
        <p>
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>

      {/* 👇 Logout Button */}
      {localStorage.getItem("token") && (
        <button
          onClick={handleLogout}
          style={{
            marginTop: "15px",
            background: "crimson",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      )}

      {message && (
        <p
          className="auth-message"
          style={{
            color: message.includes("successful") ? "green" : "red",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;
