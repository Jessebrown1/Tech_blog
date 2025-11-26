// src/Pages/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { getPosts } from "../../Components/getPosts";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";

// Hero (local)
import { HeroAnimated } from "./HeroAnimated";

import Trending from "../../Pages/Trending/Trending";
import NewsTicker from "../../Pages/NewsTicker/NewsTicker";
import Articles from "../../Pages/Articles/Articles";

export default function Home({ category }) {
  const posts = getPosts() || [];
  const filtered = category ? posts.filter((item) => item.category === category) : posts;

  // If no posts exist
  if (filtered.length === 0) {
    return (
      <>
        <HeroAnimated
          title="Latest Tech Insights"
          subtitle="Explore stories across AI, cloud, devtools & more."
          height="260px"
        />

        {/* Ticker immediately below hero */}
        <NewsTicker limit={6} />

        {/* Trending */}
        <Trending limit={8} />

        {/* Articles (will be empty if no posts) */}
        <Articles limit={6} category={category} />

        <section className="home container">
          <p>No posts found.</p>
        </section>
      </>
    );
  }



  // Top picks: take a few items (excluding featured)
  const topPicks = posts.slice(1, 5);

  return (
    <>
      <HeroAnimated
        title="Engineering. AI. Cloud. DevTools."
        subtitle="Daily stories from the world of modern technology."
        height="300px"
      />

      <NewsTicker limit={6} />

      <Trending limit={8} />

      {/* Articles section (curated recent posts) */}
      <Articles limit={6} category={category} />

      {/* Top Picks */}
      <section className="top-picks container">
        <h2 className="section-title">Top Picks</h2>
        <div className="top-picks-grid">
          {topPicks.map((post) => (
            <ArticleCard key={post.id} article={post} />
          ))}
        </div>
      </section>

      
    </>
  );
}
