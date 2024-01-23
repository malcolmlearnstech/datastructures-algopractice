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

*/
