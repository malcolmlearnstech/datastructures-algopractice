/*

Question: 

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example 1:

Input: [0]
Output: "even"

Example 2:

Input: [0, 1, 4]
Output: "odd"

Example 3:

Input: [0, -1, -5]
Output: "even"

*/

function oddOrEven(array) {
  let sum = 0;

  for (const value of array) {
    sum += value;
  }

  if (sum % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
