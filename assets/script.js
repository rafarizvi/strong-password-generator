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

// GeneratePassword runs the length(), types(), and createPassword() functions.
// The createPassword() function returns the final value.
function generatePassword() {
  
  length();
  return types();

}

// length() function asks user to enter the desired password length, 
// ranging from 8 - 128 characters.
function length() {
    
  charLength = prompt ('choose a length from 8 - 128 characters for your password.');
  
  if (charLength > 7 && charLength < 129) {
  
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
  
  const abc = ['a', 'b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const ABC = ['A', 'B','C','D','E','F','G','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  const special = ['!',  '"',  '#',  '$',  '%',  '&',  "'",  '(',  ')',  
  '*',  '+',  ',',  '-',  '.',  '/',  ':',  ';',  '<',  '=',  '>',  '?',  
  '@',  '[',    ']',  '^',  '_',  '`',  '{',  '|',  '}',  '~', "\\" ];

  
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

// use passwordArr1 to send all required chars.
// repeat the character if statements and send 2 of the required chars to  passwordArr2
// select 2 random elements from required characters.
// after the second set of char if statements are performed, get length of passwordArr2, 




//  then do: charLength - passwordArr2.length, to get remaining char length to fill.
//   do: charLength - passwordArr2 or (newVar = charLength - passwordArr2),
//    then in for loop: i < newVar  to choose the remaining chars from passwordArr1 into passwordArr2.

  
  for (i = 0; i < charLength; i++) {
    index = Math.floor(Math.random() * passwordArr.length);
    passwordArr2.push(passwordArr[index]);
  }

  console.log(passwordArr2.join(""));



// add loop (do while) to confirm previously existed characters are not replaced.


 // guarantees at least one value of the specified characters is present.  
 
 const abcfound = abc.some(r=> passwordArr2.includes(r));
 const ABCfound = ABC.some(r=> passwordArr2.includes(r));
 const numfound = num.some(r=> passwordArr2.includes(r));
 const specialfound = special.some(r=> passwordArr2.includes(r));
 do {
  if (lowercase && !abcfound) {
    
        index = Math.floor(Math.random() * abc.length);
        passwordArr2.splice(0, 1, abc[index]);
  }

  if (uppercase && !ABCfound) {

        index = Math.floor(Math.random() * ABC.length);
        passwordArr2.splice(1, 1, ABC[index]);
  }

  if (numeric && !numfound) {
    //generate a random value from numeric array;
    //splice value into position 1 of passwordArr2;
        index = Math.floor(Math.random() * num.length);
        passwordArr2.splice(2, 1, num[index]);
  }

  if (specialCharacters && !specialfound) {

    index = Math.floor(Math.random() * special.length);
    passwordArr2.splice(3, 1, special[index]);
  }

} while (!abcfound && !ABCfound && !numfound && !specialfound);



  password1 = passwordArr2.join("")
  console.log(password1);
  return password1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


