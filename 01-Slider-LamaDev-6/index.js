const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".sliderImg");
const bottom = document.querySelector(".bottom");

let sliderIndex = 1;
const length = sliderImages.length;

for (let i = 0; i < length; i++) {
  const button = document.createElement("button");
  button.className = "sliderBtn";
  bottom.appendChild(button);
}

const btns = bottom.querySelectorAll(".sliderBtn");
btns[0].style.backgroundColor = "black";

const resetBg = () => {
  btns.forEach(btn => (btn.style.backgroundColor = "white"));
};

btns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    resetBg();
    btn.style.backgroundColor = "black";
    slider.style.transform = `translateX(-${800 * btnIndex}px)`;
    sliderIndex = btnIndex + 1;
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderIndex * 800}px)`;
  sliderIndex++;
};

const firstSlide = () => {
  slider.style.transform = "translateX(0)";
  sliderIndex = 1;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderIndex - 2) * 800}px)`;
  sliderIndex--;
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  sliderIndex = length;
};

const changeColor = () => {
  resetBg();
  btns[sliderIndex - 1].style.backgroundColor = "black";
};

right.addEventListener("click", () => {
  sliderIndex < length ? nextSlide() : firstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  sliderIndex > 1 ? prevSlide() : lastSlide();
  changeColor();
});
