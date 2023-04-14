function descendingOrder(n) {
  let numConvert = String(n);

  numConvert = numConvert.split('').sort((a, b) => b - a);

  return Number(numConvert.join(''));
}

/*
REFACTORED SOLUTION:

Rather than placing string of number in a variable, we can method 
chain split to "toString", then perform the sorting in the same manner
*/

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

/*
REFACTORED SOLUTION:

We use Number/toNumber() instead of parseInt and the rest of the method chain
can bascially remain the same
*/

function descendingOrder(n) {
  return Number(String(n).split('').sort().reverse().join(''));
}
