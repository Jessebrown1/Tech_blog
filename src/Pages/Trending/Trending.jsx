// src/Components/Trending/Trending.jsx
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";
import { getPosts } from "../../Components/getPosts";

export default function Trending({ limit = 8 }) {
  const rowRef = useRef(null);
  const containerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const posts = (getPosts() || []).slice(0, limit);

  // update scroll buttons available state
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    function check() {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft + el.clientWidth + 8 < el.scrollWidth);
    }

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [posts.length]);

  // scroll by roughly 80% of visible width
  function scrollByDir(direction = 1) {
    const el = rowRef.current;
    if (!el) return;
    const offset = Math.round(el.clientWidth * 0.8) * direction;
    el.scrollBy({ left: offset, behavior: "smooth" });
  }

  // ENTRY ANIMATION: observe cards and add .visible class when intersecting
  useEffect(() => {
    if (!rowRef.current) return;
    const container = rowRef.current;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // if reduced motion, just add visible immediately
      const items = container.querySelectorAll(".trend-card");
      items.forEach((it) => it.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            // add visible class and set a small stagger based on index
            el.classList.add("visible");
            // we leave it observed — but we can unobserve to avoid repeated callbacks
            observer.unobserve(el);
          }
        });
      },
      {
        root: container,
        rootMargin: "0px",
        threshold: 0.4, // 40% visible in the row
      }
    );

    const cards = container.querySelectorAll(".trend-card");
    cards.forEach((card, idx) => {
      // set a small stagger so they don't all pop at once
      card.style.transitionDelay = `${idx * 60}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [posts.length]);

  if (!posts.length) return null;

  return (
    <section className="trending" aria-label="Trending stories" ref={containerRef}>
      <div className="trending-head">
        <h3>Trending</h3>
        <div className="trending-controls" aria-hidden>
          {/* placeholder for layout symmetry on smaller screens */}
        </div>
      </div>

      {/* Overlay chevrons (absolutely positioned inside .trending) */}
      <button
        className="trend-chev left"
        onClick={() => scrollByDir(-1)}
        aria-label="Scroll trending left"
        disabled={!canLeft}
      >
        ‹
      </button>

      <button
        className="trend-chev right"
        onClick={() => scrollByDir(1)}
        aria-label="Scroll trending right"
        disabled={!canRight}
      >
        ›
      </button>

      <div className="trending-row" ref={rowRef} role="list" tabIndex={0}>
        {posts.map((p, idx) => (
          <article
            className="trend-card"
            role="listitem"
            key={p.id}
            aria-label={p.title}
            // keep inline style only for transitionDelay (stagger) — IntersectionObserver also sets it
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <Link to={`/post/${p.id}`} className="trend-link" aria-label={p.title}>
              <div
                className="trend-thumb"
                style={{ backgroundImage: `url(${p.image})` }}
                role="img"
                aria-label={p.title}
              />
              <div className="trend-meta">
                <div className="trend-cat">{p.category}</div>
                <h4 className="trend-title">{p.title}</h4>
                <div className="trend-date">{p.date}</div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
