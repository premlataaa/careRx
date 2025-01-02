const hamburger = document.querySelector(".hamburger");
const navPages = document.getElementById(".nav-pages");

hamburger.addEventListener("click",()=>{
    navPages.classList.toggle('show');
});