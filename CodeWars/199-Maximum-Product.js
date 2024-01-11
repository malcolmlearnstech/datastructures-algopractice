function adjacentElementsProduct(array) {
  let max = -Infinity;

  for (let i = 0; i < array.length - 1; i++) {
    max = Math.max(max, array[i] * array[i + 1]);
  }

  return max;
}
