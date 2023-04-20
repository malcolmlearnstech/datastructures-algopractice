function printerErrors(s) {
  let notColors = 'nopqrstuvwxyz';
  let count = 0;
  let allPrint = s.length;
  let output = '';
  for (let i = 0; i < s.length; i++) {
    if (notColors.includes(s[i])) {
      count++;
    }
  }
  return output + count + '/' + allPrint;
}

/*
REFACTORED SOLUTION:
We can turn the string of letters into an array and use forEach, just 
use a conditional check for characters that don't fall within the 
parameter. We can then use that count and the length of the string 
and return them in a template literal.
*/

function printerError(s) {
  let colors = 'abcdefghijklm';
  let count = 0;

  s.split('').forEach((element) => {
    if (!colors.includes(element)) {
      count++;
    }
  });

  return `${count}/${s.length}`;
}
