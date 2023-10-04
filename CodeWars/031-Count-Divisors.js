function getDivisorsCnt(n) {
  let divisor = 1;
  let count = 0;

  while (divisor <= n) {
    if (n % divisor === 0) {
      count += 1;
    }
    divisor++;
  }
  return count;
}
