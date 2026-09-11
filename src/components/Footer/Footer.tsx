// src/components/Footer/Footer.tsx
import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <p className="footer-monogram">ELEFRAGRANCE</p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} EleFragrance Parfums Privés. All privileges reserved.
        </p>
        <div className="footer-legal">
          <span>London</span>
          <span>•</span>
          <span>Paris</span>
          <span>•</span>
          <span>Geneva</span>
        </div>
      </div>
    </footer>
  );
};
