function smaller(nums) {
  let smallerCount = [];

  while (nums.length > 0) {
    let lessThan = nums.filter((num) => num < nums[0]).length;
    smallerCount.push(lessThan);
    nums.shift();
  }

  return smallerCount;
}
