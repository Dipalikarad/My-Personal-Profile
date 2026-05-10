
// ── SKILLS DATA ──
const skills = [
  { name: 'HTML', icon: 'fab fa-html5', level: 90, label: 'Advanced' },
  { name: 'CSS', icon: 'fab fa-css3-alt', level: 85, label: 'Advanced' },
  { name: 'JavaScript', icon: 'fab fa-js-square', level: 78, label: 'Intermediate' },
  { name: 'React.js', icon: 'fab fa-react', level: 50, label: 'Intermediate' },
  { name: 'Node.js', icon: 'fab fa-node-js', level: 65, label: 'Intermediate' },
  { name: 'Java', icon: 'fab fa-java', level: 60, label: 'Intermediate' },
  { name: 'Python', icon: 'fab fa-python', level: 50, label: 'Intermediate' },
  { name: 'MongoDB', icon: 'fas fa-database', level: 70, label: 'Intermediate' },
  { name: 'Git & GitHub', icon: 'fab fa-git-alt', level: 80, label: 'Advanced' },
  { name: 'Problem Solving', icon: 'fas fa-brain', level: 80, label: 'Intermediate' },
];

const grid = document.getElementById('skillsGrid');
skills.forEach(s => {
  grid.innerHTML += `
    <div class="skill-card reveal">
      <div class="skill-icon"><i class="${s.icon}"></i></div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar-wrap"><div class="skill-bar" data-width="${s.level}"></div></div>
      <div class="skill-level">${s.label} · ${s.level}%</div>
    </div>`;
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      const bar = e.target.querySelector('.skill-bar');
      if (bar) {
        setTimeout(() => bar.style.width = bar.dataset.width + '%', 200);
      }
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
});

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ── FORM SUBMIT ──
function submitForm() {
  const fname = document.getElementById('fname').value;
  const femail = document.getElementById('femail').value;
  const fmessage = document.getElementById('fmessage').value;
  if (!fname || !femail || !fmessage) {
    alert('Please fill in Name, Email, and Message.'); return;
  }
  document.getElementById('formSuccess').style.display = 'flex';
  ['fname','lname','femail','fsubject','fmessage'].forEach(id => document.getElementById(id).value = '');
  setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 5000);
}
