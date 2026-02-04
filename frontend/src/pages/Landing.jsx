import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard"; 
const images = [
  { src: "/images/ankarafabric1.jpg", title: "Vibrant Prints" },
  { src: "/images/ankarafabric2.jpg", title: "Unique Designs" },
  { src: "/images/ankarafabric3.jpg", title: "Creative Styles" },
  { src: "/images/ankarafabric4.jpg", title: "Classic Patterns" },
];

const Landing = () => {
  return (
    <div>
      <Navbar />
      <header className="landing-header">
        <h1>Welcome to Ankara Learning</h1>
        <p>Discover beautiful Ankara patterns and techniques.</p>
        <a href="#gallery" className="btn">Explore Gallery</a>
      </header>

      <section id="gallery" className="gallery">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.title} />
            <h3>{img.title}</h3>
            <button>Learn More</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Landing;



