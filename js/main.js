'use strict';

// Add event listener on multiple events

const addEventsOnElements = function(elements, eventType, callback){
    for(let i=0; i < elements.length; i++){
        elements[i].addEventListener(eventType,callback);
    }
} 

// Mobile navbar toggler

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
    navbar.classList.toggle("active");
    // document.body.classList.toggle("nav-active");

} 

addEventsOnElements(navTogglers, "click", toggleNav);

// Header animation: when scrolled down to 100px header will be active

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
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


// Prev slide

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
















