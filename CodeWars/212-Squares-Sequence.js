function squares(x, n) {
  if (n <= 0) {
    return [];
  }

  let array = [x];

  for (let i = 1; i <= n - 1; i++) {
    array.push(Math.pow(array[i - 1], 2));
  }

  return array;
}
