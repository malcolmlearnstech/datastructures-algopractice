function sumDigits(number) {
  let sum = 0;

  let array = Math.abs(number)
    .toString()
    .split('')
    .map((element) => Number(element));

  array.map((element) => (sum += element));

  return sum;
}

/*
REFACTORED SOLUTION -

As we are converting the string digits elements to 
integers/numbers in the map method, we can also add 
and store their value to sum within the method chain. 
This would eliminate having to perform the "map" 
method twice.
*/

function sumDigits(number) {
  let sum = 0;

  Math.abs(number)
    .toString()
    .split('')
    .map((element) => (sum += Number(element)));

  return sum;
}

/*
SECOND REFACTORED SOLUTION - 

To eliminate using the sum variable, we can append 
the "reduce" method to our method chain, which will 
allow for adding each element in the array created 
to a "0" initialValue.
*/
