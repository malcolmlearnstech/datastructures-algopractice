function sorting(a, b) {
  return a - b;
}

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(sorting);
  return numbers[0] + numbers[1];
}
