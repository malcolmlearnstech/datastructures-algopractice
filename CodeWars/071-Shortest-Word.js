function findShort(s) {
  let counts = [];
  s = s.split(' ').map((element) => counts.push(element.length));

  return Math.min(...counts);
}

/*
REFACTORED SOLUTION:

We can redefine the input s, which will us to not create a new variable, then run Math.min
*/

function findShort(s) {
  s = s.split(' ').map((element) => (element = element.length));
  return Math.min(...s);
}

/*
REFACTORED SOLUTION:

We can add the lengths of each word from input string into the same array. 
We then filter out the strings themselves, then return Math.min on the array
*/

function findShort(s) {
  s = s.split(' ');
  s.map((element) => s.push(element.length));
  s = s.filter((element) => typeof element !== 'string');
  return Math.min(...s);
}
