function countRedBeads(n) {
  if (n < 2) {
    return 0;
  }

  if (n % 2) {
    return (n - 1) * 2;
  } else {
    return n * 2 - 2;
  }
}
