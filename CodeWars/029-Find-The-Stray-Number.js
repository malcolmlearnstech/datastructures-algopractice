function stray(numbers) {
  for (const number of numbers) {
    if (numbers.indexOf(number) === numbers.lastIndexOf(number)) {
      return number;
    }
  }
}
