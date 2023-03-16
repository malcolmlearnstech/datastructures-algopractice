function minMax(arr) {
  let profitMargin = [];

  profitMargin.push(Math.min(...arr));
  profitMargin.push(Math.max(...arr));

  return profitMargin;
}

/*  REFACTORED CODE:

*/
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
