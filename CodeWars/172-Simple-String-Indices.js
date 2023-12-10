function solve(str, idx) {
  if (str[idx] !== '(') {
    return -1;
  }

  let notation = 0;

  for (let i = idx; i < str.length; i++) {
    if (str[i] === '(') {
      notation++;
    }
    if (str[i] === ')') {
      notation--;
    }
    if (notation === 0) {
      return i;
    }
  }
}

/*
REFACTORED SOLUTION -

Alternative to the for loop, where we run a while loop 
that will break with a particular condition based on the 
count of opening/closing brackets. We will then return the 
index of the necessary closing bracket at the very end of 
our overall function, not within the scope of the loop itself.
*/
