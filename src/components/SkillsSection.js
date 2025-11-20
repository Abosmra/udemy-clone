import React from "react";
import "./SkillsSection.css";
import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills to transform your career and life</h2>
        <p className="muted">From critical skills to technical topics, Udemy supports your professional development.</p>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <img src={s.img} alt={s.title} />
              <div className="skill-body">
                <h3>{s.title}</h3>
                <p className="muted">{s.author}</p>
                <div className="price">{s.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
