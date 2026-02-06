// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Auth.css";
// import BackButton from "../components/BackButton";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setMessage("Passwords do not match!");
//       return;
//     }

//     // Simulate signup success (no backend)
//     setMessage("Signup successful! You can now login.");
//     setFormData({ email: "", password: "", confirmPassword: "" });
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Create Account</h2>

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <label>Confirm Password</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Signup</button>

//         {message && <p className="auth-message">{message}</p>}

//         {/* 👇 Already have account section */}
//         <p className="auth-switch">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";
import BackButton from "../components/BackButton";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Simulate signup success (no backend)
    setMessage("Signup successful! You can now login.");
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="auth-container">
      {/* Back Button at the top */}
      <BackButton />

      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="auth-input"
          required
        />

        <button type="submit" className="auth-button">
          Signup
        </button>

        {message && (
          <p
            className={`auth-message ${
              message.includes("successful") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}

        {/* Already have an account section */}
        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
