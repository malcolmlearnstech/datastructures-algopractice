function past(h, m, s) {
  let milliseconds = 0;

  milliseconds += s * 1000;
  milliseconds += m * 60000;
  milliseconds += h * 3600000;

  return milliseconds;
}

/*
REFACTORED SOLUTION -

We can alter the values of our given inputs then add those to 
get our result instead. This will also slightly reduce our space 
complexity as we won't have to create another variable to hold 
this result.

*/

function past(h, m, s) {
  s = s * 1000;
  m = m * 60000;
  h = h * 3600000;

  return s + m + h;
}
