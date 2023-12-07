function min(arr, toReturn) {
  let index = arr.indexOf(Math.min(...arr));

  return toReturn === 'value' ? Math.min(...arr) : index;
}

/*

REFACTORED SOLUTION -

If you want to shorten the lines mainly, just 
put what is stored in the "index" variable into 
the ternary operator.
*/
