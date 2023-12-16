function pipeFix(numbers) {
  let i = 1;

  while (i < numbers.length) {
    let current = numbers[i];

    if (current - 1 !== numbers[i - 1]) {
      numbers.splice(i, 0, numbers[i - 1] + 1);
    } else {
      i++;
    }
  }
  return numbers;
}
