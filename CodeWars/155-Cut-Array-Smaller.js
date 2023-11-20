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
