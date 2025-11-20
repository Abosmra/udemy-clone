import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className="sale-banner">
          <p>Black Friday Sale! Sitewide deals from E£279.99.</p>
          <button className="banner-close" onClick={() => setShowBanner(false)}>
            ✕
          </button>
        </div>
      )}




      <nav className="navbar">
        <div className="nav-left">
          <img src="/assets/udemy-logo.png" alt="Udemy" className="udemy-logo" />
        </div>

        <div className="nav-search">
          <input type="text" placeholder="Search for anything" />
        </div>

        <div className="nav-right">
          <button className="nav-btn">Categories</button>
          <button className="nav-btn">Teach</button>
          <button className="nav-btn">Udemy Business</button>
          <button className="nav-btn">Cart</button>
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </div>

      </nav>
    </>
  );
}
