// Assignment Code
var generateBtn = document.querySelector("#generate");

// password parameters
var length;
var characters = "";


// Write password to the #password input
function writePassword() {
  getParameters();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// builds password one character at a time from available character string
function generatePassword () {
  var password = "";
  for ( var i = 0; i < length; i++ ) {
    password += characters.charAt(Math.floor(Math.random() * 
    characters.length));
  }
  return password;
}

// asks user a series of questions to determine parameters of password. Exits the loop if user wants an absurdly long password, and restarts the loop if the user wants a short password. The loop is also restarted if no paraters are selected, accompanied by an error message
function getParameters() {
  characters = "";
  length = prompt("How long would you like it to be?\n(Between 8 and 128 characters)");
  if (length < 8) {
    alert("Are you trying to get hacked?\nTry again.");
    return getParameters();
  } else if (length > 128) {
    alert("If you're looking for more security than 128 characters I suggest you look elsewhere than a two-week-old CS stduent.");
    return null;
  }
  if (confirm("Do you want lower case letters?")) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("Do you want upper case letters?")) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("Do you want numbers?")) {
    characters += "1234567890";
  }
  if (confirm("Do you want special characters?")) {
    characters += "!@#$%^&*()_+";
  }
  if (characters.length == 0) {
    alert("You must select at least character type");
    getParameters();
  }
}
