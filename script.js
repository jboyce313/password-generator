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
  var includeLowerCase = getIncludeLowerCase();
  var includeUpperCase = getIncludeUpperCase();
  var includeNumbers = getIncludeNumbers();
  var includeSpecialCharacters = getIncludeSpecialCharacters();

  console.log(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSpecialCharacters
  );
};

function getIncludeSpecialCharacters() {
  var includeSpecialCharacters = prompt(
    "Include special characters in your password? (enter y or n)"
  );
  var entryIsValid = isYesOrNo(includeSpecialCharacters);
  while (!entryIsValid) {
    includeSpecialCharacters = prompt(
      "Invalid entry. Include special characters in your password? (enter y or n)"
    );
    entryIsValid = isYesOrNo(includeSpecialCharacters);
  }
  var choice = includeSpecialCharacters.toLowerCase();

  if (choice === "y") {
    return true;
  } else {
    return false;
  }
}

function getIncludeNumbers() {
  var includeNumbers = prompt(
    "Include numbers in your password? (enter y or n)"
  );
  var entryIsValid = isYesOrNo(includeNumbers);
  while (!entryIsValid) {
    includeNumbers = prompt(
      "Invalid entry. Include numbers? in your password? (enter y or n)"
    );
    entryIsValid = isYesOrNo(includeNumbers);
  }
  var choice = includeNumbers.toLowerCase();

  if (choice === "y") {
    return true;
  } else {
    return false;
  }
}

function getIncludeUpperCase() {
  var includeUpperCase = prompt(
    "Include upper case letters in your password? (enter y or n)"
  );
  var entryIsValid = isYesOrNo(includeUpperCase);
  while (!entryIsValid) {
    includeUpperCase = prompt(
      "Invalid entry. Include upper case letters in your password? (enter y or n)"
    );
    entryIsValid = isYesOrNo(includeUpperCase);
  }
  var choice = includeUpperCase.toLowerCase();

  if (choice === "y") {
    return true;
  } else {
    return false;
  }
}

function getIncludeLowerCase() {
  var includeLowerCase = prompt(
    "Include lower case letters in your password? (enter y or n)"
  );
  var entryIsValid = isYesOrNo(includeLowerCase);
  while (!entryIsValid) {
    includeLowerCase = prompt(
      "Invalid entry. Include lower case letters in your password? (enter y or n)"
    );
    entryIsValid = isYesOrNo(includeLowerCase);
  }
  var choice = includeLowerCase.toLowerCase();

  if (choice === "y") {
    return true;
  } else {
    return false;
  }
}

// check if value is 'y' or 'n'
function isYesOrNo(entry) {
  entry = entry.toLowerCase();
  if (entry === "y" || entry === "n") {
    return true;
  } else {
    return false;
  }
}

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
