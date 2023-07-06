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
