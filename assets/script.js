// Assignment Code
const generateBtn = document.querySelector("#generate");

//global variables.
let number;
let loArr = [];
let upArr = [];
let numArr = [];
let specialArr = [];


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generatePassword runs the length(), types(), and createPassword() functions.
// the createPassword() function returns the final value.
function generatePassword() {
  
  length();
  types();
  return createPassword();

}

// length() function asks user to enter the desired password length, 
// ranging from 8 - 128 characters.
function length() {
  
  number = prompt ('choose a length from 8 - 128 characters for your password.');
  if (number > 7 && number < 129) {
  
  } else {
    alert ('Invalid number. Choose a number between 8 and 128!');
    length();
  }

}

//asks user to select character types.
function types() {

  let lowercase;
  let uppercase;
  let numeric;
  let specialCharacters;  

  lowercase = confirm ('Include lowercase?');
  if (lowercase) {
    getLocase();
  }
  uppercase = confirm ('Include uppercase?');
  if (uppercase) {
    getUpcase();
  }
  numeric = confirm ('Include numbers?');
  if (numeric) {
    getNum();
  }
  specialCharacters = confirm ('Include special characters?');
  if (specialCharacters) {
    getSpecial();
  }

}

//selects lowercase characters from an array.
function getLocase() {
  
  const abc = ['a', 'b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * abc.length);
    loArr.push(abc[index]);
  }         

}

//selects uppercase characters from an array.
function getUpcase() {
  
  const ABC = ['A', 'B','C','D','E','F','G','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * ABC.length);
    upArr.push(ABC[index]);
  }

}

//selects numbers from an array.
function getNum() {
  
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * num.length);
    numArr.push(num[index]);
  }

}

//selects special characters from an array.
function getSpecial() {
  
  const special = ['!',  '"',  '#',  '$',  '%',  '&',  "'",  '(',  ')',  '*',  '+',  ',',  '-',  '.',  '/',  ':',  ';',  '<',  '=',  '>',  '?',  '@',  '[',    ']',  '^',  '_',  '`',  '{',  '|',  '}',  '~', "\\" ];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * special.length);
    specialArr.push(special[index]);
  }
  // console.log(specialArr.join("")); 
}


//combines all character type arrays into a single array,
//and selects random elements from the combines array.
function createPassword() {
  
  let passwordArr = [];
  let password1 = '';
  
  combChar = loArr.concat(upArr).concat(numArr).concat(specialArr);

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * combChar.length);
    passwordArr.push(combChar[index]);
  }
  password1 = passwordArr.join("")
  console.log(password1);
  return password1;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

