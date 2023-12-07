function min(arr, toReturn) {
  let index = arr.indexOf(Math.min(...arr));

  return toReturn === 'value' ? Math.min(...arr) : index;
}
