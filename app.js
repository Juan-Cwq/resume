/**
 * Portfolio Application
 * Handles DOM rendering, animations, and interactions
 */

(function() {
    'use strict';

    // ─────────────────────────────────────────────────────────────────
    // SVG ICONS
    // ─────────────────────────────────────────────────────────────────
    const ICONS = {
        folder: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
        star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
        fork: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 12v3"/></svg>`,
        github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
        twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        mail: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
        externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
    };

    // ─────────────────────────────────────────────────────────────────
    // SKILL ICONS (Simple colored badges)
    // ─────────────────────────────────────────────────────────────────
    const SKILL_COLORS = {
        js: '#F7DF1E',
        ts: '#3178C6',
        react: '#61DAFB',
        node: '#339933',
        python: '#3776AB',
        postgres: '#336791',
        mongo: '#47A248',
        docker: '#2496ED',
        aws: '#FF9900',
        git: '#F05032',
        graphql: '#E10098',
        redis: '#DC382D',
        vite: '#646CFF',
        tailwind: '#06B6D4',
        supabase: '#3ECF8E',
        ffmpeg: '#007808',
        opencv: '#5C3EE8',
        ai: '#FF6B6B',
        jupyter: '#F37626',
        api: '#00D4AA'
    };

    // ─────────────────────────────────────────────────────────────────
    // DOM UTILITIES
    // ─────────────────────────────────────────────────────────────────
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    function createElement(tag, className, innerHTML) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (innerHTML) el.innerHTML = innerHTML;
        return el;
    }

    // ─────────────────────────────────────────────────────────────────
    // TYPING ANIMATION
    // ─────────────────────────────────────────────────────────────────
    function typeText(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // ─────────────────────────────────────────────────────────────────
    // RENDER FUNCTIONS
    // ─────────────────────────────────────────────────────────────────
    function renderHero() {
        const { personal } = CONFIG;
        
        // Set avatar
        const avatarEl = $('#avatar');
        if (personal.avatarUrl) {
            avatarEl.innerHTML = `<img src="${personal.avatarUrl}" alt="${personal.name}">`;
        } else {
            avatarEl.innerHTML = `<span class="avatar-placeholder">${personal.initials}</span>`;
        }

        // Set text content
        $('#hero-name').textContent = personal.name;
        $('#hero-title').textContent = personal.title;
        $('#hero-bio').textContent = personal.bio;
        $('#resume-btn').href = personal.resumeUrl;
        $('#footer-tagline').textContent = personal.footerTagline;

        // Typing animation for greeting
        setTimeout(() => {
            typeText($('#greeting'), personal.greeting, 80);
        }, 500);
    }

    function renderSkills() {
        const container = $('#skills-grid');
        
        CONFIG.skills.forEach((skill, index) => {
            const tag = createElement('div', 'skill-tag');
            const color = SKILL_COLORS[skill.icon] || '#8b949e';
            
            tag.innerHTML = `
                <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${color};"></span>
                ${skill.name}
            `;
            tag.style.animationDelay = `${index * 0.05}s`;
            container.appendChild(tag);
        });
    }

    function renderProjects() {
        const container = $('#projects-grid');
        
        CONFIG.projects.forEach((project, index) => {
            const card = createElement('div', 'project-card');
            card.style.animationDelay = `${index * 0.1}s`;
            
            const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
            const demoLink = project.demoUrl 
                ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link demo">
                     ${ICONS.externalLink} Live Demo
                   </a>` 
                : '';
            
            card.innerHTML = `
                <div class="project-header">
                    <div class="project-icon">${ICONS.folder}</div>
                    <div class="project-stats">
                        <span class="stat">${ICONS.star} ${formatNumber(project.stars)}</span>
                        <span class="stat">${ICONS.fork} ${formatNumber(project.forks)}</span>
                    </div>
                </div>
                <h3 class="project-name">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link github">
                        ${ICONS.github} Source
                    </a>
                    ${demoLink}
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    function renderExperience() {
        const container = $('#timeline');
        
        CONFIG.experience.forEach((exp, index) => {
            const item = createElement('div', 'timeline-item');
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <span class="timeline-company">${exp.company}</span>
                        <span class="timeline-period">${exp.period}</span>
                    </div>
                    <p class="timeline-role">${exp.role}</p>
                    <p class="timeline-description">${exp.description}</p>
                </div>
            `;
            container.appendChild(item);
        });
    }

    function renderEducation() {
        const container = $('#education-grid');
        
        CONFIG.education.forEach(edu => {
            const card = createElement('div', 'education-card');
            card.innerHTML = `
                <p class="education-degree">${edu.degree}</p>
                <p class="education-school">${edu.school}</p>
                <p class="education-year">${edu.year}</p>
            `;
            container.appendChild(card);
        });
    }

    function renderSocialLinks() {
        const container = $('#social-links');
        const { social } = CONFIG;
        
        const links = [
            { url: social.github, icon: ICONS.github, label: 'GitHub' },
            { url: social.linkedin, icon: ICONS.linkedin, label: 'LinkedIn' },
            { url: social.twitter, icon: ICONS.twitter, label: 'Twitter' },
            { url: `mailto:${social.email}`, icon: ICONS.mail, label: 'Email' }
        ];
        
        links.forEach(link => {
            if (link.url) {
                const a = createElement('a', 'social-link');
                a.href = link.url;
                a.target = link.url.startsWith('mailto') ? '_self' : '_blank';
                a.rel = 'noopener noreferrer';
                a.setAttribute('aria-label', link.label);
                a.innerHTML = link.icon;
                container.appendChild(a);
            }
        });
    }

    // ─────────────────────────────────────────────────────────────────
    // UTILITIES
    // ─────────────────────────────────────────────────────────────────
    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        }
        return num.toString();
    }

    // ─────────────────────────────────────────────────────────────────
    // SCROLL ANIMATIONS
    // ─────────────────────────────────────────────────────────────────
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate timeline items
                    if (entry.target.classList.contains('experience')) {
                        const items = entry.target.querySelectorAll('.timeline-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, index * 150);
                        });
                    }
                }
            });
        }, observerOptions);

        $$('section').forEach(section => {
            observer.observe(section);
        });
    }

    // ─────────────────────────────────────────────────────────────────
    // SMOOTH SCROLL FOR NAV LINKS
    // ─────────────────────────────────────────────────────────────────
    function initSmoothScroll() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = $(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // ─────────────────────────────────────────────────────────────────
    // SET CURRENT YEAR
    // ─────────────────────────────────────────────────────────────────
    function setCurrentYear() {
        $('#current-year').textContent = `© ${new Date().getFullYear()}`;
    }

    // ─────────────────────────────────────────────────────────────────
    // INITIALIZE
    // ─────────────────────────────────────────────────────────────────
    function init() {
        renderHero();
        renderSkills();
        renderProjects();
        renderExperience();
        renderEducation();
        renderSocialLinks();
        setCurrentYear();
        initScrollAnimations();
        initSmoothScroll();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
