var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.match(/[a-z0-9]/g);

  if (s === null) {
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};
