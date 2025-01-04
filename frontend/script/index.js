const hamburger = document.querySelector(".hamburger");
const navPages = document.getElementById("nav-pages");

hamburger.addEventListener("click",()=>{
    navPages.classList.toggle('show');
});

const slides = document.querySelectorAll(".slide"); 
var counter = 0;

// Position each slide
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    }
};

const goNext = () => {
   if(counter<slides.length-1){
    counter++;
    slideImage();
   } 
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// const container = document.querySelector(".wrapper");
// const items = Array.from(container.children);
// const itemWidth = items[0].offsetWidth;
// const totalItems = items.length;

// //duplicate image to create an infinite loop
// items.forEach((item)=>{
//     const clone = Image.cloneNode(true);
//     container.appendChild(clone);
// });

// const totatWidth = itemWidth * totalItems *2;
// container.style.width= `${totatWidth}px`;

// const animationDuration = (totalItems/itemWidth) *5;// Adjust speed (5s per image)

// container.style.animationDuration = `${animationDuration}s`;