import React from "react";
import "./Contact.css";

export const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <header className="contact-header">
          <span className="section-label">THE MAISON</span>
          <h2 className="contact-heading">Private Correspondence</h2>
          <div className="contact-rule" />
        </header>

        <div className="contact-grid">
          <div className="contact-card">
            <span className="card-kicker">Flagship Atelier</span>
            <p className="card-primary">14 Grosvenor Square</p>
            <p className="card-secondary">Mayfair, London W1K 6LF</p>
            <span className="card-meta">United Kingdom</span>
          </div>

          <div className="contact-card">
            <span className="card-kicker">Private Liaison</span>
            <p className="card-primary">+44 (0) 20 7946 0912</p>
            <p className="card-secondary">+33 (0) 1 42 68 55 00</p>
            <span className="card-meta">Mon – Sat, 10:00 – 18:00 GMT</span>
          </div>

          <div className="contact-card">
            <span className="card-kicker">Direct Inquiries</span>
            <a href="mailto:concierge@elefragrance.com" className="card-link">
              concierge@elefragrance.com
            </a>
            <p className="card-secondary">press@elefragrance.com</p>
            <span className="card-meta">Encrypted Dispatch</span>
          </div>

          <div className="contact-card">
            <span className="card-kicker">Private Viewings</span>
            <p className="card-primary">By Private Appointment Only</p>
            <p className="card-secondary">Salon Privé suites available</p>
            <span className="card-meta">Bookings via direct wire</span>
          </div>
        </div>
      </div>
    </section>
  );
};
