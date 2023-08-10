var maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;

  for (let i = 0; i < nums.length; i++) {
    if (Math.sign(nums[i]) === 1) {
      pos++;
    }
    if (Math.sign(nums[i]) === -1) {
      neg++;
    }
  }

  return Math.max(pos, neg);
};

/*
REFACTORED SOLUTION -

While the original solution has a linear time complexity "O(n)", 
we can use two while loops to solve this in a slightly less time 
complex way of "O(log n)"
*/
