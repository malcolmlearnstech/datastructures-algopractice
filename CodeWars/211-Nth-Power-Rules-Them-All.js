function modifiedSum(a, n) {
  let exponentSum = 0;
  let regularSum = 0;

  a.map((element) => {
    exponentSum += Math.pow(element, n);
    regularSum += element;
  });

  return exponentSum - regularSum;
}
