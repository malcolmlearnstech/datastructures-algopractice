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

function fizzbuzz(n) {
  let array = [];

  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return array.map((e) =>
    e % 3 === 0 && e % 5 === 0
      ? 'FizzBuzz'
      : e % 3 === 0
      ? 'Fizz'
      : e % 5 === 0
      ? 'Buzz'
      : e
  );
}

/*
SECOND REFACTORED SOLUTION - 

We can still build out an array without the use of the for loop 
used in the previous refactor, making use of Array with fill method 
appended. To account for the evaluating the actual numbers, we can 
still employ map method and make use of "index" with a 1 added due 
to the challenge prompt indicating that the number set will always begin 
with 1.
*/

function fizzbuzz(n) {
  let array = Array(n).fill(0);

  return array.map((e, i) =>
    (i + 1) % 3 === 0 && (i + 1) % 5 === 0
      ? 'FizzBuzz'
      : (i + 1) % 3 === 0
      ? 'Fizz'
      : (i + 1) % 5 === 0
      ? 'Buzz'
      : i + 1
  );
}
