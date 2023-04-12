function reverseWords(str) {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('').reverse().join('');
  }
  return str.join(' ');
}

/*
REFACTORED SOLUTION:

We are performing the same steps as our for loop, we just use map() 
instead and append all following methods to the split array of words 
within the input string (separated by spaces)
*/
function reverseWords(str) {
  return str
    .split(' ')
    .map((element) => (element = element.split('').reverse().join('')))
    .join(' ');
}
