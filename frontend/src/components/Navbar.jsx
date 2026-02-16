// import React from "react";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Ankara Learning</div>
//       <ul className="nav-links">
//         <li><a href="#gallery">Gallery</a></li>
//         <li><a href="#learn-more">Learn More</a></li>
//         <li><a href="/login">Login</a></li>
//         <li><a href="/signup">Signup</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h2 className="logo">Ankara Learning</h2>
//       </div>
//       <div className="navbar-right">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About</Link>
//         <Link to="/gallery" className="nav-link">Gallery</Link>
//         <Link to="/contact" className="nav-link">Contact</Link>
//         <Link to="/signup" className="nav-link signup-btn">Signup</Link>
//         <Link to="/login" className="nav-link login-btn">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";
// import BackButton from "./BackButton";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         {/* Logo image */}
//         <Link to="/">
//           <img
//             src="/images/Gemini_Generated_Image_di93fcdi93fcdi93.png"
//             alt="AnkaraPrint Learning Logo"
//             className="logo-image"
//           />
//         </Link>
//       </div>
//       <div className="navbar-right">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About</Link>
//         <Link to="/gallery" className="nav-link">Gallery</Link>
//         <Link to="/contact" className="nav-link">Contact</Link>
//         <Link to="/signup" className="nav-link signup-btn">Signup</Link>
//         <Link to="/login" className="nav-link login-btn">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         {/* Back Button: show on all pages except home */}
//         {location.pathname !== "/" && (
//           <button
//             className="back-btn"
//             onClick={() => navigate(-1)}
//           >
//             ← Back
//           </button>
//         )}

//         {/* Logo image */}
//         <Link to="/">
//           <img
//             src="/images/Gemini_Generated_Image_di93fcdi93fcdi93.png"
//             alt="AnkaraPrint Learning Logo"
//             className="logo-image"
//           />
//         </Link>
//       </div>

//       <div className="navbar-right">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About</Link>
//         <Link to="/gallery" className="nav-link">Gallery</Link>
//         <Link to="/contact" className="nav-link">Contact</Link>
//         <Link to="/signup" className="nav-link signup-btn">Signup</Link>
//         <Link to="/login" className="nav-link login-btn">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../styles/Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Show Navbar only on these paths
//   const showNavbar = ["/about", "/gallery", "/contact", "/"].includes(location.pathname);

//   if (!showNavbar) return null; // Hide Navbar on other pages

//   // Only show signup/login buttons on home page
//   const showAuthButtons = location.pathname === "/";

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         {/* Back Button: show on all pages except home */}
//         {location.pathname !== "/" && (
//           <button
//             className="back-btn"
//             onClick={() => navigate(-1)}
//           >
//             ← Back
//           </button>
//         )}

//         {/* Logo image */}
//         <Link to="/">
//           <img
//             src="/images/Gemini_Generated_Image_di93fcdi93fcdi93.png"
//             alt="AnkaraPrint Learning Logo"
//             className="logo-image"
//           />
//         </Link>
//       </div>

//       <div className="navbar-right">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About</Link>
//         <Link to="/gallery" className="nav-link">Gallery</Link>
//         <Link to="/contact" className="nav-link">Contact</Link>

//         {showAuthButtons && (
//           <>
//             <Link to="/signup" className="nav-link signup-btn">Signup</Link>
//             <Link to="/login" className="nav-link login-btn">Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const pathname = location.pathname;

  // Show Navbar only on certain pages
  const navbarPages = ["/", "/about", "/gallery", "/contact"];
  const showNavbar = navbarPages.includes(pathname);

  if (!showNavbar) return null; // hide Navbar on all other pages

  // Only show signup/login buttons on home page
  const showAuthButtons = pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Back button: show on all pages except home */}
        {pathname !== "/" && (
          <button className="back-btn" onClick={() => navigate(-1)}>
            {t("navbar.back")}
          </button>
        )}

        {/* Logo */}
        <Link to="/">
          <img
            src="/images/Gemini_Generated_Image_di93fcdi93fcdi93.png"
            alt="AnkaraPrint Learning Logo"
            className="logo-image"
          />
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/" className="nav-link">{t("navbar.home")}</Link>
        <Link to="/about" className="nav-link">{t("navbar.about")}</Link>
        <Link to="/gallery" className="nav-link">{t("navbar.gallery")}</Link>
        <Link to="/contact" className="nav-link">{t("navbar.contact")}</Link>

        {showAuthButtons && (
          <>
            <Link to="/signup" className="nav-link signup-btn">{t("navbar.signup")}</Link>
            <Link to="/login" className="nav-link login-btn">{t("navbar.login")}</Link>
          </>
        )}

        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
