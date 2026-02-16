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


// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Chatbot.css";
// import LevelSelector from "./LevelSelector";
// import InfoSection from "./InfoSection";
// import MessageBubble from "./MessageBubble";
// import BackButton from "./BackButton";

// const RAG_API_URL = import.meta.env.VITE_RAG_API_URL || "http://localhost:8001"; // read from Vite env or fallback

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [level, setLevel] = useState("");
//   const [showInfo, setShowInfo] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [systemReady, setSystemReady] = useState(false);
//   const chatEndRef = useRef(null);

//   // Check if RAG system is ready on mount
//   useEffect(() => {
//     checkSystemStatus();
//   }, []);

//   // Auto-scroll to newest message
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Check RAG system status
//   const checkSystemStatus = async () => {
//     try {
//       const response = await fetch(`${RAG_API_URL}/api/status`);
//       const data = await response.json();
//       setSystemReady(data.status === "online" && data.pdf_loaded && data.llm_connected);
      
//       if (!data.pdf_loaded) {
//         setMessages((prev) => [
//           ...prev,
//           { id: Date.now(), sender: "bot", text: "⚠️ PDF document is not loaded. Please upload a PDF to start." }
//         ]);
//       }
//     } catch (error) {
//       console.error("RAG system unreachable:", error);
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now(), sender: "bot", text: "❌ Cannot connect to RAG backend. Make sure it's running on port 8001." }
//       ]);
//     }
//   };

//   // Handle sending text messages to RAG
//   const handleSend = async () => {
//     if (!input.trim() || !systemReady) return;

//     const userMessage = { id: Date.now(), sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     const userInput = input;
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch(`${RAG_API_URL}/api/chat`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ message: userInput })
//       });

//       if (!response.ok) {
//         throw new Error(`API error: ${response.status}`);
//       }

