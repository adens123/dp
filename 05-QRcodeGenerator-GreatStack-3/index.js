// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

const qrText = document.querySelector(".qrText");
const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector(".qrImage");
const generate = document.querySelector(".generate");

const generateQR = () => {
  generate.addEventListener("click", () => {
    if (qrText.value) {
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;

      imgBox.classList.add("showQR");
    } else {
      qrText.classList.add("error");
      imgBox.classList.remove("showQR");
      setTimeout(() => {
        qrText.classList.remove("error");
      }, 1000);
    }
  });
};

generateQR();
