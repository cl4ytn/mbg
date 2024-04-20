// Check device width
if (window.innerWidth < 768) {
  const nav = document.querySelector(".navbar");
// Feel free to change to a class later on
  const hamburger = document.getElementById("hamburger-nav");
  nav.remove();
  hamburger.prepend(nav);
}

function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}

window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".header");
  if (window.scrollY > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});
