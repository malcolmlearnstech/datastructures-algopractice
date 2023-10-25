function digits(n) {
  n.toString().split('').length;
}

/*
REFACTORED SOLUTION -

We can alternatively use a template literal to convert the 
number/integer input into a string; then check for length.
*/

function digits(n) {
  return `${n}`.length;
}
