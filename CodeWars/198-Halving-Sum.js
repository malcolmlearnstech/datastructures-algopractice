function halvingSum(n) {
  let sum = n;
  let divisor = 2;

  while (divisor <= n) {
    sum += Math.floor(n / divisor);
    divisor *= 2;
  }

  return sum;
}
