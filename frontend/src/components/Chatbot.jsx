// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Chatbot.css";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [level, setLevel] = useState(""); // Selected level
//   const chatEndRef = useRef(null);

//   // Auto-scroll to latest message
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       sender: "user",
//       text: input
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     // Fake bot response
//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: `You said: "${input}" (at ${level || "no level selected"})`
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }, 500);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   const handleLevelSelect = (lvl) => {
//     setLevel(lvl); // ✅ Set selected level
//     setMessages((prev) => [
//       ...prev,
//       { id: Date.now(), sender: "bot", text: `You selected "${lvl}" level! Let's start.` }
//     ]);
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-header">AI Chatbot</div>

//       {/* Level selector always visible until selected */}
//       {!level && (
//         <div className="level-selector">
//           <h3>Select Your Level:</h3>
//           <div className="level-buttons">
//             {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
//               <button
//                 key={lvl}
//                 className={`level-button ${level === lvl ? "selected" : ""}`}
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
//             className={`chatbot-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="chatbot-input-area">
//         <input
//           type="text"
//           placeholder={level ? "Type a message..." : "Select a level first"}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//           className="chatbot-input"
//           disabled={!level} // Disable until level selected
//         />
//         <button
//           onClick={handleSend}
//           className="chatbot-button"
//           disabled={!level}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;




// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Chatbot.css";
// import LevelSelector from "../components/LevelSelector";
// import InfoSection from "../components/InfoSection";
// import MessageBubble from "../components/MessageBubble";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [level, setLevel] = useState("");
//   const [showInfo, setShowInfo] = useState(false);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;
//     const userMessage = { id: Date.now(), sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: `You said: "${input}" (at ${level || "no level selected"})`
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }, 500);
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-header">AI Chatbot</div>

//       {!level && !showInfo && (
//         <LevelSelector setLevel={setLevel} setShowInfo={setShowInfo} />
//       )}

//       {showInfo && <InfoSection setShowInfo={setShowInfo} />}

//       <div className="chatbot-chatbox">
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />
//         ))}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="chatbot-input-area">
//         <input
//           type="text"
//           placeholder={level ? "Type a message..." : "Select a level first"}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           disabled={!level}
//         />
//         <button onClick={handleSend} disabled={!level}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Chatbot.css";
// import LevelSelector from "./LevelSelector";
// import InfoSection from "./InfoSection";
// import MessageBubble from "./MessageBubble";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [level, setLevel] = useState("");
//   const [showInfo, setShowInfo] = useState(false);
//   const chatEndRef = useRef(null);

//   // Auto-scroll to newest message
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Handle sending text messages
//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = { id: Date.now(), sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     // Bot response
//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: `You said: "${input}" (level: ${level || "none"})`
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }, 500);
//   };

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // Add uploaded file to chat
//     const fileMessage = {
//       id: Date.now(),
//       sender: "user",
//       text: `📄 Uploaded: ${file.name}`,
//       file
//     };
//     setMessages((prev) => [...prev, fileMessage]);

//     // Optional: bot response
//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: `I see you uploaded "${file.name}"! How can I help with it?`
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     }, 800);

//     // Reset file input
//     e.target.value = null;
//   };

//   return (
//     <div className="chatbot-container">
//       {/* Header */}
//       <div className="chatbot-header">AI Chatbot</div>

//       {/* Level selection */}
//       {!level && !showInfo && (
//         <LevelSelector setLevel={setLevel} setShowInfo={setShowInfo} />
//       )}

//       {/* Info section */}
//       {showInfo && <InfoSection setShowInfo={setShowInfo} />}

//       {/* Chat messages */}
//       <div className="chatbot-chatbox">
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} file={msg.file} />
//         ))}
//         <div ref={chatEndRef} />
//       </div>

//       {/* Input area */}
//       <div className="chatbot-input-area">
//         {/* File upload */}
//         <input
//           type="file"
//           onChange={handleFileUpload}
//           accept=".pdf,.doc,.docx,.txt"
//           style={{ marginRight: "8px" }}
//         />

//         {/* Text input */}
//         <input
//           type="text"
//           placeholder={level ? "Type a message..." : "Select a level first"}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           disabled={!level}
//         />

//         {/* Send button */}
//         <button onClick={handleSend} disabled={!level}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;


import React, { useState, useRef, useEffect } from "react";
import "../styles/Chatbot.css";
import LevelSelector from "./LevelSelector";
import InfoSection from "./InfoSection";
import MessageBubble from "./MessageBubble";
import BackButton from "./BackButton";

const RAG_API_URL = import.meta.env.VITE_RAG_API_URL || "http://localhost:8001"; // read from Vite env or fallback

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [level, setLevel] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [systemReady, setSystemReady] = useState(false);
  const chatEndRef = useRef(null);

  // Check if RAG system is ready on mount
  useEffect(() => {
    checkSystemStatus();
  }, []);

  // Auto-scroll to newest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Check RAG system status
  const checkSystemStatus = async () => {
    try {
      const response = await fetch(`${RAG_API_URL}/api/status`);
      const data = await response.json();
      setSystemReady(data.status === "online" && data.pdf_loaded && data.llm_connected);
      
      if (!data.pdf_loaded) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now(), sender: "bot", text: "⚠️ PDF document is not loaded. Please upload a PDF to start." }
        ]);
      }
    } catch (error) {
      console.error("RAG system unreachable:", error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "bot", text: "❌ Cannot connect to RAG backend. Make sure it's running on port 8001." }
      ]);
    }
  };

  // Handle sending text messages to RAG
  const handleSend = async () => {
    if (!input.trim() || !systemReady) return;

    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${RAG_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.response,
        sources: data.sources
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "❌ Sorry, I couldn't process your message. Please try again."
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Handle file upload
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileMessage = {
      id: Date.now(),
      sender: "user",
      text: `📄 Uploading: ${file.name}...`,
      file
    };
    setMessages((prev) => [...prev, fileMessage]);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${RAG_API_URL}/api/upload-pdf`, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: `✅ PDF uploaded successfully! Created ${data.chunks_created} document chunks. Ready to answer questions!`
      };
      setMessages((prev) => [...prev, botMessage]);
      setSystemReady(true);
    } catch (error) {
      console.error("Error uploading file:", error);
      const errorMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "❌ Failed to upload PDF. Please try again."
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      e.target.value = null;
    }
  };

  return (
    <div className="chatbot-container">
      {/* Back Button */}
      <BackButton />

      {/* Header */}
      <div className="chatbot-header">
        AI Chatbot 
        {systemReady && <span style={{ marginLeft: "10px", color: "#4CAF50" }}>●</span>}
        {!systemReady && <span style={{ marginLeft: "10px", color: "#ff9800" }}>●</span>}
      </div>

      {/* Level selection */}
      {!level && !showInfo && (
        <LevelSelector setLevel={setLevel} setShowInfo={setShowInfo} />
      )}

      {/* Info section */}
      {showInfo && <InfoSection setShowInfo={setShowInfo} />}

      {/* Chat messages */}
      <div className="chatbot-chatbox">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} sources={msg.sources} file={msg.file} />
        ))}
        {loading && <div className="loading-indicator">⏳ Processing...</div>}
        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div className="chatbot-input-area">
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".pdf"
          disabled={loading}
          style={{ marginRight: "8px" }}
        />
        <input
          type="text"
          placeholder={level ? (systemReady ? "Ask a question..." : "System loading...") : "Select a level first"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={!level || !systemReady || loading}
        />
        <button onClick={handleSend} disabled={!level || !systemReady || loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
