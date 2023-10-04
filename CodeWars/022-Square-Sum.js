function squareSum(numbers) {
  let sum = 0;

  for (const num of numbers) {
    sum += num * num;
  }
  return sum;
}
