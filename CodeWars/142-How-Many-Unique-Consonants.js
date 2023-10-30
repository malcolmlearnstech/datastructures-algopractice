function countConsonants(str) {
  let cons = {};
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[bcdfghjklmnpqrstvwxyz]/g) && !cons[str[i]]) {
      cons[str[i]] = 1;
    }
  }
  return Object.keys(cons).length;
}

/*
REFACTOR SOLUTION - 

Within the regex paramter used in the match method, alternative 
to listing all consonants, we can use "0-9" to exclude numbers 
and "\W" to exclude any special characters or symbols.
*/

function countConsonants(str) {
  let cons = {};
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[^aeiou0-9\W]/g) && !cons[str[i]]) {
      cons[str[i]] = 1;
    }
  }

  return Object.keys(cons).length;
}
