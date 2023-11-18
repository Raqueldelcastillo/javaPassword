// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to generate password with user input
function generatePassword() {
  var choisenCharacters = [];
  if (confirm("special characteres?")) {
    choisenCharacters = choisenCharacters.concat(specialCharacters);
  }
  if (confirm("upper characteres?")) {
    choisenCharacters = choisenCharacters.concat(upperCasedCharacters);
  }
  if (confirm("lower characteres?")) {
    choisenCharacters = choisenCharacters.concat(lowerCasedCharacters);
  }
  if (confirm("numeric characteres?")) {
    choisenCharacters = choisenCharacters.concat(numericCharacters);
  }
  var length = prompt("choose lenght between 8 and 128");

  var generatedPassword = "";
  for (let i = 0; i < length; i++) {
    generatedPassword +=
      choisenCharacters[Math.floor(Math.random() * choisenCharacters.length)];
  }
  return generatedPassword;
  // return "fj49023 mru4032cjm8r90342"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
