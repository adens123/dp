const qrText = document.querySelector(".qrText");
const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector(".qrImage");
const generate = document.querySelector(".generate");

generate.addEventListener("click", () => {
  if (qrText.value) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    imgBox.classList.add("show-img");
  } else {
    imgBox.classList.remove("show-img");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
});
