// Smooth scroll for navigation links
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");
const links = document.querySelectorAll("nav ul li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// ✅ links par click hone par menu close ho jaye
links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  });
});

