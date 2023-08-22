function sumArray(array) {
  let sum = 0;

  if (!array || array.length === 1) {
    return 0;
  }

  array = array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (i !== 0 && i !== array.length - 1) {
      sum += array[i];
    }
  }

  return sum;
}
