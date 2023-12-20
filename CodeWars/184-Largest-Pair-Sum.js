function largestPairSum(numbers) {
  let firstLargest = Math.max(...numbers);
  numbers.splice(numbers.indexOf(firstLargest), 1);

  let secondLargest = Math.max(...numbers);

  return firstLargest + secondLargest;
}

/*

REFACTORED SOLUTION -

Rather than store the two values need in variables and removing 
elements from the array, we sort the original array instead. 
After sorting in descending order, we can just return the first 
two elements of the adjusted array.
*/

function largestPairSum(numbers) {
  numbers = numbers.sort((a, b) => b - a);

  return numbers[0] + numbers[1];
}
