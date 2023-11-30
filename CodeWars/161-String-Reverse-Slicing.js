function reverseSlice(str) {
  let array = [];
  str = str.split('').reverse();

  while (str.length > 0) {
    array.push(str.join(''));
    str.shift();
  }
  return array;
}

/*

REFACTORED SOLUTION - 

In this alternative solution, we can pregenerate an array of 
input length, which will allow us to map without making an array 
of our original input. While mapping thru the pre-generated array, 
we can employ index in use of slice to return a string with each 
further character taken off. We'll be able to take off the correct 
number of characters from the front because we have access to the 
"index" paramter from our mapping thru the generated array of input 
"str"s length.
*/

function reverseSlice(str) {
  let result = Array(str.length).fill(0);

  return result.map((element, index) =>
    str.split('').reverse().join('').slice(index)
  );
}
