function evenNumbers(array, number) {
  let evens = [];

  for (let i = array.length - 1; evens.length < number; i--) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }

  return evens.reverse();
}
