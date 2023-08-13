function rowWeights(array) {
  let first = 0;
  let second = 0;

  array.map((element, index) => {
    if (index % 2 === 0) {
      first += element;
    } else {
      second += element;
    }
  });

  return [first, second];
}
