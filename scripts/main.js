let navbar = window.document.querySelector(".navbar");

addEventListener('scroll', () => {
    if(window.scrollY > 20)
        navbar.classList.add("navbar__scroll");
    else
        navbar.classList.remove("navbar__scroll");
})
