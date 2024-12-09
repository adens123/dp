const textField = document.querySelector(".qrText");
const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector(".qrImage");
const generate = document.querySelector(".generate");

const generateQR = () => {
  generate.addEventListener("click", () => {
    if (textField.value) {
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        textField.value;
      imgBox.classList.add("showQR");
    } else {
      imgBox.classList.remove("showQR");
      textField.classList.add("error");
      setTimeout(() => {
        textField.classList.remove("error");
      }, 1000);
    }
  });
};

generateQR();
