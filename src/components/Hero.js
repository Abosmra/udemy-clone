import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <img
          src="/assets/hero.jpg"
          alt="Hero Banner"
          className="hero-bg"
        />

        <div className="hero-card-container">
          <div className="hero-card">
            <h1>Learn more, spend less — Black Friday Sale <br></br> from E£279.99</h1>
            <p className="small">
              Sitewide savings on thousands of courses. Ends Nov 28.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
