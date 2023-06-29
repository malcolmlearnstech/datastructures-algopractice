function validatePIN(pin) {
  let numberSet = '0123456789';

  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (!numberSet.includes(pin[i])) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

/*
REFACTORED SOLUTION:

Rather than using conditional checks, we can implement regex to check for 
very particular matches. If the regex detects a specific match, it will 
return 'true'; if no exact match is detected, it will return false. This 
particular refactor will use regular expression to test strings only of 
length 4 or 6. It will also test from beginning of string to end, that 
every character is a number in the range of 0 to 9.
*/

function validatePIN(pin) {
  return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
}
