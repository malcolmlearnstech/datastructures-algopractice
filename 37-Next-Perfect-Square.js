function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  } else return -1;
}

function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq))
    ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
    : -1;
}

function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
