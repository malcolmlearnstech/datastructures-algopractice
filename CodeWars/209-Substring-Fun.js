function nthChar(words) {
  let string = '';

  if (words.length >= 1) {
    for (let i = 0; i < words.length; i++) {
      string += words[i][i];
    }
  }

  return string;
}

/*
REFACTORED SOLUTION -

Rather than creating a separate variable, we can employ the map() method which 
will inherently build out an array. Once map() is used, we employ the join() 
method. This can all be done within a ternary operator, with the determing 
condition staying the same as the if conditional from our original solution code.
*/
