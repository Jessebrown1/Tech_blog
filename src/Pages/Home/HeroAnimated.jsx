import React from "react";
import { motion } from "framer-motion";

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
    <section
      className="hero-hero hero-animated"
      style={{ minHeight: height }}
      role="region"
      aria-label="Hero"
    >
      {/* Background decorative lines (existing CSS stays) */}
      <div className="hero-animated-canvas" aria-hidden="true">
        <span className="line l1" />
        <span className="line l2" />
        <span className="line l3" />
        <span className="glow" />
      </div>

      <div className="hero-inner container">
        <motion.div
          className="hero-copy compact"
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="hero-excerpt"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
              delay: 0.25,
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
