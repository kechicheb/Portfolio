let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
    localStorage.setItem("darkMode", true);
  } else {
    document.body.classList.remove("active");
    localStorage.setItem("darkMode", false);
  }
};
window.onload = () => {
  if (localStorage.getItem("darkMode") == "true") {
    document.body.classList.add("active");
    themeToggler.classList.add("fa-sun");
  }
};
// animation

const skills = document.querySelector("#skills");
const progress = document.querySelectorAll(".skills .progress .bar span");
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (
    scrollY >= skills.offsetTop - 200 &&
    scrollY < skills.offsetHeight + skills.offsetTop
  ) {
    progress.forEach((e) => {
      e.style.width = `${e.dataset.width}`;
    });
  }
});

const typed = document.querySelector(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}
