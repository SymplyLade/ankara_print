// // src/components/LevelSelector.js
// import React from "react";
// import "../styles/LevelSelector.css";

// const LevelSelector = ({ setLevel, setShowInfo }) => {
//   const [selected, setSelected] = React.useState("");

//   const handleSelect = (lvl) => {
//     setSelected(lvl);
//     setLevel(lvl); // Pass selected level back to Chatbot
//   };

//   const handleStartChat = () => {
//     if (!selected) return;
//     // Chatbot.js will handle showing messages once level is set
//   };

//   return (
//     <div className="level-selector">
//       <h3>Select Your Level:</h3>
//       <div className="level-buttons">
//         {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
//           <button
//             key={lvl}
//             className={`level-button ${selected === lvl ? "selected" : ""}`}
//             onClick={() => handleSelect(lvl)}
//           >
//             {lvl}
//           </button>
//         ))}
//       </div>

//       <div className="level-actions">
//         <button
//           className="start-chat-btn"
//           onClick={handleStartChat}
//           disabled={!selected}
//         >
//           ▶ Start Chat
//         </button>
//         <button
//           className="info-btn"
//           onClick={() => setShowInfo(true)}
//         >
//           ℹ What They Stand For
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LevelSelector;



// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LevelSelector = ({ setLevel }) => {
//   const navigate = useNavigate();

//   const handleLevelSelect = (lvl) => {
//     setLevel(lvl);
//   };

//   return (
//     <div className="level-selector">
//       <h3>Select Your Level</h3>
//       <div className="level-buttons">
//         {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
//           <button key={lvl} onClick={() => handleLevelSelect(lvl)}>
//             {lvl}
//           </button>
//         ))}
//       </div>

//       {/** Only show buttons after level is selected */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           disabled={!setLevel}
//           onClick={() => navigate("/learn")}
//         >
//           Start Learning
//         </button>
//         <button
//           disabled={!setLevel}
//           onClick={() => navigate("/book-tutor")}
//         >
//           Chat with Tutor
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LevelSelector;



import React from "react";
import { useTranslation } from "react-i18next";

const LevelSelector = ({ setLevel, setShowInfo }) => {
  const { t } = useTranslation();
  
  const handleSelect = (lvl) => {
    setLevel(lvl);
    setShowInfo(true); // optionally show info section after selection
  };

  const levels = [
    { key: "beginner", value: "Beginner" },
    { key: "intermediate", value: "Intermediate" },
    { key: "advanced", value: "Advanced" }
  ];

  return (
    <div className="level-selector">
      <h3>{t("chatbot.selectLevel")}</h3>
      <div className="level-buttons">
        {levels.map((lvl) => (
          <button key={lvl.value} onClick={() => handleSelect(lvl.value)}>
            {t(`chatbot.${lvl.key}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
