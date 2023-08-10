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
we can use two while loops in a two pointer pattern method
to solve this in a slightly less time complex way of "O(log n)"
*/

var maximumCount = function (nums) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  const positiveCount = nums.length - left;

  left = 0;
  right = nums.length;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] >= 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  const negativeCount = right;

  return Math.max(positiveCount, negativeCount);
};
