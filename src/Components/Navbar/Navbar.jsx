import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">TechSphere</Link>
        </div>

        {/* Desktop menu */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/man-of-week">Tech Man of The Week</Link></li>
          <li><Link to="/tutorials">Tutorials / Articles</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="nav-hamburger" 
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Mobile Slide Menu */}
        <div className={`nav-mobile ${open ? "open" : ""}`}>
          <button className="nav-close" onClick={() => setOpen(false)}>✕</button>

          <ul className="mobile-links">
            <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/man-of-week">Tech Man of The Week</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/tutorials">Tutorials / Articles</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about">About Me</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
