function createPhoneNumber(numbers) {
  let area = `${numbers[0]}${numbers[1]}${numbers[2]}`;
  let three = `${numbers[3]}${numbers[4]}${numbers[5]}`;
  let four = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  return `(${area}) ${three}-${four}`;
}
