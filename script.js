"use strict";

const previous = document.querySelector(".btn-previous");
const next = document.querySelector(".btn-next");
const li = document.querySelectorAll("li");
let slideNext = 0;
let sildePrevious = li.length;

function nextPictures() {
    slideNext++;
    if (slideNext == li.length) {
        slideNext = 0;
    }

    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
    }

    li[slideNext].classList.add("active");
}

function previousPictures(){
    li[slideNext].classList.remove("active")
    if (slideNext > 0) {
        slideNext--;
    }else{
        slideNext = li.length - 1;
    }
    li[slideNext].classList.add("active");    
   }

next.addEventListener("click", nextPictures);
previous.addEventListener("click", previousPictures);