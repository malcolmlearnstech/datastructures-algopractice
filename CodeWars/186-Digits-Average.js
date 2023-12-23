function digitsAverage(input) {
  input = String(input).split('');

  while (input.length > 1) {
    let tier = [];

    for (let i = 0; i < input.length - 1; i++) {
      tier.push(
        Math.ceil((Number(input[i]) + Number(input[i + 1])) / 2).toString()
      );
    }

    input = tier.join('');
  }
  return Number(input[0]);
}
