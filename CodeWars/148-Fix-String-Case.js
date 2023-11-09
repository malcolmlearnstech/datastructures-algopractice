function solve(s) {
  let lowers = 0;
  let uppers = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/g)) {
      lowers++;
    } else uppers++;
  }

  if (lowers > uppers) {
    return s.toLowerCase();
  } else if (uppers > lowers) {
    return s.toUpperCase();
  } else return s.toLowerCase();
}

/*
REFACTORED SOLUTION -

Instead of using a bunch of conditional if/else's, we can use a 
ternary operator where the first condition can use greater than 
or equal to account for the lower case equal to upper case 
condition of the original prompt.
*/

function solve(s) {
  let lowers = 0;
  let uppers = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/g)) {
      lowers++;
    } else uppers++;
  }

  return lowers >= uppers ? s.toLowerCase() : s.toUpperCase();
}

/*
SECOND REFACTORED SOLUTION - 

Alternative to using the for loop and iterating thru the 
input string, we can define the "upper" and "lower" variables 
using the filter method and counting the length to determine 
how many of each type of letter there are.
*/
