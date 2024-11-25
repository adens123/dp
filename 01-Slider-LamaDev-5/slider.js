const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = bottom.querySelectorAll(".button");
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
    slideNumber = btnIndex + 1;
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${800 * slideNumber}px)`;
  slideNumber++;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${800 * (slideNumber - 2)}px)`;
  slideNumber--;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${800 * (length - 1)}px)`;
  slideNumber = length;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : firstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : lastSlide();
  changeColor();
});
