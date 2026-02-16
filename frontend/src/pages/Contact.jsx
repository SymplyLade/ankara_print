import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import "../styles/Pages.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <Navbar /> */}

      <div style={{ padding: "40px", maxWidth: "800px", margin: "auto", lineHeight: "1.8" }}>
        <h1>{t("contact.title")}</h1>

        <p>
          {t("contact.description")}
        </p>

        <h2 style={{ marginTop: "30px" }}>{t("contact.contactInfo")}</h2>

        <p><strong>{t("contact.name")}:</strong> Gbemisola Ololade Victoria</p>
        <p><strong>{t("contact.email")}:</strong> vgbemisola3@gmail.com</p>
        <p><strong>{t("contact.phone")}:</strong> +234 9033262020</p>
        <p><strong>{t("contact.location")}:</strong> Nigeria</p>

        <h2 style={{ marginTop: "30px" }}>{t("contact.socialMedia")}</h2>

        <p><strong>Instagram:</strong> @ankaralearning</p>
        <p><strong>Facebook:</strong> Ankara Learning</p>
        <p><strong>Twitter (X):</strong> @ankaralearning</p>

        <h2 style={{ marginTop: "30px" }}>{t("contact.message")}</h2>

        <p>
          {t("contact.contactFor")}
        </p>
        <ul>
          <li>{t("contact.learningSupport")}</li>
          <li>{t("contact.fashionKnowledge")}</li>
          <li>{t("contact.business")}</li>
          <li>{t("contact.generalInquiries")}</li>
        </ul>

        <p style={{ marginTop: "20px" }}>
          {t("contact.response")}
        </p>
      </div>
    </div>
  );
};

export default Contact;
