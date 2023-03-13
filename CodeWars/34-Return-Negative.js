function makeNegative(num) {
  if (Math.sign(num) === 1) {
    return num * -1;
  } else return num;
}

/*
REFACTORED CODE - We are checking for the same condition, in this instance
we just use a ternary operator instead; allowing for the condition and both
outcomes to be held on one line.
*/

function makeNegative(num) {
  return Math.sign(num) === 1 ? num * -1 : num;
}
