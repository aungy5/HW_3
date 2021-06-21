// Setting up our variables for password characters. 
var lowercase= "abcdefghijklmnopqrstuvwxyz";
var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// with this line we are declaring that the letters that can be used in the password are the entire alphabet both uppercase and lowercase
var numbers = "0123456789";
// this ensures all numbers can be used in the password
var symbols = "!@#$%^&*_-+=";
// adding special characters to be included in the password should the user check the symbols box
var characters = "";
// setting up the variables that will create our password each time
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var incUppercase = document.getElementById("uppercase");
var incLowercase = document.getElementById("lowercase");
var generateBtn = document.getElementById("generate");

// When the generate button is clicked, this will create a string based on the user's selections. 
generateBtn.addEventListener("click", () => {
  var passwordlengthCheck = prompt("How many characters would you like your password to be?");
  var lowercaseCheck = confirm("Would you like lowercase characters in your password?");
  var uppercaseCheck = confirm("Would you like uppercase characters in your password?");
  var symbolsCheck = confirm("Would you like special characters in your password?");
  var numbersCheck = confirm("Would you like numbers in your password?");
    if (passwordlengthCheck < 8) {
      alert("Your password must be between 8-128 Characters")
      generatePassword()
    }
    if (passwordlengthCheck > 128) {
      alert("Your password must be between 8-128 Characters")
      generatePassword()
    }
    if (lowercaseCheck === true) {
      var charLc = characters.concat("", lowercase)
      console.log(charLc)
      characters = characters + charLc
    } 
    if (uppercaseCheck === true) {
      var charUc = characters.concat("", uppercase)
      console.log(charUc)
      characters = characters + charUc
    }
    if (symbolsCheck === true) {
      var charSym = characters.concat("", symbols)
      console.log(charSym)
      characters = characters + charSym
    }
    if (numbersCheck === true) {
      var charNum = characters.concat("", numbers)
      console.log(charNum)
      characters = characters + charNum
    }
    passwordTxt.value = generatePassword(passwordlengthCheck, characters);
  });

// The function that will generate the password
  var generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    } console.log(password)
    return password;
  };

  var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});