function countRedBeads(n) {
  if (n < 2) {
    return 0;
  }

  if (n % 2) {
    return (n - 1) * 2;
  } else {
    return n * 2 - 2;
  }
}

/*
REFACTORED SOLUTION - 

After checking that the input is greater than 2, we can use 
a ternary operator as an alternative to if/else conditional check.
*/

function countRedBeads(n) {
  if (n < 2) {
    return 0;
  }

  return n % 2 ? (n - 1) * 2 : n * 2 - 2;
}
