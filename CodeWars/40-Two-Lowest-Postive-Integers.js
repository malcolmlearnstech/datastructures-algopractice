function sorting(a, b) {
  return a - b;
}

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(sorting);
  return numbers[0] + numbers[1];
}

/*  REFACTORED CODE:

Rather than building out the sort behavior in a separate function outside of the solution code's scope, 
we move the code build for function sorting and place it within the method 'sort' to define sort's behavior.

*/
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => {
    return a - b;
  });

  return numbers[0] + numbers[1];
}

/*  REFACTORED CODE:

We define the behavior of 'sort' without the use of return and place this in the variable 'numbers',
setting it to the newly sorted result

*/
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}
