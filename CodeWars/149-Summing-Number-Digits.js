function sumDigits(number) {
  let sum = 0;

  let array = Math.abs(number)
    .toString()
    .split('')
    .map((element) => Number(element));
  array.map((element) => (sum += element));

  return sum;
}
