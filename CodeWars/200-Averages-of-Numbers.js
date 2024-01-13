function averages(numbers) {
  let calcs = [];

  if (!numbers || numbers.length < 2) {
    return calcs;
  }

  for (let i = 0; i < numbers.length - 1; i++) {
    let next = numbers[i + 1];
    calcs.push((numbers[i] + next) / 2);
  }
  return calcs;
}
