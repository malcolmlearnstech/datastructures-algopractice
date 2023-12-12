function cumulativeTriangle(n) {
  let start = 1;
  let increment = 0;
  let row = [];

  while (increment < n) {
    start += increment;
    increment++;
  }

  for (let i = 0; i < n; i++) {
    row.push(start);
    start++;
  }

  return row.reduce((a, b) => a + b, 0);
}

/*
REFACTORED SOLUTION -

Alternative to building out the row in an array and 
run the reduce method, we can initialize rowTotal as 
a 0 number, then use the second for loop to just 
increment to the rowTotal for returning at the end.
*/

function cumulativeTriangle(n) {
  let start = 1;
  let increment = 0;
  let rowTotal = 0;

  while (increment < n) {
    start += increment;
    increment++;
  }

  for (let i = 0; i < n; i++) {
    rowTotal += start + i;
  }

  return rowTotal;
}
