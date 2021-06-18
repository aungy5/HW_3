// Setting up our variables for password characters. 
var lowercase= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// with this line we are declaring that the letters that can be used in the password are
// the entire alphabet both uppercase and lowercase
var numbers = "0123456789";
// this ensures all numbers can be used in the password
var symbols = "!@#$%^&*_-+=";
// adding special characters to be included in the password should the user check the symbols box
  
// To store groups of data in a single variable, we use arrays
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var incUppercase = document.getElementById("uppercase");
var incLowercase = document.getElementById("lowercase");
var generateBtn = document.getElementById("generate");

//var passwordlength = prompt("How many characters would you like your password to be?");
//var lowercase = prompt("Would you like lowercase characters in your password?");
//var uppercase = prompt("Would you like uppercase characters in your password?");
//var symbols = prompt("Would you like special characters in your password?");
//var numbers = prompt("Would you like numbers in your password?");

// When the generate button is clicked, this will create a string based on the user's selections. 
generateBtn.addEventListener("click", () => {
    let characters = uppercase;
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    incUppercase.checked ? (characters += uppercase) : "";
    incLowercase.checked ? (characters += lowercase) : "";
    passwordTxt.value = generatePassword(length.value, characters);
  });


// The function that will generate the password
  var generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

  var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});