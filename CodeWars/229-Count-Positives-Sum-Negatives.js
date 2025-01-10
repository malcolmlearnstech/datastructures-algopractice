function countPositivesSumNegatives(input) {
  let positives = 0;
  let negatives = 0;

  if (input === null || input.length < 1) {
    return [];
  }

  input.map((element) => {
    Math.sign(element) === 1 ? positives++ : (negatives += element);
  });

  return [positives, negatives];
}
