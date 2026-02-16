import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import "../styles/Pages.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <Navbar /> */}

      <div style={{ padding: "40px", maxWidth: "900px", margin: "auto", lineHeight: "1.8" }}>
        <h1>{t("about.title")}</h1>

        <p>
          {t("about.welcome")} <strong>Ankara Learning</strong> — {t("about.platformDescription")}
        </p>

        <p>
          {t("about.goal")}
        </p>

        <h2>{t("about.whatYouWillLearn")}</h2>
        <ul>
          <li>{t("about.history")}</li>
          <li>{t("about.meanings")}</li>
          <li>{t("about.usage")}</li>
          <li>{t("about.styling")}</li>
          <li>{t("about.culturalSignificance")}</li>
        </ul>

        <p>
          {t("about.tradition")}
        </p>

        <p>
          {t("about.passion")}
        </p>

        <h3>{t("about.tagline")}</h3>
      </div>
    </div>
  );
};

export default About;
