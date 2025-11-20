import React from "react";
import "./TrustedCompanies.css";
import { companies } from "../data/companies";

export default function TrustedCompanies() {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <p className="trusted-title">Trusted by over 67,420 companies</p>

        <div className="trusted-logos">
          {companies.map((c, i) => (
            <img key={i} src={c.img} alt={c.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
