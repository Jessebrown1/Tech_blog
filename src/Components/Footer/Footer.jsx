    // src/Components/Footer/Footer.jsx
    import React from "react";
    import { Link } from "react-router-dom";
    import "./Footer.css";
    import { getPosts } from "../../Components/getPosts"; // optional; remove if not available

    export default function Footer({ recentLimit = 3 }) {
    const posts = (getPosts ? getPosts() : []).slice(0, recentLimit);

    const categories = [
        "Programming",
        "AI & Machine Learning",
        "Cloud Computing",
        "Gadgets",
        "DevOps",
        "Women in Tech",
        "Productivity Tools",
    ];

    const year = new Date().getFullYear();

    return (
        <footer className="site-footer" role="contentinfo" aria-label="Site footer">
        <div className="footer-top container">
            {/* Brand / about */}
            <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo" aria-label="TechSphere home">
                <svg viewBox="0 0 48 48" aria-hidden focusable="false" className="logo-icon">
                <defs>
                    <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#00B0FF" />
                    <stop offset="1" stopColor="#0B73FF" />
                    </linearGradient>
                </defs>
                <rect width="48" height="48" rx="10" fill="url(#g)"></rect>
                <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontWeight="800" fontSize="20" fontFamily="Inter, sans-serif">TS</text>
                </svg>

                <div className="brand-text">
                <span className="brand-name">TechSphere</span>
                <span className="brand-tag">Engineering · AI · Cloud</span>
                </div>
            </Link>

            <p className="brand-desc">
                TechSphere publishes actionable tutorials, deep dives and the stories behind modern engineering. Curated for builders.
            </p>

            <div className="social-row" aria-label="Social links">
                <a href="#" className="social" aria-label="Twitter" title="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M22 5.8c-.6.3-1.1.5-1.8.6.6-.4 1.1-1 1.3-1.8-.6.4-1.2.7-1.9.9C18.7 4.8 17.8 4 16.6 4c-1.9 0-3.3 1.8-2.9 3.6C10.9 7.4 8.3 6 6.3 4.1 5.3 6 6.2 8.4 8.3 9.4c-.5 0-1-.2-1.5-.4v.1c0 1.8 1.3 3.3 3.1 3.6-.5.1-1 .2-1.6.1.4 1.6 2 2.7 3.8 2.7C9.7 18 7 18.7 4.4 18.7c-.9 0-1.7 0-2.5-.2C2.6 19.6 4.5 20.7 6.7 21.2c8 1.6 14-3.9 14-11.1v-.5c.9-.7 1.6-1.6 2.1-2.6-.8.4-1.8.6-2.8.7z"/></svg>
                </a>

                <a href="#" className="social" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M12 .5C5.6.5.7 5.4.7 11.8c0 4.8 3.1 8.9 7.4 10.3.5.1.7-.2.7-.5v-1.9c-3 .6-3.6-1.3-3.6-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7-.8 2.1-1.3-.8-.1-1.6-.4-2.3-1-.4-1 .2-2 .8-2.5-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.1 1-2.9-.1-.3-.4-1.4.1-2.9 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 2-.1 2.8-1 2.8-1 .5 1.5.2 2.6.1 2.9.6.8 1 1.7 1 2.9 0 4.1-2.7 4.9-5 5.3.6.5 1 1.3 1 2.7v3.9c0 .3.2.6.7.5 4.3-1.4 7.4-5.4 7.4-10.3C23.3 5.4 18.4.5 12 .5z"/></svg>
                </a>

                <a href="#" className="social" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M4.98 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM.5 8.98h4.98v13H.5v-13zm7.48 0H13v1.8h.1c.7-1.1 2.4-2.3 4.9-2.3 5.2 0 6.2 3.4 6.2 7.8v8.7h-5V17c0-2.6-.1-6-3.7-6-3.7 0-4.3 2.9-4.3 5.9v5.9h-5V8.98z"/></svg>
                </a>
            </div>
            </div>

            {/* Quick nav + categories */}
            <div className="footer-col footer-links" aria-labelledby="footer-nav">
            <h4 id="footer-nav" className="footer-title">Explore</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/man-of-week">Man of the Week</Link></li>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><Link to="/tech-news">Tech News</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>

            <div className="footer-col footer-cats" aria-labelledby="footer-cats">
            <h4 id="footer-cats" className="footer-title">Categories</h4>
            <ul>
                {categories.map((c) => (
                <li key={c}><Link to={`/${c.toLowerCase().replace(/\s+/g, "-")}`}>{c}</Link></li>
                ))}
            </ul>
            </div>

            {/* Recent posts + newsletter */}
            <div className="footer-col footer-recent" aria-labelledby="footer-recent">
            <h4 id="footer-recent" className="footer-title">Recent</h4>

            <ul className="recent-list">
                {posts && posts.length ? (
                posts.map((p) => (
                    <li key={p.id}>
                    <Link to={`/post/${p.id}`} className="recent-link">
                        <span className="recent-title">{p.title}</span>
                        <span className="recent-date">{p.date}</span>
                    </Link>
                    </li>
                ))
                ) : (
                <li className="no-posts">No posts yet</li>
                )}
            </ul>

            <div className="newsletter">
                <label htmlFor="footer-news-email" className="sr-only">Subscribe to newsletter</label>
                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    // front-end only — integrate with your provider here
                    const email = e.target.email.value;
                    if (!email) return alert("Please enter an email address.");
                    alert(`Thanks — ${email} subscribed (demo).`);
                    e.target.reset();
                }}
                >
                <div className="newsletter-row">
                    <input id="footer-news-email" name="email" type="email" placeholder="Your email" aria-label="Email address" required />
                    <button type="submit" className="btn-primary">Subscribe</button>
                </div>
                <div className="newsletter-note">No spam. Unsubscribe anytime.</div>
                </form>
            </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="container footer-bottom-inner">
            <div className="copyright">© {year} TechSphere — Built for engineers.</div>
            <div className="legal-links">
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
                <a href="mailto:contact@techsphere.example">contact@techsphere.example</a>
            </div>
            </div>
        </div>
        </footer>
    );
    }
