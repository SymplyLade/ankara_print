// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Landing from "./pages/Landing";
// import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard"; 
import Chatbot from "./pages/Chatbot";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
