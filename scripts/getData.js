let portfolioList = document.getElementById('portfolio__list');

const URL = "https://api.github.com/users/wasiuralukasz"

getData();


//Get list of public repositories from GitHub
async function getData() {
    const response = await fetch(`${URL}/repos`);
    const jsonData = await response.json();
    console.log(jsonData);
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
                        <img src="/images/Github - logo-black.svg" alt="" />
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
                        <img src="/images/Github - logo-black.svg" alt="" />
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
              </div>
            </li>
        `
        }
        counter = counter + 1;
    })
}