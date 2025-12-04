    import React from "react";
    import "./About.css";

    export default function AboutPage() {
    return (
        <section className="about-wrapper">

        {/* HERO */}
        <div className="about-hero">
            <h1>About Our Tech Blog</h1>
            <p>
            Your trusted source for insightful tech news, tutorials, trends, and expert analysis —
            delivered with clarity, speed, and accuracy.
            </p>
        </div>

        {/* SECTIONS */}
        <div className="about-content container">

            {/* What We Are About */}
            <section className="about-section">
            <h2>What Our Blog Is About</h2>
            <p>
                We are a modern digital publication focused on simplifying technology for everyone —
                from beginners learning to code to professionals tracking industry shifts.
                Our content covers AI, programming, cloud, devices, cybersecurity, startups,
                industry news, and more.
            </p>
            </section>

            {/* How We Get Our News */}
            <section className="about-section">
            <h2>How We Get Our News</h2>
            <p>
                Our news is gathered from verified global tech sources, trusted insider reports,
                and official announcements from companies such as Google, Microsoft, Apple,
                OpenAI, Meta, Amazon, and major engineering communities.
                We cross-reference every update with multiple sources before publishing.
            </p>

            <ul className="how-list">
                <li>Official press releases from major tech companies</li>
                <li>Reliable news agencies & authorized industry reporters</li>
                <li>Developer documentation, research papers & whitepapers</li>
                <li>Tech conferences, keynotes & product launch events</li>
                <li>Direct testing, reviews & hands-on exploration</li>
            </ul>

            <p>
                This ensures our content is **accurate, up-to-date, and trustworthy**.
            </p>
            </section>

            {/* Why We Built This Blog */}
            <section className="about-section">
            <h2>Why We Created This Blog</h2>
            <p>
                Technology is evolving at record speed — but high-quality tech education and news
                should be easy to understand, accessible, and enjoyable to read.
                This blog was built to help simplify complex topics and keep readers informed
                without overwhelming jargon.
            </p>
            </section>

            {/* Values */}
            <section className="about-section">
            <h2>Our Core Values</h2>
            <ul className="values-list">
                <li><strong>Accuracy</strong> — We verify before posting.</li>
                <li><strong>Clarity</strong> — We explain tech in simple terms.</li>
                <li><strong>Speed</strong> — We publish updates as soon as they break.</li>
                <li><strong>Innovation</strong> — We follow the future, not just the present.</li>
                <li><strong>Community</strong> — We believe tech is for everyone.</li>
            </ul>
            </section>

        </div>
        </section>
    );
    }
