function makeParts(arr, chunkSize) {
  let array = [];
  let subarray = [];

  if (chunkSize > arr.length) {
    return [arr];
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (subarray.length < chunkSize) {
        subarray.push(arr[i]);
      } else {
        array.push(subarray);
        subarray = [arr[i]];
      }
    }
    array.push(subarray);
  }
  return array;
}

/*

REFACTORED SOLUTION - 

Instead of checking for the size of input "arr" in comparison 
to input "chunkSize" and building subarrays element by element; 
within the for loop, we can increment by the chunkSize and 
employ the slice method. Slice method will create its own 
subarrays to push into our final output array.
*/
