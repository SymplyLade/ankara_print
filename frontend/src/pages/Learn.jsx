// import React from "react";
// import Navbar from "../components/Navbar";
// import Chatbot from "../components/Chatbot"; // AI tutor chat

// const Learn = () => {
//   return (
//     <div>
//       <Navbar />
//       <h1>Learn About Ankara Prints</h1>
//       <p>
//         Explore the history, techniques, and styles of Ankara fabrics. 
//         Ask questions to the AI tutor to understand more.
//       </p>

//       {/** Embed the AI Chatbot here for Q&A */}
//       <Chatbot />
//     </div>
//   );
// };

// export default Learn;


import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import "../styles/Learn.css";

const Learn = () => {
  const location = useLocation();
  const level = location.state?.level || "Beginner";

  return (
    <div className="learn-page">
      <Navbar />

      <div className="learn-content">
        <h1>Learn Ankara Prints</h1>
        <p>You're learning at <strong>{level}</strong> level.</p>

        <div className="learn-chatbot">
          <Chatbot initialLevel={level} />
        </div>
      </div>
    </div>
  );
};

export default Learn;
