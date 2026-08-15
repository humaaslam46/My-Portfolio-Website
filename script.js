/* Huma Aslam — portfolio interactions */

/* ---------------- data ---------------- */
const SKILLS = [
  "Python", "React.js", "Scikit-learn", "FastAPI", "Figma",
  "n8n", "Node.js", "NLP / LLMs", "Pandas",
];

const CERTS = [
  ["IT Automation with Python", "Google · 2026"],
  ["AI Professional", "Google · 2026"],
  ["Data Analytics", "Google · 2026"],
  ["AI Essentials", "Google · 2025"],
  ["UX Design", "Google · 2025"],
  ["WordPress Master Class", "Alison · 2025"],
  ["Foundations of Agentic AI in GitHub", "Microsoft Learn · 2025"],
];

const SOCIALS = [
  { icon: "github", label: "GitHub", href: "https://github.com/humaaslam46" },
  { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/huma-aslam01/" },
  { icon: "mail", label: "Email", href: "mailto:humaaslam755@gmail.com" },
  { icon: "globe", label: "Website", href: "https://huma-aslam.site" },
];

const EXPERIENCE = [
  {
    cat: "ai",
    icon: "brain-circuit",
    role: "AI Engineer",
    org: "Tech About",
    period: "Jul 2026 — Present",
    current: true,
    tags: ["Python", "LLMs", "RAG", "LangChain", "GenAI"],
    points: [
      "Develop and integrate AI-powered solutions with Python, LLMs, RAG and LangChain, focused on practical, scalable applications.",
      "Build AI automation and intelligent workflows, applying modern ML techniques to real business and engineering problems.",
    ],
  },
  {
    cat: "ai",
    icon: "workflow",
    role: "Machine Learning Intern",
    org: "FlyRank AI",
    period: "Jun 2026 — Sep 2026",
    tags: ["Workflow Audit", "Prompt Systems"],
    points: [
      "Conducted a structured AI workflow audit using the Ethan Mollick framework to surface high-impact automation opportunities in real work processes.",
      "Built a custom AI project environment with tailored instructions, turning the audit findings into a reusable prompting system.",
    ],
  },
  {
    cat: "ai",
    icon: "bot",
    role: "Machine Learning Intern",
    org: "SafeX Solutions",
    period: "Jun 2026 — Aug 2026",
    tags: ["Chatbots", "CRM", "Automation"],
    points: [
      "Designed and prototyped an AI-powered customer-support chatbot with a hosted demo, conversation-flow diagram and accuracy testing log, modelled on a real service catalog and pricing tiers.",
      "Independently shipped a WhatsApp auto-reply bot end-to-end, including a CRM integration module for lead capture, de-duplication and status tagging after taking ownership of the full team deliverable.",
    ],
  },
  {
    cat: "eng",
    icon: "code-2",
    role: "Front-End Web Developer Intern",
    org: "Elevvo Pathways",
    period: "Aug 2025 — Sep 2025",
    tags: ["React.js", "Responsive UI"],
    points: [
      "Developed responsive, reusable UI components in React.js.",
      "Collaborated with a remote team on user-centred digital solutions.",
    ],
  },
  {
    cat: "eng",
    icon: "layout-dashboard",
    role: "Frontend Developer",
    org: "DevelopersHub Corporation",
    period: "Jul 2025 — Sep 2025",
    tags: ["Components", "Performance"],
    points: [
      "Built reusable web components and improved front-end performance.",
      "Restructured page architecture for stronger usability and clarity.",
    ],
  },
  {
    cat: "eng",
    icon: "rocket",
    role: "Software Developer & Co-Founder",
    org: "BetaBytez",
    period: "2024 — Present",
    current: true,
    tags: ["Product", "Full-Stack", "Leadership"],
    points: [
      "Lead product and technical direction, building the company's core software as part of running the startup.",
      "Own day-to-day engineering decisions and delivery as a hands-on developer.",
    ],
  },
  {
    cat: "brand",
    icon: "shopping-bag",
    role: "Social Media Manager",
    org: "Dermashine",
    period: "2022 — Present",
    current: true,
    tags: ["Meta Business Suite", "Shopify", "Content Strategy"],
    points: [
      "Manage end-to-end social presence through Meta Business Suite — planning and publishing content that grows engagement and brand visibility.",
      "Run Shopify store operations alongside content strategy, keeping a consistent brand voice across the online storefront.",
    ],
  },
  {
    cat: "brand",
    icon: "pen-tool",
    role: "Content Writer (Freelance)",
    org: "Upwork",
    period: "2022 — 2024",
    tags: ["Technical", "Marketing", "Long-form"],
    points: [
      "Delivered content-writing projects for international clients across technical, marketing and long-form editorial topics.",
      "Managed client communication, deadlines and revisions independently across multiple concurrent projects.",
    ],
  },
];

const EXP_FILTERS = [
  ["all", "All Roles"],
  ["ai", "AI / ML"],
  ["eng", "Engineering"],
  ["brand", "Brand & Content"],
];

const SERVICES = [
  {
    icon: "brain",
    title: "Applied AI & Machine Learning",
    desc: "Production-minded ML: classification, NLP pipelines and retrieval-augmented assistants, evaluated properly and served behind clean APIs.",
    tags: ["NLP & LLMs", "RAG chatbots", "Model evaluation", "FastAPI serving"],
  },
  {
    icon: "layers",
    title: "Full-Stack Product Engineering",
    desc: "End-to-end delivery — data model, API layer and interface — built as one coherent system rather than stitched parts.",
    tags: ["React + Node", "REST APIs", "Auth & data", "Deployment"],
  },
  {
    icon: "code-2",
    title: "Web Application Development",
    desc: "Fast, accessible, responsive interfaces engineered for real traffic: component systems, state that scales, and measurable performance.",
    tags: ["React.js", "TypeScript", "Core Web Vitals", "Responsive UI"],
  },
  {
    icon: "workflow",
    title: "AI Automation & Workflow Systems",
    desc: "Removing manual work with orchestrated automations: conditional logic, integrations and monitored executions that run unattended.",
    tags: ["n8n orchestration", "API integrations", "Gmail / Sheets", "Error handling"],
  },
  {
    icon: "pen-tool",
    title: "Product Design & UX Systems",
    desc: "Interface design that survives implementation — flows, prototypes and a design system your engineers can actually build from.",
    tags: ["Figma prototyping", "Design systems", "User flows", "Brand assets"],
  },
  {
    icon: "line-chart",
    title: "Data Analytics & Insight Reporting",
    desc: "Turning raw datasets into decisions: cleaning, exploratory analysis, visualisation and a report that says what to do next.",
    tags: ["Pandas / NumPy", "EDA", "Dashboards", "Executive summaries"],
  },
];

const PROJECTS = [
  {
    title: "AI Requirement Classifier",
    type: "AI / NLP",
    cat: "ai",
    desc: "NLP classification system that categorises software requirements (FR, NFR, US, PE) using TF-IDF vectorisation and Multinomial Naive Bayes, deployed as an interactive Streamlit app.",
    stack: ["Python", "Scikit-learn", "TF-IDF", "Streamlit"],
    href: "https://github.com/humaaslam46/AI-REQUIREMENT-CLASSIFIER",
  },
  {
    title: "ECG Heartbeat Classification",
    type: "Deep Learning",
    cat: "ai",
    featured: true,
    desc: "Convolutional deep learning model classifying ECG heartbeat signals into cardiac arrhythmia categories — medical time-series analysis applied to a real healthcare use case.",
    stack: ["Python", "Deep Learning", "NumPy", "Pandas"],
    href: "https://github.com/humaaslam46/ECG-Heartbeat-Classification-Deep-Learning",
  },
  {
    title: "Business Nexus",
    type: "Web App",
    cat: "web",
    desc: "Responsive networking platform connecting entrepreneurs, freelancers and investors — business profiles, collaboration feed and opportunity discovery. Deployed on Vercel.",
    stack: ["React.js", "JavaScript", "CSS3", "Vercel"],
    href: "https://github.com/humaaslam46/Business-Nexus",
  },
  {
    title: "WeatherSync Dashboard",
    type: "Web App",
    cat: "web",
    desc: "Real-time weather dashboard with location-based forecasts, external API integration and interactive visualisations in a fully responsive UI.",
    stack: ["HTML / CSS", "JavaScript", "Weather API", "Netlify"],
    href: "https://github.com/humaaslam46/WeatherSync-Weather-Forecast-App",
  },
  {
    title: "Taskflow",
    type: "Productivity App",
    cat: "web",
    desc: "Task management app with drag-and-drop boards, priority tagging and collaboration features, designed around efficient day-to-day workflows.",
    stack: ["JavaScript", "HTML / CSS", "Local Storage"],
    href: "https://github.com/humaaslam46/Taskflow",
  },
  {
    title: "AI Email Automation Agent",
    type: "AI Automation",
    cat: "ai",
    desc: "Automated email workflow in n8n — dynamic recipient management via Google Sheets, conditional logic, custom JavaScript, Gmail integration and execution logging.",
    stack: ["n8n", "Google Sheets", "Gmail API", "JavaScript"],
  },
];

const PLANS = [
  {
    icon: "sprout",
    name: "Starter",
    desc: "Small web presence or research task",
    price: 80,
    popular: false,
    features: [
      "Single-page responsive website",
      "Core UI/UX design in Figma",
      "Research paper or report (up to 3,000 words)",
      "APA / IEEE formatted references",
      "1 revision round",
    ],
    excluded: ["No backend / API layer", "No ML or AI models"],
  },
  {
    icon: "rocket",
    name: "Professional",
    desc: "Multi-page web app or ML project",
    price: 200,
    popular: true,
    features: [
      "Multi-page React application",
      "API integration & backend logic",
      "Custom ML model + evaluation report",
      "Complete Figma design system",
      "3 revision rounds",
      "1 week post-delivery support",
    ],
    excluded: [],
  },
  {
    icon: "layers",
    name: "Advanced",
    desc: "Full-stack product or AI automation system",
    price: 400,
    popular: false,
    features: [
      "Full-stack web application",
      "Custom ML / AI pipeline",
      "n8n workflow automation",
      "AI chatbot integration",
      "Data analysis & visualisation report",
      "Unlimited revisions",
      "2 weeks post-delivery support",
    ],
    excluded: [],
  },
];

const REVIEWS = [
  { stars: 5, initials: "FA", name: "Fatima A.", role: "Team Member — Probability & Statistics Project, LGU", text: "Huma led our statistics group project with exceptional organisation. She designed the entire survey structure, distributed tasks clearly, and kept the team on track. The quality of her data analysis was impressive." },
  { stars: 5, initials: "MK", name: "M. Kovarik", role: "Research Client — Prague University of Economics", text: "The academic writing Huma delivered for my enterprise information security course was thorough, properly cited, and structured exactly as required. She understood complex SIEM concepts and articulated them clearly." },
  { stars: 5, initials: "SR", name: "S. Raza", role: "Senior Developer — DevelopersHub Corporation", text: "Working with Huma on the React components during our internship was smooth. She writes clean, readable code and communicates blockers early. The UI she built was both functional and visually polished." },
  { stars: 5, initials: "AH", name: "A. Hassan", role: "Academic Supervisor — Software Engineering Dept., LGU", text: "Her AI Requirement Classifier showed real depth — not just applying algorithms, but understanding the problem space. The documentation and Streamlit deployment were professional-grade." },
  { stars: 4, initials: "ZN", name: "Z. Noor", role: "Freelance Client — Email Automation Project", text: "The n8n automation workflow Huma built handled edge cases I hadn't even considered. The conditional logic, loops and Gmail integration worked flawlessly from day one. Would hire again." },
  { stars: 5, initials: "IA", name: "I. Ahmed", role: "Mentor — Elevvo Pathways Internship", text: "Huma is one of those rare developers who cares equally about user experience and technical execution. Business Nexus had a level of design attention that's rare in student projects." },
];

const CONTACT_ITEMS = [
  { icon: "mail", label: "Email", value: "humaaslam755@gmail.com", href: "mailto:humaaslam755@gmail.com" },
  { icon: "message-circle", label: "WhatsApp", value: "+92 320 682 6891", href: "https://wa.me/923206826891" },
  { icon: "linkedin", label: "LinkedIn", value: "huma-aslam01", href: "https://www.linkedin.com/in/huma-aslam01/" },
  { icon: "github", label: "GitHub", value: "humaaslam46", href: "https://github.com/humaaslam46" },
];

const TERMINAL_LINES = [
  [{ t: "# huma_aslam.py", c: "text-code-com" }],
  [],
  [{ t: "class ", c: "text-code-key" }, { t: "HumaAslam", c: "text-code-fn" }, { t: ":" }],
  [{ t: "    def ", c: "text-code-key" }, { t: "__init__", c: "text-code-fn" }, { t: "(self):" }],
  [{ t: "        self.name = " }, { t: '"Huma Aslam"', c: "text-code-str" }],
  [{ t: "        self.role = " }, { t: '"AI / ML Engineer"', c: "text-code-str" }],
  [{ t: "        self.degree = " }, { t: '"BS Software Eng."', c: "text-code-str" }],
  [{ t: "        self.stack = [" }, { t: '"Python"', c: "text-code-str" }, { t: ", " }, { t: '"React"', c: "text-code-str" }, { t: ", " }, { t: '"n8n"', c: "text-code-str" }, { t: "]" }],
  [{ t: "        self.focus = [" }, { t: '"NLP"', c: "text-code-str" }, { t: ", " }, { t: '"LLMs"', c: "text-code-str" }, { t: "]" }],
  [{ t: "        self.open_to = " }, { t: "True", c: "text-code-key" }, { t: "  # roles", c: "text-code-com" }],
  [],
  [{ t: "    def ", c: "text-code-key" }, { t: "say_hi", c: "text-code-fn" }, { t: "(self):" }],
  [{ t: "        return " }, { t: '"Let\'s build ✦"', c: "text-code-str" }],
];

const ROLES = [
  "AI / ML Engineer",
  "React Developer",
  "Full-Stack Builder",
  "UI/UX Designer",
  "AI Automation Engineer",
];

/* ---------------- helpers ---------------- */
const $ = (s, r = document) => r.querySelector(s);
const el = (html) => {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};
const icon = (name, cls) => `<i data-lucide="${name}" class="${cls}"></i>`;

/* ---------------- render sections ---------------- */
function renderAbout() {
  $("#skills").innerHTML = SKILLS.map(
    (s) =>
      `<span class="rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-[11px] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary">${s}</span>`,
  ).join("");

  $("#certs").innerHTML = CERTS.map(
    ([name, meta]) => `
      <li class="group flex items-start gap-3 border-b border-border/60 pb-3 last:border-0">
        <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"></span>
        <span>
          <span class="block text-sm transition-colors group-hover:text-primary">${name}</span>
          <span class="font-mono text-[11px] text-muted-foreground">${meta}</span>
        </span>
      </li>`,
  ).join("");

  $("#socials").innerHTML = SOCIALS.map(
    (s) => `
      <a href="${s.href}" target="_blank" rel="noreferrer"
        class="group inline-flex items-center gap-2.5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background">
        ${icon(s.icon, "h-4 w-4 transition-transform duration-300 group-hover:-rotate-12")}${s.label}
      </a>`,
  ).join("");

  const photo = $("#about-photo");
  const fallback = $("#about-photo-fallback");
  const fail = () => {
    photo.classList.add("hidden");
    fallback.classList.remove("hidden");
    fallback.classList.add("flex");
  };
  photo.addEventListener("error", fail);
  if (photo.complete && photo.naturalWidth === 0) fail();
}

function renderExpFilters(active = "all") {
  $("#exp-filters").innerHTML = EXP_FILTERS.map(
    ([id, label]) => `
      <button data-exp="${id}" class="rounded-full border px-4 py-2 font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
        active === id
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
      }">${label}</button>`,
  ).join("");
}

function renderExperience(filter = "all") {
  const list = filter === "all" ? EXPERIENCE : EXPERIENCE.filter((e) => e.cat === filter);
  $("#experience-list").innerHTML = list
    .map(
      (e, i) => `
      <article class="reveal group relative md:pl-16" data-delay="${i * 70}">
        <span class="absolute top-7 left-0 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-primary shadow-[var(--shadow-soft)] transition-all duration-500 group-hover:scale-110 group-hover:border-primary md:flex">
          ${icon(e.icon, "h-4 w-4")}
        </span>
        <div class="lift grain-card relative overflow-hidden rounded-2xl p-6 md:p-7">
          <span class="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100"></span>
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 class="font-display text-xl font-medium tracking-tight md:text-2xl">${e.role}</h3>
              <p class="mt-1 flex items-center gap-2 font-mono text-sm text-primary">
                ${icon("building-2", "h-3.5 w-3.5")}${e.org}
              </p>
            </div>
            <span class="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              ${e.current ? '<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>' : ""}${e.period}
            </span>
          </div>
          <ul class="mt-5 space-y-2.5">
            ${e.points
              .map(
                (p) => `<li class="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"></span><span>${p}</span>
                </li>`,
              )
              .join("")}
          </ul>
          <div class="mt-5 flex flex-wrap gap-2">
            ${e.tags
              .map(
                (t) => `<span class="rounded-full bg-secondary px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase transition-colors duration-300 group-hover:text-foreground">${t}</span>`,
              )
              .join("")}
          </div>
        </div>
      </article>`,
    )
    .join("");
  lucide.createIcons();
  observeReveals();
}

function wireExpFilters() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-exp]");
    if (!btn) return;
    renderExpFilters(btn.dataset.exp);
    renderExperience(btn.dataset.exp);
  });
}