//       const data = await response.json();
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: data.response,
//         sources: data.sources
//       };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       console.error("Error sending message:", error);
//       const errorMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: "❌ Sorry, I couldn't process your message. Please try again."
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle file upload
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const fileMessage = {
//       id: Date.now(),
//       sender: "user",
//       text: `📄 Uploading: ${file.name}...`,
//       file
//     };
//     setMessages((prev) => [...prev, fileMessage]);
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const response = await fetch(`${RAG_API_URL}/api/upload-pdf`, {
//         method: "POST",
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error(`Upload failed: ${response.status}`);
//       }

//       const data = await response.json();
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: `✅ PDF uploaded successfully! Created ${data.chunks_created} document chunks. Ready to answer questions!`
//       };
//       setMessages((prev) => [...prev, botMessage]);
//       setSystemReady(true);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       const errorMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: "❌ Failed to upload PDF. Please try again."
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//     } finally {
//       setLoading(false);
//       e.target.value = null;
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       {/* Back Button */}
//       <BackButton />

//       {/* Header */}
//       <div className="chatbot-header">
//         AI Chatbot 
//         {systemReady && <span style={{ marginLeft: "10px", color: "#4CAF50" }}>●</span>}
//         {!systemReady && <span style={{ marginLeft: "10px", color: "#ff9800" }}>●</span>}
//       </div>

//       {/* Level selection */}
//       {!level && !showInfo && (
//         <LevelSelector setLevel={setLevel} setShowInfo={setShowInfo} />
//       )}

//       {/* Info section */}
//       {showInfo && <InfoSection setShowInfo={setShowInfo} />}

//       {/* Chat messages */}
//       <div className="chatbot-chatbox">
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} sources={msg.sources} file={msg.file} />
//         ))}
//         {loading && <div className="loading-indicator">⏳ Processing...</div>}
//         <div ref={chatEndRef} />
//       </div>

//       {/* Input area */}
//       <div className="chatbot-input-area">
//         <input
//           type="file"
//           onChange={handleFileUpload}
//           accept=".pdf"
//           disabled={loading}
//           style={{ marginRight: "8px" }}
//         />
//         <input
//           type="text"
//           placeholder={level ? (systemReady ? "Ask a question..." : "System loading...") : "Select a level first"}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           disabled={!level || !systemReady || loading}
//         />
//         <button onClick={handleSend} disabled={!level || !systemReady || loading}>
//           {loading ? "Sending..." : "Send"}
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default Chatbot;


// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Chatbot.css";
// import LevelSelector from "./LevelSelector";
// import InfoSection from "./InfoSection";
// import MessageBubble from "./MessageBubble";
// import BackButton from "./BackButton";

// const RAG_API_URL = import.meta.env.VITE_RAG_API_URL || "http://localhost:8001";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi! 👋 I'm your assistant. How can I help you today?" }
//   ]);
//   const [input, setInput] = useState("");
//   const [level, setLevel] = useState("");
//   const [showInfo, setShowInfo] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [systemReady, setSystemReady] = useState(false);
//   const [welcomeShown, setWelcomeShown] = useState(false);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     checkSystemStatus();
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // 🔁 Keep checking backend until ready
//   const checkSystemStatus = async () => {
//     try {
//       const response = await fetch(`${RAG_API_URL}/api/status`);
//       const data = await response.json();

//       // SIMPLIFIED: If backend responds, we treat as ready
//       if (data.status === "online" || data.ready === true) {
//         setSystemReady(true);

//         if (!welcomeShown) {
//           setMessages((prev) => [
//             ...prev,
//             {
//               id: Date.now(),
//               sender: "bot",
//               text:
//                "ℹ️ System loaded with default Ankara Print knowledge base. You can ask questions now, or upload your own PDF to add more context."
//             }
//           ]);
//           setWelcomeShown(true);
//         }
//       } else {
//         setTimeout(checkSystemStatus, 2000000);
//       }
//     } catch (error) {
//       console.log("Backend not reachable, retrying...");
//       setTimeout(checkSystemStatus, 2000000);
//     }
//   };

//   checkSystemStatus();

//   const handleSend = async () => {
//     if (!input.trim() || !systemReady) return;

//     const userMessage = { id: Date.now(), sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     const userInput = input;
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch(`${RAG_API_URL}/api/chat`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userInput })
//       });

//       if (!response.ok) throw new Error();

//       const data = await response.json();
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: data.response,
//         sources: data.sources
//       };

//       setMessages((prev) => [...prev, botMessage]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, sender: "bot", text: "❌ Sorry, I couldn't process your message." }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setMessages((prev) => [
//       ...prev,
//       { id: Date.now(), sender: "user", text: `📄 Uploading: ${file.name}...`, file }
//     ]);
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const response = await fetch(`${RAG_API_URL}/api/upload-pdf`, {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           sender: "bot",
//           text: `✅ PDF uploaded! Created ${data.chunks_created} chunks.`
//         }
//       ]);

//       setSystemReady(true);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, sender: "bot", text: "❌ Failed to upload PDF." }
//       ]);
//     } finally {
//       setLoading(false);
//       e.target.value = null;
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <BackButton />

//       <div className="chatbot-header">
//         AI Chatbot
//         <span style={{ marginLeft: "10px", color: systemReady ? "#4CAF50" : "#ff9800" }}>
//           ●
//         </span>
//       </div>

//       {!level && !showInfo && <LevelSelector setLevel={setLevel} setShowInfo={setShowInfo} />}
//       {showInfo && <InfoSection setShowInfo={setShowInfo} />}

//       <div className="chatbot-chatbox">
//         {messages.map((msg) => (
//           <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} sources={msg.sources} file={msg.file} />
//         ))}
//         {loading && <div className="loading-indicator">⏳ Processing...</div>}
//         {!systemReady && <div className="loading-indicator">🔄 Initializing AI system...</div>}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="chatbot-input-area">
//         <input type="file" onChange={handleFileUpload} accept=".pdf" disabled={loading} />
//         <input
//           type="text"
//           placeholder={
//             level ? (systemReady ? "Ask a question..." : "System loading...") : "Select a level first"
//           }
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           disabled={!level || !systemReady || loading}
//         />
//         <button onClick={handleSend} disabled={!level || !systemReady || loading}>
//           {loading ? "Sending..." : "Send"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Chatbot.css";
import LevelSelector from "./LevelSelector";
import InfoSection from "./InfoSection";
import MessageBubble from "./MessageBubble";
import BackButton from "./BackButton";

const RAG_API_URL = import.meta.env.VITE_RAG_API_URL || "http://localhost:8001";

const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: t("chatbot.welcome") }
  ]);
  const [input, setInput] = useState("");
  const [level, setLevel] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [systemReady, setSystemReady] = useState(false);
  const [welcomeShown, setWelcomeShown] = useState(false);

  // Voice input state
  const [speechSupported, setSpeechSupported] = useState(false);
  const [listening, setListening] = useState(false);

  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    checkSystemStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize Web Speech API
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      if (!event.results || !event.results[0] || !event.results[0][0]) return;
      const transcript = event.results[0][0].transcript;
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    setSpeechSupported(true);

    return () => {
      recognition.stop();
    };
  }, []);

  const getSpeechLang = () => {
    const code = i18n.language || "en";
    switch (code) {
      case "yo":
        return "yo-NG";
      case "ha":
        return "ha-NG";
      case "ig":
        return "ig-NG";
      case "pid":
        // Pidgin often falls back to English in browsers
        return "en-NG";
      case "en":
      default:
        return "en-US";
    }
  };

  const toggleListening = () => {
    if (!speechSupported || !recognitionRef.current) return;

    if (!listening) {
      try {
        recognitionRef.current.lang = getSpeechLang();
        recognitionRef.current.start();
        setListening(true);
      } catch {
        setListening(false);
      }
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  // 🔁 Keep checking backend until ready
  const checkSystemStatus = async () => {
    try {
      const response = await fetch(`${RAG_API_URL}/api/status`);
      const data = await response.json();

      if (data.status === "online" || data.ready === true) {
        setSystemReady(true);
        setWelcomeShown(true); // prevents repeated logic
      } else {
        setTimeout(checkSystemStatus, 2000000);
      }
    } catch (error) {
      console.log("Backend not reachable, retrying...");
      setTimeout(checkSystemStatus, 2000000);
    }
  };

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput, language: i18n.language })
      });

      if (!response.ok) throw new Error();

      const data = await response.json();
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.response,
        sources: data.sources
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: t("chatbot.messageError") }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: t("chatbot.uploading", { fileName: file.name }), file }
    ]);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${RAG_API_URL}/api/upload-pdf`, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: t("chatbot.uploadSuccess", { chunks: data.chunks_created })
        }
      ]);

      setSystemReady(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: t("chatbot.uploadFailed") }
      ]);
    } finally {
      setLoading(false);
      e.target.value = null;
    }
  };

  return (
    <div className="chatbot-container">
      <BackButton />

      <div className="chatbot-header">
        {t("chatbot.title")}
        <span style={{ marginLeft: "10px", color: systemReady ? "#4CAF50" : "#ff9800" }}>
          ●
        </span>
      </div>

      {!level && !showInfo && <LevelSelector setLevel={setLevel} setShowInfo={setShowInfo} />}
      {showInfo && <InfoSection setShowInfo={setShowInfo} />}

      <div className="chatbot-chatbox">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} sources={msg.sources} file={msg.file} />
        ))}
        {loading && <div className="loading-indicator">{t("chatbot.processing")}</div>}
        {!systemReady && <div className="loading-indicator">{t("chatbot.initializing")}</div>}
        <div ref={chatEndRef} />
      </div>

      <div className="chatbot-input-area">
        <input type="file" onChange={handleFileUpload} accept=".pdf" disabled={loading} />
        <div className="chatbot-input-row">
          <input
            type="text"
            placeholder={
              level ? (systemReady ? t("chatbot.askQuestion") : t("chatbot.systemLoading")) : t("chatbot.selectLevelFirst")
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={!level || !systemReady || loading}
          />
          {speechSupported && (
            <button
              type="button"
              className={`chatbot-mic-button ${listening ? "listening" : ""}`}
              onClick={toggleListening}
              disabled={!level || !systemReady || loading}
            >
              {listening ? "🎙️" : "🎤"}
            </button>
          )}
          <button onClick={handleSend} disabled={!level || !systemReady || loading}>
            {loading ? t("chatbot.sending") : t("chatbot.send")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
