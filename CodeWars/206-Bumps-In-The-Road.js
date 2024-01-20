function bump(x) {
  let bumpCount = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'n') {
      bumpCount++;
    }
  }

  return bumpCount > 15 ? 'Car Dead' : 'Woohoo!';
}

/*
REFACTORED SOLUTION -

Instead of iterating thru the string, we can split each of the elements, 
then filter out all of the "n" elements. Once a filter is applied, we 
can then check the length for comparison and still employ the ternary 
operator at the end.
*/
