var isPalindrome = function (x) {
  x = String(x).split('');
  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] === x[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};
