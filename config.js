/**
 * ═══════════════════════════════════════════════════════════════════
 * PORTFOLIO CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════
 * Edit this file to customize your portfolio. All content is pulled
 * from these objects, making updates trivially easy.
 * ═══════════════════════════════════════════════════════════════════
 */

const CONFIG = {
    // ─────────────────────────────────────────────────────────────────
    // PERSONAL INFO
    // ─────────────────────────────────────────────────────────────────
    personal: {
        name: "Juan Cors",
        initials: "JC",
        title: "Full Stack Developer & AI Enthusiast",
        greeting: "Hello, I'm",
        bio: "I build intelligent web applications at the intersection of AI and user experience. Passionate about generative AI, computer vision, and creating tools that push creative boundaries.",
        avatarUrl: null, // Set to image URL or leave null for initials
        resumeUrl: "#", // Link to resume PDF
        footerTagline: "Open to opportunities in AI/ML and full-stack development."
    },

    // ─────────────────────────────────────────────────────────────────
    // SKILLS / TECH STACK
    // ─────────────────────────────────────────────────────────────────
    skills: [
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "ts" },
        { name: "Python", icon: "python" },
        { name: "React", icon: "react" },
        { name: "Vite", icon: "vite" },
        { name: "TailwindCSS", icon: "tailwind" },
        { name: "Supabase", icon: "supabase" },
        { name: "OpenCV", icon: "opencv" },
        { name: "Stable Diffusion", icon: "ai" },
        { name: "Git", icon: "git" },
        { name: "Jupyter", icon: "jupyter" },
        { name: "Web APIs", icon: "api" }
    ],

    // ─────────────────────────────────────────────────────────────────
    // FEATURED PROJECTS
    // ─────────────────────────────────────────────────────────────────
    projects: [
        {
            name: "Haven",
            description: "Security-first authentication system for an E2EE messaging platform. Features multi-layered architecture with a Privacy Proxy, Browser Extension, and real-time encrypted messaging.",
            tech: ["React 18", "Vite", "Supabase", "TailwindCSS"],
            githubUrl: "https://github.com/jcors09/haven",
            demoUrl: null,
            stars: 0,
            forks: 0
        },
        {
            name: "AI Text-to-Image Generator",
            description: "Web application leveraging AI models to generate high-quality images from natural language prompts. Features real-time adjustments and seamless image downloads.",
            tech: ["JavaScript", "Stable Diffusion", "Web APIs"],
            githubUrl: "https://github.com/jcors09/text-to-image",
            demoUrl: null,
            stars: 0,
            forks: 0
        },
        {
            name: "E-Signature Watermarking Tool",
            description: "Productivity tool for securing digital documents by applying custom watermarks to electronic signatures while maintaining legibility.",
            tech: ["JavaScript", "Image Processing", "Canvas API"],
            githubUrl: "https://github.com/jcors09/esign-watermark",
            demoUrl: null,
            stars: 0,
            forks: 0
        },
        {
            name: "Suno Music Generator",
            description: "TypeScript wrapper for the Suno AI API enabling automated generation of AI-composed music tracks for multimedia projects.",
            tech: ["TypeScript", "Suno API", "Node.js"],
            githubUrl: "https://github.com/jcors09/suno-music",
            demoUrl: null,
            stars: 0,
            forks: 0
        }
    ],

    // ─────────────────────────────────────────────────────────────────
    // WORK EXPERIENCE
    // ─────────────────────────────────────────────────────────────────
    experience: [
        {
            company: "Independent Developer",
            role: "Full Stack & AI Development",
            period: "2023 — Present",
            description: "Building production-ready web applications with a focus on AI integration, secure authentication systems, and generative AI tools."
        },
        {
            company: "Open Source Contributor",
            role: "Computer Vision Research",
            period: "2022 — Present",
            description: "Mastering computer vision techniques including face detection, image filtering, and object tracking using Python, OpenCV, and Jupyter Notebooks."
        },
        {
            company: "Technical Research",
            role: "Code Review & Experimentation",
            period: "2022 — Present",
            description: "Navigating and customizing complex codebases by forking and modifying community-driven projects like sunoapi and open-cv-projects."
        }
    ],

    // ─────────────────────────────────────────────────────────────────
    // EDUCATION
    // ─────────────────────────────────────────────────────────────────
    education: [
        {
            degree: "Self-Directed Learning",
            school: "AI & Machine Learning",
            year: "Ongoing"
        },
        {
            degree: "Full Stack Development",
            school: "React, TypeScript, Python",
            year: "2023"
        }
    ],

    // ─────────────────────────────────────────────────────────────────
    // SOCIAL LINKS
    // ─────────────────────────────────────────────────────────────────
    social: {
        github: "https://github.com/jcors09",
        linkedin: "https://linkedin.com/in/juancors",
        twitter: null,
        email: "jcors09@gmail.com"
    }
};
