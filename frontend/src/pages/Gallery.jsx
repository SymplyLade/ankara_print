import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Pages.css";

const images = [
  { src: "/images/ankarafabric1.jpg", title: "Vibrant Prints" },
  { src: "/images/ankarafabric2.jpg", title: "Unique Designs" },
  { src: "/images/ankarafabric3.jpg", title: "Creative Styles" },
  { src: "/images/ankarafabric4.jpg", title: "Classic Patterns" },
  { src: "/images/ankarafabric5.jpg", title: "Traditional Motifs" },
  { src: "/images/ankarafabric6.jpg", title: "Classic Patterns" },
  { src: "/images/ankarafabric7.jpg", title: "Classic Patterns" },
  { src: "/images/ankarafabric8.jpg", title: "Classic Patterns" },
  { src: "/images/ankarafabric9.jpg", title: "Classic Patterns" },
  { src: "/images/ankarafabric10.jpg", title: "Classic Patterns" },
];

const Gallery = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <div style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Ankara Fabric Gallery
        </h1>
        <p style={{ textAlign: "center", marginBottom: "40px", color: "#555" }}>
          Explore the beauty, color, and creativity of Ankara designs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                background: "#fff",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "12px", textAlign: "center" }}>
                <h3 style={{ margin: 0 }}>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
