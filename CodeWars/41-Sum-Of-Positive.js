function positiveSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (Math.sign(element) === 1) {
      sum += element;
    }
  });
  return sum;
}

//REFACTORED SOLUTION CODE
function positiveSum(arr) {
  arr = arr
    .filter((element) => Math.sign(element) === 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return arr;
}
