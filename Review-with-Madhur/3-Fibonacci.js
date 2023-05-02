function fib(n) {
  // BASE CASE IN CONDITIONAL
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2); // <===RECURSIVE CALLS
}

//Time Complexity: O(2^N) - this solution will produce a recursive tree of N height, which has 2^ fib() calls
//Space Complexity: 0(2^N) - solution produces a call stack of 2^N fib() calls in worst case scenario
