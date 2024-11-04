const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

for (const i of images) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach(btn => {
    btn.style.backgroundColor = "transparent";
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

const prevSlide = () => {
  slider.style.transform = `translateX(-${800 * (slideNumber - 2)}px)`;
  slideNumber--;
};

const firstSlide = () => {
  slider.style.transform = "translateX(0)";
  slideNumber = 1;
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
