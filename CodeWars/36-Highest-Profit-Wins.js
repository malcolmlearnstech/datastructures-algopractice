function minMax(arr) {
  let profitMargin = [];

  profitMargin.push(Math.min(...arr));
  profitMargin.push(Math.max(...arr));

  return profitMargin;
}

/*  REFACTORED CODE:

Because we know that the solution will always only have two elements (one for lowest and one for highest), we can place the Math.min and Math.max directly into an array; as opposed to two separate lines of array pushes.
*/
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
