function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      a[i] = 'x';
    }
  }
  return a.filter((element) => element !== 'x');
}

/*
REFACTORED SOLUTION-
Rather than changing the elements from array A that are in array B, we can ask the filter to output only elements that CANNOT be found in array B. We do this by making use of the "includes" method.
*/
function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}
