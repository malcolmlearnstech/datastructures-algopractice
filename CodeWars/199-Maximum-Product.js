function adjacentElementsProduct(array) {
  let max = -Infinity;

  for (let i = 0; i < array.length - 1; i++) {
    max = Math.max(max, array[i] * array[i + 1]);
  }

  return max;
}

/*
REFACTORED SOLUTION -

Instead of running the Math.max() method for each iteration of the for-loop, 
we can use for-loop to push each product to an empty array. Once we reach the 
end of our for-loop, we only have to apply the Math.max() method once to find 
and return the greatest product from the list of potential products.
*/

function adjacentElementsProduct(array) {
  let multiples = [];

  for (let i = 0; i < array.length - 1; i++) {
    multiples.push(array[i] * array[i + 1]);
  }
  return Math.max(...multiples);
}
