function removeSmallest(numbers) {
  let copy = [];
  let smallestNum = Math.min(...numbers);
  let smallestNumIndex = numbers.indexOf(smallestNum);

  for (let i = 0; i < numbers.length; i++) {
    if (i !== smallestNumIndex) {
      copy.push(numbers[i]);
    }
  }

  return copy;
}
