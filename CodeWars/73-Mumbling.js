function accum(s) {
  let j = 0;
  s = s.toUpperCase().split('');
  for (let i = 0; i < s.length; i++) {
    s[i] = `${s[i]}${s[i].toLowerCase().repeat(j)}`;
    j++;
  }
  return s.join('-');
}

/*
REFACTORED SOLUTION:

We can make use of map to move thru the split array, and rather 
than make use of "j" to count positions, we can use "index" in 
the map parameter, related to the positions.
*/

function accum(s) {
  s = s.toUpperCase().split('');
  s = s.map(
    (letter, index) => (letter = letter + letter.toLowerCase().repeat(index))
  );
  return s.join('-');
}
