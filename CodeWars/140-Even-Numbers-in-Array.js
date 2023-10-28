function evenNumbers(array, number) {
  let evens = [];

  for (let i = array.length - 1; evens.length < number; i--) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }

  return evens.reverse();
}

/*
REFACTORED SOLUTION -

We can initially apply the filter method to narrow down the 
input array to only the even numbers. Then with new information 
learned from MDN, use the slice method entering a negative form 
of the "number" input as the perimeter to indicate how far 
backwards from the end we should pick even numbers out to return 
as our output array.
*/

function evenNumbers(array, number) {
  return array.filter((element) => element % 2 === 0).slice(-number);
}
