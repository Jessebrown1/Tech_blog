    import React from "react";
    import "./ManOfWeek.css";

    export default function ManOfWeek() {
    const featured = {
        name: "John Doe",
        role: "AI Research Engineer at OpenAI",
        image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
        bio: `John is known for his groundbreaking contributions to Reinforcement Learning,
            Scaling Laws, and multimodal systems. His work continues to influence how 
            next-generation AI models are designed, trained, and deployed globally. 
            Beyond research, John actively mentors young engineers and advocates for 
            ethical AI development across open communities.`,

        achievements: [
        "Published 12 AI research papers on RL, Scaling Laws & LLM optimization",
        "Lead engineer for a widely used open-source Large Language Model",
        "Speaker at Google DevFest, PyCon, KubeCon & multiple AI summits",
        "Designed scalable ML deployment pipelines used by Fortune 500 companies",
        "Contributor to open-source libraries in Python, Rust, and TypeScript",
        ],

        highlights: [
        {
            title: "Innovator of the Year – 2024",
            desc: "Recognized for advancements in automated policy optimization.",
        },
        {
            title: "Top 100 Global AI Leaders",
            desc: "Featured by TechFuture Magazine for his impact on AI accessibility.",
        },
        {
            title: "Mentorship Champion",
            desc: "Mentored over 150+ young developers through open communities.",
        },
        ],

        socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
        },
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

            {/* NEW — Career Highlights Section */}
            <h3>Career Highlights</h3>
            <div className="highlights">
                {featured.highlights.map((item, i) => (
                <div key={i} className="highlight-box">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
                ))}
            </div>

            {/* NEW — Social Links */}
            <div className="social-links">
                <a href={featured.socials.linkedin} target="_blank">
                LinkedIn
                </a>
                <a href={featured.socials.github} target="_blank">
                GitHub
                </a>
                <a href={featured.socials.twitter} target="_blank">
                Twitter
                </a>
            </div>
            </div>
        </div>
        </section>
    );
    }