function renderFooter() {
  const nav1 = [["home", "Home"], ["about", "About"], ["experience", "Experience"]];
  const nav2 = [["services", "Services"], ["projects", "Projects"], ["pricing", "Pricing"], ["reviews", "Reviews"]];
  const link = ([id, label]) =>
    `<button data-goto="${id}" class="group flex items-center gap-2 text-sm text-plum-foreground/60 transition-colors duration-300 hover:text-primary">
       <span class="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4"></span>${label}
     </button>`;
  $("#footer-nav-1").innerHTML = nav1.map(link).join("");
  $("#footer-nav-2").innerHTML = nav2.map(link).join("");
  $("#footer-socials").innerHTML = SOCIALS.map(
    (s) => `<a href="${s.href}" target="_blank" rel="noreferrer" aria-label="${s.label}"
      class="flex h-10 w-10 items-center justify-center rounded-full border border-plum-foreground/20 text-plum-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary">
      ${icon(s.icon, "h-4 w-4")}</a>`,
  ).join("");
  const top = $("#to-top");
  if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function renderServices() {
  $("#services-grid").innerHTML = SERVICES.map(
    (s, i) => `
    <div class="reveal" data-delay="${i * 90}">
      <article class="group relative h-full overflow-hidden rounded-2xl border border-plum-foreground/12 bg-plum-foreground/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:bg-plum-foreground/[0.07]">
        <div class="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"></div>
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
          ${icon(s.icon, "h-5 w-5")}
        </div>
        <h3 class="mt-6 text-xl text-plum-foreground">${s.title}</h3>
        <p class="mt-3 text-sm leading-relaxed text-plum-foreground/65">${s.desc}</p>
        <ul class="mt-6 space-y-2">
          ${s.tags
            .map(
              (t) =>
                `<li class="flex items-center gap-2.5 font-mono text-[11px] text-plum-foreground/55"><span class="h-px w-4 bg-primary/70"></span>${t}</li>`,
            )
            .join("")}
        </ul>
        ${icon("arrow-up-right", "mt-7 h-5 w-5 text-primary opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100")}
      </article>
    </div>`,
  ).join("");
}

function renderProjects(filter = "all") {
  const list = PROJECTS.filter((p) => filter === "all" || p.cat === filter);
  $("#projects-grid").innerHTML = list
    .map((p, i) => {
      const tag = p.href ? "a" : "div";
      const attrs = p.href ? `href="${p.href}" target="_blank" rel="noreferrer"` : "";
      return `
      <div class="reveal" data-delay="${i * 80}">
        <${tag} ${attrs} class="lift group grain-card relative flex h-full flex-col overflow-hidden rounded-2xl p-7">
          <div class="flex items-center justify-between">
            <span class="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">${p.type}</span>
            ${p.featured ? `<span class="rounded-full bg-foreground px-3 py-1 font-mono text-[10px] text-background">Featured</span>` : ""}
          </div>
          <h3 class="mt-5 text-xl transition-colors duration-300 group-hover:text-primary">${p.title}</h3>
          <p class="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">${p.desc}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            ${p.stack
              .map(
                (s) =>
                  `<span class="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] text-secondary-foreground">${s}</span>`,
              )
              .join("")}
          </div>
          <div class="mt-6 flex items-center gap-2 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
            ${
              p.href
                ? `${icon("github", "h-3.5 w-3.5")} View on GitHub ${icon("arrow-up-right", "ml-auto h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1")}`
                : `${icon("lock", "h-3.5 w-3.5")} Private project`
            }
          </div>
        </${tag}>
      </div>`;
    })
    .join("");
  lucide.createIcons();
  observeReveals();
}

function renderPricing() {
  $("#pricing-grid").innerHTML = PLANS.map(
    (p, i) => `
    <div class="reveal" data-delay="${i * 100}">
      <div class="group relative h-full rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
        p.popular
          ? "border-primary bg-plum-foreground/[0.08] shadow-[var(--shadow-lift)] lg:-translate-y-3"
          : "border-plum-foreground/12 bg-plum-foreground/[0.03] hover:border-primary/50"
      }">
        ${
          p.popular
            ? `<span class="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1 font-mono text-[10px] tracking-widest text-primary-foreground uppercase">Most Popular</span>`
            : ""
        }
        <div class="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
          ${icon(p.icon, "h-5 w-5")}
        </div>
        <h3 class="mt-5 text-2xl text-plum-foreground">${p.name}</h3>
        <p class="mt-1 text-sm text-plum-foreground/60">${p.desc}</p>
        <div class="mt-7 flex items-end gap-1 text-plum-foreground">
          <span class="font-display text-xl text-primary">$</span>
          <span class="font-display text-5xl leading-none">${p.price}</span>
          <span class="mb-1 font-mono text-xs text-plum-foreground/50">/ project</span>
        </div>
        <ul class="mt-8 space-y-3">
          ${p.features
            .map(
              (f) =>
                `<li class="flex gap-3 text-sm text-plum-foreground/80">${icon("check", "mt-0.5 h-4 w-4 shrink-0 text-primary")}${f}</li>`,
            )
            .join("")}
          ${p.excluded
            .map(
              (f) =>
                `<li class="flex gap-3 text-sm text-plum-foreground/35">${icon("x", "mt-0.5 h-4 w-4 shrink-0")}${f}</li>`,
            )
            .join("")}
        </ul>
        <button data-goto="contact" class="mt-9 w-full rounded-full py-3 text-sm transition-all duration-300 ${
          p.popular
            ? "bg-primary text-primary-foreground hover:brightness-110"
            : "border border-plum-foreground/30 text-plum-foreground hover:border-primary hover:text-primary"
        }">Get Started</button>
      </div>
    </div>`,
  ).join("");
}

function renderReviews() {
  $("#reviews-grid").innerHTML = REVIEWS.map(
    (r, i) => `
    <div class="reveal" data-delay="${i * 80}">
      <figure class="lift group grain-card relative h-full rounded-2xl p-7">
        ${icon("quote", "absolute top-6 right-6 h-8 w-8 text-primary/15 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/30")}
        <div class="flex gap-1">
          ${Array.from({ length: 5 })
            .map((_, s) =>
              icon("star", `h-3.5 w-3.5 ${s < r.stars ? "fill-primary text-primary" : "text-border"}`),
            )
            .join("")}
        </div>
        <blockquote class="mt-5 text-sm leading-relaxed text-muted-foreground">&ldquo;${r.text}&rdquo;</blockquote>
        <figcaption class="mt-7 flex items-center gap-3 border-t border-border pt-5">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-plum font-mono text-xs text-plum-foreground">${r.initials}</span>
          <span>
            <span class="block text-sm font-medium">${r.name}</span>
            <span class="block font-mono text-[11px] text-muted-foreground">${r.role}</span>
          </span>
        </figcaption>
      </figure>
    </div>`,
  ).join("");
}

function renderContactItems() {
  $("#contact-items").innerHTML = CONTACT_ITEMS.map(
    (c) => `
    <a href="${c.href}" target="_blank" rel="noreferrer" class="lift grain-card group flex items-center gap-4 rounded-xl p-5">
      <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        ${icon(c.icon, "h-4 w-4")}
      </span>
      <span>
        <span class="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">${c.label}</span>
        <span class="block text-sm">${c.value}</span>
      </span>
    </a>`,
  ).join("");
}

/* ---------------- behaviours ---------------- */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - 70,
    behavior: "smooth",
  });
}

