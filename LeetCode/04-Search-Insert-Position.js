var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  if (target < nums[0]) {
    return 0;
  } else {
    for (let i = 0; i < nums.length; i++) {
      console.log(i);
      if (nums[i] < target && target < nums[i + 1]) {
        return i + 1;
      }
    }

    return nums.length;
  }
};
