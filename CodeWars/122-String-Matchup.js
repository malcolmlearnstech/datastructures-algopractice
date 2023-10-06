function solve(a, b) {
  let matches = [];

  b.forEach((element) => {
    let match = 0;
    for (let i = 0; i < a.length; i++) {
      if (element === a[i]) {
        match++;
      }
    }
    matches.push(match);
  });
  return matches;
}

/*
REFACTORED SOLUTION -

Alternative to looping thru the "a" array, we can use the filter method 
to only look at how many elements match the current "b" array element 
that we are iterating on. This will more than likely still carry the same 
time complexity as the initial solution.
*/

function solve(a, b) {
  let matches = [];

  for (let i = 0; i < b.length; i++) {
    let match = a.filter((element) => element === b[i]).length;
    matches.push(match);
  }

  return matches;
}
