import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Pages.css";

const About = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <div style={{ padding: "40px", maxWidth: "900px", margin: "auto", lineHeight: "1.8" }}>
        <h1>About Ankara Learning</h1>

        <p>
          Welcome to <strong>Ankara Learning</strong> — a platform created to teach, preserve, 
          and celebrate the beauty of Ankara prints. Ankara fabric is more than just fashion; 
          it represents culture, identity, creativity, and history across many African communities.
        </p>

        <p>
          Our goal is to make learning about Ankara simple, engaging, and accessible to everyone — 
          from beginners who are just discovering African prints to advanced learners who want to 
          master styling, design, and cultural knowledge.
        </p>

        <h2>What You Will Learn</h2>
        <ul>
          <li>The history and origin of Ankara fabrics</li>
          <li>Meanings behind popular Ankara patterns and symbols</li>
          <li>How Ankara is used in fashion and modern design</li>
          <li>Styling techniques and creative ideas</li>
          <li>The cultural significance of Ankara across Africa</li>
        </ul>

        <p>
          We combine tradition with technology by using an interactive learning system to guide 
          you step by step. Whether you're learning for fashion, business, or cultural knowledge, 
          this platform helps you grow with confidence.
        </p>

        <p>
          Ankara Learning is built with passion for African creativity and digital education. 
          We believe culture should be shared, understood, and appreciated globally.
        </p>

        <h3>Celebrate Culture. Learn Creativity. Wear Your Story.</h3>
      </div>
    </div>
  );
};

export default About;
