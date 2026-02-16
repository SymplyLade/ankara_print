// import React from "react";
// import Navbar from "../components/Navbar";
// import Dashboard from "./Dashboard"; 
// const images = [
//   { src: "/images/ankarafabric1.jpg", title: "Vibrant Prints" },
//   { src: "/images/ankarafabric2.jpg", title: "Unique Designs" },
//   { src: "/images/ankarafabric3.jpg", title: "Creative Styles" },
//   { src: "/images/ankarafabric4.jpg", title: "Classic Patterns" },
// ];

// const Landing = () => {
//   return (
//     <div>
//       <Navbar />
//       <header className="landing-header">
//         <h1>Welcome to AnkaraPrint Learning</h1>
//         <p>Discover beautiful Ankara patterns and techniques.</p>
//         <a href="#gallery" className="btn">Explore Gallery</a>
//       </header>

//       <section id="gallery" className="gallery">
//         {images.map((img, index) => (
//           <div key={index} className="gallery-item">
//             <img src={img.src} alt={img.title} />
//             <h3>{img.title}</h3>
//             <button>Learn More</button>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Landing;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { MessageCircle } from "lucide-react";

// const images = [
//   { src: "/images/ankarafabric1.jpg", title: "Vibrant Prints" },
//   { src: "/images/ankarafabric2.jpg", title: "Unique Designs" },
//   { src: "/images/ankarafabric3.jpg", title: "Creative Styles" },
//   { src: "/images/ankarafabric4.jpg", title: "Classic Patterns" },
// ];

// const Landing = () => {
//   const navigate = useNavigate();
//   const [showPrompt, setShowPrompt] = useState(false);

//   const goToChatbot = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setShowPrompt(true); // Show signup/login prompt
//     } else {
//       navigate("/chatbot");
//     }
//   };

//   // Show prompt after 5 minutes
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setShowPrompt(true);
//       }
//     }, 300000); // 5 minutes

//     return () => clearTimeout(timer);
//   }, []);

//   const handleSignup = () => navigate("/signup");
//   const handleLogin = () => navigate("/login");
//   const handleClose = () => setShowPrompt(false);

//   return (
//     <div>
//       <Navbar />

//       <header className="landing-header">
//         <h1>Welcome to AnkaraPrint Learning</h1>
//         <p>Discover beautiful Ankara patterns and techniques.</p>
//         <a href="#gallery" className="btn">Explore Gallery</a>
//       </header>

//       <section id="gallery" className="gallery">
//         {images.map((img, index) => (
//           <div key={index} className="gallery-item">
//             <img src={img.src} alt={img.title} />
//             <h3>{img.title}</h3>
//             {/* <button>Learn More</button> */}
//           </div>
//         ))}
//       </section>

//       {/* Floating Chat Icon */}
//       <div 
//         className="chat-float-icon pulse" 
//         onClick={goToChatbot} 
//         title="Chat with a Tutor"
//       >
//         <MessageCircle size={32} color="white" />
//       </div>

//       {/* Signup/Login Modal */}
//       {showPrompt && (
//         <div className="chat-modal-overlay">
//           <div className="chat-modal">
//             <h3>Before chatting, please signup or login</h3>
//             <div className="modal-buttons">
//               <button onClick={handleSignup}>Sign Up</button>
//               <button onClick={handleLogin}>Login</button>
//               <button onClick={handleClose} className="close-btn">Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Landing;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { MessageCircle } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showPrompt, setShowPrompt] = useState(false);

  const images = [
    { src: "/images/ankarafabric1.jpg", titleKey: "landing.vibrantPrints" },
    { src: "/images/ankarafabric2.jpg", titleKey: "landing.uniqueDesigns" },
    { src: "/images/ankarafabric3.jpg", titleKey: "landing.creativeStyles" },
    { src: "/images/ankarafabric4.jpg", titleKey: "landing.classicPatterns" },
  ];

  const goToChatbot = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowPrompt(true); // Show signup/login prompt
    } else {
      navigate("/chatbot"); // Automatically shows back button in Chatbot
    }
  };

  // Show prompt after 5 minutes
  useEffect(() => {
    const timer = setTimeout(() => {
      const token = localStorage.getItem("token");
      if (!token) setShowPrompt(true);
    }, 300000); // 5 minutes

    return () => clearTimeout(timer);
  }, []);

  const handleSignup = () => navigate("/signup");
  const handleLogin = () => navigate("/login");
  const handleClose = () => setShowPrompt(false);

  return (
    <div>
      {/* <Navbar /> */}

      <header className="landing-header">
        <h1>{t("landing.welcome")}</h1>
        <p>{t("landing.subtitle")}</p>
        <a href="#gallery" className="btn">{t("landing.exploreGallery")}</a>
      </header>

      <section id="gallery" className="gallery">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={t(img.titleKey)} />
            <h3>{t(img.titleKey)}</h3>
          </div>
        ))}
      </section>

      {/* Floating Chat Icon */}
      <div
        className="chat-float-icon pulse"
        onClick={goToChatbot}
        title={t("landing.chatWithTutor")}
      >
        <MessageCircle size={32} color="white" />
      </div>

      {/* Signup/Login Modal */}
      {showPrompt && (
        <div className="chat-modal-overlay">
          <div className="chat-modal">
            <h3>{t("landing.beforeChatting")}</h3>
            <div className="modal-buttons">
              <button onClick={handleSignup}>{t("landing.signUp")}</button>
              <button onClick={handleLogin}>{t("auth.login")}</button>
              <button onClick={handleClose} className="close-btn">{t("landing.close")}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
