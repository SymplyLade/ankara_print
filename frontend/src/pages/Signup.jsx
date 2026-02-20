import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Auth.css";
import BackButton from "../components/BackButton";
import { signupUser } from "../api";

const Signup = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage(t("auth.passwordsDontMatch"));
      return;
    }

    try {
      await signupUser({
        email: formData.email,
        password: formData.password,
      });
      setMessage(t("auth.signupSuccessful"));
      setFormData({ email: "", password: "", confirmPassword: "" });
    } catch (error) {
      setMessage(error.message || t("auth.signupFailed"));
    }
  };

  return (
    <div className="auth-container">
      <BackButton />

      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{t("auth.createAccount")}</h2>

        <label>{t("auth.email")}</label>
        <input
          type="email"
          name="email"
          placeholder={t("auth.email")}
          value={formData.email}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <label>{t("auth.password")}</label>
        <input
          type="password"
          name="password"
          placeholder={t("auth.password")}
          value={formData.password}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <label>{t("auth.confirmPassword")}</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder={t("auth.confirmPassword")}
          value={formData.confirmPassword}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <button type="submit" className="auth-button">
          {t("auth.signup")}
        </button>

        {message && (
          <p
            className={`auth-message ${
              message.includes("successful") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}

        <p className="auth-footer">
          {t("auth.alreadyHaveAccount")} <Link to="/login" className="auth-link">{t("auth.loginHere")}</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
