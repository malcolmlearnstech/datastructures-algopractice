function factorial(n) {
  //recursive solution
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
//Time Complexity: O(N), because the time for the function to complete is dependent on the input "n"
//Space Complexity: O(N), because the amount of data in the recursive call stack is dependent on how large the input "n" is
