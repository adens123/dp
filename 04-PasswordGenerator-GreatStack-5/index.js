const inputField = document.querySelector(".password");
const copy = document.querySelector(".copy");
const generate = document.querySelector(".generate");

const generatePassword = () => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+=";
  const allChars = upperCase + lowerCase + number + symbol;

  let length = 12;

  generate.addEventListener("click", () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    inputField.value = password;
  });
};

copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(inputField.value);
    alert("Password copied to clipboard");
  } catch (err) {
    alert("Failed to copy");
  }
});

generatePassword();
