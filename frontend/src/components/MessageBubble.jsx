// // src/components/MessageBubble.js
// import React from "react";
// import "../styles/Chatbot.css"; // we’ll keep bubble styles inside Chatbot.css

// const MessageBubble = ({ sender, text }) => {
//   return (
//     <div className={`chatbot-message ${sender === "user" ? "user-message" : "bot-message"}`}>
//       {text}
//     </div>
//   );
// };

// export default MessageBubble;



import React from "react";

import "../styles/MessageBubble.css";

const MessageBubble = ({ sender, text, sources, file }) => {
  return (
    <div
      className={`chatbot-message ${sender === "user" ? "user-message" : "bot-message"}`}
    >
      <p>{text}</p>

      {/* Display sources if available (RAG) */}
      {sources && sources.length > 0 && (
        <div className="sources-container">
          <small style={{ marginTop: "8px", opacity: 0.8 }}>
            <strong>📚 Sources:</strong>
            <ul style={{ margin: "5px 0", paddingLeft: "20px" }}>
              {sources.map((source, idx) => (
                <li key={idx} style={{ fontSize: "0.85em" }}>
                  {source}
                </li>
              ))}
            </ul>
          </small>
        </div>
      )}

      {/* Display uploaded file */}
      {file && (
        <div style={{ marginTop: "5px" }}>
          <a
            href={URL.createObjectURL(file)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "underline", fontSize: "0.9em" }}
          >
            📄 Open {file.name}
          </a>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
