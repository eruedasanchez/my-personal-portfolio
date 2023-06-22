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

const toggleNav = () => navbar.classList.toggle("active");

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

