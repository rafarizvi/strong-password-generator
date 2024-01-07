// Assignment Code
const generateBtn = document.querySelector("#generate");

// Global variables.
let charLength;

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// GeneratePassword runs the length and types functions.
function generatePassword() {
  length();
  return types();
}

// The length function asks user to enter a desired password length from 8-128 characters and validates the input.
function length() {
    
  charLength = prompt ('choose a length from 8 - 128 characters for your password.');
  
  if (charLength > 7 && charLength < 129) {
  } else {
    alert ('Invalid number. Choose a number between 8 and 128!');
    length();
  }
}

// Asks user to select character types. If at least one character type is not selected, the function loops.
// Based on the users selection, random values from specific character type arrays are
// pushed into a a single array where random values are chosen until the desired password length is matched. 
function types() {

  let index;
  let lowercase;
  let uppercase;
  let numeric;
  let specialCharacters;
  let passwordArr = [];
  let passwordArr2 = [];
  let password1 = '';
  
  const abc = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const ABC = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  const special = ['!',  '"',  '#',  '$',  '%',  '&',  "'",  '(',  ')', '*',  '+',  ',',  '-',  '.',  '/',  ':',  ';',  
                   '<',  '=',  '>',  '?', '@',  '[',    ']',  '^',  '_',  '`',  '{',  '|',  '}',  '~', "\\" ];

  
  // Asks user if lowercase letters need to be included.
  lowercase = confirm ('Include lowercase?');
  if (lowercase) {
    for (i = 0; i < abc.length; i++) {
      index = i;
      passwordArr.push(abc[index]);
    }   
  }

  // asks user if uppercase letters need to be included.
  uppercase = confirm ('Include uppercase?');
  if (uppercase) {
    for (i = 0; i < ABC.length; i++) {
      index = i;
      passwordArr.push(ABC[index]);
    }
  }

  // asks user if numbers need to be included.
  numeric = confirm ('Include numbers?');
  if (numeric) {
    for (i = 0; i < num.length; i++) {
      index = i;
      passwordArr.push(num[index]);
    }
  }

  // Asks user if special characters need to be included.
  specialCharacters = confirm ('Include special characters?');
  if (specialCharacters) {
    for (i = 0; i < special.length; i++) {
      index = i;
      passwordArr.push(special[index]);
    }
  }

  // Validates response. If no selection is made, the function loops.
  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    alert ('Choose at least one character type!')
    return types();
  }

  // After the required characters are pushed and combined in the array "passwordArr," 
  // random values are selected to complete the password length in the second array "passwordArr2."
  for (i = 0; i < charLength; i++) {
    index = Math.floor(Math.random() * passwordArr.length);
    passwordArr2.push(passwordArr[index]);
  }

  // The code below ensures at least one value of the user specified characters is present.  
  if (lowercase) {
    index = Math.floor(Math.random() * abc.length);
    passwordArr2.splice(1, 1, abc[index]);
  }
    
  if (uppercase) {
    index = Math.floor(Math.random() * ABC.length);
    passwordArr2.splice(4, 1, ABC[index]);
  }
    
  if (numeric) {
    index = Math.floor(Math.random() * num.length);
    passwordArr2.splice(3, 1, num[index]);
  }
    
  if (specialCharacters) {
    index = Math.floor(Math.random() * special.length);
    passwordArr2.splice(6, 1, special[index]);
  }
  
  // Logs generated password in console and returns value to types function, in order to display it on the webpage.  
  password1 = passwordArr2.join("");
  console.log(password1);
  return password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
