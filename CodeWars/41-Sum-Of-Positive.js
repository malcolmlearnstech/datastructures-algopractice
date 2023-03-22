function positiveSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (Math.sign(element) === 1) {
      sum += element;
    }
  });
  return sum;
}
