function minMax(arr) {
  let profitMargin = [];

  profitMargin.push(Math.min(...arr));
  profitMargin.push(Math.max(...arr));

  return profitMargin;
}
