// src/components/Hero/Hero.tsx
import React from "react";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="heritage">
      <div className="hero-content">
        <span className="hero-pretitle">ESTABLISHED IN PRIVATE APOTHECARIES</span>
        <h1 className="hero-title">The Alchemy of Discreet Luxury</h1>
        <div className="hero-divider"></div>
        <p className="hero-description">
          Hand-poured extraits crafted from aged raw materials, formulated exclusively
          for those who carry pedigree in silence.
        </p>
        <a href="#catalogue" className="hero-cta">Explore The Reserve</a>
      </div>
    </section>
  );
};
