function sortNums(nums) {
  if (nums === null || nums == []) {
    return [];
  } else return nums.sort((a, b) => a - b);
}

/*
REFACTORED SOLUTION:

Instead of using the "if, else" syntax for this scenario, we can 
use a ternary operator and still make use of sort. We can also 
check for the truthiness of our "nums" input.
*/

function sortNums(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}
