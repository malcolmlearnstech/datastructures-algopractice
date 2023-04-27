function deepCount(array) {
  let elementCount = 0;
  let i = 0;

  while (i < array.length) {
    elementCount++;

    if (Array.isArray(array[i])) {
      elementCount += deepCount(a[i]);
    }
    i++;
  }
  return elementCount;
}

/*

REFACTORED SOLUTION:
We can make use of reduce method to step through each element and we use 
a ternary checking for whether current element is an array or not. If 
current is not an array, we can add; if current element is an array, 
then we make a recursive call.
*/

function deepCount(array) {
  return array.reduce(
    (accumulator, currentValue) =>
      Array.isArray(currentValue)
        ? accumulator + deepCount(currentValue)
        : accumulator,
    array.length
  );
}
