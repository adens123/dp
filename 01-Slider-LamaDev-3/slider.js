import { imgGenerator } from "./modules/imgGenerator.js";

const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
// 圖片產生器
imgGenerator(slider, 5, 1920, 1024);

const images = document.querySelectorAll(".image");
let slideNumber = 1;
const length = images.length;

let slideWidth;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "#fff";

const resetBg = () => {
  buttons.forEach(button => (button.style.backgroundColor = "transparent"));
};

buttons.forEach((button, btnIndex) => {
  button.addEventListener("click", () => {
    slideWidth = window.innerWidth / 2;
    resetBg();
    button.style.backgroundColor = "#fff";
    slider.style.transform = `translateX(-${slideWidth * btnIndex}px)`;
    slideNumber = btnIndex + 1;
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideWidth * slideNumber}px)`;
  slideNumber++;
};

const firstSlide = () => {
  slider.style.transform = "translateX(0)";
  slideNumber = 1;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${slideWidth * (slideNumber - 2)}px)`;
  slideNumber--;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${slideWidth * (length - 1)}px)`;
  slideNumber = length;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "#fff";
};

right.addEventListener("click", () => {
  slideWidth = window.innerWidth / 2;
  slideNumber < length ? nextSlide() : firstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slideWidth = window.innerWidth / 2;
  slideNumber > 1 ? prevSlide() : lastSlide();
  changeColor();
});
