function modifiedSum(a, n) {
  let exponentSum = 0;
  let regularSum = 0;

  a.map((element) => {
    exponentSum += Math.pow(element, n);
    regularSum += element;
  });

  return exponentSum - regularSum;
}

/*
REFACTORED SOLUTION -

Instead of using the map() method to iterate through, within the "exponentSum" & "regularSum" variables, we can apply the reduce() method and lastly caluculate the difference.
*/

function modifiedSum(a, n) {
  let regularSum = a.reduce((acc, current) => acc + current, 0);
  let exponentSum = a.reduce((acc, current) => acc + Math.pow(current, n), 0);

  return exponentSum - regularSum;
}
