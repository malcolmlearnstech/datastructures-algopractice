function binaryArrayToNumber(arr) {
  let multiplier = 1;
  let sum = 0;
  let i = arr.length - 1;

  while (i >= 0) {
    sum += arr[i] * multiplier;
    multiplier *= 2;
    i--;
  }
  return sum;
}

/*
ALTERNATIVE CODE SOLUTION:

We can also turn the input array into a string, and parse thru the characters using a base/radix of "2" to employ binary calculation on each character recognized.
*/

function binaryArrayToNumber(arr) {
  let binaryString = arr.join('');
  return parseInt(binaryString, 2);
}
