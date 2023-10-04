function maxSequence(arr) {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum < 0) {
      currentSum = 0;
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return arr.length ? maxSum : 0;
}
