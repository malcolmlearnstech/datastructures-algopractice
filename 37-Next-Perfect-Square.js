function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  } else return -1;
}

/*  REFACTORED CODE:

Essentially doing the same process, we just use a ternary operator instead. We also perform square root then add 1 to find next number, then we multiply that result by itself.
*/
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq))
    ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
    : -1;
}

/*  REFACTORED CODE:

This refactor is the same as the prior, aside from one piece. We use the power of operator instead of hard coding the math. Math.pow method allows you to tell the method how many times a number should be multiplied by itself.
*/
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
