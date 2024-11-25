const passwordField = document.querySelector(".password");
const copy = document.querySelector(".copy");
const generate = document.querySelector(".generate");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=";
const allChars = upperCase + lowerCase + number + symbol;

const passwordLength = 12;

const generatePassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < passwordLength) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordField.value = password;
};

const copyPassWord = async () => {
  try {
    await navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard");
  } catch (err) {
    alert("Failed to copy password to clipboard");
  }
};

generate.addEventListener("click", generatePassword);
copy.addEventListener("click", copyPassWord);
