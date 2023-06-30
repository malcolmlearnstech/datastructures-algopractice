function isPalindrome(x) {
  let left = 0;
  let right = x.length - 1;

  x = x.toLowerCase();

  while (left < right) {
    if (x[left] === x[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
