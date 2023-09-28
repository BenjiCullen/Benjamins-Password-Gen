
var characterlength = 0;
var choice = [];

var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":","<","=",">","?","@","[","\",","^","_","`","{","|","}","~"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","r","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","R","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

//var numbers = '0123456789';
//var numbers = numbers.split(' ');

var generatePW = document.querySelector("#generate");

generatePW.addEventListener("click", writePassword);
function generatePassword() {
    var password  = "";
    for(var i = 0; i < characterlength; i++) {
        var randomIndex = Math.floor(Math.random() * choice.length);
      password = password + choice[randomIndex];
}
return password;

}
function getPrompts() {
  choice = [];

  characterlength = parseInt(prompt ("Please enter how many characters you would like your password to be(8 - 128)"));

  if ((characterlength) == characterlength < 8 || characterlength > 128) {
      alert("Your character length is either less than 8 or more than 128, please enter a value between these numbers");
      return false;
    }

  if (confirm("Would you like lowercase letters in your password?")) {
    choice = choice.concat(lowerCase); 
  }

  if (confirm("Would you like Uppercase letters in your password?")) {
    choice = choice.concat(upperCaseArr); 
  }

  if (confirm("Would you like special character in your password?")) {
    choice = choice.concat(specialCharacters); 
  }

  if (confirm("Would you like numbers in your password?")) {
    choice = choice.concat(numbers); 
  }
  return true;
}

function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}


//1. prompt the user with the password criteria
  //a. password length 8-128
  //b . lowercase, uppercase, special characters, number
//2. validate the input.
//3.generate password based on criteria
//4.diplay generated password on page.