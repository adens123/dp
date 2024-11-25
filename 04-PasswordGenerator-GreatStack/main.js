const passwordField = document.querySelector("#password");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";
const allChars = upperCase + lowerCase + number + symbol;

const generatePassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordField.value = password;
};

const copyPassword = async () => {
  try {
    await navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
