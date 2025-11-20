import React from "react";
import "./ReimagineCareer.css";

export default function ReimagineCareer() {
  return (
    <section className="reimagine-section">

      <div className="reimagine-content">
        <div className="re-left">
          <h2>Reimagine your career in the AI era</h2>
          <p className="muted">
            Learn essential AI and Python skills. Build your foundation and grow your future.
          </p>
          <button className="cta">Start learning</button>
        </div>

        <div className="re-right">
          <img src="/assets/reimagine.jpg" alt="Reimagine Career" />
        </div>
      </div>

    </section>
  );
}
