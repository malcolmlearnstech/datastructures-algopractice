function factorial(n) {
  //recursive solution
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
