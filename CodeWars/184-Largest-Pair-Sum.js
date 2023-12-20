function largestPairSum(numbers) {
  let firstLargest = Math.max(...numbers);
  numbers.splice(numbers.indexOf(firstLargest), 1);

  let secondLargest = Math.max(...numbers);

  return firstLargest + secondLargest;
}
