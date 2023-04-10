function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSide = 0;
    let rightSide = 0;

    if (i === 0) {
      rightSide +=
        arr.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) - arr[i];
    } else if (i === arr.length - 1) {
      leftSide +=
        arr.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) - arr[i];
    } else {
      leftSide += arr
        .slice(0, i)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      rightSide += arr
        .slice(i + 1)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    if (leftSide === rightSide) {
      return i;
    }
  }
  return -1;
}
