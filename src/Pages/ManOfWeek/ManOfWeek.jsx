    import React from "react";
    import "./ManOfWeek.css";

    export default function ManOfWeek() {
    const featured = {
        name: "John Doe",
        role: "AI Research Engineer at OpenAI",
        image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
        bio: `John is known for his contributions to Reinforcement Learning and Scaling Laws. 
            He has worked on various open-source projects, published multiple papers, 
            and mentors young developers entering the AI space.`,
        achievements: [
        "Published 12 AI research papers",
        "Lead engineer for an open-source LLM",
        "Speaker at Google DevFest, PyCon & KubeCon",
        "Built real-world ML deployment pipelines",
        ],
    };

    return (
        <section className="man-week container">
        <h1 className="title">Tech Man of the Week</h1>
        <p className="subtitle">
            Celebrating outstanding contributors shaping the future of technology.
        </p>

        <div className="man-card">
            <div
            className="man-img"
            style={{ backgroundImage: `url(${featured.image})` }}
            />

            <div className="man-content">
            <h2>{featured.name}</h2>
            <h4>{featured.role}</h4>

            <p className="bio">{featured.bio}</p>

            <h3>Key Achievements</h3>
            <ul>
                {featured.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
                ))}
            </ul>
            </div>
        </div>
        </section>
    );
    }
