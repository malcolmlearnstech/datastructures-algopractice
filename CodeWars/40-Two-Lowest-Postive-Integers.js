function sorting(a, b) {
  return a - b;
}

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(sorting);
  return numbers[0] + numbers[1];
}

//REFACTORED SOLUTION
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => {
    return a - b;
  });

  return numbers[0] + numbers[1];
}

//REFACTORED SOLUTION
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}
