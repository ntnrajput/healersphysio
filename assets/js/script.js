// Scroll animation using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const observers = document.querySelectorAll('.fade-in-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observers.forEach(el => observer.observe(el));
});
