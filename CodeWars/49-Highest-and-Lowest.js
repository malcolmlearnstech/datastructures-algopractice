function highAndLow(numbers) {
  let brokenUp = numbers
    .match(/-?\d+/g)
    .map(Number)
    .sort((a, b) => a - b);
  let minimum = brokenUp[0];
  let maximum = brokenUp[brokenUp.length - 1];

  return `${maximum} ${minimum}`;
}
