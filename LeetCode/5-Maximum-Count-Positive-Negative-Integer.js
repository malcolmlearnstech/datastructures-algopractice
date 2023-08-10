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
