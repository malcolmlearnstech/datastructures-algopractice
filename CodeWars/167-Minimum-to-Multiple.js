function minimum(a, x) {
  let add = 0;
  let subtract = 0;
  let i = 1;

  if (a % x === 0) {
    return 0;
  } else {
    while (add === 0 || subtract === 0) {
      if ((a + i) % x === 0) {
        add = i;
      }

      if ((a - i) % x === 0) {
        subtract = i;
      }
      i++;
    }
  }

  return Math.min(add, subtract);
}
