function disemvowel(str) {
  let newStr = '';
  let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  for (let i = 0; i < str.length; i++) {
    if (!vowels[str[i].toLowerCase()]) {
      newStr += str[i];
    }
  }
  return newStr;
}

/*
REFACTORED SOLUTION - 

We can make use of regex in this instance to look for and get rid 
of any letters that are vowels, employing the global flag. We make 
sure to include both the capitalized AND lower case version of 
vowels to ensure all are caught in the string match method.
*/

function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

/*
REFACTORED SOLUTION - 

We can make use of regex in this instance to look for and get rid 
of any letters that are vowels, employing the global flag. We make 
sure to include both the capitalized AND lower case version of 
vowels to ensure all are caught in the string match method.
*/

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
