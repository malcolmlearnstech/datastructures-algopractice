function spinAround(turns) {
  let start = 0;

  for (let i = 0; i < turns.length; i++) {
    turns[i] === 'right' ? (start += 90) : (start -= 90);
  }

  return start > 0 ? Math.floor(start / 360) : Math.abs(Math.ceil(start / 360));
}

/*
REFACTORED SOLUTION - 

Instead of a second ternary operator at the end, using Math.ceiling, 
we can apply Math.abs early on if the number is negative then still 
use Math.floor to round down. This keeps the calculation of the amount 
of turns more programmatic.
*/
