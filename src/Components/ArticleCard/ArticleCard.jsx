// src/Components/ArticleCard/ArticleCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.css"; // optional per-card CSS — not required if using Articles.css

export default function ArticleCard({ article = {}, variant = "card" }) {
  // variant: "card" (default stacked), "list" (small horizontal), "lead" (large)
  const {
    id,
    title = "",
    excerpt = "",
    image = "",
    category = "",
    date = "",
    author = "",
  } = article;

  const classes = ["article-card"];
  if (variant === "list") classes.push("list");
  if (variant === "lead") classes.push("lead");

  return (
    <article className={classes.join(" ")} aria-labelledby={`title-${id}`}>
      <Link to={`/post/${id}`} className="article-link" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          className="article-thumb"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={title}
        />
        <div className="article-body">
          <div className="article-meta">
            <span className="article-kicker">{category}</span>
            <span className="article-by">{author}</span>
            <span className="article-date u-muted">{date}</span>
          </div>

          <h3 id={`title-${id}`} className="article-title">{title}</h3>

          <p className="article-excerpt">{excerpt}</p>

          <div className="article-footer">
            <span className="read-more">Read →</span>
            <span className="article-extra u-muted"> • 5 min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
