import { imgGenerator } from "./modules/imgGenerator.js";

const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");

imgGenerator(slider, 4, 1024, 768);
const images = document.querySelectorAll(".image");

let sliderNumber = 1;
let length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach(button => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, btnIndex) => {
  button.addEventListener("click", () => {
    resetBg();
    button.style.backgroundColor = "white";
    slider.style.transform = `translateX(-${800 * btnIndex}px)`;
    sliderNumber = btnIndex + 1;
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${800 * sliderNumber}px)`;
  sliderNumber++;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${800 * (sliderNumber - 2)}px)`;
  sliderNumber--;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${800 * (length - 1)}px)`;
  sliderNumber = length;
};

const changeColor = () => {
  resetBg();
  buttons[sliderNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : firstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : lastSlide();
  changeColor();
});
