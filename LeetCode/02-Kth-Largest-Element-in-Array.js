var findKthLargest = function (nums, k) {
  let object = {};
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (!object[nums[i]]) {
      object[nums[i]] = 1;
    } else {
      object[nums[i]] += 1;
    }
  }

  let numbers = Object.keys(object);
  let largest = Math.max(...numbers);

  if (count === k) {
    return largest;
  }

  while (count < k) {
    object[largest] -= 1;
    if (object[largest] === 0) {
      delete object[largest];
      numbers = Object.keys(object);
      largest = Math.max(...numbers);
    }
    count++;
  }

  return largest;
};
