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

/*
REFACTORED SOLUTION:

Because we are performing the the methods up to four times, 
we see that there is a way we can set the chained methods in 
"leftSide" and "rightSide" and simply run our comparison last 
while accounting for every index (including the first and last indices)
*/
for (let i = 0; i < arr.length; i++) {
  let leftSide = arr
    .slice(0, i)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let rightSide = arr
    .slice(i + 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if (leftSide === rightSide) {
    return i;
  }
}
return -1;
