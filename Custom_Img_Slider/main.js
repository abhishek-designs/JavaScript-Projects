// Slider container
const sliderContain = document.querySelector(".img-slider");

// Slider Images
const sliderImg = document.querySelectorAll(".img-slider img");

// buttons
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// Speed of sliding
let speed = 3000;

// counter which counts the number of slides
let counter = 1;

// size of images
const size = sliderImg[0].clientWidth;

// We want that the slider should start from the first slider

// initial img of slider
sliderContain.style.transform = "translateX(" + -size * counter + "px)";

// setting the buttons
prevBtn.addEventListener("click", function () {
  if (counter <= 0) return; //this will ensure that the index number should not exceed 0
  sliderContain.style.transition = "transform 0.3s ease";
  counter--;
  sliderContain.style.transform = "translateX(" + -size * counter + "px)";
});

nextBtn.addEventListener("click",nextSlide);

function nextSlide() {
  if (counter >= sliderImg.length - 1) return;
  sliderContain.style.transition = "transform 0.3s ease";
  counter++;
  sliderContain.style.transform = "translateX(" + -size * counter + "px)";
}

// to make the slider infinite (clone img)
sliderContain.addEventListener("transitionend", function () {
  if (sliderImg[counter].id === "last-clone") {
    sliderContain.style.transition = "none";
    counter = sliderImg.length - 2;
    sliderContain.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (sliderImg[counter].id === "first-clone") {
    sliderContain.style.transition = "none";
    counter = sliderImg.length - counter;
    sliderContain.style.transform = "translateX(" + -size * counter + "px)";
  }
});

let timer = setInterval(nextSlide,3000);
        
