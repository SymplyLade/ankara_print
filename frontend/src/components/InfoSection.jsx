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

const InfoSection = ({ setShowInfo }) => {
  return (
    <div className="info-section">
      <p>Welcome! You can now start chatting with the AI tutor or upload files.</p>
      <button onClick={() => setShowInfo(false)}>Close Info</button>
    </div>
  );
};

export default InfoSection;
