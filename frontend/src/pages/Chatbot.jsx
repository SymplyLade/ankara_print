// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Chatbot.css"; // Import the CSS file

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const chatEndRef = useRef(null);

//   // Auto-scroll to latest message
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Fake AI response (replace with real API later)
//   const getBotResponse = (userText) => {
//     const text = userText.toLowerCase();

//     if (text.includes("hello") || text.includes("hi")) {
//       return "Hello there! 😊 What would you like to know?";
//     }
//     if (text.includes("help")) {
//       return "I can answer questions, guide you, or chat with you. Try asking something!";
//     }
//     return "That's interesting! Tell me more 🤔";
//   };

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       sender: "user",
//       text: input
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     // Simulate bot thinking
//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: getBotResponse(input)
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }, 600);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-header">AI Chatbot</div>

//       <div className="chatbot-chatbox">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`chatbot-message ${
//               msg.sender === "user" ? "user-message" : "bot-message"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="chatbot-input-area">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//           className="chatbot-input"
//         />
//         <button onClick={handleSend} className="chatbot-button">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default Chatbot;



// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Chatbot.css";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [level, setLevel] = useState(""); // ✅ Selected level
//   const chatEndRef = useRef(null);

//   // Auto-scroll to latest message
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Fake AI response (replace with real API later)
//   const getBotResponse = (userText) => {
//     const text = userText.toLowerCase();

//     if (text.includes("hello") || text.includes("hi")) {
//       return "Hello there! 😊 What would you like to know?";
//     }
//     if (text.includes("help")) {
//       return "I can answer questions, guide you, or chat with you. Try asking something!";
//     }
//     if (level) {
//       return `You selected ${level} level. Let's continue with that!`;
//     }
//     return "That's interesting! Tell me more 🤔";
//   };

//   // Handle sending user message
//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       sender: "user",
//       text: input
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     // Simulate bot thinking
//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: getBotResponse(input)
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }, 600);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   // Handle level selection
//   const handleLevelSelect = (lvl) => {
//     setLevel(lvl);
//     const botMessage = {
//       id: Date.now(),
//       sender: "bot",
//       text: `You selected ${lvl} level! Let's start your learning journey.`
//     };
//     setMessages((prev) => [...prev, botMessage]);
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-header">AI Chatbot</div>

//       {/* ✅ Select Level Buttons */}
//       {!level && (
//         <div className="level-selector">
//           <h3>Select Your Level:</h3>
//           <div className="level-buttons">
//             {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
//               <button
//                 key={lvl}
//                 className="level-button"
//                 onClick={() => handleLevelSelect(lvl)}
//               >
//                 {lvl}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="chatbot-chatbox">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`chatbot-message ${
//               msg.sender === "user" ? "user-message" : "bot-message"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="chatbot-input-area">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//           className="chatbot-input"
//           disabled={!level} // Disable input until level is selected
//         />
//         <button
//           onClick={handleSend}
//           className="chatbot-button"
//           disabled={!level} // Disable send button until level is selected
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [level, setLevel] = useState(""); // Selected level
  const chatEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Fake bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: `You said: "${input}" (at ${level || "no level selected"})`
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleLevelSelect = (lvl) => {
    setLevel(lvl); // ✅ Set selected level
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "bot", text: `You selected "${lvl}" level! Let's start.` }
    ]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">AI Chatbot</div>

      {/* Level selector always visible until selected */}
      {!level && (
        <div className="level-selector">
          <h3>Select Your Level:</h3>
          <div className="level-buttons">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <button
                key={lvl}
                className={`level-button ${level === lvl ? "selected" : ""}`}
                onClick={() => handleLevelSelect(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="chatbot-chatbox">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chatbot-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="chatbot-input-area">
        <input
          type="text"
          placeholder={level ? "Type a message..." : "Select a level first"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="chatbot-input"
          disabled={!level} // Disable until level selected
        />
        <button
          onClick={handleSend}
          className="chatbot-button"
          disabled={!level}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
