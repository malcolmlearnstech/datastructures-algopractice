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
