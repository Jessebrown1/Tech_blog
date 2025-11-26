import React from "react";
import "./home.css";

/**
 * HeroAnimated: compact hero with animated tech lines + glow.
 * Props:
 *  - title, subtitle, height (px or css)
 */
export function HeroAnimated({
  title = "Where engineering meets insight",
  subtitle = "Short tutorials, product deep-dives and infrastructure stories.",
  height = "320px",
}) {
  return (
    <section className="hero-hero hero-animated" style={{ minHeight: height }} role="region" aria-label="Hero">
      <div className="hero-animated-canvas" aria-hidden="true">
        {/* decorative animated lines (pure CSS) */}
        <span className="line l1" />
        <span className="line l2" />
        <span className="line l3" />
        <span className="glow" />
      </div>

      <div className="hero-inner container">
        <div className="hero-copy compact">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-excerpt">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
