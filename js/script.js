// Explanation: We can't get the header tag from homepage.html because it's in another file now.
// 1. Fetch the header.html file before the DOM is loaded.
// 2. Because we want to add the header.html content to the beginning of the body
function loadHeader(event) {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.innerHTML = data + document.body.innerHTML;
    });

  // Remove the event listener after it's triggered once
  window.removeEventListener("DOMContentLoaded", loadHeader);
}
function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}


window.addEventListener("DOMContentLoaded", loadHeader);
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".header");
  if (window.scrollY > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});