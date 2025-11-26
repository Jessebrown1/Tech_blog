import React, { useEffect, useRef, useState } from "react";
import "./NewsTicker.css";
import { getPosts } from "../../Components/getPosts"; // assumes getPosts is in src/Components/getPosts.js

// Lightweight ticker that shows the latest post titles as "breaking" items.
// Keyboard accessible: space/enter toggles pause, focusable region.
export default function NewsTicker({ limit = 6 }) {
  const items = (getPosts() || []).slice(0, limit);
  const stripRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!stripRef.current) return;
    const el = stripRef.current;
    let raf;
    let start;
    const speed = 0.03; // pixels per ms (tweak for speed)

    function step(ts) {
      if (paused) { start = ts; raf = requestAnimationFrame(step); return; }
      if (start == null) start = ts;
      const elapsed = ts - start;
      const move = elapsed * speed;
      el.scrollLeft = (el._startScroll + move) % el._width;
      raf = requestAnimationFrame(step);
    }

    // initialize
    el._startScroll = 0;
    // create a wider scroll width by measuring the inner width
    el._width = el.scrollWidth;
    el.scrollLeft = 0;
    start = null;
    raf = requestAnimationFrame(step);

    function onVisibility() { /* pause when tab not visible */ }
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused, items.length]);

  if (!items.length) return null;

  return (
    <div
      className="news-ticker"
      role="region"
      aria-label="Breaking news headlines"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Spacebar" || e.key === "Enter") {
          e.preventDefault();
          setPaused((v) => !v);
        }
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="ticker-left">🔔 Breaking</div>

      <div className="ticker-strip" ref={stripRef} aria-hidden={paused ? "true" : "false"}>
        {/* duplicate the items to create seamless scroll */}
        <div className="ticker-inner">
          {items.map((p) => (
            <a key={p.id} className="ticker-item" href={`/post/${p.id}`} title={p.title}>
              {p.title}
            </a>
          ))}
          {items.map((p, idx) => (
            <a key={`dup-${idx}-${p.id}`} className="ticker-item" href={`/post/${p.id}`} title={p.title}>
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <button
        className="ticker-toggle"
        aria-pressed={paused}
        onClick={() => setPaused((v) => !v)}
        title={paused ? "Resume ticker" : "Pause ticker"}
      >
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
