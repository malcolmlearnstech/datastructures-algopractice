function cumulativeTriangle(n) {
  let start = 1;
  let increment = 0;
  let row = [];

  while (increment < n) {
    start += increment;
    increment++;
  }

  for (let i = 0; i < n; i++) {
    row.push(start);
    start++;
  }

  return row.reduce((a, b) => a + b, 0);
}
