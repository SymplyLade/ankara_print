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



import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Ankara Learning</h2>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/signup" className="nav-link signup-btn">Signup</Link>
        <Link to="/login" className="nav-link login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
