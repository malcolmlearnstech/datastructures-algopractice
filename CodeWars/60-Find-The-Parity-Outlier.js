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

/*
REFACTORED SOLUTION:

Because evenCount will only have one element in its array if the input has 
more than one odd numbers, we can use the pop method, as evenCount will only have 
one element (making it the first AND last element). The same logic can be applied 
on the oddCount array if there is only ONE odd number in the input array.
*/

function findOutlier(integers) {
  let evenCount = integers.filter((element) => element % 2 === 0);
  let oddCount = integers.filter((element) => element % 2 !== 0);

  return oddCount.length > 1 ? evenCount.pop() : oddCount.pop();
}
