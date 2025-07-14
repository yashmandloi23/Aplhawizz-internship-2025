import React, { useState, useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo">
          <img
            src="https://developmentalphawizz.com/html/grocery/assets/img/logos/logo.png"
            alt="Logo"
          />
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`menu ${menuOpen ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Gallery</a>
        </div>
      </div>

      <img
        src="https://developmentalphawizz.com/html/grocery/assets/img/hero/slider-shape-1.png"
        className="avacado"
        data-aos="fade-up"
        style={{ width: "300px", height: "auto" }}
      />
      <img
        src="https://developmentalphawizz.com/html/grocery/assets/img/hero/slider-shape-2.png"
        className="leaf"
        data-aos="fade-left"
        style={{ width: "300px", height: "auto" }}
      />
      <img
        src="https://developmentalphawizz.com/html/grocery/assets/img/hero/slider-shape-3.png"
        className="leaf2"
        data-aos="zoom-in"
        style={{ width: "300px", height: "auto" }}
      />

      <div className="text">
        <h2>KEEP WITH FOODAND</h2>
        <h1>DELICIOUS AND</h1>
        <h1>ITALIAN</h1>
      </div>
    </div>
  );
}

export default Header;
