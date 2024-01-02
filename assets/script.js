// Assignment Code
const generateBtn = document.querySelector("#generate");

// Global variables.
let number;


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// GeneratePassword runs the length(), types(), and createPassword() functions.
// The createPassword() function returns the final value.
function generatePassword() {
  
  length();
  return types();

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

// Asks user to select character types. 
// If at least one character type is not selected, the function loops.
// based on the users selection, random values from specific character type arrays are
// pushed into a a single array where random values are chosen until
// the desired password length is matched. 
function types() {

  let lowercase;
  let uppercase;
  let numeric;
  let specialCharacters;
  let passwordArr = [];
  let passwordArr2 = [];
  let password1 = '';

  // Asks user if lowercase letters need to be included.
  lowercase = confirm ('Include lowercase?');
  if (lowercase) {
    
    const abc = ['a', 'b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
    for (i = 0; i < number; i++) {
      index = Math.floor(Math.random() * abc.length);
      passwordArr.push(abc[index]);
    }   
  }

  // asks user if uppercase letters need to be included.
  uppercase = confirm ('Include uppercase?');
  if (uppercase) {
    
    const ABC = ['A', 'B','C','D','E','F','G','H','I','J','K',
    'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
    for (i = 0; i < number; i++) {
      index = Math.floor(Math.random() * ABC.length);
      passwordArr.push(ABC[index]);
    }
  }

  // asks user if numbers need to be included.
  numeric = confirm ('Include numbers?');
  if (numeric) {
    
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (i = 0; i < number; i++) {
      index = Math.floor(Math.random() * num.length);
      passwordArr.push(num[index]);
    }
  }

  // Asks user if special characters need to be included.
  specialCharacters = confirm ('Include special characters?');
  if (specialCharacters) {
   
    const special = ['!',  '"',  '#',  '$',  '%',  '&',  "'",  '(',  ')',  '*',  '+',  ',',  '-',  '.',  '/',  ':',  ';',  '<',  '=',  '>',  '?',  '@',  '[',    ']',  '^',  '_',  '`',  '{',  '|',  '}',  '~', "\\" ];

    for (i = 0; i < number; i++) {
      index = Math.floor(Math.random() * special.length);
      passwordArr.push(special[index]);
    }
  }

  // Validates response. If no selection is made, the function loops.
  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    alert ('Choose at least one character type!')
    return types();
  }

  for (i = 0; i < number; i++) {
    index = Math.floor(Math.random() * passwordArr.length);
    passwordArr2.push(passwordArr[index]);
  }

  password1 = passwordArr2.join("")
  console.log(password1);
  return password1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

