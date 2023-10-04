/*

Q - Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


Example 1: [7] should return 7, because it occurs 1 time (which is odd).

Example 2: [1,1,2] should return 2, because it occurs 1 time (which is odd).

Example 3: [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

function findOdd(array) {
  let elementCounts = {};

  for (let i = 0; i < array.length; i++) {
    if (!elementCounts[array[i]]) {
      elementCounts[array[i]] = 1;
    } else {
      elementCounts[array[i]] += 1;
    }
  }

  console.log(elementCounts);

  for (const number in elementCounts) {
    if (elementCounts[number] % 2 !== 0) {
      return Number(number);
    }
  }
}
