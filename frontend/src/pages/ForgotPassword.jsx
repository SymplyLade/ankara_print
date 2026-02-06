import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/Auth.css";
import "../styles/Pages.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend endpoint
      const res = await fetch("http://127.0.0.1:8000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.detail || "Error sending reset link");
      } else {
        setMessage("Reset link sent! Check your email.");
        setEmail("");
      }
    } catch (error) {
      setMessage("Server error. Try again later.");
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
  <Link to="/">← Back to Home</Link>
</div>

    </div>
  );
};

export default ForgotPassword;
