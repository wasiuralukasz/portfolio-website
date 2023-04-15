//Download data from GitHub and create new portfolio item
let portfolioList = document.getElementById('portfolio__list');
const URL = "https://api.github.com/users/wasiuralukasz"

getData();

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

//Get list of public repositories from GitHub
async function getData() {
  const response = await fetch(`${URL}/repos`);
  const jsonData = await response.json();
  let counter = 0;
  
  //Create project list in portfolio section 
  jsonData.map((element) => {

      if (counter > 2) {
          portfolioList.innerHTML +=
              `
          <li class="portfolio__grid-item hidden">
            <div class="project__container">
                <span class="project__header">
                <h2 class="project__tittle">${element.name}</h2>
                  <div>
                  <a class="project__link" href="${element.html_url}">
                      <img src="/images/Github-logo.svg" alt="" />
                    </a>
                    <a class="project__link" href="">
                      <img src="/images/external-link.svg" alt="" />
                    </a>
                  </div>
                </span>
                <p class="project__description">
                  ${element.description}
                </p>
                <ul class="project__tech-list">
                  <li>${element.language}</li>
                </ul>
                <div class="shine" data-target="project__shine"></div>
            </div>
          </li>
      `
      }
      else {
          portfolioList.innerHTML +=
              `
          <li class="portfolio__grid-item">
            <div class="project__container">
                <span class="project__header">
                <h2 class="project__tittle">${element.name}</h2>
                  <div>
                  <a class="project__link" href="${element.html_url}">
                      <img src="/images/Github-logo.svg" alt="" />
                    </a>
                    <a class="project__link" href="">
                      <img src="/images/external-link.svg" alt="" />
                    </a>
                  </div>
                </span>
                <p class="project__description">
                  ${element.description}
                </p>
                <ul class="project__tech-list">
                  <li>${element.language}</li>
                </ul>
                <div class="shine" data-target="project__shine"></div>
            </div>
          </li>
      `
      }
      counter = counter + 1;
      
  })

  let projectItems = document.querySelectorAll('.portfolio__grid-item');

  projectItems.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      item.children[0].childNodes[7].style.setProperty('opacity', '1');
      item.children[0].childNodes[7].style.setProperty('transform', `translate(${e.layerX}px, ${e.layerY}px)`)
    });

    item.addEventListener('mouseleave', (e) => {
      item.children[0].childNodes[7].style.setProperty('opacity', '0');
    });
  })
}