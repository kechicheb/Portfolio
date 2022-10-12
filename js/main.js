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

window.addEventListener("load", () => {
  if (localStorage.getItem("darkMode") == "true") {
    document.body.classList.add("active");
    themeToggler.classList.add("fa-sun");
  }
});
window.addEventListener("load", () => {
  document.querySelector("#preloader").remove();
});
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

//  Validate Form
const [nname, email, subject, message] = document.forms[0];

document.forms[0].onsubmit = () => {
  if (nname.value == "") {
    nname.nextElementSibling.style.display = "block";
    nname.style.border = "1px solid #dc3545";
    return false;
  } else {
    nname.nextElementSibling.style.display = "none";
    nname.style.border = "1px solid transparent";
  }
  if (
    !email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ||
    email.value == ""
  ) {
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid #dc3545";
    return false;
  } else {
    email.nextElementSibling.style.display = "none";
    email.style.border = "1px solid transparent";
  }
  if (subject.value == "") {
    subject.nextElementSibling.style.display = "block";
    subject.style.border = "1px solid #dc3545";
    return false;
  } else {
    subject.nextElementSibling.style.display = "none";
    subject.style.border = "1px solid transparent";
  }
  if (message.value == "") {
    message.nextElementSibling.style.display = "block";
    message.style.border = "1px solid #dc3545";
    return false;
  } else {
    message.nextElementSibling.style.display = "none";
    message.style.border = "1px solid transparent";
  }
  sendEmail(email.value, subject.value, message.value);
};

// Contect
function sendEmail(email, subject, body) {
  Email.send({
    SecureToken: "f275176c-3134-40ca-b734-19ded32127c4",
    To: "kechicheb.dz@gmail.com",
    From: `${email}`,
    Subject: `${subject}`,
    Body: `${body}`,
  }).then((message) => "alert(message)");
}

let seeMore = document.querySelector("#seeMore");
let moreBoxs = document.querySelector(".projects .box-container:last-child");
seeMore.onclick = () => {
  seeMore.parentElement.remove();
  moreBoxs.style.display = "grid";
};
