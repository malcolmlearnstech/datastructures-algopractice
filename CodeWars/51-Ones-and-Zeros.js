const binaryArrayToNumber = (arr) => {
  let multiplier = 1;
  let sum = 0;
  let i = arr.length - 1;

  while (i >= 0) {
    sum += arr[i] * multiplier;
    multiplier *= 2;
    i--;
  }
  return sum;
};
