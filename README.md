<div align="center">

# Huma Aslam — Portfolio Website

**[huma-aslam.site](https://huma-aslam.site)** · Software Engineer · AI/ML Engineer · Lahore, Pakistan

[![Live](https://img.shields.io/badge/Live-huma--aslam.site-6a1c45?style=flat)](https://huma-aslam.site)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

---

## Overview

A personal portfolio website presenting my work as a Software Engineer and AI/ML Engineer. The site is designed as a single-page experience with a warm, professional color palette, smooth transitions, scroll-driven animations, and an interactive code-style hero section. It is built as a static site using only HTML, CSS, and JavaScript — no frameworks or build tools required — making it fast, portable, and easy to deploy anywhere.

---

## Features

- **Minimal Preloader** — A small, self-drawing line-art loader displayed briefly before the portfolio loads.
- **Liquid Glass Navigation** — A floating, blurred navigation bar with a subtle border and active-section pill highlighting.
- **Animated Hero Section** — A typewriter headline cycling through roles, paired with an auto-drawing terminal-style code card on the right.
- **About Section** — A short biography, social links, and a certifications box listing completed credentials from Google, Microsoft, Alison, and others.
- **Experience Section** — A timeline of professional roles, internships, and freelance work, with role-specific icons and reveal-on-scroll animations.
- **Services Section** — Styled cards covering AI solutions, software development, full-stack development, web development, UI/UX design, content writing, automation, and data analytics.
- **Featured Projects** — A curated selection of projects with filterable categories and direct links to GitHub repositories.
- **Pricing Plans** — Three clearly differentiated service tiers (Starter, Professional, Advanced) with a highlighted featured plan.
- **Testimonials** — Reviews from collaborators, teammates, and clients presented in an animated card grid.
- **Contact Section** — A contact form with validation and success feedback, plus direct email, LinkedIn, GitHub, and WhatsApp links.
- **Scroll Animations** — Section and card entrance animations powered by the Intersection Observer API.
- **Custom Cursor** — A subtle, palette-matched cursor effect for desktop users.
- **Responsive Design** — A mobile-friendly layout with an adaptive navigation drawer and fluid grids.
- **Back to Top** — A floating button that appears once the user scrolls past the hero section.

---

## Tech Stack

This portfolio is built without frameworks, build tools, or external dependencies. It is written by hand and runs directly in the browser.

| Layer | Technology |
|-------|------------|
| **Structure** | HTML5 (semantic, single-page) |
| **Styling** | CSS3 · Tailwind CSS utilities (compiled into a single stylesheet) |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **Animations** | CSS transitions · CSS keyframes · Canvas API · Intersection Observer API |
| **Fonts** | Bricolage Grotesque · Sora · Plus Jakarta Sans · JetBrains Mono · Google Fonts |
| **Icons** | Font Awesome 6 · Lucide |
| **Contact Form** | EmailJS |
| **Hosting** | Vercel with custom domain — [huma-aslam.site](https://huma-aslam.site) |

---

## File Structure

```
portfolio/
│
├── index.html              # Single-page markup with all sections
├── styles.css              # Compiled Tailwind CSS and custom component styles
├── script.js               # Vanilla JS — preloader, animations, navbar, form, cursor
├── favicon.png             # Site favicon (HA monogram in the brand palette)
│
├── images/
│   └── Huma Aslam.jpg      # Profile photograph used in the About section
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Design System

The visual identity is built around a warm, sophisticated palette designed to feel professional and approachable.

| Role | Color | Hex |
|------|-------|-----|
| **Background** | Warm Cream | `#FDF9F3` |
| **Primary Text** | Deep Charcoal | `#1A1A1A` |
| **Primary Accent** | Deep Plum | `#6a1c45` |
| **Secondary Accent** | Gold | `#c8a055` |
| **Card / Surface** | Soft White | `#FFFFFF` |
| **Muted Text** | Warm Gray | `#6B6B6B` |

Typography is set in **Bricolage Grotesque** for large headings, **Sora** for section titles, **Plus Jakarta Sans** for body text, and **JetBrains Mono** for code and terminal-style elements.

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Animated headline, role typewriter, interactive Python-style terminal card, and call-to-action buttons |
| 2 | **About** | Profile photo, biography, social links, and a certifications box |
| 3 | **Experience** | Professional timeline with roles, dates, and descriptions |
| 4 | **Services** | Hover-animated cards describing offered services |
| 5 | **Projects** | Filterable project grid with GitHub links |
| 6 | **Pricing** | Three service tiers with clear deliverables and pricing |
| 7 | **Testimonials** | Client and collaborator reviews |
| 8 | **Contact** | EmailJS form and direct contact links |
| 9 | **Footer** | Social links, quick navigation, and availability status |

---

## Featured Projects

| Project | Category | Technologies | Repository |
|---------|----------|--------------|------------|
| AI Requirement Classifier | AI / NLP | Python · Scikit-learn · TF-IDF · Streamlit | [GitHub](https://github.com/humaaslam46/AI-REQUIREMENT-CLASSIFIER) |
| Business Nexus | Web Application | React.js · JavaScript · CSS3 · Vercel | [GitHub](https://github.com/humaaslam46/Business-Nexus) |
| WeatherSync Dashboard | Web Application | HTML/CSS · JavaScript · Weather API · Netlify | [GitHub](https://github.com/humaaslam46/WeatherSync-Weather-Forecast-App) |
| Taskflow | Productivity Tool | JavaScript · HTML/CSS · Local Storage | [GitHub](https://github.com/humaaslam46/Taskflow) |
| ECG Heartbeat Classification | Deep Learning | Python · CNN · NumPy · Pandas | [GitHub](https://github.com/humaaslam46/ECG-Heartbeat-Classification-Deep-Learning) |
| AI Email Automation Agent | AI Automation | n8n · Google Sheets · Gmail API | Private |

---

## Run Locally

No installation, build tools, or dependencies are required.

```bash
# Clone the repository
git clone https://github.com/humaaslam46/huma-aslam-portfolio.git
cd huma-aslam-portfolio

# Open the file directly in your browser
open index.html          # macOS
start index.html         # Windows

# Or serve with a local static server (recommended for EmailJS)
npx serve .
# Then visit http://localhost:3000
```

> **Note:** To enable the contact form, replace the EmailJS service ID, template ID, and public key in `index.html` with your own credentials from [EmailJS](https://www.emailjs.com).

---

## Deployment

The site is deployed to [huma-aslam.site](https://huma-aslam.site) using Vercel. To deploy your own copy:

1. Push all files to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com).
3. Set the **Framework Preset** to **Other**.
4. Leave the **Build Command** empty and set the **Output Directory** to `./`.
5. Configure your custom domain in the Vercel project settings.

---

## Contact

| Platform | Link |
|----------|------|
| Email | [humaaslam755@gmail.com](mailto:humaaslam755@gmail.com) |
| LinkedIn | [linkedin.com/in/huma-aslam01](https://www.linkedin.com/in/huma-aslam01/) |
| GitHub | [github.com/humaaslam46](https://github.com/humaaslam46) |
| Website | [huma-aslam.site](https://huma-aslam.site) |

---

## License

This project is licensed under the [MIT License](LICENSE).

You are welcome to use it as a reference or source of inspiration. If you reuse substantial portions of the design or code, please credit the original author.

---

<div align="center">
  Built by <strong>Huma Aslam</strong> · Lahore, Pakistan
</div>
