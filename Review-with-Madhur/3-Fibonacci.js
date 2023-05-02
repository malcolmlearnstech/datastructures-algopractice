function fib(n) {
  // BASE CASE IN CONDITIONAL
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2); // <===RECURSIVE CALLS
}
