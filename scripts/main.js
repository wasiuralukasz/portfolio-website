let navbar = window.document.querySelector(".navbar");

//navbar
addEventListener('scroll', () => {
    if(window.scrollY > 20)
        navbar.classList.add("navbar__scroll");
    else
        navbar.classList.remove("navbar__scroll");
})

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