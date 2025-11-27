// src/Components/Trending/Trending.jsx
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";
import { getPosts } from "../../Components/getPosts";

export default function Trending({ limit = 8 }) {
  const rowRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const posts = (getPosts() || []).slice(0, limit);

  // helper: check if device supports touch
  const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // update scroll state (left/right)
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    function check() {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft + el.clientWidth + 8 < el.scrollWidth);
      // add classes for fades
      const container = containerRef.current;
      if (container) {
        container.classList.toggle("has-left", el.scrollLeft > 8);
        container.classList.toggle("has-right", el.scrollLeft + el.clientWidth + 8 < el.scrollWidth);
      }
    }

    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [posts.length]);

  // smooth incremental scroll used while hovering chevrons
  function startHoverScroll(direction = 1) {
    if (isTouch) return; // don't auto-scroll on touch devices
    cancelHoverScroll();
    const el = rowRef.current;
    if (!el) return;
    const step = Math.max(1, Math.round(el.clientWidth * 0.008)); // px/frame (adaptive)
    const loop = () => {
      el.scrollLeft += step * direction;
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }

  function cancelHoverScroll() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  // user-friendly discrete scroll for chevron click
  function scrollByDir(direction = 1) {
    const el = rowRef.current;
    if (!el) return;
    const offset = Math.round(el.clientWidth * 0.75) * direction;
    el.scrollBy({ left: offset, behavior: "smooth" });
  }

  // IntersectionObserver for entry animation (keeps previous behavior)
  useEffect(() => {
    const container = rowRef.current;
    if (!container) return;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      container.querySelectorAll(".trend-card").forEach((c) => c.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: container, threshold: 0.35 }
    );
    container.querySelectorAll(".trend-card").forEach((c, i) => {
      c.style.transitionDelay = `${i * 60}ms`;
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, [posts.length]);

  if (!posts.length) return null;

  return (
    <section className="trending" aria-label="Trending stories" ref={containerRef}>
      <div className="trending-head">
        <h3>Trending</h3>
        <div className="trending-controls" aria-hidden>
          {/* placeholder for alignment */}
        </div>
      </div>

      {/* fade overlays (visual cue) */}
      <div className="fade-left" aria-hidden />
      <div className="fade-right" aria-hidden />

      {/* chevrons */}
      <button
        className={`trend-chev left ${canLeft ? "visible" : ""}`}
        onClick={() => scrollByDir(-1)}
        onMouseEnter={() => startHoverScroll(-1)}
        onMouseLeave={() => cancelHoverScroll()}
        onFocus={() => startHoverScroll(-1)}
        onBlur={() => cancelHoverScroll()}
        aria-label="Scroll trending left"
        disabled={!canLeft}
      >
        ‹
      </button>

      <button
        className={`trend-chev right ${canRight ? "visible" : ""}`}
        onClick={() => scrollByDir(1)}
        onMouseEnter={() => startHoverScroll(1)}
        onMouseLeave={() => cancelHoverScroll()}
        onFocus={() => startHoverScroll(1)}
        onBlur={() => cancelHoverScroll()}
        aria-label="Scroll trending right"
        disabled={!canRight}
      >
        ›
      </button>

      <div className="trending-row" ref={rowRef} role="list" tabIndex={0}>
        {posts.map((p, ) => (
          <article className="trend-card" role="listitem" key={p.id} aria-label={p.title}>
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
