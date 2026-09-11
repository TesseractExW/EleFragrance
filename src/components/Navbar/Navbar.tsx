// src/components/Navbar/Navbar.tsx
import React from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        <nav className="navbar-nav">
          <a href="#catalogue" className="nav-link">Creations</a>
          <a href="#heritage" className="nav-link">Heritage</a>
        </nav>
        <div className="navbar-brand">
          <span className="brand-crest">✦</span>
          <span className="brand-title">ELEFRAGRANCE</span>
          <span className="brand-subtitle">HAUTE PARFUMERIE</span>
        </div>
        <div className="navbar-actions">
          <a href="#contact" className="nav-link-cta">Concierge</a>
        </div>
      </div>
    </header>
  );
};
