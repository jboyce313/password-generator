// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password
var generatePassword = function () {
  var passwordLength = getPasswordLength();
};

function getPasswordLength() {
  var passwordLength = prompt(
    "Enter password length between 8 and 128 characters: "
  );

  // check for valid password length entry
  while (
    isNaN(passwordLength) ||
    !Number.isInteger(Number(passwordLength)) ||
    Number(passwordLength) < 8 ||
    Number(passwordLength) > 128
  ) {
    passwordLength = prompt(
      "Invalid length. Please enter an integer between between 8 and 128: "
    );
  }

  return passwordLength;
}
