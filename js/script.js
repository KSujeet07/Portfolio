// ─── Theme Toggle
const body = document.body;
const themeBtn = document.getElementById('themeToggle');
let isDark = true;
themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  body.classList.toggle('light-mode', !isDark);
  themeBtn.textContent = isDark ? '🌙' : '☀️';
});

// ─── Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMobile() { mobileMenu.classList.remove('open'); }

// ─── Experience tabs
function switchTab(idx) {
  document.querySelectorAll('.exp-tab').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.exp-panel').forEach((p, i) => {
    p.classList.toggle('active', i === idx);
  });
}

// ─── Project filter
function filterProj(cat, btn) {
  document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? 'flex' : 'none';
    card.style.opacity = show ? '1' : '0';
  });
}

// ─── Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── Cursor glow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ─── Form
function handleForm(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => { msg.style.display = 'none'; }, 4000);
}

// ─── Nav scroll style
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'var(--border)';
  }
});
