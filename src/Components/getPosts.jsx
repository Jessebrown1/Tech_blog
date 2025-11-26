    // src/Components/getPosts.js
    export function getPosts() {
        return [
        {
            id: 1,
            title: "Intro to Rust: Safety without Garbage Collection",
            excerpt: "A beginner-friendly guide to Rust's ownership model, lifetimes and tooling to get productive fast.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
            category: "Programming",
            date: "2025-11-10",
            tags: ["rust", "systems", "tutorial"],
            author: "Elma A.",
            views: 12345
        },
        {
            id: 2,
            title: "MLOps Patterns: From Versioning to Monitoring",
            excerpt: "A practical walkthrough of MLOps patterns teams use to ship reliable ML in production.",
            image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1400&auto=format&fit=crop",
            category: "AI & Machine Learning",
            date: "2025-11-03",
            tags: ["mlops", "deployment"],
            author: "Samir K.",
            views: 9842
        },
        {
            id: 3,
            title: "AWS vs. GCP vs. Azure: Picking the Right Cloud in 2025",
            excerpt: "Compare offerings, pricing signals and where each cloud shines for startups and enterprises.",
            image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop",
            category: "Cloud Computing",
            date: "2025-10-21",
            tags: ["cloud", "aws", "gcp", "azure"],
            author: "Priya R.",
            views: 15200
        },
        {
            id: 4,
            title: "Pocket-sized Power: New Foldable Gadget Roundup",
            excerpt: "We review the latest foldables, battery life tradeoffs and who should upgrade this year.",
            image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop",
            category: "Gadgets",
            date: "2025-11-12",
            tags: ["hardware","reviews"],
            author: "Jonas V.",
            views: 4300
        },
        {
            id: 5,
            title: "Zero to CI/CD: A Hands-on GitHub Actions Pipeline",
            excerpt: "Step-by-step guide to build a CI pipeline with tests, linting and automatic deploys on merge.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
            category: "DevOps",
            date: "2025-09-30",
            tags: ["ci","github-actions","devops"],
            author: "Amina S.",
            views: 8700
        },
        {
            id: 6,
            title: "Women Leading ML: 10 Profiles to Know",
            excerpt: "Short profiles of women driving research, open source and product ML in 2025.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop",
            category: "Women in Tech",
            date: "2025-10-05",
            tags: ["women-in-tech","profiles"],
            author: "Elma A.",
            views: 5200
        },
        {
            id: 7,
            title: "Productivity Tools We Actually Use in Engineering",
            excerpt: "A practical list of tools, tips and tiny rituals that reduce context switching and ship more code.",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
            category: "Productivity Tools",
            date: "2025-08-16",
            tags: ["productivity","tools"],
            author: "Ravi P.",
            views: 3100
        },
        {
            id: 8,
            title: "Edge AI: Running Models on Tiny Devices",
            excerpt: "An overview of edge model optimizations, runtimes and the projects making it practical today.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&q=80&w=1400&auto=format&fit=crop",
            category: "AI & Machine Learning",
            date: "2025-07-22",
            tags: ["edge","model-optimization"],
            author: "Li Wei",
            views: 4600
        },
        {
            id: 9,
            title: "Kubernetes Cost Optimization Tricks",
            excerpt: "Tactics to reduce cloud spend while keeping reliability: autoscaling, spot instances and rightsizing.",
            image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1400&auto=format&fit=crop",
            category: "DevOps",
            date: "2025-10-30",
            tags: ["k8s","cloud-cost"],
            author: "Miguel F.",
            views: 7200
        },
        {
            id: 10,
            title: "Building a Secure API: Practical Checklist",
            excerpt: "Quick, effective security checklist for every API — auth, rate limits, logging and more.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
            category: "Programming",
            date: "2025-11-01",
            tags: ["security","api"],
            author: "Sana T.",
            views: 6400
        },
        {
            id: 11,
            title: "How Startups Use Federated Learning Today",
            excerpt: "Real examples of federated systems and the business problems they solve without centralizing data.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
            category: "AI & Machine Learning",
            date: "2025-09-12",
            tags: ["federated-learning","privacy"],
            author: "Olga K.",
            views: 2950
        },
        {
            id: 12,
            title: "Serverless vs Containers: When to Choose Which",
            excerpt: "A simple decision guide comparing ownership, latency, cost and developer velocity tradeoffs.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
            category: "Cloud Computing",
            date: "2025-08-28",
            tags: ["serverless","containers"],
            author: "Marcus L.",
            views: 5400
        },
        {
            id: 13,
            title: "Review: Noise-Cancelling Earbuds for Coders",
            excerpt: "We test four popular ANC earbuds for clarity, battery life and comfort during long coding sessions.",
            image: "https://images.unsplash.com/photo-1518444028090-6daf3b3f4a2f?q=80&w=1400&auto=format&fit=crop",
            category: "Gadgets",
            date: "2025-10-08",
            tags: ["audio","reviews"],
            author: "Hannah B.",
            views: 2800
        },
        {
            id: 14,
            title: "Observability 101: Logs, Metrics, Traces",
            excerpt: "How to design an observability stack that helps you find, fix and prevent incidents fast.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&q=80&w=1400&auto=format&fit=crop",
            category: "DevOps",
            date: "2025-07-05",
            tags: ["observability","monitoring"],
            author: "Nina Q.",
            views: 4100
        },
        {
            id: 15,
            title: "How I Built a Personal LLM Assistant (Tutorial)",
            excerpt: "A developer walkthrough: dataset prep, fine-tuning tips and safe prompting for personal assistants.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
            category: "AI & Machine Learning",
            date: "2025-06-18",
            tags: ["llm","tutorial"],
            author: "Samir K.",
            views: 11200
        },
        {
            id: 16,
            title: "Data Pipelines for Busy Teams: ETL to ELT",
            excerpt: "Patterns and tools for building reliable pipelines without a dedicated data team.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
            category: "Programming",
            date: "2025-04-10",
            tags: ["data","etl"],
            author: "Priya R.",
            views: 2300
        },
        {
            id: 17,
            title: "Gadget News: Major CPU Launches this Quarter",
            excerpt: "Quick analysis of the latest CPU announcements and what they mean for laptops and servers.",
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b0a6f2?q=80&w=1400&auto=format&fit=crop",
            category: "Tech News",
            date: "2025-11-20",
            tags: ["hardware","news"],
            author: "Jonas V.",
            views: 9800
        },
        {
            id: 18,
            title: "Designing Inclusive Developer Docs",
            excerpt: "Practical tips to make docs more accessible and easier to follow for newcomers.",
            image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1400&auto=format&fit=crop",
            category: "Productivity Tools",
            date: "2025-05-03",
            tags: ["docs","ux"],
            author: "Amina S.",
            views: 1500
        },
        {
            id: 19,
            title: "How Observability Helps Security Teams",
            excerpt: "Cross-functional observability tooling that improves both reliability and security posture.",
            image: "https://images.unsplash.com/photo-1526378722262-7b8e2d1d8c18?q=80&w=1400&auto=format&fit=crop",
            category: "DevOps",
            date: "2025-10-02",
            tags: ["security","observability"],
            author: "Miguel F.",
            views: 2600
        },
        {
            id: 20,
            title: "The State of Open Source in 2025",
            excerpt: "Funding, maintainer burnout and practical contributor workflows you can adopt today.",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop",
            category: "Tech News",
            date: "2025-03-28",
            tags: ["open-source","community"],
            author: "Olga K.",
            views: 4700
        },
        {
            id: 21,
            title: "Interview: CTO on Building Reliable Edge Services",
            excerpt: "Inside stories from a CTO running low-latency services across multiple regions.",
            image: "https://images.unsplash.com/photo-1542223616-22c3f3d8f5e4?q=80&w=1400&auto=format&fit=crop",
            category: "Tech News",
            date: "2025-11-18",
            tags: ["interview","edge"],
            author: "Elma A.",
            views: 3600
        },
        {
            id: 22,
            title: "Productivity Deep Dive: Timeboxing for Engineers",
            excerpt: "How timeboxing can increase focus and ship more features with fewer distractions.",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop",
            category: "Productivity Tools",
            date: "2025-02-11",
            tags: ["time-management","workflow"],
            author: "Ravi P.",
            views: 2100
        },
        {
            id: 23,
            title: "Women in Tech — Mentorship Models That Work",
            excerpt: "Programs, peer groups and sponsorship ideas to help build more supportive teams.",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
            category: "Women in Tech",
            date: "2025-09-01",
            tags: ["mentorship","diversity"],
            author: "Nina Q.",
            views: 1900
        },
        {
            id: 24,
            title: "Quick Guide: Containerizing a Python App",
            excerpt: "A fast, practical guide to Dockerizing a Python web app and running locally and in CI.",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
            category: "Programming",
            date: "2025-11-08",
            tags: ["docker","python","tutorial"],
            author: "Sana T.",
            views: 6600
        }
        ];
    }
    
    export default getPosts;
    