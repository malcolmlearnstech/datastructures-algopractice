function scramble(str, arr) {
  let string = {};

  arr.map((element, index) => (string[element] = str[index]));

  return Object.values(string).join('');
}

/*

REFACTOR SOLUTION -

Instead of having to run the Object.values, we can build 
out the variable "string" as an array and indicate where 
each character from the input string "str" will exist. 
Then we only have to use the join method at the end of 
our function.
*/

function scramble(str, arr) {
  let string = [];
  arr.map((element, index) => (string[element] = str[index]));
  return string.join('');
}
