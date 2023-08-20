var findNumbers = function (nums) {
  let evenNums = 0;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (String(current).split('').length % 2 === 0) {
      evenNums++;
    }
  }

  return evenNums;
};
