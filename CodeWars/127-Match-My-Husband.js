function match(usefullness, months) {
  let usefulTotal = 0;
  let needs = 100;

  for (const element of usefulness) {
    usefulTotal += element;
  }

  while (months > 0) {
    needs = needs - needs * 0.15;
    months--;
  }
  return usefulTotal > needs ? 'Match!' : 'No match!';
}

/*
REFACTORED SOLUTION -

We can use the reduce method to calculate the total from usefulness 
array as an alternative to the for of loop. With calculating needs, we 
can use Math.floor to get a solid integer, because we are using 
percentages by month.
*/

function match(usefullness, months) {
  usefulness = usefulness.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let needs = 100;

  while (months > 0) {
    needs = Math.floor(needs - needs * 0.15);
    months--;
  }
  return usefulness > needs ? 'Match!' : 'No match!';
}
