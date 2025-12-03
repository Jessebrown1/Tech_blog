import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll while menu is open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  // close on escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">TechSphere</Link>
          </div>

          <ul className="nav-links" role="menubar" aria-label="Primary">
            <li role="none"><Link role="menuitem" to="/">Home</Link></li>
            <li role="none"><Link role="menuitem" to="/man-of-week">Tech Man of The Week</Link></li>
            <li role="none"><Link role="menuitem" to="/tutorials">Tutorials / Articles</Link></li>
            <li role="none"><Link role="menuitem" to="/about">About Me</Link></li>
            <li role="none"><Link role="menuitem" to="/contact">Contact</Link></li>
          </ul>

          <button
            className="nav-hamburger"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu — matches CSS below */}
      {open && (
        <div className="nav-fullscreen" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <button className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>

          <ul className="nav-fullscreen-links" role="menu">
            <li role="none"><Link role="menuitem" onClick={() => setOpen(false)} to="/">Home</Link></li>
            <li role="none"><Link role="menuitem" onClick={() => setOpen(false)} to="/man-of-week">Tech Man of The Week</Link></li>
            <li role="none"><Link role="menuitem" onClick={() => setOpen(false)} to="/tutorials">Tutorials / Articles</Link></li>
            <li role="none"><Link role="menuitem" onClick={() => setOpen(false)} to="/about">About Me</Link></li>
            <li role="none"><Link role="menuitem" onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}
