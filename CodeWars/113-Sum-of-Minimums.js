function sumOfMinimums(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Math.min(...arr[i]);
  }

  return result;
}

/*
REFACTORED SOLUTION -

We can use map to iterate thru the inner arrays as well, still 
using Math.min to find the smallest numbers in each.
*/
