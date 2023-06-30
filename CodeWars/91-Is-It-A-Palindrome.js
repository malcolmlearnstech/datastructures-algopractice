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

/*
REFACTORED SOLUTION -

To further ensure that we are not evaluating for any symbols or 
empty strings we can use filter and regex within our filter. We 
can use regex to ensure that we are only outputting letters from 
the alphabet for iterating.
*/
