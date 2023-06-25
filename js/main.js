// Mobile navbar toggler

const navbar = document.querySelector("#navbar");
const navTogglers = document.querySelectorAll(".nav-toggler");

const toggleNav = () => {
    navbar.classList.toggle("active");
} 

navTogglers.forEach(navToggler => {
    navToggler.addEventListener('click', () => {
        toggleNav();
    });
})

// Header animation: when scrolled down to 100px header will be active

const header = document.getElementById("header");
const backTopBtn = document.getElementById("back-top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

// Slider

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

// Next slide

const sliderNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;
    if(slideEnd){
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }
    moveSliderItem();
}

sliderNextBtn.addEventListener("click", sliderNext);


// Previous slide

const sliderPrev = function () {
    if(currentSlidePos <= 0){
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }
    moveSliderItem();
}

sliderPrevBtn.addEventListener("click", sliderPrev);

// Responsive

window.addEventListener("resize", function (){
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
    
    moveSliderItem();
});

