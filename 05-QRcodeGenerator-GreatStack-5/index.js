const inputField = document.querySelector(".inputField");
const imgBox = document.querySelector(".imgBox");
const qrImg = document.querySelector(".qrImg");
const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", () => {
  if (inputField.value) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputField.value;

    imgBox.classList.add("showQR");
  } else {
    inputField.classList.add("error");

    setTimeout(() => {
      inputField.classList.remove("error");
    }, 1000);
  }
});
