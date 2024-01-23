function evenOrOdd(str) {
  str = str.split('').map((element) => Number(element));

  let even = str
    .filter((element) => element % 2 === 0)
    .reduce((acc, currentVal) => acc + currentVal, 0);
  let odd = str
    .filter((element) => element % 2 !== 0)
    .reduce((acc, currentVal) => acc + currentVal, 0);

  return even > odd
    ? 'Even is greater than Odd'
    : odd > even
    ? 'Odd is greater than Even'
    : 'Even and Odd are the same';
}
