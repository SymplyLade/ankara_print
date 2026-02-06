import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Pages.css";

const Contact = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <div style={{ padding: "40px", maxWidth: "800px", margin: "auto", lineHeight: "1.8" }}>
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you! Whether you have questions about Ankara learning,
          fashion, culture, or collaboration, feel free to reach out.
        </p>

        <h2 style={{ marginTop: "30px" }}>📍 Our Contact Information</h2>

        <p><strong>Name:</strong>Gbemisola Ololade Victoria</p>
        <p><strong>Email:</strong> vgbemisola3@gmail.com</p>
        <p><strong>Phone:</strong> +234 9033262020</p>
        <p><strong>Location:</strong> Nigeria</p>

        <h2 style={{ marginTop: "30px" }}>🌍 Social Media</h2>

        <p><strong>Instagram:</strong> @ankaralearning</p>
        <p><strong>Facebook:</strong> Ankara Learning</p>
        <p><strong>Twitter (X):</strong> @ankaralearning</p>

        <h2 style={{ marginTop: "30px" }}>💬 Message</h2>

        <p>
          You can contact us for:
        </p>
        <ul>
          <li>Learning support</li>
          <li>Ankara fashion knowledge</li>
          <li>Business or collaboration</li>
          <li>General inquiries</li>
        </ul>

        <p style={{ marginTop: "20px" }}>
          We aim to respond as quickly as possible. Thank you for being part of the
          Ankara Learning community ❤️
        </p>
      </div>
    </div>
  );
};

export default Contact;
