const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");


hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});



document.querySelectorAll(".nav-right a").forEach(link => {

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});