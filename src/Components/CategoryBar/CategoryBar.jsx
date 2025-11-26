import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CategoryBar.css";

const CATS = [
  { to: "/programming", label: "Programming" },
  { to: "/ai-ml", label: "AI & Machine Learning" },
  { to: "/cloud", label: "Cloud Computing" },
  { to: "/gadgets", label: "Gadgets" },
  { to: "/tech-news", label: "Tech News" },
  { to: "/devops", label: "DevOps" },
  { to: "/women-in-tech", label: "Women in Tech" },
  { to: "/productivity", label: "Productivity Tools" },
];

export default function CategoryBar() {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const check = () => {
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft + el.clientWidth + 8 < el.scrollWidth);
    };
    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  // scroll helpers
  function scrollBy(offset) {
    rowRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  }

  // auto-scroll active into view on mount / route change
  useEffect(() => {
    const active = rowRef.current?.querySelector(".cat-link.active");
    if (active) {
      // center active a bit nicer for mobile
      const container = rowRef.current;
      const targetX = active.offsetLeft - (container.clientWidth - active.offsetWidth) / 2;
      container.scrollTo({ left: targetX, behavior: "smooth" });
    }
  });

  return (
    <div className="category-bar-outer" aria-label="Categories">
      <button
        className={`chev left ${canScrollLeft ? "" : "disabled"}`}
        onClick={() => scrollBy(-220)}
        aria-hidden={!canScrollLeft}
        tabIndex={canScrollLeft ? 0 : -1}
        aria-label="Scroll categories left"
      >
        ‹
      </button>

      <div className="category-row" ref={rowRef} role="tablist" aria-label="Category links">
        {CATS.map((c) => (
          <NavLink
            key={c.to}
            to={c.to}
            className={({ isActive }) => `cat-link ${isActive ? "active" : ""}`}
            onClick={(e) => {
              // ensure tapped pill becomes visible quickly
              const node = e.currentTarget;
              node.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
            }}
          >
            {c.label}
          </NavLink>
        ))}
      </div>

      <button
        className={`chev right ${canScrollRight ? "" : "disabled"}`}
        onClick={() => scrollBy(220)}
        aria-hidden={!canScrollRight}
        tabIndex={canScrollRight ? 0 : -1}
        aria-label="Scroll categories right"
      >
        ›
      </button>
    </div>
  );
}
