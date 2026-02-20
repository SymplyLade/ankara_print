import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";
import { resetPassword } from "../api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await resetPassword(email);
      setMessage(data?.message || "Reset link sent! Check your email.");
      setEmail("");
    } catch (error) {
      setMessage(error.message || "Server error. Try again later.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Send Reset Link</button>

        {message && <p className="auth-message">{message}</p>}

        <div className="auth-footer">
          <p>
            Remembered your password? <Link to="/login">Login</Link>
          </p>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
      <div className="back-home">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
