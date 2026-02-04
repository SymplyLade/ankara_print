// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [skill, setSkill] = useState("");
//   const [action, setAction] = useState("");

//   const handleProceed = () => {
//     if (!skill || !action) {
//       alert("Please select both your skill level and action.");
//       return;
//     }

//     if (action === "learn") {
//       navigate("/chatbot", { state: { skill } }); // Pass skill level to chatbot
//     } else if (action === "explore") {
//       navigate("/"); // Back to homepage or gallery
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Welcome to Ankara Learning Dashboard</h2>

//       <div className="options-section">
//         <h3>Select your skill level:</h3>
//         <div className="skills">
//           {["Beginner", "Intermediate", "Advanced"].map((level) => (
//             <button
//               key={level}
//               className={skill === level ? "selected" : ""}
//               onClick={() => setSkill(level)}
//             >
//               {level}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="options-section">
//         <h3>What do you want to do?</h3>
//         <div className="actions">
//           <button
//             className={action === "learn" ? "selected" : ""}
//             onClick={() => setAction("learn")}
//           >
//             Learn
//           </button>
//           <button
//             className={action === "explore" ? "selected" : ""}
//             onClick={() => setAction("explore")}
//           >
//             Explore
//           </button>
//         </div>
//       </div>

//       <button className="proceed-btn" onClick={handleProceed}>
//         Proceed
//       </button>
//       <button onClick={() => navigate("/chatbot")}>
//   Start Learning
// </button>

//     </div>
//   );
// };

// export default Dashboard;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h1>Welcome to Ankara Learning Dashboard 🎉</h1>
//       <p>Select your learning journey</p>

//       <button onClick={() => navigate("/chatbot")}>
//         Start Learning
//       </button>
//     </div>
//   );
// };

// export default Dashboard;



import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  return (
    <div className="dashboard">
      <h1>Welcome to Ankara Learning Dashboard</h1>
      <p>Select your level and what you want to do.</p>

      {/* 🔐 Show warning if not logged in */}
      {!isLoggedIn && (
        <div className="locked-message">
          🔒 Please <Link to="/login">Login</Link> or{" "}
          <Link to="/signup">Signup</Link> to use learning features.
        </div>
      )}

      <div className="level-section">
        <h2>Select Your Level</h2>

        <button disabled={!isLoggedIn} className="level-btn">Beginner</button>
        <button disabled={!isLoggedIn} className="level-btn">Intermediate</button>
        <button disabled={!isLoggedIn} className="level-btn">Advanced</button>
      </div>

      <div className="action-section">
        <h2>What do you want to do?</h2>

        <button disabled={!isLoggedIn} className="action-btn">Start Learning</button>
        <button disabled={!isLoggedIn} className="action-btn">Chat with Tutor</button>
        <button className="action-btn">Explore Website</button> {/* Always available */}
      </div>
    </div>
  );
};

export default Dashboard;
