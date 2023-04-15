function solution(string) {
  let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  string = string.split('');

  for (let i = 0; i < string.length; i++) {
    if (capitals.includes(string[i])) {
      string.splice(i, 0, ' ');
      i += 2;
    }
  }
  return string.join('');
}

/*
REFACTORED SOLUTION:

Rather creating a variable to hold all capital letters; in our conditional, 
we can check if the current string element is strictly equal to its capitalized form.
*/

function solution(string) {
  string = string.split('');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string.splice(i, 0, ' ');
      i += 2;
    }
  }
  return string.join('');
}
