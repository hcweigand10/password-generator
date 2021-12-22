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

function generatePassword () {
  var password = "";
  for ( var i = 0; i < length; i++ ) {
    password += characters.charAt(Math.floor(Math.random() * 
    characters.length));
  }
  console.log(password);
  return password;
}

function getParameters() {
  characters = "";
  length = prompt("How long would you like it to be?\n(Between 8 and 128 characters)");
  if (length < 8) {
    alert("Are you trying to get hacked?\nTry again.");
    getParameters();
  } else if (length > 128) {
    alert("If you're looking for more security than 128 characters I suggest you look elsewhere than a two-week-old CS stduent.");
    return false;
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
