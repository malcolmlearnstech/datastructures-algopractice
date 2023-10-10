const sumAverage = (arr) => {
  let averages = 0;

  arr.map((element) => {
    averages +=
      element.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / element.length;
  });

  return Math.floor(averages);
};
