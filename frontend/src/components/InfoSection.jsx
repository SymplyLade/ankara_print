// // src/components/InfoSection.js
// import React from "react";
// import "../styles/InfoSection.css";

// const InfoSection = ({ setShowInfo }) => {
//   return (
//     <div className="info-section">
//       <h3>What the Levels Mean:</h3>
//       <ul>
//         <li><strong>Beginner:</strong> Basic guidance, simple explanations.</li>
//         <li><strong>Intermediate:</strong> Moderate detail, some depth.</li>
//         <li><strong>Advanced:</strong> In-depth, technical answers.</li>
//       </ul>
//       <button className="back-btn" onClick={() => setShowInfo(false)}>
//         ← Back
//       </button>
//     </div>
//   );
// };

// export default InfoSection;


import React from "react";
import { useTranslation } from "react-i18next";

const InfoSection = ({ setShowInfo }) => {
  const { t } = useTranslation();
  
  return (
    <div className="info-section">
      <h3>{t("chatbot.levelInfo")}</h3>
      <ul>
        <li><strong>{t("chatbot.beginner")}:</strong> {t("chatbot.beginnerDesc")}</li>
        <li><strong>{t("chatbot.intermediate")}:</strong> {t("chatbot.intermediateDesc")}</li>
        <li><strong>{t("chatbot.advanced")}:</strong> {t("chatbot.advancedDesc")}</li>
      </ul>
      <p>{t("chatbot.welcomeMessage")}</p>
      <button onClick={() => setShowInfo(false)}>{t("chatbot.closeInfo")}</button>
    </div>
  );
};

export default InfoSection;
