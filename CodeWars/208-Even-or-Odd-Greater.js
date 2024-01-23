function evenOrOdd(str) {
  let even = str
    .split('')
    .map((element) => Number(element))
    .filter((element) => element % 2 === 0)
    .reduce((acc, currentVal) => acc + currentVal);
  let odd = str
    .split('')
    .map((element) => Number(element))
    .filter((element) => element % 2 !== 0)
    .reduce((acc, currentVal) => acc + currentVal);

  return even > odd
    ? 'Even is greater than Odd'
    : odd > even
    ? 'Odd is greater than Even'
    : 'Even and Odd are the same';
}

/*
REFACTORED SOLUTION -

As we are performing the split() and map() methods the exact same way in our initializing 
of "even" and "odd"; it makes more sense to apply those changes BEFORE we apply the 
conditions of each filter. This will shorten the code for both initialization and make for 
better readability.
*/
