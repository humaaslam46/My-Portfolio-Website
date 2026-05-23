/* ============================================================
   HUMA ASLAM PORTFOLIO — script.js  FINAL
   ============================================================ */

// ── DOM refs ──────────────────────────────────────────────────
const navbar        = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const contactForm   = document.getElementById('contact-form');
const submitBtn     = document.getElementById('submit-btn');
const formStatus    = document.getElementById('form-status');

// ── Section transition overlay (inject once) ──────────────────
const overlay = document.createElement('div');
overlay.className = 'ha-page-overlay';
document.body.appendChild(overlay);

function flashTransition(cb) {
  overlay.classList.add('flash');
  setTimeout(() => {
    cb();
    setTimeout(() => overlay.classList.remove('flash'), 300);
  }, 150);
}

// ── Smooth scroll with subtle transition flash ────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  closeMobileMenu();
  const cur = getCurrentSection();
  if (cur !== id) {
    flashTransition(() => {
      const y = el.getBoundingClientRect().top + window.scrollY - 66;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY - 66;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// ── Navbar: scroll shadow + active link ──────────────────────
const sections = ['home','about','services','projects','pricing','reviews','contact'];

function getCurrentSection() {
  let cur = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) cur = id;
  });
  return cur;
}
function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  const cur = getCurrentSection();
  document.querySelectorAll('.ha-nav-btn').forEach(btn => {
    const t = btn.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
    btn.classList.toggle('active', t === cur);
  });
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ── Mobile menu ───────────────────────────────────────────────
function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add('hidden');
  const icon = mobileMenuBtn?.querySelector('i');
  if (icon) icon.className = 'fas fa-bars';
}
mobileMenuBtn?.addEventListener('click', () => {
  const hidden = mobileMenu.classList.toggle('hidden');
  const icon = mobileMenuBtn.querySelector('i');
  if (icon) icon.className = hidden ? 'fas fa-bars' : 'fas fa-times';
});
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) closeMobileMenu();
});

// ── Scroll animations ─────────────────────────────────────────
const scrollObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); scrollObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -44px 0px' });
document.querySelectorAll('.animate-on-scroll').forEach(el => scrollObs.observe(el));

const cardObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), parseInt(e.target.dataset.delay || 0));
      cardObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.ha-service-card,.ha-project-card,.ha-review-card,.ha-price-card').forEach(el => {
  el.classList.add('animate-on-scroll');
  cardObs.observe(el);
});

// ── Hero load animations ──────────────────────────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.animate-on-load').forEach((el, i) => {
    el.style.transitionDelay = `${i * 160}ms`;
    setTimeout(() => el.classList.add('loaded'), 60);
  });
});

// ── Typewriter ────────────────────────────────────────────────
const roles = ['AI / ML Engineer','React Developer','UI/UX Designer','Technical Writer','AI Automation Builder'];
let rIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');
function type() {
  if (!tw) return;
  const word = roles[rIdx];
  tw.textContent = deleting ? word.substring(0, cIdx--) : word.substring(0, cIdx++);
  if (!deleting && cIdx === word.length + 1) { deleting = true; setTimeout(type, 1600); return; }
  if (deleting && cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
  setTimeout(type, deleting ? 50 : 90);
}
type();

// ── Custom cursor ─────────────────────────────────────────────
const dot     = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');
if (dot && outline) {
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
    setTimeout(() => { outline.style.left = e.clientX + 'px'; outline.style.top = e.clientY + 'px'; }, 75);
  });
  document.querySelectorAll('a,button,.ha-project-card,.ha-service-card,.ha-price-card').forEach(el => {
    el.addEventListener('mouseenter', () => outline.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => outline.classList.remove('cursor-hover'));
  });
}

// ── Project filter ────────────────────────────────────────────
document.querySelectorAll('.ha-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ha-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    let n = 0;
    document.querySelectorAll('.ha-project-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.style.display = '';
        card.style.opacity = '0'; card.style.transform = 'translateY(18px)';
        setTimeout(() => {
          card.style.transition = 'opacity .38s ease, transform .38s ease';
          card.style.opacity = '1'; card.style.transform = 'translateY(0)';
        }, n++ * 65);
      } else { card.style.display = 'none'; }
    });
  });
});

// ── Back to top ───────────────────────────────────────────────
const backTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backTop?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ── Contact form ──────────────────────────────────────────────
contactForm?.addEventListener('submit', async e => {
  e.preventDefault();
  const fd   = new FormData(contactForm);
  const name = (fd.get('from_name') || '').trim();
  const mail = (fd.get('from_email') || '').trim();
  const msg  = (fd.get('message') || '').trim();
  if (!name || !mail || !msg) { showStatus('Please fill all required fields.', 'error'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { showStatus('Please enter a valid email.', 'error'); return; }
  const orig = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending…</span><i class="fas fa-spinner fa-spin"></i>';
  hideStatus();
  try {
    await emailjs.sendForm('service_ishcxqo','template_k9nyo11', contactForm, 'QE3liNQKctjfoqDa2');
    showStatus("✓ Sent! I'll get back to you soon.", 'success');
    contactForm.reset();
  } catch { showStatus('Something went wrong. Please try again.', 'error'); }
  finally { submitBtn.disabled = false; submitBtn.innerHTML = orig; setTimeout(hideStatus, 6000); }
});
function showStatus(msg, type) {
  if (!formStatus) return;
  formStatus.textContent = msg;
  formStatus.className = 'ha-form-status ' + type;
  formStatus.classList.remove('hidden');
}
function hideStatus() { if (!formStatus) return; formStatus.classList.add('hidden'); }

/* ============================================================
   HERO PARTICLES — FULL SECTION COVERAGE (your working code)
   ============================================================ */
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  function initCanvas() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    pts = [];
    for (let i = 0; i < 130; i++) {
      pts.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 0.4,
        vy:   (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.4,
        // palette-matched: #4A7FA7 / #B3CFE5
        alpha: Math.random() * 0.5 + 0.15,
        col:  Math.random() > 0.5
                ? `rgba(179,207,229,`   // --sky  #B3CFE5
                : `rgba(74,127,167,`,   // --blue #4A7FA7
      });
    }
  }

  // Mouse repulsion
  let mx = -999, my = -999;
  const heroEl = document.getElementById('home');
  heroEl?.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
  }, { passive: true });
  heroEl?.addEventListener('mouseleave', () => { mx = -999; my = -999; });

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);

    // Connection lines
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(74,127,167,${(1 - d / 90) * 0.12})`;
          ctx.lineWidth   = 0.5;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }

    // Dots
    pts.forEach(p => {
      // mouse repel
      const dx = p.x - mx, dy = p.y - my;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < 90 && d > 0) {
        const f = (90 - d) / 90;
        p.x += (dx / d) * f * 1.8;
        p.y += (dy / d) * f * 1.8;
      }

      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.col + p.alpha + ')';
      ctx.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener('resize', initCanvas, { passive: true });
  initCanvas();
  drawParticles();
}
// Example adjustment for your canvas script
ctx.strokeStyle = '#4338CA'; // Change particle color to Indigo so it shows on white
ctx.fillStyle = '#4338CA';