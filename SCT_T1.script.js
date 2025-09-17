// Change navbar color on scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 60) {
    nav.style.background = "#1e2a3c";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.6)";
  }
});
