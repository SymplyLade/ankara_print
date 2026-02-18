// import React, { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import "../styles/Chatbot.css";
// import LevelSelector from "./LevelSelector";
// import InfoSection from "./InfoSection";
// import MessageBubble from "./MessageBubble";
// import BackButton from "./BackButton";

// const RAG_API_URL = import.meta.env.VITE_RAG_API_URL || "http://localhost:8001";

// const Chatbot = () => {
//   const { t, i18n } = useTranslation();
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: t("chatbot.welcome") }
//   ]);
//   const [input, setInput] = useState("");
//   const [level, setLevel] = useState("");
//   const [showInfo, setShowInfo] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [systemReady, setSystemReady] = useState(false);
//   const [welcomeShown, setWelcomeShown] = useState(false);

//   // Voice input state
//   const [speechSupported, setSpeechSupported] = useState(false);
//   const [listening, setListening] = useState(false);

//   const chatEndRef = useRef(null);
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     checkSystemStatus();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Initialize Web Speech API
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       setSpeechSupported(false);
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event) => {
//       if (!event.results || !event.results[0] || !event.results[0][0]) return;
//       const transcript = event.results[0][0].transcript;
//       setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
//     };

//     recognition.onerror = () => {
//       setListening(false);
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };

//     recognitionRef.current = recognition;
//     setSpeechSupported(true);

//     return () => {
//       recognition.stop();
//     };
//   }, []);

//   const getSpeechLang = () => {
//     const code = i18n.language || "en";
//     switch (code) {
//       case "yo":
//         return "yo-NG";
//       case "ha":
//         return "ha-NG";
//       case "ig":
//         return "ig-NG";
//       case "pid":
//         // Pidgin often falls back to English in browsers
//         return "en-NG";
//       case "en":
//       default:
//         return "en-US";
//     }
//   };

//   const toggleListening = () => {
//     if (!speechSupported || !recognitionRef.current) return;

//     if (!listening) {
//       try {
//         recognitionRef.current.lang = getSpeechLang();
//         recognitionRef.current.start();
//         setListening(true);
//       } catch {
//         setListening(false);
//       }
//     } else {
//       recognitionRef.current.stop();
//       setListening(false);
//     }
//   };

//   // 🔁 Keep checking backend until ready
//   const checkSystemStatus = async () => {
//     try {
//       const response = await fetch(`${RAG_API_URL}/api/status`);
//       const data = await response.json();

//       if (data.status === "online" || data.ready === true) {
//         setSystemReady(true);
//         setWelcomeShown(true); // prevents repeated logic
//       } else {
//         setTimeout(checkSystemStatus, 2000000);
//       }
//     } catch (error) {
//       console.log("Backend not reachable, retrying...");
//       setTimeout(checkSystemStatus, 2000000);
//     }
//   };

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
//         body: JSON.stringify({ message: userInput, language: i18n.language })
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
//         { id: Date.now() + 1, sender: "bot", text: t("chatbot.messageError") }
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
//       { id: Date.now(), sender: "user", text: t("chatbot.uploading", { fileName: file.name }), file }
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
//           text: t("chatbot.uploadSuccess", { chunks: data.chunks_created })
//         }
//       ]);

//       setSystemReady(true);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, sender: "bot", text: t("chatbot.uploadFailed") }
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
//         {t("chatbot.title")}
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
//         {loading && <div className="loading-indicator">{t("chatbot.processing")}</div>}
//         {!systemReady && <div className="loading-indicator">{t("chatbot.initializing")}</div>}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="chatbot-input-area">
//         <input type="file" onChange={handleFileUpload} accept=".pdf" disabled={loading} />
//         <div className="chatbot-input-row">
//           <input
//             type="text"
//             placeholder={
//               level ? (systemReady ? t("chatbot.askQuestion") : t("chatbot.systemLoading")) : t("chatbot.selectLevelFirst")
//             }
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             disabled={!level || !systemReady || loading}
//           />
//           {speechSupported && (
//             <button
//               type="button"
//               className={`chatbot-mic-button ${listening ? "listening" : ""}`}
//               onClick={toggleListening}
//               disabled={!level || !systemReady || loading}
//             >
//               {listening ? "🎙️" : "🎤"}
//             </button>
//           )}
//           <button onClick={handleSend} disabled={!level || !systemReady || loading}>
//             {loading ? t("chatbot.sending") : t("chatbot.send")}
//           </button>
//         </div>
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
  const [speechSupported, setSpeechSupported] = useState(false);
  const [listening, setListening] = useState(false);

  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    checkSystemStatus();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Speech recognition setup
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
      const transcript = event.results[0][0].transcript;
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    setSpeechSupported(true);
    return () => recognition.stop();
  }, []);

  const getSpeechLang = () => {
    const code = i18n.language || "en";
    switch (code) {
      case "yo": return "yo-NG";
      case "ha": return "ha-NG";
      case "ig": return "ig-NG";
      case "pid": return "en-NG";
      default: return "en-US";
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

  const checkSystemStatus = async () => {
    try {
      const response = await fetch(`${RAG_API_URL}/api/status`);
      const data = await response.json();
      if (data.status === "online" || data.ready === true) {
        setSystemReady(true);
      } else {
        setTimeout(checkSystemStatus, 5000);
      }
    } catch {
      setTimeout(checkSystemStatus, 5000);
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
        { id: Date.now() + 1, sender: "bot", text: t("chatbot.uploadSuccess", { chunks: data.chunks_created }) }
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
    <div className="chatbot-layout">
      <BackButton />
      <div className="chatbot-header">
        {t("chatbot.title")}
        <span style={{ marginLeft: "10px", color: systemReady ? "#4CAF50" : "#ff9800" }}>●</span>
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
