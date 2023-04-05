let navbar = window.document.querySelector(".navbar");

//navbar
addEventListener("scroll", () => {
  if (window.scrollY > 20) navbar.classList.add("navbar__scroll");
  else navbar.classList.remove("navbar__scroll");
});

//one scroll = 100vh
// let currentScroll;
// let windowHeight = window.innerHeight;

// addEventListener('wheel', (e) => {
//     currentScroll = document.documentElement.scrollTop;
//     console.log(e);
//     if(e.wheelDelta < 0)
//         window.scrollTo(0, currentScroll + windowHeight);
//     else
//         window.scrollTo(0, currentScroll - windowHeight);
// });

let projectItems = document.querySelectorAll(".portfolio__grid-item");
let projectButton = document.querySelector("portfolio__button");
let delay = 0;

// projectItems.forEach((item) => {
//   item.style.transition = `all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) ${delay}s`;
//   delay += 0.1;
// });

window.addEventListener("scroll", () => {
  let trigger = (window.innerHeight / 5) * 4;

  projectItems.forEach((item) => {
    let topDistance = item.getBoundingClientRect().top;

    // if (trigger > topDistance) item.classList.add("show");
  });
});

//hamburger button
let hamburger = document.querySelector(".hamburger");
let navbarList = document.querySelector(".navbar__list");
let navbarLinks = document.querySelectorAll(".navbar__link")

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  navbarList.classList.toggle('navbar__list-open')
});

navbarLinks.forEach((link) => {
    link.addEventListener('click', () => {
    hamburger.classList.remove('hamburger--active');
    navbarList.classList.remove('navbar__list-open')
  });
})



