var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let start = 0;
    while (start < nums.length) {
      if (i === start) {
        start++;
      }

      if (nums[i] + nums[start] === target) {
        return [i, start];
      } else start++;
    }
  }
};
