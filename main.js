let whereIworked = document.querySelector(".whereihaveworked");
let maxHeight = document.documentElement.scrollHeight;
let theOpacity = window.scrollY/maxHeight;

document.addEventListener("scroll", function(e) { //darkening background color on scroll
    theOpacity = (window.scrollY/maxHeight)-.45;
    whereIworked.style.backgroundColor = "rgba(0,0,0,"+theOpacity+")";
});