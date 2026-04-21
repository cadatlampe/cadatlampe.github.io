const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const timelineList = document.getElementById('timeline-list');
const timelineButton = document.getElementById('expand-timeline');

if (timelineList && timelineButton) {
  timelineList.classList.add('compact');

  timelineButton.addEventListener('click', () => {
    const compact = timelineList.classList.toggle('compact');
    const expanded = !compact;
    timelineButton.setAttribute('aria-expanded', String(expanded));
    timelineButton.textContent = compact ? 'Toon alles' : 'Toon minder';
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
