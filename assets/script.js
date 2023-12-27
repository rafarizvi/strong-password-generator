// Assignment Code
const generateBtn = document.querySelector("#generate");

//global variables.
let number;

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generatePassword runs the length() function. 
function generatePassword() {
  length();
}

// length() function asks user to enter the desired password length.
function length() {
  
  number = prompt ('choose a length from 8 - 128 characters for your password.');
  if (number>7 && number<129) {
    types();

  } else {
    alert ('Invalid number. Choose a number between 8 and 128!');
    length();
  }
}

// If the user enters a valid password length, 
// the types() function runs. ======================
// function types() {
//   const char = ['lowercase', 'uppercase', 'numeric', 'special-characters']; 
//   askchar = prompt('Choose caracter type(s): lowercase, \n uppercase, \n numeric, \n special characters');
//   if (char.includes(askchar)) {
//     createPassword();

//   } else {
//     alert ('choose atleast one type of character! ');
//     types();
//   }
// }

// // If the user selects at least one character,
// // the createPassword() function runs.

// function createPassword() {

// }

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
  let loArr = [];
  const abc = ['a', 'b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * abc.length);
    loArr.push(abc[index]);
  }
  
  console.log(loArr.join(""));            
}

//selects uppercase characters from an array.
function getUpcase() {
  let upArr = [];
  const ABC = ['A', 'B','C','D','E','F','G','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * ABC.length);
    upArr.push(ABC[index]);
  }
  console.log(upArr.join("")); 

}

//selects numbers from an array.
function getNum() {
  let numArr = [];
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * num.length);
    numArr.push(num[index]);
  }
  console.log(numArr.join("")); 

}

//selects special characters from an array.
function getSpecial() {
  let specialArr = [];
  const special = ['!',  '"',  '#',  '$',  '%',  '&',  "'",  '(',  ')',  '*',  '+',  ',',  '-',  '.',  '/',  ':',  ';',  '<',  '=',  '>',  '?',  '@',  '[',    ']',  '^',  '_',  '`',  '{',  '|',  '}',  '~', "\\" ];

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * special.length);
    specialArr.push(special[index]);
  }
  console.log(specialArr.join("")); 

  // console.log(special);

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

