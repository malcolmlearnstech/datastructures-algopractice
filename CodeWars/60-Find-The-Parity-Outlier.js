function findOutlier(integers) {
  let evenCount = integers.filter((element) => element % 2 === 0);

  return evenCount.length > 1
    ? integers.filter((element) => element % 2 !== 0)[0]
    : evenCount[0];
}

/*
REFACTORED SOLUTION: 

We can shorten the return by placing the integers filter within a 
variable and making that the count of odd numbers
*/

function findOutlier(integers) {
  let evenCount = integers.filter((element) => element % 2 === 0);
  let oddCount = integers.filter((element) => element % 2 !== 0);

  return oddCount.length > 1 ? evenCount[0] : oddCount[0];
}