function wireNav() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-goto]");
    if (!btn) return;
    $("#mobile-menu").classList.add("hidden");
    scrollToSection(btn.dataset.goto);
  });

  const menuBtn = $("#menu-btn");
  menuBtn.addEventListener("click", () => {
    const m = $("#mobile-menu");
    m.classList.toggle("hidden");
    menuBtn.innerHTML = m.classList.contains("hidden")
      ? '<i data-lucide="menu" class="h-5 w-5"></i>'
      : '<i data-lucide="x" class="h-5 w-5"></i>';
    lucide.createIcons();
  });

  const header = $("#header");
  const ids = ["about", "experience", "services", "projects", "pricing", "reviews", "contact"];
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("border-border", "bg-background/85", "backdrop-blur-xl");
      header.classList.remove("border-transparent");
    } else {
      header.classList.remove("border-border", "bg-background/85", "backdrop-blur-xl");
      header.classList.add("border-transparent");
    }
    let cur = "home";
    ids.forEach((id) => {
      const s = document.getElementById(id);
      if (s && window.scrollY >= s.offsetTop - 140) cur = id;
    });
    document.querySelectorAll(".nav-link").forEach((l) => {
      const on = l.dataset.goto === cur;
      l.classList.toggle("text-primary", on);
      l.classList.toggle("text-foreground/80", !on);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((n) => {
    n.style.transitionDelay = `${n.dataset.delay || 0}ms`;
    revealObserver.observe(n);
  });
}

function typewriter() {
  const node = $("#typed");
  let idx = 0;
  let text = "";
  let deleting = false;
  const tick = () => {
    const word = ROLES[idx];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    let delay = done ? 1600 : cleared ? 200 : deleting ? 40 : 75;
    if (done) deleting = true;
    else if (cleared) {
      deleting = false;
      idx = (idx + 1) % ROLES.length;
    } else {
      text = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      node.textContent = text;
    }
    setTimeout(tick, delay);
  };
  tick();
}

function typeTerminal() {
  const pre = $("#terminal");
  let i = 0;
  const step = () => {
    if (i >= TERMINAL_LINES.length) return;
    const line = TERMINAL_LINES[i];
    const div = document.createElement("div");
    div.style.animation = "ha-fade-up 0.35s both";
    div.innerHTML =
      line.length === 0
        ? "&nbsp;"
        : line.map((tok) => `<span class="${tok.c || ""}">${escapeHtml(tok.t)}</span>`).join("");
    pre.querySelectorAll(".caret").forEach((c) => c.remove());
    if (i < TERMINAL_LINES.length - 1) {
      const caret = document.createElement("span");
      caret.className = "caret ml-0.5 h-3 align-middle";
      div.appendChild(caret);
    }
    pre.appendChild(div);
    i += 1;
    setTimeout(step, 120);
  };
  setTimeout(step, 500);
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function wireForm() {
  const form = $("#contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const btn = $("#send-btn");
    btn.disabled = true;
    $("#send-label").textContent = "Sending…";
    const subject = encodeURIComponent(data.get("subject") || "Project enquiry");
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:humaaslam755@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      btn.disabled = false;
      $("#send-label").textContent = "Send Message";
      toast("Opening your mail client…");
      form.reset();
    }, 700);
  });
}

function toast(msg) {
  const t = el(`<div class="ha-toast">${msg}</div>`);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

function wireFilters() {
  document.querySelectorAll(".filter-btn").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((o) => {
        o.className =
          "filter-btn rounded-full border border-border px-5 py-2 font-mono text-xs tracking-wide text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground";
      });
      b.className =
        "filter-btn rounded-full bg-foreground px-5 py-2 font-mono text-xs tracking-wide text-background transition-all duration-300";
      renderProjects(b.dataset.filter);
    });
  });
}

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  renderAbout();
  renderExpFilters("all");
  renderExperience("all");
  renderFooter();
  renderServices();
  renderProjects("all");
  renderPricing();
  renderReviews();
  renderContactItems();

  lucide.createIcons();
  wireNav();
  wireFilters();
  wireExpFilters();
  wireForm();
  observeReveals();

  // preloader → site
  setTimeout(() => {
    const p = $("#preloader");
    p.classList.add("pointer-events-none", "-translate-y-4", "opacity-0");
  }, 3000);
  setTimeout(() => {
    $("#preloader").remove();
    const site = $("#site");
    site.classList.remove("opacity-0");
    site.classList.add("opacity-100");
    typewriter();
    typeTerminal();
    observeReveals();
  }, 3700);
});
