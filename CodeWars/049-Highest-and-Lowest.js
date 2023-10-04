function highAndLow(numbers) {
  let brokenUp = numbers
    .match(/-?\d+/g)
    .map(Number)
    .sort((a, b) => a - b);
  let minimum = brokenUp[0];
  let maximum = brokenUp[brokenUp.length - 1];

  return `${maximum} ${minimum}`;
}

/*

REFACTORED SOLUTION: 

Rather than use of something as complicated as regex, we can split up the input 
numbers by the space in between each. This also allows us to keep the negative 
sign next to the number when splitting (as opposed to the negative sign being its 
own element after running the split method). We then simply change the data type 
of each split element using the Number/toNumber method. Last, we emply Math.max 
and Math.min on a spread of the numbers split array; within a template literal.
*/

function highAndLow(numbers) {
  numbers = numbers.split(' ').map((element) => (element = Number(element)));

  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
