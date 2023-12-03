function fizzbuzz(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else array.push(i);
  }
  return array;
}

/*
REFACTORED SOLUTION - 

Alternatively, we can build out the array with the numbers 
leading up to "n", then map thru the elements, only needing 
to edit or change the array elements that meet the conditions 
mentioned in the challenge prompt.
*/
