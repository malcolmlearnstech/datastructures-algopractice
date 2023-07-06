function stantonMeasure(array) {
  let n = 0;
  let nCount = 0;

  array.map((element) => {
    if (element === 1) {
      n++;
    }
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      nCount++;
    }
  }
  return nCount;
}

/*
REFACTORED SOLUTION -

As an alternative for iterating thru the array and incrementing 
the variable n's value. We use a filter to check for the amount 
of 1's in the input array then check for length.
*/

function stantonMeasure(array) {
  let n = array.filter((element) => element === 1).length;
  let nCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      nCount++;
    }
  }
  return nCount;
}

/*
REFACTORED SOLUTION -

With "n" holding the value that we will search for in the input 
array, we can now apply the same filter logic on the "nCount" variable 
as well. Searching for only elements that equal the value of "n", 
then checking the length of the filtered array.
*/

function stantonMeasure(array) {
  let n = array.filter((element) => element === 1).length;
  let nCount = array.filter((element) => element === n).length;
  return nCount;
}

/*
REFACTORED SOLUTION -

Instead of performing filter, then placing the length of that 
filtered array in the "nCount" variable, we just return the 
filter and length combo themselves.
*/
