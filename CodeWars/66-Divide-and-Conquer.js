function divCon(x) {
  let nonStrings = 0;
  let strings = 0;
  for (const element of x) {
    if (typeof element !== 'string') {
      nonStrings += element;
    } else {
      strings += parseInt(element);
    }
  }
  return nonStrings - strings;
}

/*
REFACTORED SOLUTION:

We can use forEach method as an alternative to the for-of loop. Instead 
of separating non-string integers and strings into separate variables, 
we perform what is asked in the prompt (add numbers that are integers 
and subtract numbers that are strings) on a sinlge variable's value*/

function divCon(x) {
  let count = 0;
  x.forEach((element) => {
    if (typeof element !== 'string') {
      count += element;
    } else {
      count -= parseInt(element);
    }
  });
  return count;
}
