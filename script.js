
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));
const hamburguer = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});