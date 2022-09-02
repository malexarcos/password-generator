// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("click the button");
  var passwordLength = prompt("How long do you want your password");
  if (passwordLength <8 || passwordLength >128) {
    alert("Password must be 8 and 128 characters");
    return 
  }
 var lowercase = confirm("Do you want lowercases?");
 var uppercase = confirm("Do you want uppercase?");
 var numbers = confirm("Do you want numbers?");
 var specialCharacters = confirm("Do you want specialCharacters?");
if (lowercase === false && uppercase === false && numbers === false && specialCharacters ===false){
  alert("You must at least chose one");
  return
}

  return "Generated password will go here";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
