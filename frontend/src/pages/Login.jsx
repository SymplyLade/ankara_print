import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Auth.css";
import BackButton from "../components/BackButton";

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage(t("auth.fillAllFields"));
      return;
    }

    // ✅ Simulate login success
    localStorage.setItem("token", "fake-user-token");
    setMessage(t("auth.loginSuccessful"));

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMessage(t("auth.loggedOut"));
    navigate("/login");
  };

  return (
    <div className="auth-container">
      {/* Back Button at the top */}
      <BackButton />

      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{t("auth.login")}</h2>

        <input
          name="email"
          type="email"
          placeholder={t("auth.email")}
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
        />
        <input
          name="password"
          type="password"
          placeholder={t("auth.password")}
          value={formData.password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <button type="submit" className="auth-button">
          {t("auth.login")}
        </button>
      </form>

      <div className="auth-footer">
        <Link to="/forgot-password" className="auth-link">
          {t("auth.forgotPassword")}
        </Link>

        <p>
          {t("auth.dontHaveAccount")} <Link to="/signup" className="auth-link">{t("auth.signUpHere")}</Link>
        </p>
      </div>

      {/* Logout Button */}
      {localStorage.getItem("token") && (
        <button onClick={handleLogout} className="auth-logout">
          {t("auth.login")}
        </button>
      )}

      {message && (
        <p className={`auth-message ${message.includes("successful") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;
