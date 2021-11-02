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

/*Switch*/

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //save the dark mode in LocalStorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true'); //saving the mode
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});

//get the current mode & saving the side of the switch

if(localStorage.getItem('dark-mode')==='true'){
    document.body.classList.add('dark'); 
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

