function gimme(triplet) {
  let sorted = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(sorted[1]);
}

/*
REFACTOR SOLUTION:

Instead of placing the sorted form of the array in a variable, 
we can place the full syntax of the sort within the parameter 
of our indexOf search
*/
function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}
