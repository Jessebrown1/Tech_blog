import React from "react";
import { Link } from "react-router-dom";
import "./Articles.css";
import { getPosts } from "../../Components/getPosts";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";


export default function Articles({ limit = 6, category = null }) {
  const all = getPosts() || [];
  const list = category ? all.filter((p) => p.category === category) : all;
  const posts = list.slice(0, limit);

  if (!posts.length) return null;

  return (
    <section className="articles container" aria-label="Articles">
      <div className="articles-head">
        <h3>Articles</h3>
        <Link className="see-all" to="/articles">See all articles →</Link>
      </div>

      <div className="articles-grid">
        {posts.map((p) => (
          <ArticleCard key={p.id} article={p} />
        ))}
      </div>
    </section>
  );
}
