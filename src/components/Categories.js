import React from "react";
import "./Categories.css";
import { categories } from "../data/categories";
export const companies = [
  { name: "Volkswagen", img: "/assets/logo-volkswagen.svg" },
  { name: "Cisco", img: "/assets/logo-cisco.svg" },
  { name: "Ericsson", img: "/assets/logo-ericsson.svg" },
  { name: "HPE", img: "/assets/logo-hpe.svg" },
  { name: "Samsung", img: "/assets/logo-samsung.svg" },
  { name: "Citi", img: "/assets/logo-citi.svg" },
  { name: "Vimeo", img: "/assets/logo-vimeo.svg" },
  { name: "Procter & Gamble", img: "/assets/logo-pg.svg" }
];

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-head">
          <h2>Learn essential career and life skills</h2>
        </div>

        <div className="categories-grid">
          {categories.map((c, i) => (
            <div key={i} className="category-card">
              <div className="media">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="card-body">
                <h3>{c.title}</h3>
                <p className="muted">{c.courses}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
