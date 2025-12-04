    // src/Pages/Articles/ArticlesPage.jsx
    import React, { useMemo, useState } from "react";
    import { Link, useSearchParams } from "react-router-dom";
    import "../ArticlesPage/ArticlesPage.css";
    import { getPosts } from "../../Components/getPosts";
    import ArticleCard from "../../Components/ArticleCard/ArticleCard";

    export default function ArticlesPage({ category = null, initialLimit = 12 }) {
    // allow ?q=search or ?category=... via URL if desired
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") || "";
    const urlCategory = searchParams.get("category") || category;

    const all = useMemo(() => getPosts() || [], []);
    const filtered = useMemo(() => {
        let list = [...all];
        if (urlCategory) {
        list = list.filter((p) => String(p.category).toLowerCase() === String(urlCategory).toLowerCase());
        }
        if (q) {
        const term = q.toLowerCase();
        list = list.filter(
            (p) =>
            (p.title && p.title.toLowerCase().includes(term)) ||
            (p.excerpt && p.excerpt.toLowerCase().includes(term)) ||
            (p.tags && p.tags.join(" ").toLowerCase().includes(term))
        );
        }
        return list;
    }, [all, urlCategory, q]);

    const [limit, setLimit] = useState(initialLimit);
    const canLoadMore = filtered.length > limit;

    if (!filtered.length) {
        return (
        <section className="articles container">
            <div className="articles-head">
            <h2>{urlCategory || "Articles"}</h2>
            </div>
            <p className="no-articles">No articles found.</p>
        </section>
        );
    }

    return (
        <section className="articles container" aria-label="Articles">
        <div className="articles-head">
            <h2>{urlCategory ? `${urlCategory}` : "All Articles"}</h2>
            <div className="articles-controls">
            <Link to="/articles" className="see-all">All articles</Link>
            </div>
        </div>

        <div className="articles-grid">
            {filtered.slice(0, limit).map((p) => (
            <ArticleCard key={p.id} article={p} />
            ))}
        </div>

        <div className="articles-footer">
            {canLoadMore ? (
            <button className="btn load-more" onClick={() => setLimit((s) => s + initialLimit)}>
                Load more
            </button>
            ) : (
            <p className="end">You’ve reached the end.</p>
            )}
        </div>
        </section>
    );
    }
