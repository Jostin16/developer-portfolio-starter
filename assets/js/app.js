//functionality -> scroll

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


//hamburger section

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul"); /*the nav links altogether*/
const nav = document.querySelector("nav"); /*whole nav element */

burger.addEventListener("click", ()=>{
    ul.classList.toggle("show");
});

//close the burger when a link is clicked

const navLink = document.querySelectorAll(".nav-link"); /* select all navs links li */

navLink.forEach((link) =>{
    link.addEventListener("click",()=>{
        ul.classList.remove("show");
    });
});

/*How to Make the Hero Section Responsive*/
