function rowSumOddNumbers(n) {
  let rowStep = 2;
  let rowStart = 1;
  let sum = 0;

  for (let i = 1; i < n; i++) {
    rowStart += rowStep;
    rowStep += 2;
  }

  for (let i = 1; i <= n; i++) {
    sum += rowStart;
    rowStart += 2;
  }
  return sum;
}
